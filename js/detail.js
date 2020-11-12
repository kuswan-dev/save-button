window.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get("id")

    const data = await Api.getTeam(id)
    data && renderDetail(data)
})

function renderDetail(team) {
    const container = document.getElementById('detail')
    container.innerHTML =
        `<div>
            <img src="${team.crestUrl}"/>
            <h3>${team.name}</h3>
        </div>`

    saveTeam(team)
}

// Save Team
async function saveTeam(data) {
    const button = document.getElementById('save')
    if (await Db.getTeam(data.id)) {
        button.innerHTML = 'delete'
    }

    button.addEventListener('click', async () => {
        let exist = await Db.getTeam(data.id)

        if (exist) {
            Db.deleteTeam(data.id)
            button.innerHTML = 'bookmark'
            console.log('Team berhasil dihapus!')
        } else {
            Db.addTeam(data)
            button.innerHTML = 'delete'
            console.log('Team berhasil ditambahkan!')
        }
    })
}