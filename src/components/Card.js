import React from 'react'
import PropTypes from 'prop-types' // ! Importando PropTypes
import './cards.css'

function Card({ title, imageSource, text, url }) {
  // ? Destructurando los props (title, imageSource, url)
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>

        <p className="card-text text-secondary">
          {text
            ? text
            : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo sapiente quam, quo eveniet maiores, doloribus possimus hic culpa quaerat impedit fugiat nemo qui, neque sed ea illum veniam delectus quidem.'}
        </p>
        <a
          href={url}
          className="btn btn-outline-secondary rounded-0"
          target="_blank"
          rel="noreferrer"
        >
          Go to this website
        </a>
      </div>
    </div>
  )
}

// * Definir los tipos de datos que se van a usar
Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string,
}

export default Card
