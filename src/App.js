import React from 'react';
import Header from './elements/header/Header';
import TravelsLoader from './elements/travelsLoader/TravelsLoader';

//App основаная страница приложения, которую буду обновлять по SPA
export default class App extends React.Component {
    render() {
        return (
          <>
            <Header/> 
            <TravelsLoader/>
            <div className='darkLayer'></div>
          </>
        )
    }
}
