import React, { useEffect, useState } from 'react'
import { data } from '../apiScripts'; //подключаем тестовые данные

//ui элемент кнопок фильрации
export default function ListFilterBtn({isActive, setData}) {
    const [isAll, setIsAll] = useState(false);
    const [tempData, setTempData] = useState([])
    //состояние каждой кнопки, кроме первой
    const [boolArr, setBoolArr] = useState([true, true, true, true])

    //При каждом обновлении состояния временного хранилища данных и массива состояний каждой кнопки обновляем состояние постоянного хранидища и состояние первой кнопки
    useEffect(() => {
        if(tempData.length !== 0){
            setData(tempData);
        }
        if(boolArr[0] && boolArr[1] && boolArr[2] && boolArr[3]){
            setIsAll(true);
        }else{
            setIsAll(false);
        }
    }, [tempData, boolArr])


  return (
    <div id="listRow" className={`${isActive ? "show" : ""}`}>
        <div className="listItem">
            <input type="checkbox" id="all" className="checkbox" 
            checked={isAll ? true : false}/>
            <label className="checkboxView" for="all" 
            onClick={() => {
                //Обновляем состояние всех кнопок до исходного
                for(let i = 0; i < 4; i++){
                    boolArr[i] = true;
                }
                setBoolArr(boolArr);
                setIsAll(true);
                //Приводим к исходному виду состояние постоянного и временного хранилища
                setData(data);
                setTempData([]);
            }}></label>
            <span className="listText">Все</span>
        </div>
        <div className="listItem">
            <input type="checkbox" id="without" className="checkbox"
            checked={boolArr[0] ? false : true} 
            onChange={(e) => {
                if(boolArr[0]){
                    //Добавляем во временное хранилище все элементы с пересадками равные 0
                    setTempData([...tempData, ...data.filter(tick => tick.number_of_changes === 0)]);
                }else{
                    //Убираем из временного хранилища все элементы с пересадками равные 0
                    let arr = tempData.filter(tick => tick.number_of_changes !== 0);
                    if(arr.length === 0){
                        //Если во временном хранилище не остается элементов возвращаем постоястоянное хранилище к исходному состоянию
                        setData(data);
                    }else{
                        //Если во временном хранилище остаются элементы возвращаем сохраняем их в постоянное хранилище
                        setTempData(arr);
                    }
                }
                //Меняем состояние второй кнопки
                let tempArr = {...boolArr};
                tempArr[0] = !tempArr[0];
                setBoolArr(tempArr);
            }}/>
            <label className="checkboxView" for="without"></label>
            <span className="listText">Без пересадок</span>
        </div>
        <div className="listItem">
            <input type="checkbox" id="one" className="checkbox"
            checked={boolArr[1] ? false : true}  
            onChange={(e) => {
                if(boolArr[1]){
                    setTempData([...tempData, ...data.filter(tick => tick.number_of_changes === 1)]);
                }else{
                    let arr = tempData.filter(tick => tick.number_of_changes !== 1);
                    if(arr.length === 0){
                        setTempData(arr);
                        setData(data);
                    }else{
                        setTempData(arr);
                    }
                }
                let tempArr = {...boolArr};
                tempArr[1] = !tempArr[1];
                setBoolArr(tempArr);
            }}/>
            <label className="checkboxView" for="one"></label>
            <span className="listText">1 пересадка</span>
        </div>
        <div className="listItem">
            <input type="checkbox" id="two" className="checkbox"
            checked={boolArr[2] ? false : true}  
            onChange={(e) => {
                if(boolArr[2]){
                    setTempData([...tempData, ...data.filter(tick => tick.number_of_changes === 2)]);
                }else{
                    let arr = tempData.filter(tick => tick.number_of_changes !== 2);
                    if(arr.length === 0){
                        setData(data);
                    }else{
                        setTempData(arr);
                    }
                }
                let tempArr = {...boolArr};
                tempArr[2] = !tempArr[2];
                setBoolArr(tempArr);
            }}/>
            <label className="checkboxView" for="two"></label>
            <span className="listText">2 пересадки</span>
        </div>
        <div className="listItem">
            <input type="checkbox" id="three" className="checkbox" 
            checked={boolArr[3] ? false : true} 
            onChange={(e) => {
                if(boolArr[3]){
                    setTempData([...tempData, ...data.filter(tick => tick.number_of_changes === 3)]);
                }else{
                    let arr = tempData.filter(tick => tick.number_of_changes !== 3);
                    if(arr.length === 0){
                        setData(data);
                    }else{
                        setTempData(arr);
                    }
                }
                let tempArr = {...boolArr};
                tempArr[3] = !tempArr[3];
                setBoolArr(tempArr);
            }}/>
            <label className="checkboxView" for="three"></label>
            <span className="listText">3 пересадки</span>
        </div>
    </div>
  )
}
