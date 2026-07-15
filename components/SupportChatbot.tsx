'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
  links?: { label: string; href: string }[];
}

const QUICK_QUESTIONS = [
  { text: "What is LEAF OS?", key: "what_is" },
  { text: "How much can we save?", key: "savings" },
  { text: "System requirements?", key: "specs" },
  { text: "How to start a pilot?", key: "pilot" }
];

export default function SupportChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello! I am the NComputing virtual assistant. How can I help you transition your workstation fleet to Windows 11 today?',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsgId = Math.random().toString();
    const newMsg: Message = {
      id: userMsgId,
      sender: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response with dynamic delays
    setTimeout(() => {
      let botText = "Thank you for your message! I'm forwarding your query to our technical team. In the meantime, you can check our cost analysis page or request a 30-day pilot kit.";
      let botLinks: { label: string; href: string }[] | undefined;

      const query = text.toLowerCase();

      if (query.includes('what is') || query.includes('leaf os') || query.includes('how does')) {
        botText = "LEAF OS is a lightweight, secure Linux-based operating system designed by NComputing. It replaces the local OS on your existing PCs (even older ones too weak for native Windows 11), turning them into secure, centrally-managed virtual endpoints connecting to Windows 11 via Azure Virtual Desktop, Windows 365, Citrix, or VMware.";
        botLinks = [{ label: "Explore The Solution", href: "/solution" }];
      } else if (query.includes('save') || query.includes('cost') || query.includes('pricing') || query.includes('money')) {
        botText = "By converting existing hardware into LEAF OS thin clients, organizations save up to 88% in capital expenditures (CAPEX) compared to buying new PCs. It also reduces deployment labor to under 4 hours per location and virtually eliminates productivity loss and e-waste disposal fees.";
        botLinks = [{ label: "View Cost Analysis", href: "/problem#costs" }];
      } else if (query.includes('specs') || query.includes('requirement') || query.includes('system') || query.includes('hardware')) {
        botText = "LEAF OS is extremely lightweight. The minimum system requirements are: x86 architecture, a 64-bit dual-core processor, 4 GB RAM, and 8 GB of storage. It installs in minutes via a bootable USB drive or local deployment, allowing PCs from 2015 and later to easily support Windows 11 virtual environments.";
        botLinks = [{ label: "Check Specs", href: "/solution#specs" }];
      } else if (query.includes('pilot') || query.includes('trial') || query.includes('test') || query.includes('free')) {
        botText = "We offer a comprehensive 30-day pilot package! We supply up to 20 free licenses, the bootable USB media, and setup support. You can test it on your existing hardware with no risk.";
        botLinks = [{ label: "Request Pilot Kit", href: "/solution#contact" }];
      }

      const botMsgId = Math.random().toString();
      const botResponse: Message = {
        id: botMsgId,
        sender: 'bot',
        text: botText,
        timestamp: new Date(),
        links: botLinks
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleSuggestionClick = (questionText: string) => {
    handleSend(questionText);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-2xl transition-all duration-300 hover:bg-ngreen hover:scale-105 active:scale-95 ${
          isOpen ? 'rotate-90' : ''
        }`}
        aria-label="Toggle support chat"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            {hasNewMessage && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ngreen opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-ngreen-light"></span>
              </span>
            )}
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[360px] md:w-[400px] h-[500px] max-h-[calc(100vh-120px)] flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-2xl overflow-hidden transition-all duration-300 scale-100 origin-bottom-right">
          {/* Header */}
          <div className="px-5 py-4 border-b border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-ngreen text-white font-bold text-sm">
                N
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-zinc-950 animate-pulse"></span>
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-none">LEAF OS Assistant</h4>
                <span className="text-[10px] text-zinc-400 font-mono">ONLINE · NCOMPUTING</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Close assistant"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-ngreen">
                    AI
                  </div>
                )}
                <div className="space-y-1">
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-xs md:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-ngreen text-white rounded-tr-none'
                        : 'bg-zinc-900 text-zinc-100 border border-zinc-800/60 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                    
                    {/* Bot Message Links */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-zinc-800 flex flex-wrap gap-2">
                        {msg.links.map(link => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-[10px] md:text-xs font-medium border border-zinc-750 transition-all active:scale-[0.98]"
                          >
                            {link.label}
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M2.5 6h7M6.5 3l3 3-3 3"/>
                            </svg>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className={`block text-[9px] text-zinc-500 font-mono ${msg.sender === 'user' ? 'text-right' : ''}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 max-w-[85%] mr-auto items-center">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-ngreen">
                  AI
                </div>
                <div className="bg-zinc-900 border border-zinc-800/60 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions (if no user query typed yet) */}
          <div className="px-4 py-2 border-t border-zinc-800/40 bg-zinc-950 flex flex-wrap gap-1.5 shrink-0">
            {QUICK_QUESTIONS.map(q => (
              <button
                key={q.key}
                onClick={() => handleSuggestionClick(q.text)}
                className="text-[10px] font-medium px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-full border border-zinc-800 transition-colors cursor-pointer"
              >
                {q.text}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputText);
            }}
            className="p-3 border-t border-zinc-800 bg-zinc-900/60 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask me a question..."
              className="flex-1 bg-zinc-950 border border-zinc-850 hover:border-zinc-800 focus:border-ngreen rounded-xl px-3.5 py-2 text-xs md:text-sm text-white focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-ngreen hover:bg-ngreen-dark disabled:bg-zinc-800 disabled:text-zinc-600 text-white transition-all active:scale-[0.96] shrink-0"
              aria-label="Send message"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
