import SearchBar from "./SearchBar"
import Profile from "./Profile";
function Header() {
    return (
        <div className="header">
        <SearchBar />
        <Profile />
        </div>
    )
}

export default Header;