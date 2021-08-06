import BooksAsideInfo from "./BooksAsideInfo";
import Form from "./Form";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import { useState } from "react";

function BooksAside({ userData }) {
 const bookArray = userData.booksInfo;
  const [booksData, setBooksData] = useState(bookArray);

  // console.log(bookArray)

  const [search, setSearching] = useState("");
  
  const [sort, setSort] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [userInput, setUserInput] = useState({
    title: "",
    authors: "",
    publisher: "",
    image: "",
  });

  function handleSearch(e) {
    setSearching(e.target.value);
  }
  let searchedData = booksData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.authors.toLowerCase().includes(search.toLowerCase())
  );

  function handleSort() {
    setSort(!sort);
  }

  let sortedData;
  if (sort === true) {
    sortedData = [...searchedData].sort((a, b) => (a.title < b.title ? -1 : 1));
  } else {
    sortedData = searchedData;
  }

  function handleShowForm() {
    setShowForm(!showForm);
  }

  function handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUserInput({
      ...userInput,
      [name]: value,
    });
  }
  //open up a form
  //change the state of the BookAsideInfo

  function submitForm(e) {
    e.preventDefault();
    console.log("Hi from submitForm");
    setBooksData([userInput, ...booksData])

    fetch("http://localhost:3001/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        booksInfo: [userInput, ...booksData]
    })})
      .then(r=> r.json())
      .then(()=>setShowForm(false))
    
  }

  // console.log(bookArray)

  return (
    <div className="column-left">
      {showForm ? (
      <>
        <button
          style={{ marginTop: "30px", marginBottom: "30px" }}
          onClick={handleShowForm}
        >
          Go Back to Profile
        </button>
        <Form handleUserInput={handleUserInput} submitForm={submitForm} />
      </>
    ) : (
      <>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/profiles/4"
        >
          <h3>{userData.name}'s Profile</h3>
        </Link>
        <ul>
          <li>
            <span className="span-titles">My Favorite Genre:</span>{" "}
            {userData.favoriteGenre}
          </li>
          <li>
            <span className="span-titles">My Location:</span> {userData.area}
          </li>
        </ul>
        <button onClick={handleSort}>
          {sort ? "Sort by Date Added" : "Sort by Title"}
        </button>
        <input placeholder="Start Searching..." onChange={handleSearch}></input>
        <button onClick={handleShowForm}>Add a book!</button>

        {sortedData.map((book, index) => (
          <Card.Group key={index} style={{ justifyContent: "center" }}>
            <BooksAsideInfo book={book} />
          </Card.Group>
        ))}
      </>
    )}
    </div>
  );
}

export default BooksAside;
