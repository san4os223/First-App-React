import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import {uppdateNewPostText} from "./Redux/store";

function App(props) {


    return (
        <BrowserRouter>
            <div className='app-wraper'>
                <Header/>
                <Nav/>
                <div className={'app-waper-content'}>

                    <Routes>


                         <Route path="/dialogs" element= {<Dialogs

                             store ={props.store}
                            />}
                         />

                        <Route path="/profile"  element={<Profile postData = {props.appState.profilePage.postData}
                                                                  dispatch={props.dispatch}
                                                                 newPostText = {props.appState.profilePage.newPostText}

                        />}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
