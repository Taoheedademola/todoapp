import React, { useState } from "react";
import img from "../images/shape.png"
import Elem from "./elem";
import img1 from "../images/Bitmap.png"
import img2 from "../images/ik.png"
import img3 from "../images/shp.png"
function Light(props) {
    const [inputText, setInputText]=useState("HELLO")
    const [items, setItems] = useState([]);
    function HandleChange(event) {
        const  value=event.target.value
        setInputText(value)
    }

    function Additem() {
        setItems(preValue =>{
            return [...preValue, inputText]
        })
        setInputText("")
    }

    function DeleteItem(id) {
    setItems(preValue =>{
          return preValue.filter(
            (item, index) => {
                return index !== id
            }
          )
    })
    }
    const [bg, setbg]=useState(true)

    function Handlebg() {
        setbg(preValue =>{
            return !preValue
        })
    }



    
    return(
        <div style={{backgroundColor: bg ? "white" : "black", color: bg ? "black" : "white"}} className="body">
        <div  className="mo">        
            <div   className="backgrnd">
        <div  style={{ backgroundImage: bg ? `url(${img1})` : `url(${img2})`,position: "absolute", width: "1440px",  height: "960px",  left: "0",   top:"-5px",   mixBlendMode:"normal",   backgroundRepeat:"no-repeat"}}  className="backg">
            <div className="sw">
            <h1  className="too" >TODO</h1>
            <img onClick={Handlebg} className="img1" src= {bg ? img : img3} alt="" />
            </div>
            <div style={{backgroundColor: bg ? "white" : "black", color: bg ? "black" : "white"}} className="list">
                <span className="circle" onClick={Additem}>+</span>
            <input autoComplete="none" style={{backgroundColor: bg ? "white" : "black", color: bg ? "black" : "white",}}  onChange={HandleChange} value={inputText} className="input" type="text" name="idk" id="1"  />
            </div>
            </div>
        </div>
            <div style={{backgroundColor: bg ? "white" : "black", color: bg ? "black" : "white"}} className={props.lit}>
                <ul className="html"  >{items.map((item, index) =>(
                    <Elem
                    key={index}
                    id={index}
                     text={item}
                     onChecked={DeleteItem}
                    />
                    
                ))}
                
                </ul>
                
            </div>
            </div>
            </div>
    )
}

export default Light