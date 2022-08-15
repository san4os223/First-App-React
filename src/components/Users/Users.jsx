import React from "react";
import styles from "./usersStyle.module.css";
import * as axios from "axios"

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            props.setUsers(response.data.items);
        });

    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span><div>
                    <img
                        src={u.photos.small != null ? u.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yjqw5tzypfIAlOvMgrt8047s9uiuxqX9yw&usqp=CAU"}
                        className={styles.usersPhoto}/>
                </div>
                    <div>
                        {u.follwed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>}

                    </div>
                </span>
                <span><span>
                    <div>{u.name}</div><div>{u.status}</div>
                </span><div>{"u.location.city"}</div><div>{"u.location.country"}</div> </span>
            </div>)
        }

    </div>

}
export default Users;