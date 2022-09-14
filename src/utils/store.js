import Cookies from 'js-cookie';
import {createContext, useReducer} from 'react';
export const Store = createContext();
const initialState = {
    darkMode: Cookies.get('darkMode') == 'ON' ? true : false,
    videos: [],
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'DARK_ON':
            return {...state, darkMode: true};
        case 'DARK_OFF':
            return {...state, darkMode: false};
        case 'ADD_VIDEOS': {
            const videos = action.payload;
            Cookies.set('videos', videos)
            return {...state,
                videos,
            }
        }
        
        default: 
        return state;
    }
}
export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    );
}