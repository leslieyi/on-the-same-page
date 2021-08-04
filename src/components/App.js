// import '../App.css';
import { Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AppHome from "./AppHome";
import ClubsPage from "./ClubsPage";
import NavBar from "./NavBar";
import Profiles from "./Profiles";

function App() {
  const [profileData, setProfileData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3001/profile")
      .then((response) => response.json())
      .then((Data) => {
        // console.log(Data)
        setProfileData(Data);
      });
  }, []);

      const [clubsData, setClubsData] = useState([]);
      useEffect(() => {
        fetch("http://localhost:3001/bookClubs")
          .then((response) => response.json())
          .then((Data) => {
            setClubsData(Data);
          });
      }, []);

  return (
    <div className="app-body" >
      <NavBar />
      <Link style={{textDecoration: "none"}} className="title" to="/">
          <h1>On the Same Page</h1>
      </Link>

      <Switch>
        <Route exact path="/">
          <AppHome profileData={profileData} clubsData={clubsData} />
        </Route>

        <Route path="/profiles">
          <Profiles profileData={profileData} />
        </Route>

        <Route path="/clubs">
          <ClubsPage clubsData={clubsData}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
