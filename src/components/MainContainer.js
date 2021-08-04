function Container ({ profileData }) {
    return (
        <div className="column-center">
            <h1>Latest Activity</h1>
            {/* this container will have 7 h2s. each one will show the latest activity relative to their position. h2#1 will show the latest activity. h2#2 will show the 2nd latest activity. 
            
            build out functions to grab the activity and put in this container.*/}

            {/* new user, similar author interest or history */}
            <h3>{profileData[0].name} just joined OTSP!<br></br>{profileData[0].favoriteGenre === profileData[3].favoriteGenre ? ` They like ${profileData[3].favoriteGenre}, too.` : ""} <br></br>Check out their bookshelf.</h3>

            {/* user lives nearby and has their location public */}
            <h3>{profileData[4].name} just joined OTSP!
            {profileData[4].location.public === true && profileData[4].area === profileData[3].area ? ` They live in ${profileData[3].area}, too. Maybe the two of you could start a book club!` : ""} Check out their bookshelf.</h3>

            {/* users have location public, live within x miles, and have similarities. utilize zip code api and maybe google api */}
            {/* <h2>Four friends within ten miles like GENRE and GENRE. What about forming a book club and reading TITLE next? You could meet at LOCATION.</h2> */}

            {/* add conditional styling to private entries */}
            <h3>You added: {profileData[3].booksInfo.filter(a => a.public === true).map(a => <li>{a.title}</li>)} to your public bookshelf.</h3>

            <h3 style={{color:"red"}}>You added {profileData[3].booksInfo.filter(a => a.public === false).map(a => <li>{a.title}</li>)} to your private bookshelf.</h3>
        </div>

    )

}

export default Container;