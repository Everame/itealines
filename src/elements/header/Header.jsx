import React from 'react';
import "./header.scss";
import {AirPlane} from '../../assets';

export default function Header() {
    return (
        <header>
            <div id="authorTag">
                <span>ITea0fc</span>
                <span>Lines</span>
            </div>
            <div id="logo">
                <img src={AirPlane} alt="logo" />
            </div>
        </header>
    )
}