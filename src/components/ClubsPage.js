import {useParams} from "react-router-dom"
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ClubCard from './ClubCard'

function ClubsPage({ clubsData }){
    console.log("ClubsPage", clubsData)
    const params = useParams()
    
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
            <h1>New Clubs</h1>
            <Card.Group style={{justifyContent: "center"}}>
                {newClubCardsRender}
            </Card.Group>
            <h1>My Clubs</h1>
            <Card.Group style={{justifyContent: "center"}}>
                {myClubCardsRender}
            </Card.Group>
        </div>
    )
}

export default ClubsPage;
