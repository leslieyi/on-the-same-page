import { useParams } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


// Here we add `match` to the arguments so we can access the path information in `routerProps` that is passed from Profiles.js
function ProfileShow({ profileData }) {
  const params = useParams();
  // call useParams to access the `params` from the url:
  // the dynamic portion of our /profiles/:profileId path

  const profile = profileData.find((item) => item.id == params.profileId);
  // In the initial state, profileData is an empty array and profile is null
  // as a result. Only after fetch, do we get data in profileData.


  return profile ? (
    <Card.Group style={{ justifyContent: "center" }}>
      <Card className="card-style"
        style={{
          backgroundColor:" rgba(0, 0, 0, 0.85)"
        }}
      >
        <Image
          src={profile.profileImage}
          style={{ height: "300px" }}
          size="large"
        />
        <Card.Content style={{ color: "white" }}>
          <h1>{profile.name}</h1>
          <span className="span-titles">Favorite Genre:</span>{" "}
          {profile.favoriteGenre}
          <Card.Description style={{ color: "white" }}>
            <span className="span-titles">Area:</span> {profile.area}
            <br />
            <span className="span-titles">Zipcode:</span>{" "}
            {profile.location.public
              ? profile.location.zipcode
              : "❗Sorry, This Info ain't Public❗"}
              
          
          </Card.Description>
        </Card.Content>
        <Card.Content extra style={{ color: "white", lineHeight:"1.5" }}>
          <hr/>
          <span className="span-titles">Saved Books:</span><br/>
          {profile.booksInfo.map((book) => (
            <>
      
            <span className="span-titles">Title: </span> {book.title} <br/>
            <span className="span-titles">Authors: </span> {book.authors} <br/>
            <span className="span-titles">Publisher: </span> {book.publisher} <br/>
            <a href={book.image}>
            <img alt="book" style={{height: "60px", width: "50px",}} src={book.image}/>
            </a>
            <Card.Meta style={{ color: "white", fontSize:"10px"}}><span className="span-titles">Date Added:</span> {book.dateAdded}</Card.Meta>
            <hr/>
            </>
          ))}
          <br />
        </Card.Content>
      </Card>
    </Card.Group>
  ) : // <div className="profile-info-card">
  //   {/*
  //     And here we access the `profileId` stored in `params` to render
  //     information about the selected movie
  //   */}
  //   <img src={profile.profileImage} className="profile-pictures"/>
  //   <p> <span className="span-titles">Profile Name:</span> {profile.name}</p>
  //   <p> <span className="span-titles">Favorite Genre:</span> {profile.favoriteGenre}</p>
  //   <p> <span className="span-titles">Area:</span> {profile.area}</p>
  //   <p> <span className="span-titles">Zipcode:</span> {profile.location.public ?  profile.location.zipcode : "❗Sorry, This Info ain't Public❗"}</p>
  //   <span className="span-titles">Saved Books:</span>{profile.booksInfo.map(book=><li>{book.title}</li>)}

  // </div>

  null;
}

export default ProfileShow;
