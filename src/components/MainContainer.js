function Container ({ profileData }) {


    return (
        <div className="column-center">

            <h1>Latest Activity</h1>

            {/* new user, similar author interest or history */}
            <h2>{profileData[0].name} just joined OTSP! They like AUTHOR, too. Check out their bookshelf.</h2>
            
            {/* user lives nearby but does not have their location public. they are only a match because of the genres */}
            <h2>USER just joined OTSP! They like GENRE, too. Check out their bookshelf.</h2>
            
            {/* user is already a friend -- show badge */}
            <h2>USER added TITLE to their bookshelf.</h2>

            {/* users who added title who either live more than 50 miles away and/or have location private */}
            <h2>USER added TITLE to their bookshelf, too! Start a virtual book club and enjoy it together.</h2>

            {/* users have location public, live within x miles, and have similarities. utilize zip code api and maybe google api */}
            <h2>Four friends within ten miles like GENRE and GENRE. What about forming a book club and reading TITLE next? You could meet at LOCATION.</h2>

            {/* add conditional styling to private entries */}
            <h2>You added TITLE to your bookshelf (private).</h2>
            <h2>You added TITLE to your bookshelf (public).</h2>





  
        </div>

    )

}

export default Container;