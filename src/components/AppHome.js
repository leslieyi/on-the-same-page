import { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import Header from "./Header";
import BooksAside from "./BooksAside";
import BookClubAside from "./BookClubAside";

function AppHome(){
    const [profileData, setProfileData] = useState([
        {booksInfo: []}
      ]);
      useEffect(() => {
        fetch("http://localhost:3001/profile")
          .then((response) => response.json())
          .then((Data) => {
            setProfileData(Data);
          });
      }, []);
    
      const [userData, setUserData] = useState({
        booksInfo: [],
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
    
    console.log(profileData)
      return (
        <div className="app">
          <div className="title">
            <h1>On the Same Page</h1>
          </div>
    
          <Header profileData={profileData}/>
          <BooksAside userData={userData} />
          <MainContainer profileData={profileData}/>
          <BookClubAside clubsData={clubsData} />
        </div>
      );
}

export default AppHome;