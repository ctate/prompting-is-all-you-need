<div align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg" width="600">
  </a>
  
  <h1>Prompting Is All You Need</h1>
  
  <p><strong>An interactive pixel-based Pong game featuring dynamic text collision and Web Audio API sound effects</strong></p>
  
  <p>
    <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
    </a>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Canvas%20API-2D-orange?style=for-the-badge" alt="Canvas API" />
    <img src="https://img.shields.io/badge/Web%20Audio-API-green?style=for-the-badge" alt="Web Audio API" />
  </p>
  
  <p>
    <a href="#-about">About</a> •
    <a href="#-features">Features</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-technical-architecture">Architecture</a> •
    <a href="#-usage">Usage</a> •
    <a href="#-author">Author</a>
  </p>
</div>

---

## About

**Prompting Is All You Need** is an innovative interactive experience that combines classic Pong gameplay with modern web technologies. The game features pixel-perfect text rendering of "PROMPTING IS ALL YOU NEED" that dynamically reacts to ball collisions, creating a mesmerizing visual and auditory experience.

### Key Highlights
- **Self-Playing Animation**: Watch as the ball bounces around the screen with intelligent paddle AI
- **Pixel Text Collision**: Each pixel of the text reacts individually to ball impacts
- **Web Audio Integration**: Procedural sound generation using Web Audio API
- **Responsive Design**: Adapts seamlessly to any screen size
- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript

## Installation

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

## Usage

The game starts automatically when you load the page. Here's what you'll experience:

- **Automatic Gameplay**: The ball begins bouncing around the screen immediately
- **Smart Paddles**: Four paddles (top, bottom, left, right) automatically track the ball
- **Pixel Collision**: Watch as individual pixels of the text change color when hit
- **Sound Effects**: Enjoy procedural audio feedback for different collision types
- **Responsive Scaling**: The game adapts to your screen size in real-time

### Controls
- **No manual controls needed** - the game is fully automated
- **Resize your browser** to see the responsive design in action

## Tech Stack

### Frontend Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Graphics & Animation
- **HTML5 Canvas API** - 2D rendering and pixel manipulation
- **requestAnimationFrame** - Smooth 60fps animations
- **Custom pixel font system** - Hand-crafted pixel maps for each character

### Audio
- **Web Audio API** - Procedural sound generation
- **Oscillator nodes** - Dynamic frequency and waveform control
- **Gain nodes** - Audio envelope shaping

### Styling & UI
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Responsive design** - Mobile-first approach

### Development Tools
- **pnpm** - Fast package manager
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## Features

### Gameplay
- **Self-Playing Pong**: Fully automated gameplay with intelligent AI
- **Four-Way Paddles**: Paddles on all four sides that track the ball
- **Real-time Collision Detection**: Precise pixel-perfect collision system
- **Dynamic Ball Physics**: Realistic bouncing with speed and direction changes

### Visual Effects
- **Pixel Text Rendering**: Custom font system with individual pixel control
- **Color-Changing Pixels**: Pixels change from white to gray when hit
- **Responsive Scaling**: Automatically adapts to any screen size
- **Smooth Animations**: 60fps rendering with requestAnimationFrame
- **Minimalist Aesthetic**: Clean black and white design

### Audio Experience
- **Procedural Sound Effects**: Different sounds for different collision types
- **Web Audio Integration**: Real-time audio generation
- **Collision Feedback**: Audio cues for wall bounces, paddle hits, and pixel impacts
- **Frequency Variation**: Different tones for different interactions

### Responsive Design
- **Viewport Adaptation**: Scales perfectly on desktop, tablet, and mobile
- **Dynamic Sizing**: Text and paddles resize based on screen dimensions
- **Touch-Friendly**: Works seamlessly on touch devices
- **Cross-Browser Support**: Compatible with all modern browsers

## Technical Architecture

### Core Components

#### Game Engine
- **Canvas Rendering**: Full-screen canvas with dynamic scaling
- **Game Loop**: 60fps update cycle using requestAnimationFrame
- **State Management**: React refs for game state persistence
- **Collision System**: AABB (Axis-Aligned Bounding Box) collision detection

#### Pixel Font System
- **Character Maps**: 2D arrays defining pixel patterns for each letter
- **Dynamic Rendering**: Real-time pixel placement and color updates
- **Responsive Scaling**: Automatic size adjustment based on viewport
- **Hit Detection**: Individual pixel collision with ball

#### Audio System
- **Web Audio Context**: Browser audio context initialization
- **Oscillator Generation**: Real-time sound synthesis
- **Envelope Shaping**: Gain control for sound duration and fade
- **Frequency Mapping**: Different tones for different collision types

### Performance Optimizations
- **Efficient Rendering**: Only redraw changed pixels
- **Memory Management**: Minimal object creation in game loop
- **Responsive Scaling**: Single calculation per resize event
- **Audio Cleanup**: Proper oscillator disposal to prevent memory leaks

### File Structure
```
├── app/
│   ├── page.tsx          # Main page component
│   └── layout.tsx        # App layout
├── components/
│   └── ui/               # Reusable UI components
├── prompting.tsx         # Main game component
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Author

**Chris Tate** - Full-Stack Developer & Creative Technologist

- [@ctatedev](https://x.com/ctatedev) on Twitter
- [Portfolio](https://ctatedev.com) (if available)
- Built with [v0.dev](https://v0.dev)

---

<div align="center">
  <p>Made with Next.js, React, and Canvas API</p>
  <p>
    <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">View on v0.dev</a> •
    <a href="#-installation">Get Started</a> •
    <a href="#-features">Explore Features</a>
  </p>
</div>
