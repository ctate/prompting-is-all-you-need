<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  An interactive, self-playing pixel-based Pong game with dynamic audio feedback, built with React, Canvas API, and Next.js.
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#-about"><strong>About</strong></a> ·
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-demo"><strong>Demo</strong></a> ·
  <a href="#-getting-started"><strong>Getting Started</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-project-structure"><strong>Project Structure</strong></a> ·
  <a href="#-author"><strong>Author</strong></a>
</p>
<br/>

## 📖 About

**Prompting Is All You Need** is a mesmerizing, self-playing Pong game that brings together pixel art, dynamic animations, and audio synthesis. The game features a ball that autonomously bounces around the screen, interacting with custom pixel-rendered text ("PROMPTING" and "IS ALL YOU NEED") and four intelligent paddles that track the ball's movement in real-time.

This project showcases the power of modern web technologies to create engaging visual experiences with minimal dependencies, demonstrating smooth canvas-based animations, responsive design, and procedural audio generation using the Web Audio API.

## ✨ Features

### Core Gameplay
- **Self-Playing Animation**: Fully autonomous game loop requiring no user interaction
- **Intelligent AI Paddles**: Four paddles (left, right, top, bottom) that automatically track and intercept the ball
- **Pixel Text Rendering**: Custom pixel-based font rendering system displaying the game's title
- **Dynamic Collision Detection**: Precise collision detection between ball, paddles, pixels, and walls

### Visual Experience
- **Minimalist Aesthetic**: Clean black and white color scheme with subtle gray for hit pixels
- **Responsive Design**: Automatically adapts to any screen size while maintaining aspect ratio
- **Smooth Animations**: 60 FPS rendering using `requestAnimationFrame` for buttery-smooth motion
- **Interactive Pixels**: Text pixels change color when struck by the ball, creating dynamic visual feedback

### Audio Feedback
- **Procedural Sound Effects**: Real-time audio synthesis using Web Audio API
- **Contextual Sounds**: Distinct sounds for pixel hits (440Hz sine), paddle hits (330Hz square), and wall bounces (220Hz triangle)
- **No External Audio Files**: All sounds generated dynamically in the browser

### Technical Excellence
- **Fully Typed with TypeScript**: Complete type safety throughout the codebase
- **React 19 & Next.js 15**: Built on the latest versions of React and Next.js
- **Performance Optimized**: Efficient rendering with refs to minimize re-renders
- **Modern UI Components**: Powered by Radix UI and Tailwind CSS for extensibility

## 🎮 Demo

Simply visit the deployed application to watch the mesmerizing self-playing game in action. The ball will bounce between the paddles, walls, and pixel text, creating an endless loop of dynamic visual and audio feedback.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the game in action.

### Build for Production

```bash
pnpm build
pnpm start
```

## 🛠 Tech Stack

### Core Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with hooks
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety and developer experience

### Styling & UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Canvas & Animation
- **Canvas API** - Native browser rendering
- **requestAnimationFrame** - Smooth 60 FPS animations
- **Web Audio API** - Real-time audio synthesis

### Additional Libraries
- **[React Hook Form](https://react-hook-form.com/)** - Form state management
- **[Zod](https://zod.dev/)** - Schema validation
- **[date-fns](https://date-fns.org/)** - Date utilities
- **[Recharts](https://recharts.org/)** - Charting library

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page (renders game)
├── components/
│   ├── ui/                 # Radix UI component library
│   └── theme-provider.tsx  # Theme context provider
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── prompting.tsx           # Main game component with canvas logic
├── package.json            # Project dependencies
└── README.md              # You are here!
```

### Key Files

- **`prompting.tsx`**: The heart of the application containing:
  - Canvas rendering logic
  - Game physics and collision detection
  - Pixel font definition and text rendering
  - AI paddle movement algorithms
  - Web Audio API sound generation

## 🎨 Customization

You can easily customize various aspects of the game by modifying the constants in `prompting.tsx`:

```typescript
const COLOR = "#FFFFFF"          // Pixel color
const HIT_COLOR = "#333333"      // Hit pixel color
const BACKGROUND_COLOR = "#000000" // Background
const BALL_COLOR = "#FFFFFF"     // Ball color
const PADDLE_COLOR = "#FFFFFF"   // Paddle color
const LETTER_SPACING = 1         // Spacing between letters
const WORD_SPACING = 3           // Spacing between words
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by **Chris Tate** ([@ctatedev](https://x.com/ctatedev))

---

<p align="center">
  Built with ❤️ using React, Next.js, and the Canvas API
</p>
