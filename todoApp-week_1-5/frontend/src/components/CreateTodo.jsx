import { useState } from "react";
function CreateTodo(){
    const [ title, settitle] = useState("");
    const [description,setdescription] = useState("");

return(
    <div>
    <input type="text" placeholder="title" onChange={(e)=>{
        settitle(e.target.value);
    }} /><br />

    <input type="text" placeholder="description"onChange={(e)=>{
        setdescription(e.target.value);
    }} /><br />

    <button onClick={()=>{
        fetch("http://localhost:3000/",{
            method: "POST",
            body : JSON.stringify({
                title,
                description
            }),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(async (res)=>{
            const data = await res.json();
            console.log(data);
        })
    }}>Add a todo</button>
    </div>
)}

export default CreateTodo;