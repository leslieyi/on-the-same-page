import { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import BooksAside from "./BooksAside";
import BookClubAside from "./BookClubAside";

function AppHome({ profileData, clubsData }) {
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



  return (
    <div className="app" style={{backgroundColor: "blue"}} >
      {userData.booksInfo.length === 0 ? null:
      <BooksAside userData={userData}/>
      }
      {profileData.length === 0 ? null : (
        <MainContainer profileData={profileData} />
      )}
      <BookClubAside clubsData={clubsData} />
    </div>
  );
}

export default AppHome;
