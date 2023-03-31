const { readdirSync } = require("fs")

module.exports = (client) => {
    const eventFiles = readdirSync('./src/Events/').filter(f => f.endsWith('.js'));
    for(const file of eventFiles) {
        const event = require(`../../../src/Events/${file}`)

        console.log('\x1b[32m' + 'L\'event ' + '\x1b[35m' + `${file.split('.')[0]}` + '\x1b[32m' + ' est chargée avec succès !')
        client.on(event.name, (...args) => event.execute(...args, client))
    };

    const eventSubFolders = readdirSync('./src/Events/').filter(f => !f.endsWith('.js'));
    eventSubFolders.forEach(folder => {
        const eventFiles = readdirSync(`./src/Events/${folder}/`).filter(f => f.endsWith('.js'));
        for(const file of eventFiles) {
            const event = require(`../../../src/Events/${folder}/${file}`);

            console.log('\x1b[32m' + 'L\'event ' + '\x1b[35m' + `${file.split('.')[0]}` + '\x1b[32m' + ' est chargée avec succès depuis ' + '\x1b[35m' + `${folder}`)
            client.on(event.name, (...args) => event.execute(...args, client))
        }
    });
}