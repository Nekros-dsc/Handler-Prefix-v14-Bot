const { readdirSync } = require("fs")

module.exports = (client) => {
    const commandFiles = readdirSync('./src/Commands/').filter(f => f.endsWith('.js'));
    for(const file of commandFiles) {
        const command = require(`../../../src/Commands/${file}`);

        console.log('\x1b[31m' + ' La commande ' + '\x1b[35m' + `${file.split('.')[0]}` + '\x1b[31m' + ' est chargée avec succès !');
        client.commands.set(command.help.name, command);
    };

    const commandSubFolders = readdirSync('./src/Commands/').filter(f => !f.endsWith('.js'));
    commandSubFolders.forEach(folder => {
        const commandFiles = readdirSync(`./src/Commands/${folder}/`).filter(f => f.endsWith('.js'));

        for(const file of commandFiles) {
            const command = require(`../../../src/Commands/${folder}/${file}`);

            console.log('\x1b[31m' + ' La commande ' + '\x1b[35m' + `${file.split('.')[0]}` + '\x1b[31m' + ' est chargée avec succès depuis ' + '\x1b[35m' + `${folder}`);
            client.commands.set(command.help.name, command);
        }
    });
}