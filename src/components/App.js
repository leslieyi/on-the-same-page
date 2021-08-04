// import '../App.css';
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import AppHome from "./AppHome";
import ClubsPage from "./ClubsPage";
import NavBar from "./NavBar";
import Profiles from "./Profiles";

function App() {
  const [profileData, setProfileData] = useState([
  ]);
  useEffect(() => {
    fetch("http://localhost:3001/profile")
      .then((response) => response.json())
      .then((Data) => {
        setProfileData(Data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <AppHome profileData={profileData}/>
        </Route>

        <Route path="/profiles">
          <Profiles profileData={profileData} />
        </Route>

        <Route path="/clubs">
          <ClubsPage />
        </Route>
      </Switch>



    </div>
  );
}

export default App;
