/*Import*/
import React, { useState } from "react";
/*Component*/
const Search = () => {
  /*State*/
  const [input, setInput] = useState("");
  const [textarea, setText] = useState("");
  // new state variable
  const [submittedInput, submittedTextarea, setSubmittedInput,setSubmittedTextarea] = useState("");
  /*On Form Submit*/

  return (
    <>
      <div className="Submit">
        <form onSubmit={(e) => e.preventDefault()}>
            Title:
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            style={{ fontFamily: "Arial, FontAwesome" , whiteSpace: "pre" }}
          ></input>

<input
            value={textarea}
            onChange={(e) => setText(e.target.value)}
            type="text"
            style={{ fontFamily: "Arial, FontAwesome" }}
          ></input>

          <button onClick={()=>
           setSubmittedInput(input)>

        Submit 
        
        </button>
        </form>

        <h1>{submittedInput}</h1>
        <h1> {submittedTextarea}</h1>

      </div>
    </>
  );
};

export default Search;