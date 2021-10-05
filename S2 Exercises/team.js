class Team {
    constructor() {
        this.teamName = 'Default team';
        this.trainer = 'Ash';
        this.roster = [];
    }
    describe() {
        return `Team ${this.teamName} with trainer ${this.trainer} 
        has the following pokemon: ${[...this.roster]}`;
    }
}



export default Team;