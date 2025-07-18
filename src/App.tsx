import React, { useState, useEffect, useRef } from 'react';
import { Send, ShoppingCart, Package, RotateCcw, HelpCircle, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  products?: Product[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  availability: 'in-stock' | 'low-stock' | 'out-of-stock';
}

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    availability: 'in-stock'
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'clothing',
    availability: 'in-stock'
  },
  {
    id: '3',
    name: 'Smart Water Bottle',
    price: 59.99,
    image: 'https://images.pexels.com/photos/6621047/pexels-photo-6621047.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'lifestyle',
    availability: 'low-stock'
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    price: 449.99,
    image: 'https://images.pexels.com/photos/586750/pexels-photo-586750.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'furniture',
    availability: 'in-stock'
  }
];

const quickActions = [
  { icon: ShoppingCart, label: 'Product Search', action: 'search' },
  { icon: Package, label: 'Track Order', action: 'track' },
  { icon: RotateCcw, label: 'Returns', action: 'returns' },
  { icon: HelpCircle, label: 'Help', action: 'help' }
];

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial greeting
    const welcomeMessage: Message = {
      id: '1',
      text: "👋 Welcome to ShopBot! I'm here to help you with product recommendations, order tracking, returns, and any questions you might have. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    let responseText = '';
    let products: Product[] = [];

    if (lowerMessage.includes('search') || lowerMessage.includes('product') || lowerMessage.includes('find') || lowerMessage.includes('looking for')) {
      responseText = "I'd be happy to help you find products! Here are some popular items from our catalog:";
      products = sampleProducts.slice(0, 3);
    } else if (lowerMessage.includes('track') || lowerMessage.includes('order') || lowerMessage.includes('shipping')) {
      responseText = "To track your order, I'll need your order number. You can find it in your confirmation email. For example, if your order number is #ORD-12345, your package is currently in transit and expected to arrive within 2-3 business days. Would you like me to help you locate your order confirmation email?";
    } else if (lowerMessage.includes('return') || lowerMessage.includes('refund') || lowerMessage.includes('exchange')) {
      responseText = "Our return policy is quite flexible! You can return most items within 30 days of purchase for a full refund. Items should be in original condition with tags attached. To start a return, you can:\n\n• Use our online return portal\n• Visit any of our store locations\n• Contact our customer service team\n\nWould you like me to guide you through the return process?";
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support') || lowerMessage.includes('customer service')) {
      responseText = "I'm here to help! Here are some ways I can assist you:\n\n• Product recommendations and search\n• Order tracking and shipping info\n• Returns and exchanges\n• Account and billing questions\n• Store locations and hours\n• General shopping assistance\n\nWhat specific area would you like help with?";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('discount')) {
      responseText = "We offer competitive pricing and regular promotions! Currently, we have:\n\n• 15% off electronics with code TECH15\n• Buy 2, get 1 free on selected clothing\n• Free shipping on orders over $50\n\nIs there a specific product you'd like pricing information for?";
    } else if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
      responseText = "We offer several shipping options:\n\n• Standard shipping (3-5 business days) - FREE on orders $50+\n• Express shipping (1-2 business days) - $9.99\n• Next day delivery (select areas) - $19.99\n• In-store pickup - FREE, ready in 2 hours\n\nWhich shipping method works best for you?";
    } else if (lowerMessage.includes('size') || lowerMessage.includes('fit') || lowerMessage.includes('sizing')) {
      responseText = "For clothing items, we have a comprehensive size guide available on each product page. We also offer:\n\n• Free size exchanges within 30 days\n• Virtual fitting room for select items\n• Customer reviews with fit feedback\n\nWould you like me to help you find the size guide for a specific item?";
    } else {
      responseText = "I understand you're looking for assistance! I can help you with product searches, order tracking, returns, shipping information, and general customer support. Feel free to ask me about any of these topics or use the quick action buttons below. What would you like to know more about?";
    }

    return {
      id: Date.now().toString(),
      text: responseText,
      isUser: false,
      timestamp: new Date(),
      products: products.length > 0 ? products : undefined
    };
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        isUser: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);

      // Simulate bot typing delay
      setTimeout(() => {
        const botResponse = generateBotResponse(inputValue);
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleQuickAction = (action: string) => {
    let actionText = '';
    switch (action) {
      case 'search':
        actionText = 'I\'m looking for product recommendations';
        break;
      case 'track':
        actionText = 'I need to track my order';
        break;
      case 'returns':
        actionText = 'I need help with returns';
        break;
      case 'help':
        actionText = 'I need general help';
        break;
    }
    
    setInputValue(actionText);
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 max-w-sm">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-32 object-cover rounded-lg mb-3"
      />
      <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-600">${product.price}</span>
        <span className={`px-2 py-1 rounded-full text-xs ${
          product.availability === 'in-stock' ? 'bg-green-100 text-green-800' :
          product.availability === 'low-stock' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {product.availability === 'in-stock' ? 'In Stock' :
           product.availability === 'low-stock' ? 'Low Stock' :
           'Out of Stock'}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">ShopBot Assistant</h1>
              <p className="text-sm text-gray-600">Your personal shopping companion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl ${
                  message.isUser 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-800 shadow-md'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    {message.isUser ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4 text-blue-600" />
                    )}
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="whitespace-pre-line">{message.text}</p>
                  
                  {message.products && (
                    <div className="mt-3 flex overflow-x-auto space-x-2">
                      {message.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 shadow-md max-w-xs lg:max-w-md px-4 py-2 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-blue-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-3 bg-white border-t border-gray-200">
            <div className="flex space-x-2 mb-3">
              {quickActions.map((action) => (
                <button
                  key={action.action}
                  onClick={() => handleQuickAction(action.action)}
                  className="flex items-center space-x-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm"
                >
                  <action.icon className="w-4 h-4" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="px-4 py-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;