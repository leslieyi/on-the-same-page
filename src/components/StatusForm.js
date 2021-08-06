// import React, { useState } from "react";

// function StatusForm() {

//   const [newStatus, setNewStatus] = useState([])

//   function handleSubmit(e) {
//     e.preventDefault()
//     fetch("http://localhost:3001/profile/4", {
//       method: "POST",
//       headers: {"Content-type" : "application/json"},
//       body: JSON.stringify({newStatus})
//     })
//     .then (resp => resp.json())
//     .then (newStatus => setNewStatus(newStatus))
//   }
  
//   return (
//     <>
//     <h3>New Status</h3>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Let it out, honey..." value={newStatus} onChange={(e) => {setNewStatus(e.target.value)}}/>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default StatusForm;