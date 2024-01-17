import React from 'react';
import Header from './elements/header/Header';
import TravelsLoader from './elements/travelsLoader/TravelsLoader';

export default class App extends React.Component {
    render() {
        return (
          <>
            <Header/>
            <TravelsLoader/>
          </>
        )
    }
}
