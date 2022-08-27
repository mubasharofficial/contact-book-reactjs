import React from "react";
import user from "../assets/images/user.png";
const ContactCard = (props)=>{
const {id,name,email} = props.contact;
    return(
        <div className="item" key={{id}}>
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <div className="" style={{display: "flex", justifyContent: "space-around"}}>
                <i className="trash alternate outline icon"style={{color:"red",marginTop:"7px",marginLeft:"auto",marginRight:"0px",fontSize:"18px"}}
                onClick={()=> props.clickHandler(id)}
                ></i>
            </div>
            
        </div>
    );
}

export default ContactCard; 