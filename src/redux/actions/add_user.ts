
export interface User {
    user_name: string,
    //is_teaher: boolean
}

export interface initialState {
    user_name: string,
    //is_teaher: boolean
}
//Action
export const ADD_USER = 'USER/ADD_USER'
//action type
interface addUser {
    type: typeof ADD_USER
    payload: User
}
export  type AddUserActionTypes = addUser;
//action creator with typres
export function add_user(user: User): AddUserActionTypes {
    return {
        type: ADD_USER,
        payload: user
    }
}