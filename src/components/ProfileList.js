import { Link } from "react-router-dom";

function ProfileList({ profile }) {
    // console.log(profile.id, profile)

  const renderLists = (

    <li>
      <Link style={{color: 'black', fontSize: "20px", justifyContent: "center",textTransform: "uppercase"}}  to={`/profiles/${profile.id}`}>{profile.name ===  "Jason Jaycesunderson" ? `🔓${profile.name}🔓` : profile.name}</Link>
    </li>
  );

  return <ul className="profile-lists">{renderLists}</ul>;
}

export default ProfileList;
