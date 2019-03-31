class triforceCommand {


    constructor(message) {
        this.height = message.args[1];
        this.channel = message.message.channel;
    }

    execute() {
        const triforce = this.getTriforce(this.height);
        const triforceMessage = '```\n' + triforce + '```';
        this.channel.send(triforceMessage);
    }

    getTriforce(height) {
        const tfTriangle = '▲ ';
        const tfSpace = ' ';
        let triforce = '';
        for (let i = 1; i <= height; i++) {
            triforce = triforce.concat(tfSpace.repeat(height-i), tfTriangle.repeat(i), '\n');
        }
        return triforce;
    }
}

module.exports = triforceCommand;