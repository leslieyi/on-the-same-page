function BooksAside({userData}) {


    
    return (
        <div className="column-left">
        <h3>{userData.name}'s Profile</h3>
            <ul>
                <li>My Favorite Genre: {userData.favoriteGenre}</li>
                {userData.booksInfo.map(book=>
                <div>
                     <br/>
                    <img className="bookImage" alt={book.title} src={book.image}/>
                    <li>Title: {book.title}</li>
                    <li>Authors: {book.authors}</li>
                    <li>Publisher: {book.publisher}</li>
                    <br/>
                
                </div>
                    
        
                    )}
            </ul>
        </div>
    )
}

export default BooksAside
