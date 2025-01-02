/* eslint-disable no-unused-vars */
import { useState } from "react";
export function CreateTodo(){
     //react-query
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
    return <div>
        <input id="title" style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value)
        }}></input> <br />
        <input id = "desc" style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value
            setDescription(e.target.value)
        }}></input> <br />
        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch('http://localhost:3000/todo', 
            {
                method: "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "Content-Type" : "application/json" //checks the data is it json or not in the header as app.use({})
                }
            })
                .then(async (res)=>{
                    // eslint-disable-next-line no-unused-vars
                    const json = await res.json();
                    alert("todo added");
                })
        }}>Add a todo</button>
    </div>
}