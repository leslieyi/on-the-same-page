import { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import BooksAside from "./BooksAside";
import BookClubAside from "./BookClubAside";
import { useRouteMatch} from "react-router-dom";

function AppHome({ profileData }) {
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

  const match = useRouteMatch();

  return (
    <div className="app" >
      <BooksAside userData={userData} />
      {profileData.length === 0 ? null : (
        <MainContainer profileData={profileData} />
      )}
      <BookClubAside clubsData={clubsData} />
    </div>
  );
}

export default AppHome;
