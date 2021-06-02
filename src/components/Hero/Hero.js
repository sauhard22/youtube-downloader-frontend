import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Hero = () => {
    return (
        <div>
            <Jumbotron className="hero">
                <Container>
                    <h1>Great to see you here!</h1>
                    <p>
                        A simple way to download youtube videos without getting redirected to useless ads.
    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Hero
