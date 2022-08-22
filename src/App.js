import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {


    return (
        <BrowserRouter>
            <div className='app-wraper'>
                <Header/>
                <Nav/>
                <div className={'app-waper-content'}>

                    <Routes>


                         <Route path="/dialogs" element= {<DialogsContainer/>}/>
                        <Route path="/profile"  element={<Profile/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/users"  element={<UsersContainer/>}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
