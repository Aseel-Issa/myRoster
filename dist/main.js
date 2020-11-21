
const findTeam = function () {
    const name = $('.find').val()
    const fetcher = new Fetcher()
    fetcher.fetchingPlayers(name)
    setTimeout(function () {
        const data = fetcher.loadPlayers()
        const renderer = new Renderer()
        renderer.renderAllPlayers(data)
    }, 3000)
}

const findStats = function () {
    const element = $(this).closest('.player')
    const fullname = element.data('id').split(" ")
    console.log(fullname)
    const player = {
        firstName: fullname[0],
        lastName: fullname[1]
    }
    const fetcher = new Fetcher()
    fetcher.fetchingPlayerStats(player)
    setTimeout(function () {
        const renderer = new Renderer()
        renderer.renderPlayerStats(element, fetcher.loadStats())
    }, 2000)
}

const replaceImg = function (img) {
    img.src = "png-transparent-basketball-dribbling-basketball-players-creative-people-game-monochrome-basketball-court.png"
}

$('body').on('click', '.player-image', findStats)