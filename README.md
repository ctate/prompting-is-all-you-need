# 🎮 Prompting Is All You Need

<div align="center">

![Prompting Is All You Need](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg)

**An interactive pixel-based Pong game with dynamic text collision and audio feedback**

[![Open in v0](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg)](https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

</div>

## ✨ Features

- 🎯 **Self-Playing Animation**: Watch as the ball bounces around the screen automatically
- 🎨 **Pixel Text Rendering**: Beautiful pixel-based text that changes color when hit
- 🎵 **Audio Feedback**: Dynamic sound effects for collisions and interactions
- 🏓 **Smart Paddles**: AI-controlled paddles that track and follow the ball
- 📱 **Responsive Design**: Adapts seamlessly to any screen size
- ⚡ **Smooth Animations**: 60fps animations with precise collision detection
- 🎮 **Interactive Elements**: Real-time visual and audio feedback

## 🚀 Live Demo

Experience the game in action! The ball will automatically start bouncing around the screen, hitting the pixel text and paddles with dynamic audio feedback.

## 🛠️ Technology Stack

### Core Technologies
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Canvas API** - High-performance 2D rendering

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **next-themes** - Dark/light mode support

### Audio & Animation
- **Web Audio API** - Dynamic sound generation
- **requestAnimationFrame** - Smooth 60fps animations
- **Custom collision detection** - Precise pixel-perfect interactions

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prompting-is-all-you-need
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎮 How It Works

### Game Mechanics
- **Ball Physics**: The ball bounces off walls and paddles with realistic physics
- **Pixel Collision**: Each pixel in the text can be individually hit and changes color
- **Smart Paddles**: Four paddles (top, bottom, left, right) automatically track the ball
- **Audio System**: Different sounds for wall bounces, paddle hits, and pixel collisions

### Technical Implementation
- **Canvas Rendering**: Uses HTML5 Canvas for high-performance graphics
- **Pixel Mapping**: Custom pixel font system for "PROMPTING IS ALL YOU NEED" text
- **Collision Detection**: Precise collision detection between ball, paddles, and pixels
- **Responsive Scaling**: Automatically scales to fit any screen size

## 🎨 Customization

### Colors
Modify the color scheme in `prompting.tsx`:
```typescript
const COLOR = "#FFFFFF"           // Text color
const HIT_COLOR = "#333333"       // Hit text color
const BACKGROUND_COLOR = "#000000" // Background
const BALL_COLOR = "#FFFFFF"      // Ball color
const PADDLE_COLOR = "#FFFFFF"    // Paddle color
```

### Audio
Adjust sound frequencies and durations:
```typescript
playSound(audioContext, 440, 0.08, "sine") // Pixel hit
playSound(audioContext, 330, 0.15, "square") // Paddle hit
playSound(audioContext, 220, 0.1, "triangle") // Wall bounce
```

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI component library
│   └── theme-provider.tsx # Theme context
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── prompting.tsx         # Main game component
└── styles/               # Additional styles
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful commit messages
- Test your changes thoroughly
- Ensure responsive design works on all screen sizes

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Chris Tate** - [@ctatedev](https://x.com/ctatedev)

---

<div align="center">

**Built with ❤️ using Next.js, React, and Canvas API**

[⭐ Star this repo](https://github.com/your-username/prompting-is-all-you-need) • [🐛 Report Bug](https://github.com/your-username/prompting-is-all-you-need/issues) • [💡 Request Feature](https://github.com/your-username/prompting-is-all-you-need/issues)

</div>