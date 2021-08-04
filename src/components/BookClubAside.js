import { NavLink } from 'react-router-dom'
import { Card, CardContent } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ClubCard from './ClubCard'

function BookClubAside({ clubsData }) {
    const clubsToRender = clubsData.map((club) => {
        //filterout Jaycessss
        if (club.members.join(" ").includes("Jaycesunderson")) {
            return <ClubCard club={club} key={club.id}/>
        } return ""
    })

    //console.log('hi from BookClubAside', clubsData)
    return (
        <div className="column-right">
            <h1>My Book Clubs</h1>
            {/* <button>Create New Club</button>
            <span>  </span> */}
            <div style={{paddingBottom: "12px"}} >
                <NavLink exact to="/clubs">
                    <button>Find or Create a New Club</button>
                </NavLink>
            </div>
            {clubsData.length === 0 ?    
                <div>
                    <h2>You don't belong to any bookclubs yet.</h2>
                    <p>Would you like to join one? **make this P a link to suggestions**</p> 
                </div>
                : 
                <div style={{padding: "10px"}} >
                    <Card.Group>
                        {clubsToRender}
                    </Card.Group>
                </div>
            }
            <em>GOALS: (1) render each club as a card instead of a div (2) make each member name a link to their profile (3) add a link to join more clubs (4) make comments each a card and add time and date posted (5) make zip codes render as city names</em>

        </div>
    )
}

export default BookClubAside;