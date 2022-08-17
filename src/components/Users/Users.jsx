import React from "react";
import styles from "./usersStyle.module.css";

import axios from "axios";


class Users extends React.Component {

componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => this.props.setUsers(response.data.items))
        .then(response => this.props.setTotalUsersCount(response.data.totalCount))

debugger;
   let onPageCanged =  (pageNumber) =>{ this.props.setCurrentPage(pageNumber);
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
           .then(response => this.props.setUsers(response.data.items))

   }

    }


    render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i=1; i<= pagesCount; i++){
        pages.push(i)
    }
        return (<div>
            <div>
                {pages.map(p=>{
                   return(<span className={this.props.currentPage === p && styles.selectPage }
                                onClick={(e) =>{this.onPageCaged(p);}}>{p}</span>)

                })}

            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span><div>
                     <div>
                    <img src={u.photoUrl} alt={''} className={styles.usersPhoto}/>
                </div>
                </div>
                    <div>
                        {u.follwed
                            ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

                    </div>
                </span>
                    <span>

                    <div>{u.name}</div>
                        <div>{u.status}</div>
                            <span>
                </span><div>{"u.location.city"}</div><div>{"u.location.country"}</div> </span>
                </div>)
            }

        </div>)
    }
}
export default Users;