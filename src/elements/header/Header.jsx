import React from 'react';
import "./header.scss"; //стили элемента
import {AirPlane} from '../../assets';

//Шапка с логотипом приложения
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