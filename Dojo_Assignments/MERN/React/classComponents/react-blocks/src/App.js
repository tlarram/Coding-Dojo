import React from 'react';
import './App.css';
import Header from './Components/header';
import Navigation from './Components/navigation';
import Main from './Components/main';
import SubContents from './Components/subcontents';
import Advertisement from './Components/advertisement';
import Container from './Components/container';

                
function App() {
  return (
    <div className="app">
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
    </div>
  );
}
                
export default App;
