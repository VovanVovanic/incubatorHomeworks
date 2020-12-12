import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { Button, ButtonGroup, Grid, List, Paper } from "@material-ui/core";
import { useStyles } from "./useStyles";
import AlternativePeople from "./AlternativePeople";

export type UserType = {
    _id: number
    name: string
    age: number
}

export type StateType = Array<UserType>
const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState<StateType>(initialPeople);
    const classes = useStyles()

    const finalPeople = people.map((p) => (
      <Paper key={p._id} className={classes.paper}>
        <span>{p.name}</span>
        <span>{p.age}</span>
      </Paper>
    ));

    const onSort = (way: string) => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: way}))
    const onAgeCheck = (age:number) =>setPeople(homeWorkReducer(initialPeople, { type: "check", payload: age }));
    return (
      <Grid item xs={10} className={classes.wrapper}>
        <Grid >
          <Grid >
            {finalPeople}
          </Grid>
          <ButtonGroup
            className={classes.buttons}
            variant="contained"
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => onSort('up')}>sort up</Button>
            <Button onClick={() => onSort('down')}>sort down</Button>
            <Button onClick={() => onAgeCheck(18)}>Is 18?</Button>
          </ButtonGroup>
        </Grid>

        {/*для личного творчества, могу проверить*/}
        <AlternativePeople />
      </Grid>
    );
}

export default HW8;
