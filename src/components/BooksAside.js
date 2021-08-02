import UserInfo from "./UserInfo"

function BooksAside({ userData }) {

  return (
    <div className="column-left">
        <UserInfo userData={userData}/>
    </div>
  );
}

export default BooksAside;
