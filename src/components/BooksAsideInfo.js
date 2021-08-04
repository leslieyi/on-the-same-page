import { useState } from "react";
import {Card} from "semantic-ui-react"

function BooksAsideInfo({
  book: { title, image, authors, publisher, review, starReview, id },
}) {
  const [clicked, setClicked] = useState(false);
  const [starNum, setStarNum] = useState(starReview);

  function handleClick() {
    setClicked(!clicked);
  }

  function handleStars(e) {
    if (starNum < 5) {
      setStarNum(starNum + 1)
    } else if (starNum === 5) {
      setStarNum(0)

    }

    // const starID = `booksInfo.${e.target.id}.starReview`
    // console.log(starID)
    // console.log(typeof starID)
    
    // fetch("http://localhost:3001/user", {
    // method: 'PATCH', 
    // headers: {'Content-type': 'application/json'},
    // body: JSON.stringify({
    // starID: starNum
    // }),
    
    // })
    // .then(r => r.json())
    // .then(data => console.log(data))
  }//add a fetch request method Patch!



  return (
    <Card >
      <div className="front-back-lists" >
        <br />
        <img
          key={id}
          className="bookImage"
          alt={title}
          src={image}
          onClick={handleClick}
        />
        {clicked ? (
          <div className="books-aside-lists-back">
            <li onClick={handleStars}>
              <span className="span-titles">Star Raiting: </span><br/>
              {[...Array(starNum)].map(() => <img alt="stars" key={Math.random()} id={id} className="star-image" src="https://img.icons8.com/doodle/48/000000/star--v1.png"/>)}
              {[...Array(5-starNum)].map(() => <img alt="stars" key={Math.random()}  className="star-image" src="https://img.icons8.com/color/48/000000/star--v1.png"/>)}
            </li>
            <li>"{review}"-JJ</li>
        
          </div>
        ) : (
          <div className="books-aside-lists-front">
            <li><span className="span-titles">Title:</span> {title}</li>
            <li><span className="span-titles">Author:</span> {authors}</li>
            <li><span className="span-titles">Publisher:</span> {publisher}</li>
            <br />
          </div>
        )}
      </div>
      </Card>
  );
}

export default BooksAsideInfo;
