// import '../App.css';
import {useEffect, useState} from 'react'
import MainContainer from "./MainContainer"
import Header from "./Header"
import BooksAside from "./BooksAside"
import BookClubAside from "./BookClubAside"


function App() {
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/profile")
      .then((response) => response.json())
      .then((Data) => {
        setProfileData(Data);
      });
  }, []);

  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/user")
      .then((response) => response.json())
      .then((Data) => {
        setUserData(Data);
      });
  }, []);

  const [clubsData, setClubsData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/bookClubs")
      .then((response) => response.json())
      .then((Data) => {
        setClubsData(Data);
      });
  }, []);
//added clubsData//added again

  return (
    <div className="app">
    <h1>On the Same Page</h1>
    <p>

    {userData.name}

    </p>
      <Header />
      <BooksAside userData={userData}/>
      <MainContainer />
      <BookClubAside clubsData={clubsData}/>
   



    </div>
  );
}

export default App;
