const ApiKey = 'your_api_key'

const Api = {
    getStandings() {
        return fetch('https://api.football-data.org/v2/competitions/2002/standings', {
            headers: {
                'X-Auth-Token': ApiKey
            }
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    },

    getTeam(id) {
        return fetch(`https://api.football-data.org/v2/teams/${id}`, {
            headers: {
                'X-Auth-Token': ApiKey
            }
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    }
}