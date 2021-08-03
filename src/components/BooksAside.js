import BooksAsideInfo from "./BooksAsideInfo";

function BooksAside({ userData }) {
  
  return (
    <div className="column-left">
      <h3>{userData.name}'s Profile</h3>
      <ul>
        <li><span className="span-titles">My Favorite Genre:</span> {userData.favoriteGenre}</li>
        <li><span className="span-titles">My Location:</span> {userData.area}</li>
      </ul>

      {userData.booksInfo.map(book=> 
        <BooksAsideInfo key={Math.random()} book={book}/>)}

    </div>
  )}


export default BooksAside;
