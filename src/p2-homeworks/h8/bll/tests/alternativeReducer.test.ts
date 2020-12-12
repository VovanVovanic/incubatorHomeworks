import { CharactersType } from '../../AlternativePeople';
import { alternativeReducer } from "../alternativeReducer";

let initialState: Array<CharactersType>;
beforeEach(() => {

  initialState = [
    { name: 'Corlys Velaryon', gender: 'Male', culture: 'Valyrian' },
    { name: 'Cregan Karstark', gender: 'Male', culture: 'Northmen' },
    { name: 'Cregan Stark', gender: 'Male', culture: 'Northmen' },
    { name: 'Dacey Mormont', gender: 'Female', culture: 'Northmen' },
    { name: 'Daella Targaryen', gender: 'Female', culture: 'Valyrian' },
    { name: 'Daella Targaryen', gender: 'Female', culture: 'Valyrian' },
    { name: 'Daemon Blackfyre', gender: 'Male', culture: 'Valyrian' },
    { name: 'Daena Targaryen', gender: 'Male', culture: 'Valyrian' },
    { name: 'Daena Targaryen', gender: 'Female', culture: 'Valyrian' },
    { name: 'Daenora Targaryen', gender: 'Female', culture: 'Valyrian' },
    { name: 'Daryn Hornwood', gender: 'Male', culture: 'Northmen' },
  ]
});

test("sort by males", () => {
  const newState = alternativeReducer(initialState, { type: "sort", payload: "Males" });
  expect(newState.length).toBe(6);
  expect(newState[3].name).toBe('Daemon Blackfyre');
  expect(newState.every((el)=>el.gender === 'Male')).toBe(true)
});
test("sort by females", () => {
  const newState = alternativeReducer(initialState, { type: "sort", payload: "Females" });
  expect(newState.every((el) => el.gender === 'Female')).toBe(true)
  expect(newState.length).toBe(5)
});
test("sort by northerns", () => {
  const newState = alternativeReducer(initialState, { type: "sort", payload: "Northerns" });
  expect(newState.every((el) => el.culture === 'Valyrian')).toBe(false)
  expect(newState.length).toBe(4)

});
test("sort by valyrians", () => {
  const newState = alternativeReducer(initialState, { type: "sort", payload: "Valyrians" });
  expect(newState.every((el) => el.culture === 'Northmen')).toBe(false)
  expect(newState.length).toBe(7)

});
test("sort by northerns males", () => {
  const newState = alternativeReducer(initialState, { type: "sort", payload: "Northern males" });
  expect(newState.length).toBe(3)
  expect(newState.every((el)=> el.gender==='Male' && el.culture === 'Northmen')).toBe(true)

});
test("sort by valyrian males", () => {
  const newState = alternativeReducer(initialState, { type: "sort", payload: "Valyrian males" });
  expect(newState.length).toBe(3)
  

});
test("sort by valyrian females", () => {
  const newState = alternativeReducer(initialState, { type: "sort", payload: "Valyrian females" });
  expect(newState.length).toBe(4)
  expect(newState[2].name).toBe('Daena Targaryen')
});
test("sort by northern females", () => {
  const newState = alternativeReducer(initialState, { type: "sort", payload: "Northern females" });
expect(newState.length).toBe(1)
expect(newState[0].name).toBe('Dacey Mormont')
});