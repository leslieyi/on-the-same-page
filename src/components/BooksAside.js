import BooksAsideInfo from "./BooksAsideInfo";

function BooksAside({ userData }) {
  return (
    <div className="column-left">
      <h3>{userData.name}'s Profile</h3>
      <ul>
        <li>My Favorite Genre: {userData.favoriteGenre}</li>
        <li>My Location: {userData.area}</li>
      </ul>

      {userData.booksInfo.map(book=> 
        <BooksAsideInfo book={book} userData={userData}/>)}

    </div>
  )}


export default BooksAside;
