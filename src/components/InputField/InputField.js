import { Button } from 'react-bootstrap'
import React, {useState} from 'react'
import './style.css'

const InputField = () => {

    const [value, setValue] = useState("")
    const [data, setData] = useState("")

    function changeHeader(event) {
        setValue(event.target.value)
    }
    
    function handleClick(){
        setData(value)
    }

    return (
        <div>
            <input className="int" placeholder="Input Link or ID" onChange={changeHeader}/>
            <Button className="btn" variant="secondary" onClick={handleClick}>Get Link</Button>
            <br/>
            <h6>{data}</h6>
        </div> 
    )
}

export default InputField
