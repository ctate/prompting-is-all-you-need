<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  A mesmerizing self-playing pong game featuring pixel-perfect text animations, dynamic collision detection, and retro sound effects.
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#-overview"><strong>Overview</strong></a> ·
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-getting-started"><strong>Getting Started</strong></a> ·
  <a href="#-how-it-works"><strong>How It Works</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-author"><strong>Author</strong></a>
</p>
<br/>

## 🎮 Overview

**Prompting Is All You Need** is an innovative interactive animation that combines classic pong gameplay with modern web technologies. Watch as a bouncing ball navigates through pixel-rendered text "PROMPTING IS ALL YOU NEED", while four intelligent paddles automatically track its movement. Each collision produces retro-inspired sound effects, and the pixels dynamically change color when struck, creating a hypnotic visual experience.

This project demonstrates the power of creative web development using React, Next.js, and the Canvas API to deliver smooth, 60fps animations that adapt seamlessly to any screen size.

## ✨ Features

### Visual Experience
- 🎨 **Pixel Art Text Rendering** - Custom-built pixel maps for each letter creating authentic retro aesthetics
- 🎯 **Dynamic Collision Detection** - Precise ball-to-pixel and ball-to-paddle collision physics
- 🌈 **Interactive Color Changes** - Pixels change from white to gray when hit by the ball
- 📱 **Fully Responsive Design** - Automatically scales to any screen size while maintaining aspect ratio
- ⚡ **Smooth 60fps Animations** - Powered by `requestAnimationFrame` for buttery smooth performance

### Audio Experience
- 🔊 **Retro Sound Effects** - Web Audio API generates authentic pong-style beeps
  - Wall bounces (220Hz triangle wave)
  - Paddle hits (330Hz square wave)
  - Pixel collisions (440Hz sine wave)

### Gameplay Mechanics
- 🤖 **AI-Controlled Paddles** - Four paddles (left, right, top, bottom) automatically track the ball
- 🏓 **Physics-Based Bouncing** - Realistic ball trajectory with proper angle calculations
- 🎯 **Smart Collision Response** - Ball bounces based on collision angle for natural movement

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **pnpm**, **npm**, or **yarn** package manager

### Installation

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
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the animation in action!

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🎯 How It Works

### Experience the Animation
- 🖥️ **Just Load and Watch** - No interaction needed, the animation plays automatically
- 🎾 **Ball Physics** - Watch the ball bounce realistically off walls, paddles, and pixel text
- 🎮 **Intelligent Paddles** - All four paddles smoothly track and follow the ball's position
- 🎨 **Visual Feedback** - Pixels turn gray when struck, creating dynamic visual patterns
- 📐 **Adaptive Scaling** - The entire scene scales proportionally to your viewport

### Technical Details
The animation uses:
- **Canvas Rendering** - Direct pixel manipulation for optimal performance
- **Custom Pixel Maps** - Each letter is defined as a 2D array of 1s and 0s
- **Game Loop Architecture** - Continuous update → render cycle at 60fps
- **Responsive Calculations** - Dynamic scaling based on viewport dimensions
- **Web Audio API** - Real-time sound synthesis without audio files

## 🛠️ Tech Stack

### Core Framework
- ⚛️ **React 19** - UI component library with hooks
- 🔷 **Next.js 15.2** - React framework with App Router
- 📘 **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- 🎨 **Tailwind CSS 3.4** - Utility-first CSS framework
- 🎭 **Tailwind Animate** - Animation utilities
- 🌙 **next-themes** - Dark mode support (infrastructure)

### Graphics & Audio
- 🎨 **HTML5 Canvas API** - 2D graphics rendering
- 🔊 **Web Audio API** - Real-time audio synthesis
- 📐 **requestAnimationFrame** - Optimized animation loop

### Component Library
- 🧩 **Radix UI** - Accessible component primitives
- 🎯 **shadcn/ui** - Re-usable component collection
- 📊 **Recharts** - Charting library (available for extensions)

### Development Tools
- 🔧 **PostCSS & Autoprefixer** - CSS processing
- 📦 **pnpm** - Fast, disk space efficient package manager

## 📁 Project Structure

```
prompting-is-all-you-need/
├── app/
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # UI components (shadcn/ui)
├── lib/                   # Utility functions
├── prompting.tsx          # Main game component
├── public/                # Static assets
└── README.md
```

## 🎨 Customization

### Adjusting Colors
Edit the constants in `prompting.tsx`:
```typescript
const COLOR = "#FFFFFF"           // Default pixel color
const HIT_COLOR = "#333333"       // Hit pixel color
const BACKGROUND_COLOR = "#000000" // Background
const BALL_COLOR = "#FFFFFF"      // Ball color
const PADDLE_COLOR = "#FFFFFF"    // Paddle color
```

### Modifying Text
Update the words array in the `initializeGame` function:
```typescript
const words = ["PROMPTING", "IS ALL YOU NEED"]
```

### Tuning Physics
Adjust speed and behavior:
```typescript
const BALL_SPEED = 6 * scale      // Ball velocity
const LETTER_SPACING = 1           // Space between letters
const WORD_SPACING = 3             // Space between words
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- ⭐ Star the repository

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)
- Project Built with: [v0.dev](https://v0.dev)

---

<p align="center">Built with ❤️ using React, Next.js, and the Canvas API</p>
<p align="center">Made with <a href="https://v0.dev">v0.dev</a></p>
