

class Fetcher{

    constructor(){
        this.data = []
        this.stats = {}
    }

    fetchingPlayers (name){
        $.get(`teams/${name}`, (data) => {
            this.data = data;
            console.log(this.data)
         })
         // Can't do this task here, because the fetchingPlayers function is considered async from the main
        //  setTimeout( () => {
        //     console.log("data are: ")
        //      console.log(this.data)
        //     return this.data
        // }, 3000)
    }

    fetchingPlayerStats (player){
        const arg = JSON.stringify(player)
        $.get(`playerStats/${arg}`, (data) => {
            this.stats = data;
            console.log(this.stats)
         })
    }

    loadPlayers(){
        return this.data
    }

    loadStats(){
        return this.stats
    }
}