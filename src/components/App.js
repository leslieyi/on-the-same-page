import '../App.css';
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



  return (
    <div className="App">
    <h1>HELLO</h1>
    {profileData.map(profile=>
    <div>
      <h2>{profile.name}</h2>
      {profile.booksInfo.map(book=>
        <li>{book.title}</li>)}
    </div>
      )}
      <MainContainer />
      <Header />
      <BooksAside profileData={profileData}/>
      <BookClubAside />
   



    </div>
  );
}

export default App;
