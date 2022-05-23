import React, { useState, useEffect } from 'react';
import HTMLFlipBook from "react-pageflip";
// import Page from './Page';


const Book = (props) => {
    return (
        <div className="BookClues">
            <HTMLFlipBook width={300} height={420} size="stretch" position="absolute">
                {/* <Page orientation="rightPage"/>
                <Page orientation="leftPage"/> */}
                <div className="rightPage">
                    <h3 style={{ margin: "10%" }}>May 27, 1893</h3>
                    <h5 style={{ marginLeft: "15%", marginRight: "15%" }}>Not knowing what the rest of the day held for me, I decided on taking a journey away from the cabin. An old soul like me never liked going far from where I am comfortable, mainly the four walls of this cabin. However, today was different. Something beckoned me to leave. It must have been the lack of ingredients to make the special tea, whose ingredients can only be found high up in the mountains in a valley along a small river. The tea was a recipe that was passed down from my late grandmother who found enjoyment in tea making.</h5>
                </div>
                <div className="leftPage">
                    <h3 style={{ margin: "10%" }}>June 2, 27, 1893</h3>
                    <h5 style={{ marginLeft: "15%", marginRight: "15%" }}>Today, I finally made it to the hidden valley where a vast field of flowers awaited me. Here is home to the Sideritis flower found only in specific locations such as this. The petals of this flower has not only contributes a sweet aroma to the tea, but also possesses medicinal properties which makes up for the difficult journey to harvest such a flower. As to not disturb the overall balance of nature, I decided to only pick 5 flowers to bring home. With proper rationing, this will probably last about 3 months. </h5>
                </div>
                <div className="rightPage">
                    <h3 style={{ margin: "10%" }}>June 9, 1893</h3>
                    <h5 style={{ marginLeft: "15%", marginRight: "15%" }}>Under normal circumstances, I would have already been back to the comforts of my humble abode by this day. However, a storm quickly changed my plans. As I awaited for the passage of the storm in a small cave I happened to find, I began thinking of what lies beyond the woods, the valley, the four walls of my cabin. I closed my eyes and thought of a bright sunny beach, with warm sand and clear waters. These past few years have not been so kind to me as what I once called my ailments have now become persistent, worsening... disabling.</h5>
                </div>
                <div className="leftPage"><h3 style={{ margin: "10%" }}>December 15, 1893</h3>
                    <h5 style={{ marginLeft: "15%", marginRight: "15%" }}>Today is perfect. The crackling fireplace has a steady glow, the water is boiling for my soon to be ready tea, I am snuggled up writing my last journal entry, as the moon sits in the sky with its shining light giving the snow outside a glistening aura, enchanting me. </h5>
                </div>
            </HTMLFlipBook>
        </div>
    );
}

export default Book;
