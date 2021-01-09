;
const CHANGE_THEME = 'CHANGE_THEME'
const TOGGLE_THEME = 'TOGGLE_THEME'
export type ThemeStateType = typeof initState
const initState = {
    clr: 'dark',
    themes: ['dark', 'red', 'some'],
    btns: [
        { name: 'green', state: true },
        {name: 'orange', state: true },
        {name: 'navy', state: true},
    ]
};

export type ChangeThemeActionType = ReturnType<typeof changeThemeC> | ReturnType<typeof toggleAdditionalThemes>
export const themeReducer = (state = initState, action: ChangeThemeActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, clr:action.clr};
        }
        case TOGGLE_THEME:
            if (action.state) {
                return {
                    ...state, themes: [...state.themes, action.name], btns: state.btns.map((el) => {
                        if (el.name === action.name) {
                            return{...el, state:false}
                        }
                    else return{...el}
                })}
            }
            else {
                return {
                    ...state,
                    clr: 'dark',
                    themes: state.themes.filter((el) => el !== action.name),
                    btns: state.btns.map((el) => {
                        if (el.name === action.name) {
                            return{...el, state:true}
                        }
                        return{...el}
                    })
                }
            }
        default: return state;
    }
};

export const changeThemeC = (clr: string) => {
    return{type: CHANGE_THEME, clr} as const
}; // fix any

export const toggleAdditionalThemes = (name:string, state:boolean) => {
    return{ type: TOGGLE_THEME, name, state}as const
}