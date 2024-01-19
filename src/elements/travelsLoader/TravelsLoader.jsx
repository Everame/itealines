import React, { useMemo } from 'react'
import FilterBtn from '../../ui/filterBtn'
import "./travelsLoader.scss"
import { useState } from 'react';
import ListFilterBtn from './../../ui/listFilterBtn';
import {sendRequest, data} from './../../apiScripts';
import TicketItem from '../../ui/ticketItem';
import ModalWindow from '../../ui/modalWindow';

export default function TravelsLoader() {
    //sendReauest("GET", "https://api.travelpayouts.com/v2/prices/latest?currency=rub&beginning_of_period=2024-01-01&period_type=month&page=1&limit=30&show_to_affiliates=true&sorting=price"); при работе не из под локального сервера
    const [active, setActive] = useState(1);
    const [toggle, setToggle] = useState(false);
    const [testData, setTestData] = useState(data);
    const [isShow, setIsShow] = useState(false);
    const [currentTicket, setCurrentTicket] = useState({});

    useMemo(() => {
      active === 1 ? sortPrice() : sortDuration();
    }, [testData])

    function sortPrice(){
      setActive(1);
      testData.sort(function(a, b){
        return a.value - b.value;
      });
      setTestData(testData);
    }

    function sortDuration(){
      setActive(2);
      testData.sort(function(a, b){
        return a.duration - b.duration;
      });
      setTestData(testData);
    }

    function showToggle (){
      setIsShow(!isShow);
    }

  return (
    <section className="container">
        <div id="darkLayer" className={`${isShow ? "show" : ""}`}></div>
        <div id="loaderBody">
            <div id="filterRow">
                <FilterBtn text="самый дешёвый" isActive={active === 1 ? true : false} onClick={()=>{sortPrice()}}/>
                <FilterBtn text="самый быстрый" isActive={active === 2 ? true : false} onClick={()=>{sortDuration()}}/>
                <FilterBtn text="количество пересадок" isActive={toggle} onClick={()=>{setToggle(!toggle)}}/>
            </div>
            <ListFilterBtn 
            isActive={toggle} 
            setData={setTestData}/>
            
            {
            testData.map(tick => {
              return <TicketItem 
              price={tick.value} 
              origin={tick.origin} 
              destination={tick.destination} 
              duration={tick.duration} 
              changes={tick.number_of_changes} 
              gate={tick.gate} 
              departDate={tick.depart_date} 
              returnDate={tick.return_date}
              typeClass={tick.trip_class}
              setCurrentTicket={setCurrentTicket}
              setIsShow={showToggle}/>
            })
            }
            {
              Object.keys(currentTicket).length !== 0 ?
              <ModalWindow 
              price={currentTicket.price} 
              origin={currentTicket.origin} 
              destination={currentTicket.destination} 
              duration={currentTicket.duration} 
              changes={currentTicket.changes} 
              gate={currentTicket.gate} 
              departDate={currentTicket.departDate} 
              returnDate={currentTicket.returnDate}
              typeClass={currentTicket.typeClass}
              setIsShow={showToggle}
              setCurrentTicket={setCurrentTicket}/>
              : null
            }
        </div>
    </section>
  )
}
