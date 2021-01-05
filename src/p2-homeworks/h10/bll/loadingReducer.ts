
const TOGGLE_LOADING = 'TOGGLE_LOADING'

export type LoadType = typeof initState
const initState = {
    loading: false
};
export type LoadACType = ReturnType<typeof loadingAC>
export const loadingReducer = (state = initState, action: LoadACType): LoadType => { // fix any
    switch (action.type) {
        case TOGGLE_LOADING: {
            return {...state, loading:action.loading}
        }
        default: return state;
    }
};

export const loadingAC = (loading:boolean) => {
    return {
        type: TOGGLE_LOADING,
        loading
    }as const
}; // fix any