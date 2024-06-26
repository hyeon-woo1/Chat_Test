import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Chat from "./components/Chat.js";
import Join from "./components/Join.js";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Join />} /> 
        <Route path="/chat" element={<Chat />} />
      </Routes>
  );
}

export default App;