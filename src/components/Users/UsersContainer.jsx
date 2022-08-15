import React from "react";
import users from "./Users";
import {connect} from "react-redux";
import {follwoAC, setUsers, setUsersAC, unfollowAC} from "../../Redux/Reducer/Users-reducer";

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow:(usersId) =>{
            dispatch(unfollowAC(usersId))
        },
        unfollow:(usersId) =>{
            dispatch(unfollowAC(usersId))
        },
        setUsers:(usersId) =>{
            dispatch(setUsersAC(usersId))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(users);