import React,{useRef} from "react";
import './Add.css';

const Add=({contact,addContact})=>{
    const myRef1=useRef('');
    const myRef2=useRef('');
    const handleSubmit=()=>{
        if(myRef1.current.value!=='' && myRef2.current.value!=='')
        {
            if(myRef2.current.value.length===10)
            {
                addContact([...contact,{name:myRef1.current.value,number:myRef2.current.value}]);
                alert('Contact saved successfully..')
            }
            else
                alert('Invalid phone number');
        }
        else
        {
            alert('All fields are mandatory');
        }
        myRef1.current.value='';
        myRef2.current.value='';
        //console.log(contact)
    }
    return(
        <div className="addDiv">
        <p>Contact Name:</p>
        <input id="inp" type="text" ref={myRef1} placeholder="Enter Contact Name"/><br/><br/>
        <p>Contact Number:</p>
        <input id="inp" type="number" ref={myRef2} placeholder="Enter Contact Number"/><br/><br/>
        <button className="btn" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Add;