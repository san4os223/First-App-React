import users from "../../components/Users/Users";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';

let initialState =
    {
        users: [],
        pageSize:5,
        totalUsersCount:0,
        currentPage: 1,
    };
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,
                users:state.users.map( u =>{
                    if (u.id === action.userId){
                        return {...u,follwed:false}
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
            return {...state, users: [action.users]};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_USERS_COUNT: {
            return {...state, totalUsersCount: action.count};
        }
        default:
            return state;

    }

}



export const followAC = (userID) => {return {type: FOLLOW,userID}}
export const unfollowAC = (userID) => {return {type: UNFOLLOW,userID }}
export const setUsersAC = (users) => {return {type: SET_USERS,users }}
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_USERS_COUNT, count:totalUsersCount})


export default usersReducer
