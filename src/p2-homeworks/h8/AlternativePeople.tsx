import { Button, ButtonGroup, Grid, Paper, Toolbar, Typography } from "@material-ui/core"
import axios from 'axios'
import React, { useState, useEffect } from "react"
import { alternativeReducer } from "./bll/alternativeReducer";
import { useStyles } from "./useStyles";


export type CharactersType = {
  url?: string
  name: string
  culture: string
  born?: string
  died?: string
  titles?: Array<string>
  father?: string
  mother?: string
  spouse?: string
  gender: string
  allegiance?: Array<string>
  books?: Array<string>
  povBooks?: Array<string>
  tvSeries?: Array<string>
  playedBy?: Array<string>
};

export const getPeople = (setC:(chars:Array<CharactersType>)=>void)=> {
axios
  .get<Array<CharactersType>>(
    "https://www.anapioficeandfire.com/api/characters?page=6&pageSize=50"
  )
  .then((response) => {
    const chars = response.data.filter(
      (el) =>
        (el.name !== "" && el.culture === "Northmen") ||
        el.culture === "Valyrian"
    );
    setC(chars);
  });
}

const AlternativePeople = () => {
  const [characters, setC] = useState<Array<CharactersType>>([]);
  const [finalCharacters, setFinalCharacters] = useState<Array<CharactersType>>([]);
  const classes = useStyles();

  useEffect(() => {
    getPeople(setC)
    getPeople(setFinalCharacters)
  }, [])


  const gameOfThronesPeople = finalCharacters.map((el) => (
    <Paper key={el.url} className={classes.paper + " " + classes.thronesItem}>
      <span>{el.name}</span>
      <span>{el.gender}</span>
      <span>{el.culture}</span>
    </Paper>
  ));

  const onSortHandler = (name: string) => setFinalCharacters(alternativeReducer(characters, { type: "sort", payload: name }));
  
  
  const btns = [
    {id: 1,name: "Males"},
    {id: 2, name: "Females"},
    { id: 3, name: "Northerns" },
    { id: 4, name: "Valyrians" },
    { id: 5, name: "Northern males" },
    { id: 6, name: "Valyrian males" },
    { id: 7, name: "Northern females" },
    { id: 8, name: "Valyrian females" },
  ].map(({id,name}) => {
    return (
      <Button
        key={id}
        style={{ marginBottom: '10px' }}
        onClick = {()=>onSortHandler(name)}
      >{name}</Button>
    )
  })
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      style={{ width: "1200px", marginTop: "50px" }}
    >
      <Grid item xs={6}>
        <Paper className={classes.paper + " " + classes.headers}>
          <span>Name</span>
          <span>Gender</span>
          <span>Culture</span>
        </Paper>
        {gameOfThronesPeople}
      </Grid>
      <ButtonGroup
        className={classes.buttons + " " + classes.verticalButtons}
        orientation="vertical"
        variant="contained"
        color="secondary"
        aria-label="vertical outlined primary button group"
      >
        <Paper
          className={classes.paper + " " + classes.headers}
          style={{ width: "230px" }}
        >
          <span>Sort by</span>
        </Paper>
        {btns}
      </ButtonGroup>
    </Grid>
    
  );
}
export default AlternativePeople