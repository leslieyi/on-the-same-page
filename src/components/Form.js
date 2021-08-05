function Form({handleUserInput, submitForm}){
return(
   <form onSubmit={submitForm}>
   <span className="span-titles" style={{marginLeft: "70px"}}>Title</span>
   <input onChange={handleUserInput} type="text" name="title" style={{marginLeft: "42px"}} className="inputField"/>

   <span className="span-titles" style={{marginLeft: "70px"}}>Authors</span>
   <input onChange={handleUserInput} type="text" name="authors" style={{marginLeft: "20px"}} className="inputField"/>

   <span className="span-titles" style={{marginLeft: "70px"}}>Publisher</span>
   <input onChange={handleUserInput} type="text" name="publisher" style={{marginLeft: "10px"}} className="inputField"/>

   <span className="span-titles" style={{marginLeft: "70px"}}>Image</span>
   <input onChange={handleUserInput} type="text" name="image" style={{marginLeft: "30px"}} className="inputField"/>

   <button>Submit</button>




   </form>
)
}


export default Form;
