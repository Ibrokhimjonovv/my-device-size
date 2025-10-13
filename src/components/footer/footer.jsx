import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.scss"

const Footer = () => {
    return (
        <footer>
            <Link to="/">Home</Link>
            <Link to="/units-of-measurement" >Units Of Measurement</Link>
            <Link to="/all-devices-size">All Devices Size</Link>
            <Link to="/ip-address-checker">What's my ip addess</Link>
            <Link to="/hide-my-ip-address">Hide my ip address</Link>
        </footer>
    )
}

export default Footer