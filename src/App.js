import React from "react";
import './App.css';
import Header from './components/header/header.js';
import Nav from './components/nav/nav'
import Content from './components/content/content'
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Setting";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {logDOM} from "@testing-library/react";


const App = (props) => {
    return (<BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav siteBarFriendsName={props.state.siteBar.bar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs" element={<Dialogs nameData={props.state.dialogs}/>}/>
                    <Route path="/content" element={<Content posts={props.state.content}
                                                             addNewPost={props.addNewPost}
                                                             newMessageData={props.state.content.newMessageData}
                                                             updatePost={props.updatePost}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>);

}


export default App;


