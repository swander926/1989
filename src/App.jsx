import React, { useState, useEffect } from 'react' //why can we pass 2? why not use component? what exactly are these?
import Movies from './components/Movies'

import axios from 'axios'

const App = () => {
  const [movies, getMovies] = useState([])

  const dataAPI = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=233d629fe35b25f8dc7b4f7ce6f34726'
    )
    console.log(resp.data)
    getMovies(resp.data.results)
  }

  useEffect(() => {
    console.log('using the effect')
    dataAPI()
  }, []) //this is the same effect as DOM load in Vanilla JS. empty array stops from repeating over

  return (
    <>
      <div id="introContainer">
        <div id="introBox">
          <p id="introParagraph">
            It's 1989. The internet has just come online!! It is the year before
            the best decade of the 20th century! Film is about to hit it's
            prime, when movie plots were still organic, original, and unique.
            The 21st century spawned a new age of film where nearly every movie
            produced became a remake of ideas from the past :( Where is the
            creativity, millenials? So, let's pop a VHS in the player to bring
            back old memories! Or, you can browse this page to see a list of
            some of the best movies in 1989. Enjoy (~):)
          </p>
        </div>
      </div>
      <ul>
        {movies.map(selectedMovie => {
          return (
            <Movies
              key={selectedMovie.id}
              title={selectedMovie.title}
              image={selectedMovie.poster_path}
              plot={selectedMovie.overview}
            />
          )
        })}
      </ul>
    </>
  )
}

export default App
