import { useState } from "react";

function BooksAsideInfo({
  userData,
  book: { title, image, authors, publisher, review, starReview },
}) {
  const [clicked, setClicked] = useState(false);
  const [starNum, setStarNum] = useState(starReview);

  function handleClick() {
    setClicked(!clicked);
  }

  function handleStars() {
    if (starNum < 5) {
      setStarNum(starNum + 1)
    } else if (starNum === 5) {
      setStarNum(0)
    }
  }

  return (
    <div>
      <div className="front-back-lists">
        <br />
        <img
          key={Math.random()}
          className="bookImage"
          alt={title}
          src={image}
          onClick={handleClick}
        />
        {clicked ? (
          <div className="books-aside-lists-back">
            <li onClick={handleStars}>
              Star Raiting: <br/>
              {[...Array(starNum)].map(() => <img alt="stars" key={Math.random()} className="star-image" src="https://img.icons8.com/doodle/48/000000/star--v1.png"/>)}
              {[...Array(5-starNum)].map(() => <img alt="stars" key={Math.random()} className="star-image" src="https://img.icons8.com/color/48/000000/star--v1.png"/>)}
            </li>
            <li>"{review}"-{userData.name}</li>
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
