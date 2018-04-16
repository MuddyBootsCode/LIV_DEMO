const api = 'http://localhost:8000'

const headers = {
    'Content-Type': 'application/json',
    'Accept' : 'application/json',

}

export const getAll = () => {
    fetch(`${api}/480.json`, {headers})
        .then(res => res.json())
        .then(data => data.events)
}