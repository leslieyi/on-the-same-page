// import { useParams, Route, useRouteMatch } from "react-router-dom"
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ClubCard from './ClubCard'
import ClubFormCard from './ClubFormCard'

function ClubsPage({ clubsData }){
    // const match = useRouteMatch();
    // const params = useParams()
    
    const newClubCardsRender = clubsData.map((club) => {
        if (!club.members.join(" ").includes("Jaycesunderson")) {
            return <ClubCard club={club} key={club.id}/>
        } return ""
    })
    
    const myClubCardsRender = clubsData.map((club) => {
        if (club.members.join(" ").includes("Jaycesunderson")) {
            return <ClubCard club={club} key={club.id}/>
        } return ""
    })
    
    return (
        <div>
            <h1><span style={{backgroundColor: "#ffd899", padding:"5px"}}>New Clubs</span></h1>
            <Card.Group style={{justifyContent: "center"}}>
                {newClubCardsRender}
            </Card.Group>
            <h1><span style={{backgroundColor: "#ffd899", padding:"5px"}}>My Clubs</span></h1>
            <Card.Group style={{justifyContent: "center"}}>
                <ClubFormCard />
                {myClubCardsRender}
            </Card.Group>
        </div>
    )
}

export default ClubsPage;
