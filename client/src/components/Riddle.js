import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Riddle = (props) => {

    return (
        <div>
            <img className="riddle position-absolute top-50 start-50 translate-middle" src={require('../img/pieceofpaper.png')} alt="background" />
            <h3 className="font position-absolute top-50 start-50 translate-middle">I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?</h3>
        </div>
    )
}

export default Riddle;