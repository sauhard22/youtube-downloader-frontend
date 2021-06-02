import React from 'react'
import {Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href="#home" className="padding">Video Downloader</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header
