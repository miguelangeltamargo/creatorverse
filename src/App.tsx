// src/App.tsx
import { Outlet } from 'react-router';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import React from 'react';


const App: React.FC = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)
export default App
