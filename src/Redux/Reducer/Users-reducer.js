import users from "../../components/Users/Users";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState =
    {
        users: []
    };
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,
                users:state.users.map( u =>{
                    if (u.id === action.userId){
                        return {...u,follwed:true}
                    }
                    return u;
                })
            }

        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follwed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users};
        }
        default:
            return state;

    }

}



export const followAC = (userID) => {return {type: FOLLOW,userID}}
export const unfollowAC = (userID) => {return {type: UNFOLLOW,userID }}
export const setUsersAC = (users) => {return {type: SET_USERS,users }}


export default usersReducer