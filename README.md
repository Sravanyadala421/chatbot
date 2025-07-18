# Ecommerce Customer Support Chatbot

A modern, intelligent chatbot designed to provide comprehensive customer support for ecommerce websites. Built with React, TypeScript, and Tailwind CSS, this chatbot offers real-time assistance for product searches, order tracking, returns, and general customer inquiries.

## 🚀 Live Demo

Visit the live application: [https://majestic-pothos-c00bbc.netlify.app](https://majestic-pothos-c00bbc.netlify.app)

## ✨ Features

### Core Functionality
- **Intelligent Chat Interface**: Natural language processing for customer queries
- **Product Search & Recommendations**: Smart product suggestions with visual cards
- **Order Tracking**: Real-time order status and shipping information
- **Returns & Exchanges**: Guided return process and policy information
- **Customer Support**: Comprehensive help with common ecommerce issues

### User Experience
- **Quick Action Buttons**: One-click access to common tasks
- **Typing Indicators**: Real-time feedback during bot responses
- **Message History**: Persistent chat history during session
- **Mobile Responsive**: Optimized for all device sizes
- **Smooth Animations**: Polished micro-interactions and transitions

### Technical Features
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first styling with responsive design
- **Lucide Icons**: Beautiful, consistent iconography
- **Vite**: Fast development and optimized builds

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Code Quality**: ESLint + TypeScript ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles and Tailwind imports
└── vite-env.d.ts       # Vite type definitions

public/
└── vite.svg            # Application favicon

config files:
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.ts      # Vite build configuration
└── eslint.config.js    # ESLint configuration
```

## 🤖 Chatbot Capabilities

### Product Search
- Intelligent product recommendations
- Category-based filtering
- Price and availability information
- Visual product cards with images

### Order Management
- Order tracking by order number
- Shipping status updates
- Delivery estimates
- Order history assistance

### Customer Support
- Returns and refund policies
- Size guides and fitting help
- Shipping options and costs
- Account and billing support

### Quick Actions
- **Product Search**: Find products quickly
- **Track Order**: Get shipping updates
- **Returns**: Process returns and exchanges
- **Help**: General customer support

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb)
- **Background**: Gradient from blue-50 to indigo-100
- **Text**: Gray-800 for primary text
- **Success**: Green for in-stock items
- **Warning**: Yellow for low-stock items
- **Error**: Red for out-of-stock items

### Typography
- **Headings**: Font-bold with proper hierarchy
- **Body**: Regular weight with good line-height
- **Code**: Monospace font for technical elements

### Components
- **Chat Bubbles**: Rounded corners with shadows
- **Product Cards**: Clean layout with hover effects
- **Buttons**: Consistent padding and hover states
- **Icons**: 16px and 20px sizes from Lucide

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Flexible chat container sizing
- Optimized button layouts for touch
- Readable typography on all screen sizes
- Proper spacing and padding adjustments

## 🚀 Deployment

### Netlify (Recommended)
The application is configured for easy Netlify deployment:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Manual Deployment
```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
The project includes:
- **ESLint**: Code linting with React and TypeScript rules
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting (recommended to add)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

## 🔮 Future Enhancements

Potential features for future versions:
- **AI Integration**: OpenAI or similar for more intelligent responses
- **Multi-language Support**: Internationalization
- **Voice Chat**: Speech-to-text and text-to-speech
- **Live Chat Handoff**: Transfer to human agents
- **Analytics Dashboard**: Chat metrics and insights
- **Custom Branding**: Configurable themes and colors
- **Database Integration**: Persistent chat history
- **Payment Integration**: Stripe checkout within chat

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Lucide](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool
- [Pexels](https://pexels.com/) - Stock images for product examples

---

Built with ❤️ for better customer experiences
