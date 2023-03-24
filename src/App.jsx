import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import MovietList from "./containers/MovietList";
import MovieDetail from "./containers/MovieDetail";
import Error from "./containers/Error";
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<MovietList />}></Route>
        <Route path="/movie/:topId" element={<MovieDetail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default App
