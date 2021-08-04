import { useParams } from "react-router-dom";

// Here we add `match` to the arguments so we can access the path information in `routerProps` that is passed from Profiles.js
function ProfileShow({ profileData }) {
  const params = useParams();
  // call useParams to access the `params` from the url:
  // the dynamic portion of our /profiles/:profileId path

  const profile = profileData.find((item) => item.id == params.profileId);
  // In the initial state, profileData is an empty array and profile is null
  // as a result. Only after fetch, do we get data in profileData.
  

  return profile ? (
    
    <div className="profile-info-card">
      {/*
        And here we access the `profileId` stored in `params` to render 
        information about the selected movie
      */}
      <p> <span className="span-titles">Profile Name:</span> {profile.name}</p>
      <p> <span className="span-titles">Favorite Genre:</span> {profile.favoriteGenre}</p>
      <p> <span className="span-titles">Area:</span> {profile.area}</p>
      <p> <span className="span-titles">Zipcode:</span> {profile.location.public ?  profile.location.zipcode : "❗Sorry, This Info ain't Public❗"}</p>
      <span className="span-titles">Saved Books:</span>{profile.booksInfo.map(book=><li>{book.title}</li>)}
      


    </div>

  ) : null;
}

export default ProfileShow;
