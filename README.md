src/
├── App.jsx
├── index.jsx
├── pages/
│   ├── HomePage.jsx        // previously Home.jsx
│   ├── PastesPage.jsx      // previously Paste.jsx
│   └── ViewPastePage.jsx   // previously ViewPaste.jsx
│
├── components/
│   ├── layout/
│   │   ├── NavBar.jsx
│   │   └── Layout.jsx      // shared layout (NavBar + Outlet)
│   │
│   ├── paste/
│   │   ├── PasteForm.jsx   // create / edit form
│   │   ├── PasteList.jsx   // maps pastes -> PasteCard
│   │   ├── PasteCard.jsx   // single paste item UI
│   │   ├── PasteSearch.jsx // search input
│   │   └── PasteActions.jsx// delete/copy/share buttons (small)
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Input.jsx
│       └── TextArea.jsx
│
├── redux/
│   ├── store.js
│   └── pasteSlice.js
│
└── utils/
    ├── id.js               // id generator
    └── clipboard.js        // helper for copy/share
