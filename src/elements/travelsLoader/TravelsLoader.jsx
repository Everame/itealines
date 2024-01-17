import React from 'react'
import FilterBtn from '../../ui/filterBtn'
import "./travelsLoader.scss"
import { useState } from 'react';
import ListFilterBtn from './../../ui/listFilterBtn';

export default function TravelsLoader() {
    const [active, setActive] = useState(1);
    const [toggle, setToggle] = useState(false);

  return (
    <section className="container">
        <div id="loaderBody">
            <div id="filterRow">
                <FilterBtn text="самый дешёвый" isActive={active === 1 ? true : false} onClick={()=>{setActive(1)}}/>
                <FilterBtn text="самый быстрый" isActive={active === 2 ? true : false} onClick={()=>{setActive(2)}}/>
                <FilterBtn text="количество пересадок" isActive={toggle} onClick={()=>{setToggle(!toggle)}}/>
            </div>
            <ListFilterBtn isActive={toggle}/>
        </div>
    </section>
  )
}
