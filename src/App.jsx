import { useEffect, useState } from "react"
import "./App.css"
import { postJoke, getJokes } from "./services/jokeService"

export const App = () => {
  const [newJoke, setNewJoke] = useState("")
  const [allJokesArray, setAllJokesArray] = useState([])
  const [toBeToldJokesArray, setToBeToldJokesArray] = useState([])
  const [toldJokesArray, setToldJokesArray] = useState([])

useEffect(() => {
  getJokes().then((jokesArray) => {
    setAllJokesArray(jokesArray)
  })
}, [])

useEffect(() => {
  setToldJokesArray(allJokesArray.filter((joke) => joke.told === true))
  setToBeToldJokesArray(allJokesArray.filter((joke) => joke.told === false))
}, [allJokesArray])

  return (
    <div className="app-container">
      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>

      <div className="joke-add-form">
        <input
          value={newJoke}
          className="joke-input"
          type="text"
          placeholder="New One Liner"
          onChange={(event) => {
            setNewJoke(event.target.value)
          }}
        />
         <button
          className="joke-input-submit"
          onClick={() => {
            postJoke({
            text: newJoke,
            told: false
            })
            setNewJoke("")
          }}
        >
          Add Joke
        </button>
        </div>
        <div className="joke-lists-container">
            <div className="joke-list-container">
              <h2>Untold <span className="untold-count">{toBeToldJokesArray.length}</span></h2>
              <ul>
                {toBeToldJokesArray.map((joke) => {
                  return (
                   <li className="joke-list-item" key={joke.id}>
      <p className="joke-list-item-text">{joke.text}</p>
    </li> 
                  )
                })}
              </ul>
            </div>
            <div className="joke-list-container">
              <h2>
                Told <span className="told-count">{toldJokesArray.length}
                </span>
              </h2>
              <ul>
                {toldJokesArray.map((joke) => {
                  return (
                  <li className="joke-list-item" key={joke.id}>
                    <p className="joke-list-item-text">{joke.text}
                    </p>

                  </li>
                  )
                }
              )}
              </ul>
            </div>
      </div>
    </div>
  )
}