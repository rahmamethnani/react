import {useState} from"react"
const UseState=()=>{
    const [name,SetName]=useState("pistasha")
    const handleName=()=>{
        SetName("rahma")
    }
    return(
        <>
        <h1>my name is {name}</h1>
        <button onClick={handleName}>envoyer</button>
        </>
    )
}
export default UseState