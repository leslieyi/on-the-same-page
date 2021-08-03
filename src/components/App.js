// import '../App.css';
import { Route, Switch } from "react-router-dom";
import AppHome from "./AppHome"
import ClubsPage from "./ClubsPage"


function App() {
  return (
    <div>
      {/* <Navbar setIsLoggedIn={setIsLoggedIn} /> */}


      <Switch>
        <Route exact path="/">
          <AppHome />
        </Route>

        <Route path="/clubs">
          <ClubsPage />
        </Route>
      </Switch>



    </div>
  );


}

export default App;
