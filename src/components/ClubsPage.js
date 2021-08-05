import { Route, Switch, useRouteMatch } from "react-router-dom"
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ClubCard from './ClubCard'
import ClubFormCard from './ClubFormCard'
import ClubShow from './ClubShow'
// LINE ONE:   , useParams, useLocation

function ClubsPage({ clubsData, setClubsData }){
    const match = useRouteMatch();
    // let { clubID } = useParams()
    // const location = useLocation
    
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
        <Switch>
            <Route exact path="/clubs">
                <div>
                    <h1><span style={{backgroundColor: "#ffd899", padding:"5px"}}>New Clubs</span></h1>
                    <Card.Group style={{justifyContent: "center"}}>
                        {newClubCardsRender}
                    </Card.Group>
                    <h1><span style={{backgroundColor: "#ffd899", padding:"5px"}}>My Clubs</span></h1>
                    <Card.Group style={{justifyContent: "center"}}>
                        <ClubFormCard clubsData={clubsData} setClubsData={setClubsData} />
                        {myClubCardsRender}
                    </Card.Group>
                </div>
            </Route>
            <Route path={`${match.url}/:ID`}>
                <ClubShow clubsData={clubsData} />
            </Route>
        </Switch>
    )
}

export default ClubsPage;
