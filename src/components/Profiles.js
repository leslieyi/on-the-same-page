import ProfileInfoCard from "./ProfileInfoCard";

function Profiles({ profileData }) {
  return (
    <div className="profile">
      <h1>All User's Info</h1>

      {profileData.map((profile) => (
        <ProfileInfoCard profile={profile} />
      ))}
    </div>
  );
}

export default Profiles;
