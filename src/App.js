import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/Profile/MyPosts/MyPosts";

function App() {

    return (<div className='app-wraper'>
            <Header/>
            <Nav/>
            <Profile/>

        </div>
    );
}


export default App;
