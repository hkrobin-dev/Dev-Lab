# Project plan

## 1. Frontend setup (current focus)
- Create a React app with Vite, no TypeScript, no Next.js.
- Use React Router for page navigation.
- Style with Tailwind CSS and DaisyUI.
- Start with a simple home page and an about page.
- Goal: see a working landing page that says "Hello, Daisy Palace is ready."

## 2. Frontend structure
- App shell in src/App.jsx
- Pages in src/pages/Home.jsx and src/pages/About.jsx
- Global styling in src/index.css
- Use DaisyUI components for cards, buttons, and hero sections

## 3. Backend plan (next phase)
- Create a separate backend folder.
- Use Express and Node.js.
- Use MongoDB as the database.
- For now, do not use Mongoose; use the native MongoDB driver first.
- Add API routes like /api/health and /api/users later.

## 4. Development order
1. Finish the frontend starter UI.
2. Add reusable components and layout.
3. Create the Express server.
4. Connect to MongoDB.
5. Build the first CRUD flow.
6. Add authentication later.

## 5. Run commands
- Frontend:
  - cd frontend
  - npm run dev
- Build check:
  - cd frontend
  - npm run build
