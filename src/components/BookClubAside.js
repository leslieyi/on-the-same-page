import BookClub from './BookClub'

function BookClubAside({ clubsData }) {
    const clubsToRender = clubsData.map((club) => {
        //console.log('from BookclubAside', club.members, club.members.join(" "))
        //filterout Jaycessss
        if (club.members.join(" ").includes("Jaycesunderson")) {
            return <BookClub club={club} key={club.id}/>
        } return ""
    })

    //console.log('hi from BookClubAside', clubsData)
    return (
        <div className="column-right">
            <h1>My Book Clubs</h1>
            <button>Create New Club</button>
            <span>  </span>
            <button>Find More Clubs</button>
             {clubsData.length === 0 ?    
                     <div>
                         <h2>You don't belong to any bookclubs yet.</h2>
                         <p>Would you like to join one? **make this P a link to suggestions**</p> 
                     </div>
             : <div>{clubsToRender}</div>
             }
            <em>GOALS: (1) render each club as a card instead of a div (2) make each member name a link to their profile (3) add a link to join more clubs (4) make comments each a card and add time and date posted (5) make zip codes render as city names</em>

        </div>
    )
}

export default BookClubAside;