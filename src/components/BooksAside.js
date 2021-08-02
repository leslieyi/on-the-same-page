import {useState, useEffect} from 'react';

function BooksAside() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3001/user")
        .then((response) => response.json())
        .then((Data) => {
          setUserData(Data);
        });
    }, []);
  
  
    return (
        <div className="column-left">
                <p>{userData.name}</p>
            
        

           
        

        </div>
    )
}

export default BooksAside