import React, {useRef, useState} from 'react';

export const UseRef  = () => {
    const inputEl = useRef(null);
    const inputTwo = useRef(null);
    const [data, setData] = useState()
    const onButtonClick = () => {
        inputEl.current.focus();
      };

      

    const  handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputTwo.current.value)
        setData(inputTwo.current.value)
        
      };
    return(
        <>
        
         <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <br/> <br/>
      <form >
          <input type="text" ref={inputTwo} />
          <button onClick={handleSubmit}>Submit</button>
          <br />
          Data Entered By the user is {data}
        </form>
        </>
    )
}

