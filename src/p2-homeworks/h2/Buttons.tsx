
import React from 'react'
import {responseType} from './AlternativeAffairs'

type PropType = {
    onClick: (filter: string) => void
    filter: string
}
type ButtonType = {
    id: number
    name: string
}
function Buttons(props: PropType) {
    const { filter, onClick } = props

    const buttons: Array<ButtonType> = [
      { id: 1, name: "All" },
      { id: 2, name: "Bantam Books" },
      { id: 3, name: "Dabel Brothers" },
      { id: 4, name: "Marvel" },
      { id: 5, name: "Tor Publishing" },
    ]

    const buttonList = buttons.map((el: ButtonType) => {
        return <button
            key={el.id}
            onClick={()=>onClick(el.name)}
        >{el.name}
        </button>;
    });

    return <div>{buttonList}</div>;
}
export default Buttons