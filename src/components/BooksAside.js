function BooksAside({userData}) {


    
    return (
        <div className="column-left">
        <h3>My Profile</h3>
            <ul>
                <li>{userData.name}</li>
                <li>{userData.favoriteGenre}</li>
            </ul>
        </div>
    )
}

export default BooksAside
