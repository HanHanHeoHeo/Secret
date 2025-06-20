import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Component from './page/main'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/Secret" element={<Component/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
