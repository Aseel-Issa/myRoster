
class Renderer{

    renderPlayer(player){
        const source = $('#player-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(player);
        $('#players').append(newHTML);
    }

    renderAllPlayers(players){
        $('#players').empty()
        for (const player of players) {
            this.renderPlayer(player)
        }
    }

    renderPlayerStats(obj, stats){
        const text = JSON.stringify(stats)
        obj.find('.centered').text(text)
        alert(text)
        
    }

}