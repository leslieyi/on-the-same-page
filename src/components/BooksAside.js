import { useState } from "react";

function BooksAside({ userData }) {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="column-left">
      <h3>{userData.name}'s Profile</h3>
      <ul>
        <li>My Favorite Genre: {userData.favoriteGenre}</li>
        {userData.booksInfo.map((book) => (
          <div>
            <br />
            <img
              className="bookImage"
              alt={book.title}
              src={book.image}
              onClick={handleClick}
            />
            {clicked ? (
              <div className="books-aside-lists-back">
                <li>{book.starReview}</li>
                <br />
                <li>{book.review}</li>
                <br />
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
  );
}

export default BooksAside;
