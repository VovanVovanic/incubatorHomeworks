import { StateType } from './../HW8';

export type ActionType = {
    type: 'sort' |'check'
    payload: string | number
}


export const homeWorkReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "sort": {
            let stateCopy = [...state]
            action.payload === 'up' && stateCopy.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0)
            action.payload === 'down' && stateCopy.sort((a, b) => a.name !== b.name ? a.name > b.name ? -1 : 1 : 0)
            return stateCopy
        }
        case "check": {
            return state.filter((el: { age: number; })=> el.age > action.payload)
            
        }
        default: return state
    }
};
