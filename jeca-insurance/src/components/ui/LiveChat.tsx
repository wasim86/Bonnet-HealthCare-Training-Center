'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  UserIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'
import { useLiveChat } from '@/contexts/LiveChatContext'

interface Message {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! I\'m Sarah, your Bonnet HealthCare assistant. How can I help you today?',
    sender: 'agent',
    timestamp: new Date('2024-01-01T12:00:00Z') // Fixed timestamp to avoid hydration issues
  }
]

const quickReplies = [
  'ACLS',
  'BLS',
  'Hands Only CPR',
  'AED',
  'Heart Savers First AID',
  'Heimlich Maneuve',
  'EPI-PEN'
]

const autoResponses: { [key: string]: string } = {
  'auto quote': 'Great! I can help you get an auto insurance quote. We offer coverage for cars, motorcycles, and boats. Would you like to start with a specific vehicle type? You can get quotes at: https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx',
  'health quote': 'I\'d be happy to help with health insurance! We offer individual health plans, dental, vision, Medicare Advantage, and Medicare Supplement. Which type interests you? Visit /quotes/health to see all options.',
  'life insurance': 'Life insurance is a great way to protect your family\'s future. We offer life insurance, annuities, disability insurance, and umbrella coverage. You can explore options at /quotes/life-financial/life',
  'property quote': 'Perfect! For property insurance, we cover homes, flood protection, landlord insurance, and renters insurance. What type of property do you need to protect? Start at https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx',
  'business quote': 'Business insurance is essential! We offer general liability, business owner packages (BOP), and workers compensation. What size business do you have? Get started at /quote/business',
  'file a claim': 'I can help you file a claim. For immediate assistance with claims, please call our 24/7 claims hotline at 877-501-5460, or I can guide you through our online claims process at /services/report-claim',
  'get a quote': 'I\'d be happy to help you get a quote! We offer 5 main categories: Auto (cars, motorcycles, boats), Health (individual, dental, vision, Medicare), Life & Financial (life, annuities, disability), Property (home, flood, landlord, renters), and Business insurance. Which interests you?',
  'policy questions': 'I\'m here to help with any policy questions you have. What would you like to know about your current policy or our coverage options?',
  'payment help': 'I can assist you with payment-related questions. Are you looking to make a payment, set up autopay, or have questions about your billing?',
  'contact agent': 'I can connect you with one of our licensed agents. Would you prefer to schedule a call back at /contact or call us directly at 877-501-5460?',
  'hello': 'Hello! Welcome to JECA Insurance. I\'m here to help you with quotes for auto, health, life, property, and business insurance, plus claims and policy questions. What can I assist you with today?',
  'hi': 'Hi there! How can I help you with your insurance needs today? We offer comprehensive quotes for all types of coverage.',
  'help': 'I\'m here to help! I can assist you with getting quotes (auto, health, life, property, business), filing claims, answering policy questions, payment assistance, or connecting you with an agent. What would you like to do?'
}

export default function LiveChat() {
  const { isOpen, openChat, closeChat, toggleChat } = useLiveChat()
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messageCounter, setMessageCounter] = useState(2) // Start from 2 since initial message is 1
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(autoResponses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }

    // Default responses based on keywords
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate')) {
      return 'Our rates are very competitive! The exact price depends on several factors. I can help you get a personalized quote in just a few minutes. We offer quotes for auto, health, life & financial, property, and business insurance. Which interests you?'
    }

    if (lowerMessage.includes('coverage') || lowerMessage.includes('protect')) {
      return 'We offer comprehensive coverage options for all your protection needs. Our policies include auto (cars, motorcycles, boats), health (individual, dental, vision, Medicare), life & financial (life, annuities, disability), property (home, flood, landlord, renters), and business insurance. What specific coverage are you looking for?'
    }

    if (lowerMessage.includes('discount') || lowerMessage.includes('save')) {
      return 'Great question! We offer many ways to save, including multi-policy discounts, safe driver discounts, and more. I can help you find all the discounts you qualify for!'
    }

    // Specific insurance type responses
    if (lowerMessage.includes('auto') || lowerMessage.includes('car') || lowerMessage.includes('vehicle')) {
      return 'Auto insurance is one of our specialties! We cover cars, motorcycles, and boats. Get your personalized quote at /quote/auto, /quote/motorcycle, or /quote/boat'
    }

    if (lowerMessage.includes('health') || lowerMessage.includes('medical') || lowerMessage.includes('dental') || lowerMessage.includes('vision')) {
      return 'We offer comprehensive health coverage including individual plans, dental, vision, Medicare Advantage, and Medicare Supplement. Explore all options at /quotes/health'
    }

    if (lowerMessage.includes('life') || lowerMessage.includes('annuity') || lowerMessage.includes('disability')) {
      return 'Life and financial protection is crucial! We offer life insurance, annuities, disability insurance, and umbrella coverage. Learn more at /quotes/life-financial/life'
    }

    if (lowerMessage.includes('home') || lowerMessage.includes('house') || lowerMessage.includes('property') || lowerMessage.includes('flood') || lowerMessage.includes('rent')) {
      return 'Property protection is essential! We cover homes, provide flood insurance, landlord coverage, and renters insurance. Start your quote at /quote/home'
    }

    if (lowerMessage.includes('business') || lowerMessage.includes('commercial') || lowerMessage.includes('liability') || lowerMessage.includes('workers comp')) {
      return 'Business insurance protects your company! We offer general liability, business owner packages (BOP), and workers compensation. Get started at /quote/business'
    }

    if (lowerMessage.includes('motorcycle') || lowerMessage.includes('bike')) {
      return 'Motorcycle insurance is important for your safety and protection! Get a personalized quote for your bike at /quote/motorcycle'
    }

    if (lowerMessage.includes('boat') || lowerMessage.includes('marine')) {
      return 'Boat insurance protects your watercraft investment! Get comprehensive marine coverage at /quote/boat'
    }

    // Default response
    return 'Thank you for your message! I want to make sure I give you the most accurate information. Could you please provide a bit more detail about what you\'re looking for, or would you like me to connect you with one of our licensed agents?'
  }

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messageCounter.toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setMessageCounter(prev => prev + 1)
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay - fixed delay to avoid hydration issues
    setTimeout(() => {
      const response = generateResponse(text)
      const agentMessage: Message = {
        id: (messageCounter + 1).toString(),
        text: response,
        sender: 'agent',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, agentMessage])
      setMessageCounter(prev => prev + 1)
      setIsTyping(false)
    }, 2000) // Fixed 2 second delay
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <motion.button
          onClick={toggleChat}
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 touch-target-comfortable"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isOpen ? {} : {
            y: [0, -10, 0],
          }}
          transition={isOpen ? {} : {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-label="Open live chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Notification Badge */}
          {!isOpen && (
            <motion.div
              className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3 }}
            >
              1
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-[calc(100vw-2rem)] max-w-sm sm:w-96 h-[70vh] max-h-[500px] bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <UserIcon className="h-4 w-4 sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm sm:text-base">Bonnet HealthCare Support</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs sm:text-sm opacity-90">Online now</span>
                </div>
              </div>
              <motion.button
                onClick={closeChat}
                className="p-1 hover:bg-white/20 rounded-full transition-colors touch-target"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close chat"
              >
                <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <motion.button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
