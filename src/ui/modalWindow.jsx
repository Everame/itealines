import React from 'react'
import { Azimuth, Biletix, Clickavia, Close, Izhavia, Kupi, Mego, OneTwoTrip, SevenLines, Smartavia, SuperKassa } from '../assets'; //Подключаем необходимые изображения

//Модальное окно
export default function ModalWindow({price, origin, destination, duration, changes, gate, departDate, returnDate, typeClass, setIsShow, setCurrentTicket}) {
    //Рассчитываеи дату прибытия
    const depart = new Date(new Date(departDate).getTime() + duration*60000)
    const ret = new Date(new Date(returnDate).getTime() + duration*60000);
    return (
    <div id="modalWindow" className='tickItem'>
        <div id="closeBtn" 
        onClick={() => {
            setCurrentTicket({})
            setIsShow()
            }}>
            <img src={Close} alt="Close Button" />
        </div>
        <div id="innerContainer">
            <div className="row">
                <span className="h3">{price} Р</span>
                <img src={  gate === 'Smartavia' ? Smartavia : 
                            gate === "Kupi.com" ? Kupi : 
                            gate === "MEGO.travel" ? Mego : 
                            gate === "Clickavia" ? Clickavia : 
                            gate === "Izhavia" ? Izhavia : 
                            gate === "Azimuth" ? Azimuth : 
                            gate === "Biletix" ? Biletix : 
                            gate === "OneTwoTrip" ? OneTwoTrip : 
                            gate === "S7 Airlines" ? SevenLines : 
                            gate === "SuperKassa.ru" ? SuperKassa : 
                null} alt="airline logo" />
            </div>
            <div className="rowColumn">
                <span className="title">Туда</span>
                <div className="row">
                    <div className="rowBlock">
                        <span className="subTitle">{origin} - {destination}</span>
                    </div>
                    <div className="rowBlock">
                        <span className="subTitle">в пути</span>
                    </div>
                    <div className="rowBlock">
                        <span className="subTitle">пересадок:</span>
                    </div>
                </div>
                <div className="row">
                    <div className="rowBlock">
                        <span className="value">{new Date(departDate).toLocaleDateString()} - {depart.toLocaleDateString()}</span>
                    </div>
                    <div className="rowBlock">
                        <span className="value">{new Date(duration * 60 * 1000).toISOString().substr(11, 8)}</span>
                    </div>
                    <div className="rowBlock">
                        <span className="value">{changes}</span>
                    </div>
                </div>
            </div>
            <div className="rowColumn">
                <span className="title">Обратно</span>
                <div className="row">
                    <div className="rowBlock">
                        <span className="subTitle">{destination} - {origin}</span>
                    </div>
                    <div className="rowBlock">
                        <span className="subTitle">в пути</span>
                    </div>
                    <div className="rowBlock">
                        <span className="subTitle">пересадок:</span>
                    </div>
                </div>
                <div className="row">
                    <div className="rowBlock">
                        <span className="value">{new Date(returnDate).toLocaleDateString()} - {ret.toLocaleDateString()}</span>
                    </div>
                    <div className="rowBlock">
                        <span className="value">{new Date(duration * 60 * 1000).toISOString().substr(11, 8)}</span>
                    </div>
                    <div className="rowBlock">
                        <span className="value">{changes}</span>
                    </div>
                </div>
            </div>
            <div className="rowColumn">
                <span className="title">Класс перелёта</span>
                <div className="row">
                    <div className="rowBlock">
                        <span className="value">
                            {
                                typeClass === 0 ? "Эконом класс" : 
                                typeClass === 1 ? "Бизнес класс" : 
                                typeClass === 1 ? "Первый класс" : 
                                null
                        }</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
