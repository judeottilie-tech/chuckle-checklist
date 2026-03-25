//this module is responsible for talking to the database

export const postJoke = (joke) => {
  return fetch(`http://localhost:8088/jokes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joke),
  })
}

export const getJokes = () => {
  return fetch(`http://localhost:8088/jokes`).then((response) => {
    return response.json()
  })
}

export const putJoke = (joke) => {
  return fetch(`http://localhost:8088/jokes/${joke.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(joke)
  })
}