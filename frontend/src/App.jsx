import React from 'react'
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Editor from './pages/Editor';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteHandler />
      </BrowserRouter>
    </>
  )
};

const RouteHandler = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to={"/login"}/>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editior/:id" element={isLoggedIn ? <Editor /> : <Navigate to={"/login"}/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App