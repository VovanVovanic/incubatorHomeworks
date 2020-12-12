import { CharactersType } from '../AlternativePeople'



export const alternativeReducer = (state: Array<CharactersType>, action: any): Array<CharactersType> => {
  switch (action.type) {

    case 'sort': 
      if (action.payload === 'Males') {
        const newState = state.filter((el) => el.gender === 'Male')
        return newState
      }
        if (action.payload === 'Females') {
        const newState = state.filter((el) => el.gender === 'Female')
        return newState
      }
        if (action.payload === 'Northerns') {
        const newState = state.filter((el) => el.culture === 'Northmen')
        return newState
      }
              if (action.payload === 'Valyrians') {
        const newState = state.filter((el) => el.culture === 'Valyrian')
        return newState
      }
        if (action.payload === "Northern males") {
        const newState = state.filter((el) => el.gender === 'Male' && el.culture === 'Northmen')
        return newState
      }
      if (action.payload === "Northern females") {
        const newState = state.filter((el) => el.gender === 'Female' && el.culture === 'Northmen')
        return newState
      }
      if (action.payload === "Valyrian males") {
        const newState = state.filter((el) => el.gender === 'Male' && el.culture === 'Valyrian')
        return newState
      }
      if (action.payload === 'Valyrian females') {
        const newState = state.filter((el) => el.gender === 'Female' && el.culture === 'Valyrian')
        return newState
      }
    default: return state
  }
}