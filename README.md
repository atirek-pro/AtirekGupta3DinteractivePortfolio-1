# Atirek Gupta — AI Engineer Portfolio

A modern, interactive personal portfolio website built with **React, Vite, Tailwind CSS, Motion, and React Three Fiber**.

The portfolio is designed to present my work and experience as an AI Engineer through a visually immersive interface featuring a real-time 3D astronaut, animated typography, responsive navigation, and scroll-based parallax effects.

---

## ✨ Overview

This project is my personal portfolio website, built from scratch with a focus on:

* Modern frontend engineering
* Interactive 3D experiences
* Smooth animations and transitions
* Responsive design
* Clean component-based architecture
* Performance-conscious rendering
* A visually distinctive presentation of AI engineering work

The hero section combines a **Three.js-powered 3D astronaut**, animated text, and layered parallax backgrounds to create an interactive landing experience.

---

## 🚀 Features

### Interactive 3D Hero

The landing section uses **React Three Fiber** and **Three.js** to render an animated 3D astronaut model.

The astronaut:

* Loads a GLB/GLTF 3D model
* Plays the model's embedded animation
* Uses floating animation for movement
* Responds to the user's mouse position
* Uses spring-based positioning for smoother transitions
* Adapts its scale and position for mobile devices

### Animated Typography

The hero section includes dynamically changing keywords:

> Secure → Modern → Scalable

The words are animated using **Motion**, with individual word and character transitions.

### Scroll-Based Parallax

The background consists of multiple independently animated layers:

* Sky
* Mountain layer 1
* Mountain layer 2
* Mountain layer 3
* Planets

Their movement is controlled using scroll progress, creating a depth/parallax effect while navigating the page.

### Responsive Design

The interface adapts to different screen sizes using:

* Tailwind CSS responsive utilities
* `react-responsive`
* Dedicated mobile navigation
* Mobile-specific 3D model positioning and scaling
* Responsive typography

### Responsive Navigation

The navigation includes:

* Home
* About
* Work
* Contact

On smaller screens, the navigation switches to a collapsible mobile menu with animated transitions.

### Loading Experience

The 3D scene uses a loading component powered by `@react-three/drei` to display loading progress while assets are being fetched.

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Purpose                              |
| ---------------- | ------------------------------------ |
| React 19         | UI development                       |
| Vite             | Development server and build tooling |
| Tailwind CSS 4   | Styling and responsive design        |
| Motion           | UI and text animations               |
| React Responsive | Responsive behavior                  |

### 3D & Animation

| Technology        | Purpose                       |
| ----------------- | ----------------------------- |
| Three.js          | 3D rendering                  |
| React Three Fiber | React renderer for Three.js   |
| React Three Drei  | 3D helpers and utilities      |
| Maath             | Smooth camera movement/easing |

### Development Tools

| Tool   | Purpose                        |
| ------ | ------------------------------ |
| ESLint | Code quality and linting       |
| Vite   | Build and development workflow |
| npm    | Dependency management          |

The project's package configuration includes React, React DOM, Three.js, React Three Fiber, Drei, Motion, Tailwind CSS, Maath, and supporting utilities.

---

## 📁 Project Structure

```text
portfolio/
│
├── public/
│   ├── assets/
│   │   ├── sky.jpg
│   │   ├── mountain-1.png
│   │   ├── mountain-2.png
│   │   ├── mountain-3.png
│   │   └── planets.png
│   │
│   └── models/
│       └── tenhun_falling_spaceman_fanart.glb
│
├── src/
│   │
│   ├── components/
│   │   ├── Astronaut.jsx
│   │   ├── FlipWords.jsx
│   │   ├── HeroText.jsx
│   │   ├── Loader.jsx
│   │   └── ParallexBackgrounds.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   └── Navbar.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧩 Application Architecture

The application follows a simple component-based React architecture.

```text
App
│
├── Navbar
│   ├── Desktop Navigation
│   └── Mobile Navigation
│
└── Hero
    │
    ├── HeroText
    │   └── FlipWords
    │
    ├── ParallexBackgrounds
    │   ├── Sky
    │   ├── Mountains
    │   └── Planets
    │
    └── Three.js Canvas
        ├── Astronaut
        ├── Float
        └── Camera Rig
```

The main application composes the navigation and hero experience, while the reusable components handle the 3D model, animations, loading state, typography, and parallax layers.

---

## 🎨 Design System

The project uses a dark, space-inspired visual system.

The Tailwind theme defines custom colors including:

* Midnight
* Navy
* Indigo
* Storm
* Aqua
* Mint
* Royal
* Lavender
* Fuchsia
* Coral

The application uses **Funnel Display** as its primary font and applies smooth scrolling with horizontal overflow disabled.

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

You can verify your installation with:

```bash
node --version
npm --version
```

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will start the development server and provide a local URL, typically:

```text
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

### 6. Run linting

```bash
npm run lint
```

The project exposes these scripts through `package.json`: `dev`, `build`, `lint`, and `preview`.

---

## 🖥️ 3D Experience

The 3D experience is implemented using:

```text
React
   ↓
React Three Fiber
   ↓
Three.js
   ↓
GLTF / GLB Model
```

The astronaut model is loaded through `useGLTF()` and its animations are controlled through `useAnimations()`.

The scene also uses:

* `Canvas`
* `Suspense`
* `Float`
* `useFrame`
* `easing.damp3()`

to create the interactive experience.

The camera smoothly follows the user's mouse position rather than directly snapping to it, which provides a more natural interaction.

---

## 🎞️ Animation System

Animations are primarily handled by **Motion**.

The project uses Motion for:

* Hero entrance animations
* Word transitions
* Character-by-character text animation
* Mobile navigation transitions
* Spring-based movement

For example, the `FlipWords` component progressively animates individual characters when the active word changes.

---

## 📱 Responsive Behavior

The portfolio uses responsive breakpoints to provide different experiences across desktop and mobile.

The 3D astronaut specifically changes based on viewport width:

```jsx
const isMobile = useMediaQuery({ maxWidth: 900 });
```

On mobile devices, the astronaut receives a smaller scale and adjusted position to prevent the 3D model from dominating the viewport.

---

## 🧠 What This Project Demonstrates

This portfolio is more than a static personal website. It demonstrates practical experience with:

* React component architecture
* Modern frontend tooling
* Responsive UI development
* 3D web rendering
* Three.js integration
* React Three Fiber
* GLTF/GLB asset loading
* Animation systems
* Scroll-driven interactions
* Spring-based motion
* Responsive 3D rendering
* Tailwind CSS
* ESLint and frontend development workflows

---

## 📦 Available Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

## 🧑‍💻 Author

### Atirek Gupta

**AI Engineer**

I build AI-powered applications and production-oriented systems across areas such as:

* Generative AI
* LLM applications
* RAG
* Agentic AI
* Machine Learning
* AI Engineering

This portfolio serves as the frontend representation of my work, technical experience, and projects.

---

## 📄 License & 3D Asset Attribution

The astronaut model used in this project was generated/converted using **gltfjsx** and is attributed in the source code to:

**Author:** wallmasterr
**Model:** Tenhun Falling Spaceman (FanArt)
**License:** CC BY 4.0
**Source:** Sketchfab

The original attribution is preserved in `src/components/Astronaut.jsx`.

If you redistribute this project, retain the applicable attribution and comply with the original asset license.

---

## ⭐ If You Like This Project

If you find the portfolio or its implementation useful, consider giving the repository a ⭐ and checking out the other projects showcased in the portfolio.
