import React from 'react'
import Card from './Card'

export default function CardContainer(props) {

    const characters = props.characters.map(character => {
        return <Card addToFavorites={props.addToFavorites} character={character} />
    })
    return (
        <div className='card-container'>
            {characters}
        </div>
    )
}
