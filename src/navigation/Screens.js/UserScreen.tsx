import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useDispatch } from 'react-redux';
import { add_user, User } from '../../redux/actions/add_user';

export const UserScreen: React.FunctionComponent = () => {
    const ref = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const user: any = useSelector<User>((state: User): User => {
        return {
            user_name: state.user_name,
        }
    });
    console.log('ДЕБАГ РАКЕТА ЗАЛЕТАЄ 🚀', user)
    const handleName = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {

            dispatch(add_user({ user_name: ref.current!.value }))
            ref.current!.value = '';
        }
    }
    return (
        <div className="row p">
            <div className="input-field col s6">
                <p>{user && user.user_name}</p>
                <input id="icon_prefix" type="text" onKeyPress={handleName} className="validate" ref={ref} />
                <label htmlFor="icon_prefix">Name</label>
            </div>

        </div>
    )
}
