import React from 'react'

const Movies = props => {
  return (
    <>
      <div id="movieBoxContainer">
        <br></br>
        <section className="movieBox">
          <li>{props.key}</li> <br></br>
          <li id="titleList">{props.title}</li> <br></br>
          <li>
            <br></br>
            <img
              src={
                'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + props.image
              }
            />
            <br></br>
          </li>
          <br></br>
          <li id="plotList">{props.plot}</li>
          <br></br>
        </section>
      </div>
    </>
  )
}

export default Movies
