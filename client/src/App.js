import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  useHistory,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import FrontDoorView from './views/FrontDoorView';
import BookshelfView from './views/BookshelfView';
import PaintingView from './views/PaintingView';
import LightsView from './views/LightsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion"

const Beach = require("./img/ArrFrameBeach.png")
const Flower = require("./img/ArrFrameFlower.png")
const Moon = require("./img/ArrFrameMoon.png")
const Mountain = require("./img/ArrFrameMountain.png")



function App() {
  const [name, setName] = useState(localStorage.getItem('name'))
  const [submitted, setSubmitted] = useState(localStorage.getItem('submitted'))
  const [text, setMessages] = useState(["Initial Story", "you are locked in the cabin try to get out"])
  const [sidebar, setSidebar] = useState(localStorage.getItem('sidebar'));
  const [solvedPuzzle1, setSolvedPuzzle1] = useState(false);
  const [hasDoorKey, setHasDoorKey] = useState(false)

  const [pictures, setPictures] = useState([Beach, Flower, Moon, Mountain])
  const [correctOrder, setOrder] = useState([Mountain, Flower, Beach, Moon])
  const [inOrder, setInOrder] = useState(false)

  const showSidebar = (tf) => {
    setSidebar(tf);
    localStorage.setItem('sidebar', tf)
  }

  const changeName = (n) => {
    setName(n)
  }

  const addMessage = (m) => {
    setMessages([...text, m])
  }

  const changeSubmitted = (tf) => {
    setSubmitted(tf)
  }

  const changePics = (values) => {
    setPictures(values)
  }

  const isInOrder = (tf) => {
    setInOrder(tf)
  }

  useEffect(() => {
    localStorage.setItem('sidebar', sidebar)
  }, [sidebar])

  useEffect(() => {
    localStorage.setItem('name', name)
  }, [name])

  useEffect(() => {
    localStorage.setItem('submitted', submitted)
  }, [submitted])

  return (
    <>

      <Navbar name={name} submitted={submitted} />
      <div className='needBackground'>
        <Sidebar sidebar={sidebar} text={text} />

        <Route exact path="/">
          <Home changeName={changeName} name={name} setSubmitted={changeSubmitted} showSidebar={showSidebar} />
        </Route>

        <Route exact path="/door">
          <FrontDoorView addMessage={addMessage} hasKey={hasDoorKey} solvedPuzzle1={solvedPuzzle1} />
        </Route>

        <Route exact path="/bookshelf">
          <BookshelfView solvedPuzzle1={solvedPuzzle1} />
        </Route>

        <Route exact path="/paintings">
          <PaintingView pictures={pictures} solvedPuzzle1={solvedPuzzle1} correctOrder={correctOrder}
            changePics={changePics} setInOrder={isInOrder} 
            addMessage={addMessage} />
        </Route>

        <Route exact path="/lights">
          <LightsView sidebar={sidebar} text={text} name={name} submitted={submitted} solvedPuzzle1={solvedPuzzle1} />
        </Route>
      </div>
    </>
  );
}

export default App;
