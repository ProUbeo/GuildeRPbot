const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setUsername("GuildeRP")
    bot.user.setPresence({ game: { name: 'Préparer les Requêtes'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
     if(message.content.startsWith("/destructor")){
        message.channel.send(`**${message.author.username}** lance destructor (type dark) !\nDégâts : 200 \nDégâts sur utilisateur : 100`,{
        file: "http://img.maxisciences.com/article/planete/que-se-passera-t-il-si-la-terre-s-arrete-de-tourner_7615fcfc450f978e6ad0da439cd7a69e419b5846.jpg"
    })
}
if(message.content.startsWith("/tempete solaire")){
    message.channel.send(`**${message.author.username}** lance tempète solaire (type feu) !\nDégâts : 200 \nDégâts sur utilisateur : 100`,{
    file: "https://static.usbeketrica.com/images/thumb_840xh/58fdff01a0c68.jpg"
})
}
if(message.content.startsWith("/1000 tsunami")){
    message.channel.send(`**${message.author.username}** lance les 1000 tsunami (type eau) !\nDégâts : 200 \nDégâts sur utilisateur : 100`,{
    file: "https://socialunderground.com/wp-content/uploads/2016/06/feature_tsunami.jpg"
})
}
if(message.content.startsWith("/dragon cry")){
    message.channel.send(`**${message.author.username}** lance le dragon cry (type dragon) !\nDégâts : 200 \nDégâts sur utilisateur : 100`,{
    file: "https://orig00.deviantart.net/18ba/f/2016/094/8/8/red_crystal_dragon_by_sandara-d9xs66f.jpg"
})
}
if(message.content.startsWith("/meteorite")){
    message.channel.send(`**${message.author.username}** lance la pluie de météorites (type roche) !\nDégâts : 200 \nDégâts sur utilisateur : 100`,{
    file: "http://www.alex-bernardini.fr/espace/images/planetes/ceinture-asteroides.jpg"
})
}
if(message.content.startsWith("/mere nature")){
    message.channel.send(`**${message.author.username}** lance mère nature (type nature) !\nDégâts : 200 \nDégâts sur utilisateur : 100`,{
    file: "http://www.zakstudio.com/wp-content/uploads/2013/10/mere-nature-feuille-automne.jpg"
})
}
if(message.content.startsWith("/supernova")){
    message.channel.send(`**${message.author.username}** lance une supernova (type lumière) !\nDégâts : 200 \nDégâts sur utilisateur : 100`,{
    file: "http://www.cosmosup.com/wp-content/uploads/2014/04/rsz_hd-wallpapers-supernova-1920x1440-wallpaper-700x325.jpg"
})
}
if(message.content.startsWith("/ombres vivante")){
    message.channel.send(`**${message.author.username}** lance des ombres vivante (type dark) !\nDégâts : 100`,{
    file: "http://www.voxspiriti.com/images/esprits-obsesseurs.jpg"
})
}
if(message.content.startsWith("/bombe")){
    message.channel.send(`**${message.author.username}** lance une Tsar bomba (type feu) !\nDégâts : 100`,{
    file: "https://media.discordapp.net/attachments/437885612079710208/450312212297285634/landscape-1476123096-screen-shot-2016-10-10-at-21009-pm.png"
})
}
if(message.content.startsWith("/pluie")){
    message.channel.send(`**${message.author.username}** lance une averse acide (type eau) !\nDégâts : 100`,{
    file: "https://cdn.discordapp.com/attachments/437885612079710208/450313267433439254/depositphotos_21550689-stock-illustration-cartoon-acid-rain-drop.png"
})
}
if(message.content.startsWith("/ecailles")){
    message.channel.send(`**${message.author.username}** lance des écailles de dragon (type dragon) !\nDégâts : 100`,{
    file: "https://monkeydluffy1989.files.wordpress.com/2011/11/render_natsu_dragneel.png"
})
}
if(message.content.startsWith("/homme bouse")){
    message.channel.send(`**${message.author.username}** lance un homme de bouse (type roche) !\nDégâts : 100`,{
    file: "https://i.pinimg.com/originals/8f/39/69/8f3969b9c9ce49461c0da63590cee4f3.jpg"
})
}
if(message.content.startsWith("/surcroissance")){
    message.channel.send(`**${message.author.username}** lance une surcroissance naturel (type nature) !\nDégâts : 100`,{
    file: "https://cdn.discordapp.com/attachments/437885612079710208/450316060936110092/photo-l-alsace-gerard-mura-1427792802.png"
})
}
if(message.content.startsWith("/etoile")){
    message.channel.send(`**${message.author.username}** lance une étoile (type lumière) !\nDégâts : 100`,{
    file: "https://cdn.discordapp.com/attachments/437885612079710208/450316672159711233/sirius.png"
})
}
}
)
