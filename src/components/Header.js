import SearchBar from "./SearchBar"
import Profiles from "./Profile";
function Header({profileData}) {
    return (
        <div className="header">
        <SearchBar />
        <Profiles profileData={profileData}/>
        </div>
    )
}

export default Header;