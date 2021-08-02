import { useState } from "react";

function UserInfo({userData}){
    const [clicked, setClicked] = useState(false);
    function handleClick() {
      setClicked(!clicked);
    }
  
    return(
        <div>
            <h3>{userData.name}'s Profile</h3>
            <ul>
              <li>My Favorite Genre: {userData.favoriteGenre}</li>
              <li>My Location: {userData.area}</li>
              {userData.booksInfo.map((book) => (
                <div className="front-back-lists">
                  <br />
                  <img
                    className="bookImage"
                    alt={book.title}
                    src={book.image}
                    onClick={handleClick}
                  />
                  {clicked ? (
                    <div className="books-aside-lists-back">
                      <p>Star Raiting: {book.starReview}</p>
                      <li>"{book.review}"-{userData.name}</li>
                      <br />
                    </div>
                  ) : (
                    <div className="books-aside-lists-front">
                      <li>Title: {book.title}</li>
                      <li>Authors: {book.authors}</li>
                      <li>Publisher: {book.publisher}</li>
                      <br />
                    </div>
                  )}
                </div>
              ))}
            </ul>
        </div>
        )



    
        
}

export default UserInfo;