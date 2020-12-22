import { User, ADD_USER, AddUserActionTypes } from './../../actions/add_user';

const initialState: User = {
    user_name: ''
}
//eslint-disable-next-line
export default (
    state = initialState,
    action: AddUserActionTypes
): User => {
    switch (action.type) {
        case ADD_USER:
            console.log(action.payload);
            return {
                user_name: action.payload.user_name
            }
        default:
            return state;
    }
}

