import React, { Suspense, useEffect, useState } from "react";
import Affairs from "./Affairs";
import AlternativeAffairs from './AlternativeAffairs'
import classes from './Affairs.module.css'

// types
export type AffairPriorityType = "high" | "low" | "middle"; // need to fix any


export type AffairType = {
    _id: number;
    name: string;
    priority: AffairPriorityType;

}; // need to fix any
export type FilterType = "all" | AffairPriorityType;

export type DeleteType = (_id: number) => void;

export type MyFilterType = (filter: FilterType) => void
// constants
const defaultAffairs: Array<AffairType> = [
    // need to fix any
    { _id: 1, name: "React", priority: "high" },
    { _id: 2, name: "anime", priority: "low" },
    { _id: 3, name: "games", priority: "low" },
    { _id: 4, name: "work", priority: "high" },
    { _id: 5, name: "html & css", priority: "middle" },
];



// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>,filter: FilterType): Array<AffairType> => {
    // need to fix any
    if (filter === "all") return affairs;
    else if (filter === "high") {
        return affairs.filter((el) => el.priority === "high");
    } else if (filter === "low") {
        return affairs.filter((el) => el.priority === "low");
    } else return affairs.filter((el) => el.priority === "middle");
};
export const deleteAffair = (affairs: Array<AffairType>,_id: number): Array<AffairType> => {
    // need to fix any
    return affairs.filter((el) => el._id !== _id)
    // need to fix
};

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");
    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any


   
  return (
    <>
      <div className={classes.someClass}>
        <h1>Homework 2</h1>
        {/*should work (должно работать)*/}
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
        />
      </div>
      {/*для личного творчества, могу проверить*/}
      <div className={classes.someClass}>
        <h2>Game Of Thrones Books</h2>
        <AlternativeAffairs />
      </div>
    </>
  );
}

export default HW2;
