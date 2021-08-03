function ProfileInfoCard({profile}){
    return (

        <div className="profile-info-card">
            <p><span className="span-titles">User Name:</span>{profile.name}</p>
            <p><span className="span-titles">Favorite Genre:</span>{profile.favoriteGenre}</p>
            <p><span className="span-titles">Favorite Genre:</span>{profile.area}</p>

            {profile.booksInfo.map(book => 
            <div> 

                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.publisher}</p>


            </div>
                )}

        </div>


    )
}

export default ProfileInfoCard;