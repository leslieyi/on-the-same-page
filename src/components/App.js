// import '../App.css';
import { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import Header from "./Header";
import BooksAside from "./BooksAside";
import BookClubAside from "./BookClubAside";

function App() {
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/profile")
      .then((response) => response.json())
      .then((Data) => {
        setProfileData(Data);
      });
  }, []);

  const [userData, setUserData] = useState({
    booksInfo: []
  });
  useEffect(() => {
    fetch("http://localhost:3001/user")
      .then((response) => response.json())
      .then((Data) => {
        setUserData(Data);
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
      <div className="app">
        <div className="title">
          <h1>On the Same Page</h1>
        </div>

        <Header />
        <BooksAside userData={userData} />
        <MainContainer />
        <BookClubAside clubsData={clubsData} />
      </div>
  );
}

export default App;
