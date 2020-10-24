import React from 'react'
import classes from './Affairs.module.css'


type propType = {
  name: string
  publisher: string
  id: number
  bookId: number
  onDeleted: (bookId:number)=> void
}

function BookItem(props: propType) {
  return (
    <li className={classes.affairItem}>
      <p>{props.id + 1}.</p> <p>{props.name}</p> 
      <button onClick={() => props.onDeleted(props.bookId)}>DELETE BOOK</button>
    </li>
  );
}

export default BookItem