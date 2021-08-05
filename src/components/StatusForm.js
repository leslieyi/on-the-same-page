import React, { useState } from "react";

function StatusForm({ setStatus, setNewStatus }) {
    // function handleNewStatus(newStatus){
    //     <h1>hi</h1>
    // }
  
  return (
    <>
    <h3>New Status</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Let it out, honey..." value={newStatus} onChange={(e) => {setNewStatus(e.target.value)}}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default StatusForm;