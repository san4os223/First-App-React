import React from "react";
import styles from "./usersStyle.module.css";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<= pagesCount; i++){
        pages.push(i)
    }

    return (<div>
        <div>
            {pages.map(p => {
                return (<span className={props.currentPage === p && styles.selectPage}
                              onClick={(e) => {
                                  props.onPageCanged(p);
                              }}>{p}</span>)

            })}

        </div>
        {
           props.users.map(u => <div key={u.id}>
                <span><div>
                     <div>
                    <img src={u.photoUrl} alt={''} className={styles.usersPhoto}/>
                </div>
                </div>
                    <div>
                        {u.follwed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}

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
export default Users;