import React from 'react'

export default function ListFilterBtn({isActive}) {
  return (
    <div id="listRow" className={`${isActive ? "show" : ""}`}>
        <div className="listItem">
            <input type="checkbox" id="all" className="checkbox" />
            <label className="checkboxView" for="all" ></label>
            <span className="listText">Все</span>
        </div>
        <div className="listItem">
            <input type="checkbox" id="without" className="checkbox" />
            <label className="checkboxView" for="without"></label>
            <span className="listText">Без пересадок</span>
        </div>
        <div className="listItem">
            <input type="checkbox" id="one" className="checkbox" />
            <label className="checkboxView" for="one"></label>
            <span className="listText">1 пересадка</span>
        </div>
        <div className="listItem">
            <input type="checkbox" id="two" className="checkbox" />
            <label className="checkboxView" for="two"></label>
            <span className="listText">2 пересадки</span>
        </div>
        <div className="listItem">
            <input type="checkbox" id="three" className="checkbox" />
            <label className="checkboxView" for="three"></label>
            <span className="listText">3 пересадки</span>
        </div>
    </div>
  )
}
