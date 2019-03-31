class triforceCommand {


    constructor(message) {
        const heightInput = parseInt(message.args[1]);
        this.height = isNaN(heightInput) ? 2 : heightInput;        
        this.channel = message.message.channel;
    }

    execute() {
        if (this.height <= 35 && this.height > 0) {
            const triforce = this.getTriforce(this.height);
            const triforceMessage = '```\n' + triforce + '```';
            this.channel.send(triforceMessage);
        } else {
            this.channel.send('NO ONE CAN CONTROL ME!')
        }

        
    }

    getTriforce(height) {
        const tfTriangle = '▲ ';
        const tfSpace = ' ';
        let triforce = '';
        for (let i = 1; i <= height; i++) {
            triforce = triforce.concat(tfSpace.repeat(height - i), tfTriangle.repeat(i), '\n');
        }
        return triforce;
    }
}

module.exports = triforceCommand;