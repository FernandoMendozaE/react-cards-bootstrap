import React from 'react'
import Card from './Card' // ! Importando el componente Card
import image1 from '../assets/image1.jpg' // ! Importando imagenes
import image2 from '../assets/image2.jpg' // ! Importando imagenes
import image3 from '../assets/image3.jpg' // ! Importando imagenes

const cards = [
  {
    id: 1,
    title: 'Fazt Web',
    image: image1,
    url: 'https://faztweb.com',
  },
  {
    id: 2,
    title: 'Fazt Blog',
    image: image2,
    url: 'https://blog.faztweb.com',
  },
  {
    id: 3,
    title: 'Fazt Youtube',
    image: image3,
    url: 'https://youtube.com/fazttech',
  },
]
function Cards() {
  return (
    // * usando flexbox para que los elementos esten centrados (bg-info para ver el centreado)
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {cards.map(card => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
