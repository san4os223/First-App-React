import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsers,
    setUsersTotalCount,
    unfollow
} from "../../Redux/Reducer/Users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isFetching(false);
                this.props.setUsers(response.data.items)
            })
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalUsersCount)
            })


        let onPageCanged1 = (pageNumber) => {
            this.props.isFetching(true);
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.isFetching(false);
                    this.props.setUsers(response.data.items)


                })
        }

    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageCanged={this.onPageCanged1}
                users={this.props.users}
                follow={this.props.followed}
                unfollow={this.props.followed}

            /> </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, setIsFetching,})
(UsersContainer);