# Deco Cerámicas — Frontend E-commerce Platform

This is the **frontend** of an e-commerce project built with **React**, designed for product discovery, filtering, and cart management. The application was created using modern tools and libraries, with a focus on learning architecture, TypeScript, and scalable component design.

---

## 🚀 Tech Stack

- **React + TypeScript**
- **Vite** — blazing fast dev environment
- **React Router DOM** — client-side routing
- **React Context API** — global state for cart
- **React Hook Form** + **Zod** — form handling and schema validation
- **Vanilla CSS** (to be improved) — layout and styling

---

## 📦 Features

- 🛍️ Product listing with dynamic category filtering
- 🔍 Product detail pages with full specs
- 🛒 Add-to-cart functionality using React Context
- 🧭 Routing with `react-router-dom`
- 💡 Form components with validation (e.g., for future checkout or contact flows)
- 🧪 Local mock data using in-memory arrays (no backend yet)

---

## 📁 Project Structure

The current architecture is functional but recognized as suboptimal due to this being one of my first serious projects. Refactoring and modularization are planned in upcoming versions to align with clean architecture principles.

---

## 🧠 About the Cart System

The cart system is implemented using the **Context API**, allowing any product component across the app to interact with the cart (add, remove, display) without prop drilling. This global state design simulates a shopping experience without backend dependencies for now.

---

## 🛠️ Future Improvements

- 📱 **Responsive design**: Media queries and layout responsiveness need refinement.
- 🧱 **Architecture**: Folder structure, separation of concerns, and component reuse will be optimized.
- 🌐 **Backend integration**: A custom backend using **Node.js (vanilla)** is planned to replace the current in-memory data structure.
- 💬 **User feedback**: Toast notifications or modals to improve UX.

---
