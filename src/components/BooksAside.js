import BooksAsideInfo from "./BooksAsideInfo";
import { Link } from "react-router-dom"
import { Card } from "semantic-ui-react";
import {useState} from "react"

 
function BooksAside({ userData}) {
  
  let bookArray = userData.booksInfo

  const [search, setSearching] = useState("")
  function handleSearch(e){
    setSearching(e.target.value)
  } 
  let searchedData = bookArray.filter(item => item.title.toLowerCase().includes(search.toLowerCase()) || item.authors.toLowerCase().includes(search.toLowerCase()))

  
  const [sort, setSort] = useState(false)
  function handleSort(){
    setSort(!sort)
  }

  let sortedData 
  if (sort === true){
    sortedData = [...searchedData].sort((a,b)=> a.title < b.title ? -1 : 1)
  } else {
    sortedData = searchedData
  }


  
  return (
    <div className="column-left">
      <Link style={{ textDecoration: 'none', color : "black" }} to="/profiles/4">
      <h3>{userData.name}'s Profile</h3>
      </Link>
      <ul>
        <li ><span className="span-titles">My Favorite Genre:</span> {userData.favoriteGenre}</li>
        <li><span className="span-titles">My Location:</span> {userData.area}</li>
      </ul>
      <button onClick={handleSort}>Sort by Title</button>
      <input placeholder="Start Searching" onChange={handleSearch}></input>

      {sortedData.map((book, index)=> 
        <Card.Group  key={index} style={{justifyContent: "center"}}>
          <BooksAsideInfo book={book} />
        </Card.Group>
          
          )}
          

    </div>
  )}


export default BooksAside;
