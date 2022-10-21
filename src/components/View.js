import React from "react";
import './View.css';

const View = ({ data , addContact, lsk}) => {
    
    const handleDelete=(c)=>{
        var index=0
        data.map((con)=>{
            if(con.id===c.id)
            {
                //console.log(con);
                addContact([...data.slice(0,index),...data.slice(index+1,data.length)]);
                localStorage.removeItem(c);
            }
            index++;
            return con
        })
    }

    return (
        <table border="1" id='table'>
            <thead>
                <tr>
                    <th id='th'>Contact Name</th>
                    <th id='th'>Contact Number</th>
                    <th id='th'>Delete</th>
                </tr>
            </thead>
            {
                data.map((c)=>(
                    <tbody id={c.id}>
                        <tr>
                            <td id='td'>{c.name}</td>
                            <td id='td'>{c.number}</td>
                            <td id='td'><button onClick={()=>handleDelete(c)}>Delete</button></td>
                        </tr>
                    </tbody>                    
                ))
            }
        </table>  
    )
}

export default View;