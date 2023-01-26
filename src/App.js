import React from "react";
import './App.css';
import Header from './components/header/header.js';
import Nav from './components/nav/nav'
import Content from './components/content/content'
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/setting/Setting";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";


const App = (props) => {
    return (<BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav siteBarFriendsName={props.state.siteBar.bar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs" element={<DialogsContainer store={props.store}
                        nameData={props.state.dialogs}
                        dispatch={props.dispatch}
                        newDialogsMessage={props.state.dialogs.newDialogsMessage}/>}/>
                    <Route path="/content" element={<Content store={props.store}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>);

}


export default App;


