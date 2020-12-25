export const ADD_USER = 'USER/ADD_USER'

export function add_user(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}