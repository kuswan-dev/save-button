window.addEventListener('DOMContentLoaded', async () => {
    const data = await Api.getStandings()
    data && renderStandings(data.standings[0].table)
})

function renderStandings(standings) {
    const container = document.getElementById('list')
    standings.map(table => (
        container.innerHTML +=
            `<div>
                <a href="detail.html?id=${table.team.id}">${table.team.name}</a>
            </div>`
    ))
}