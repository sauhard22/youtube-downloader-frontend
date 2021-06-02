import { Button } from 'react-bootstrap'
import React from 'react'
import './style.css'

const InputField = () => {
    return (
        <div>
            <input className="int" placeholder="Input Link or ID"/>
            <Button className="btn" variant="secondary">Get Link</Button>
        </div> 
    )
}

export default InputField
