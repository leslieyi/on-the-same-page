import React from "react";
import StatusForm from "./StatusForm";

function Container ({ profileData }) {
  
    return (
        <div className="column-center">
            {/* <StatusForm /> */}

            <h1>Latest Activity</h1>

            {/* new user, similar author interest or history */}
            <h3><a href="./profiles/2">{profileData[1].name}</a> just joined OTSP!</h3><p>{profileData[1].favoriteGenre === profileData[3].favoriteGenre ? ` They like ${profileData[3].favoriteGenre}, too. Check out their bookshelf.` : ""}</p>

            {/* user lives nearby and has their location public */}
            <h3><a href="./profiles/5">{profileData[4].name}</a> just joined OTSP!</h3><p>
            {profileData[4].location.public === true && profileData[4].area === profileData[3].area ? ` They live in ${profileData[3].area}, too. Maybe the two of you could start a book club!` : ""}</p>

            {/* users have location public, live within x miles, and have similarities. utilize zip code api and maybe google api */}
            {/* <h2>Four friends within ten miles like GENRE and GENRE. What about forming a book club and reading TITLE next? You could meet at LOCATION.</h2> */}

            <h3>You added to your public bookshelf:</h3><p>{profileData[3].booksInfo.filter(a => a.public === true).map(a => <li>{a.title}</li>)}</p>

            <h3 style={{color:"#cb4154"}}>You added to your private bookshelf:</h3><p style={{color:"#cb4154"}}>{profileData[3].booksInfo.filter(a => a.public === false).map(a => <li>{a.title}</li>)}</p>
        </div>

    )

}

export default Container;