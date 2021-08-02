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


//testing
  return (
    <div className="app">
    <h1>On the Same Page</h1>
    {/* {profileData.map(profile=>
    <div>
      <h2>{profile.name}</h2>
      {profile.booksInfo.map(book=>
        <li>{book.title}</li>)}
    </div>
      )} */}
      <Header />
      <BooksAside />
      <MainContainer />
      <BookClubAside />
   



    </div>
  );
}

export default App;
