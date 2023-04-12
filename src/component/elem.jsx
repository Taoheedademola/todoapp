import React, {useState} from "react";

function Elem(props) {
    const [check, setCheck]= useState(false)
    const [striked, setStriked]=useState(false)

    function Handlem() {

        setCheck(preValue =>{
            return !preValue
        })
        setStriked(preValue =>{
            return !preValue
        })
        
        
    }
    return(
        <div 
        onClick={()=>{
            props.onChecked(props.id)
            }}>        
            <li 
            onClick={Handlem}
            style={{textDecoration: striked ? "line-through" : "none"}}
            className="lis"> 
            <input   type="checkbox" name="ff" id="dd" checked={check}/>
            {props.text}
            </li>
            </div>


    )
}

export default Elem