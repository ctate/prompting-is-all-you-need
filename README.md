<div align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg" width="600">
  </a>
  
  # Prompting Is All You Need
  
  <p align="center">
    <strong>An interactive pixel-based pong game with dynamic text collision and audio feedback</strong>
  </p>
  
  <p align="center">
    Built with React, Next.js, Canvas API, and TypeScript
  </p>
  
  <p align="center">
    <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
    </a>
  </p>
  
  <p align="center">
    <a href="#-about">About</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-usage">Usage</a> •
    <a href="#-development">Development</a> •
    <a href="#-contributing">Contributing</a>
  </p>
</div>

---

## 📖 About

**Prompting Is All You Need** is an innovative interactive experience that combines the classic Pong game with dynamic pixel art text rendering. The game features a self-playing animation where a ball bounces around the screen, colliding with pixelated text and intelligent paddles that automatically track the ball's movement.

### Key Highlights
- 🎮 **Self-Playing Game**: Watch as the game plays itself with intelligent paddle AI
- 🎨 **Pixel Art Text**: "PROMPTING IS ALL YOU NEED" rendered in beautiful pixel art
- 🔊 **Audio Feedback**: Procedural sound effects for collisions and interactions
- 📱 **Responsive Design**: Adapts seamlessly to any screen size
- ⚡ **Smooth Performance**: 60fps animations using Canvas API and requestAnimationFrame

---

## ✨ Features

### 🎯 Core Gameplay
- **Intelligent Paddle AI**: Four paddles automatically track and follow the ball
- **Dynamic Collision System**: Ball bounces off walls, paddles, and pixel text
- **Pixel Text Interaction**: Individual pixels change color when hit by the ball
- **Real-time Physics**: Smooth ball movement with realistic collision detection

### 🎨 Visual Design
- **Pixel Art Rendering**: Custom pixel font system for text display
- **Minimalist Aesthetic**: Clean black and white design with subtle animations
- **Responsive Scaling**: Text and game elements scale based on viewport size
- **Smooth Animations**: 60fps rendering with optimized Canvas operations

### 🔊 Audio Experience
- **Procedural Sound Effects**: Different tones for different collision types
- **Web Audio API**: Real-time sound generation using oscillators
- **Collision Feedback**: Audio cues for wall bounces, paddle hits, and pixel collisions

### 🛠️ Technical Features
- **TypeScript**: Full type safety throughout the codebase
- **React Hooks**: Modern React patterns with useRef and useEffect
- **Canvas API**: High-performance 2D rendering
- **Responsive Design**: Mobile-first approach with viewport adaptation

---

## 🚀 Installation

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

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

---

## 🎮 Usage

The game starts automatically when you load the page. No user interaction is required - simply watch as:

1. **The ball bounces** around the screen in a dynamic pattern
2. **Paddles track** the ball's movement intelligently
3. **Pixel text reacts** to collisions by changing color
4. **Audio feedback** provides satisfying collision sounds
5. **Responsive scaling** adapts to your screen size

### Controls
- **Automatic**: The game plays itself - just enjoy the show!
- **Responsive**: Resize your browser window to see the adaptive design

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **next-themes** - Theme management

### Canvas & Graphics
- **Canvas API** - 2D rendering and animations
- **requestAnimationFrame** - Smooth 60fps animations
- **Custom Pixel Font System** - Hand-crafted pixel art text

### Audio
- **Web Audio API** - Real-time sound generation
- **Oscillator Nodes** - Procedural sound effects

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 🧑‍💻 Development

### Project Structure
```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # UI component library
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── prompting.tsx         # Main game component
└── public/               # Static assets
```

### Key Components

- **`PromptingIsAllYouNeed`**: Main game component with Canvas rendering
- **Pixel Map System**: Hand-crafted pixel art font definitions
- **Collision Detection**: Physics system for ball interactions
- **Audio System**: Web Audio API integration for sound effects

### Development Commands

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Type checking
npx tsc --noEmit  # Check TypeScript types
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Bug Reports
- Use GitHub Issues to report bugs
- Include steps to reproduce the issue
- Provide browser and device information

### 💡 Feature Requests
- Suggest new features via GitHub Issues
- Describe the use case and expected behavior
- Consider implementation complexity

### 🔧 Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### 📝 Code Style
- Follow existing TypeScript patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure responsive design principles

---

## 👨‍💻 Author

**Chris Tate** - [@ctatedev](https://x.com/ctatedev)

- 🚀 Full-stack developer
- 🎨 UI/UX enthusiast  
- 🎮 Game development hobbyist
- 📱 Mobile-first advocate

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Made with ❤️ and lots of ☕</p>
  <p>
    <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">View on v0.dev</a> •
    <a href="https://github.com/your-username/prompting-is-all-you-need">GitHub</a> •
    <a href="https://twitter.com/ctatedev">Twitter</a>
  </p>
</div>
