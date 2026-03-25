//this module is responsible for talking to the database

export const postJoke = (joke) => {
  fetch(`http://localhost:8088/jokes`, {
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