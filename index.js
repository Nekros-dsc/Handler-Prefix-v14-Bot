const { Client, IntentsBitField, Collection } = require("discord.js");
const client = new Client({ intents: new IntentsBitField(3276799)});


client.commands = new Collection();
client.config = require('./config');


require('./src/Structure/Handler/Events')(client);
require('./src/Structure/Handler/Commands')(client);


client.login(client.config.clients.token)