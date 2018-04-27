export const api = 'http://localhost:8080/api/test'

export const headers = {
    'Accept' : 'application/json',
}

export const getAll = () =>
    fetch(`${api}/`, { headers })
        .then(res => res.json())
        .then(data => data)
