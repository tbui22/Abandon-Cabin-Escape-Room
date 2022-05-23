import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import React, { useState } from 'react'
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
import { motion } from "framer-motion";

const Beach = require("./img/ArrFrameBeach.png")
const Flower = require("./img/ArrFrameFlower.png")
const Moon = require("./img/ArrFrameMoon.png")
const Mountain = require("./img/ArrFrameMountain.png")



function App() {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [text, setMessages] = useState(["Initial Story", "you are locked in the cabin try to get out"])
  const [sidebar, setSidebar] = useState(false);
  const [hasKey, setHasKey] = useState(false)
  // const [pictures, setPictures] = useState(["../img/ArrFrameBeach.png", "../img/ArrFrameFlower.png", "../img/ArrFrameMoon.png", "../img/ArrFrameMountain.png" ])
  const [pictures, setPictures] = useState([Beach, Flower, Moon, Mountain])
  const [correctOrder, setOrder] = useState([Mountain,Flower,Beach,Moon])
  const [solvedLights, setSolvedLights] = useState(false)

  const showSidebar = (tf) => setSidebar(tf);

  const changeName = (n) => {
    setName(n)
  }

  const addMessage = (m) => {
    setMessages([...text,m])
  }

  const changeSubmitted = (tf) => {
    setSubmitted(tf)
  }

  const changePics = (values) =>{
    setPictures(values)
  }

  const SolvedPuzzleLights = (s) => {
    setSolvedLights(s);
  }

 

  return (
    <>
      
      <Navbar name={name} submitted={submitted} />
    <div className='needBackground'>
      <Sidebar sidebar={sidebar} text={text} />

      <Route exact path="/">
        <Home changeName={changeName} name={name} setSubmitted={changeSubmitted} showSidebar={showSidebar} />
      </Route>

      <Route exact path="/door">
        <FrontDoorView  addMessage = {addMessage}hasKey = {hasKey} solvedLights={solvedLights}/>
      </Route>

      <Route exact path="/bookshelf">
        <BookshelfView  addMessage={addMessage} SolvedPuzzleLights={SolvedPuzzleLights} text={text} solvedLights={solvedLights} sidebar={sidebar} name={name} submitted={submitted}/>
      </Route>

      <Route exact path="/paintings">
        <PaintingView pictures ={pictures} solvedLights={solvedLights} correctOrder = {correctOrder}
        changePics = {changePics}
        addMessage = {addMessage}/>
      </Route>

      <Route exact path="/lights">
        <LightsView addMessage={addMessage} SolvedPuzzleLights={SolvedPuzzleLights} text={text} solvedLights={solvedLights} sidebar={sidebar} name={name} submitted={submitted} />
      </Route>
    </div>
    </>
  );
}

export default App;
