import { useState } from "react";

function BooksAsideInfo({
  userData,
  book: { title, image, authors, publisher, review, starReview },
}) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div>
      <div className="front-back-lists">
        <br />
        <img
          className="bookImage"
          alt={title}
          src={image}
          onClick={handleClick}
        />
        {clicked ? (
          <div className="books-aside-lists-back">
            <p>Star Raiting: {starReview}</p>
            <li>
              "{review}"-{userData.name}
            </li>
            <br />
          </div>
        ) : (
          <div className="books-aside-lists-front">
            <li>Title: {title}</li>
            <li>Authors: {authors}</li>
            <li>Publisher: {publisher}</li>
            <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default BooksAsideInfo;
