# Paste App

A simple and elegant **pastebin-style** app built with React, Redux Toolkit, and Tailwind CSS.
Easily create, view, edit, delete, copy, and share text pastes with titles — all managed locally with persistence via `localStorage`.

---

## Features

* Create pastes with a **title** and **content**
* Edit and update existing pastes
* View detailed paste information
* Delete single or all pastes
* Copy paste content or shareable link to clipboard
* Search pastes by title
* Responsive UI powered by Tailwind CSS
* Real-time notifications using React Hot Toast
* Client-side routing via React Router
* State management with Redux Toolkit and `localStorage` persistence

---

## Tech Stack

* React
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* React Hot Toast

---

## How It Works

### State Management

Pastes are stored in Redux state and persisted in `localStorage` for data retention across page reloads.

The core Redux slice `pasteSlice.js` handles:

* **addToPastes:** Adds a new paste and saves to `localStorage`
* **updateToPastes:** Finds and updates an existing paste by `_id`
* **removeFromPastes:** Deletes a paste by ID
* **resetAllPastes:** Clears all pastes from state and storage

Notifications for these actions are shown using React Hot Toast.

```js
// Example: Adding a paste structure
dispatch(addToPastes({
  _id: "unique-id",
  title: "My Title",
  content: "Paste content...",
  createdAt: "Date string",
}));
```

---

## Folder Structure

```
src/
├── App.jsx
├── index.jsx
├── pages/
│   ├── HomePage.jsx                    # Create/Edit Paste form logic
│   ├── PastesPage.jsx                  # List/Search/Delete pastes
│   └── ViewPastePage.jsx               # View single paste detail
│           
├── components/         
│   ├── layout/         
│   │   ├── NavBar.jsx          
│   │   └── Layout.jsx                  # shared layout (NavBar + Outlet)
│   │           
│   ├── paste/          
│   │   ├── PasteForm.jsx               # create / edit form
│   │   ├── PasteList.jsx               # maps pastes -> PasteCard
│   │   ├── PasteCard.jsx               # single paste item UI
│   │   ├── PasteSearch.jsx             # search input
│   │   └── PasteActions.jsx            # delete/copy/share buttons (small)
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Input.jsx
│       └── TextArea.jsx
│
├── redux/
   ├── store.js
   └── pasteSlice.js

```

---

## Getting Started

### Prerequisites

* Node.js

### Installation & Running

```bash
git clone <your-repo-url>
cd paste-app
npm install
npm run dev
```

Open [http://localhost:5173]

---

## Usage

* Navigate to **Home** to create a new paste or edit an existing one (URL query param `?pasteId=...` triggers edit mode).
* Use the **Pastes** page to search, view, delete individual pastes, or clear all.
* Click on a paste title or "View" to see the full content on a dedicated page.
* Copy or share pastes directly from the UI with dedicated buttons.

---

## Demo
---