import { Button } from 'react-bootstrap'
import './style.css'

const InputField = ({handleClick, changeHeader}) => {

    return (
        <div>
            <input className="int" placeholder="Input Link or ID" onChange={changeHeader}/>
            <Button className="btn" variant="secondary" onClick={handleClick}>Get Link</Button>        
        </div> 
    )
}

export default InputField
