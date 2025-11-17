'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  UserIcon
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
    text: 'Hello! I\'m Sarah from Bonnet Healthcare Training Center. Which training or service can I help you with today?',
    sender: 'agent',
    timestamp: new Date('2024-01-01T12:00:00Z')
  }
]

const quickReplies = [
  'ACLS',
  'BLS',
  'Hands Only CPR',
  'AED',
  'Heart Savers First Aid',
  'Heimlich Maneuve',
  'EPI-PEN'
]

const autoResponses: { [key: string]: string } = {
  'acls': 'ACLS training details: /services/advanced-cardiovascular-life-support-acls. Would you like to schedule an appointment?',
  'bls': 'BLS training details: /services/basic-life-support-bls. Would you like to schedule an appointment?',
  'hands only cpr': 'Hands-Only CPR details: /services/cardiopulmonary-resuscitation-cpr. Would you like to schedule an appointment?',
  'cpr': 'CPR training details: /services/cardiopulmonary-resuscitation-cpr. Would you like to schedule an appointment?',
  'aed': 'AED training details: /services/automated-external-defibrillator-aed. Would you like to schedule an appointment?',
  'heart savers first aid': 'Heart Savers First Aid details: /services/heart-savers-first-aid. Would you like to schedule an appointment?',
  'heimlich': 'Heimlich Maneuver details: /services/heimlich-maneuve. Would you like to schedule an appointment?',
  'epi-pen': 'EPI-PEN training details: /services/epi-pen. Would you like to schedule an appointment?',
  'appointment': 'You can book directly from any service page via Make An Appointment, or visit /services to choose a course.',
  'contact': 'Reach us at /contact for any questions or scheduling assistance.',
  'hello': 'Hello! Welcome to Bonnet Healthcare Training Center. I can help with ACLS, BLS, CPR, AED, First Aid, Heimlich, and EPI-PEN. What can I assist you with today?',
  'hi': 'Hi! How can I help you with training today? We offer ACLS, BLS, CPR, AED, First Aid, Heimlich, and EPI-PEN.',
  'help': 'I can assist with course selection, schedules, bookings, certification renewals, pricing, and group or onsite training. What would you like to do?'
}

export default function LiveChat() {
  const { isOpen, closeChat, toggleChat } = useLiveChat()
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

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) {
      return 'Course fees vary by training type. See details on each service page under Make An Appointment.'
    }

    if (lowerMessage.includes('schedule') || lowerMessage.includes('appointment')) {
      return 'Use the Make An Appointment button on the service page to schedule your session.'
    }

    if (lowerMessage.includes('location') || lowerMessage.includes('where')) {
      return 'Training locations and availability are shown on each service page. Visit /services to select your course.'
    }

    return 'Thanks! Tell me which training you need: ACLS, BLS, CPR, AED, First Aid, Heimlich, or EPI-PEN. I can share details or help you schedule.'
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
