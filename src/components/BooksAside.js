import BooksAsideInfo from "./BooksAsideInfo";
import { Link } from "react-router-dom"
import { Card } from "semantic-ui-react";

function BooksAside({ userData }) {
  return (
    <div className="column-left" >
      <Link style={{ textDecoration: 'none', color : "black" }} to="/profiles/4">
      <h3>{userData.name}'s Profile</h3>
      </Link>
      <ul>
        <li ><span className="span-titles">My Favorite Genre:</span> {userData.favoriteGenre}</li>
        <li><span className="span-titles">My Location:</span> {userData.area}</li>
      </ul>

      {userData.booksInfo.map((book, index)=> 
        <Card.Group  key={index} style={{justifyContent: "center"}}>
          <BooksAsideInfo book={book}/>
        </Card.Group>
          
          )}
          

    </div>
  )}


export default BooksAside;
