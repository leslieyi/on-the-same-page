import ProfileShow from "./ProfileShow";
import ProfileList from "./ProfileList";
import { Route, useRouteMatch } from "react-router-dom";


// import the custom `useRouteMatch` hook from React Router

function Profiles({ profileData }) {
  const match = useRouteMatch();



  return (
    <div className="profile">
      <Route path={match.url}>
        <h3>{[...Array(3)].map(() => <img className="smirk" alt="smirk" src="https://media2.giphy.com/media/SqYhwWASzIrjjq07u8/giphy.gif?cid=790b7611df195abab6866f6f7251230cd463affa27969de5&rid=giphy.gif&ct=s"/>)}Choose a User to Stalk{[...Array(3)].map(() => <img className="smirk" alt="smirk" src="https://media2.giphy.com/media/SqYhwWASzIrjjq07u8/giphy.gif?cid=790b7611df195abab6866f6f7251230cd463affa27969de5&rid=giphy.gif&ct=s"/>)}</h3>
      </Route>


      {profileData.map((profile, index ) => (
        <ProfileList key={index} profile={profile} />
      ))}

      <Route path={`${match.url}/:profileId`}>
        <ProfileShow profileData={profileData} />
      </Route>

    </div>
  );
}

export default Profiles;
