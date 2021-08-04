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
      <Card
        style={{
          backgroundColor: "	rgb(64,64,64)",
          // backgroundImage: `url(https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80)`,
          // backgroundSize: "cover",
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
            <span className="span-titles">Area:</span> <p>{profile.area}
              </p>
            <br />
            <span className="span-titles">Zipcode:</span>{" "}
            <p>
            {profile.location.public
              ? profile.location.zipcode
              : "❗Sorry, This Info ain't Public❗"}
              
            </p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra style={{ color: "white" }}>
          <span className="span-titles">Saved Books:</span>
          {profile.booksInfo.map((book) => (
            <li>{book.title}</li>
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
