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
if(message.content.startsWith("/diablotin")){
    message.channel.send(`**${message.author.username}** lance un diablotin (type dark) !\nDégâts : 50`,{
    file: "https://cdn.discordapp.com/attachments/437885612079710208/450318280335425546/damon_10.png"
})
}
if(message.content.startsWith("/droite")){
    message.channel.send(`**${message.author.username}** lance une droite enflammé (type feu) !\nDégâts : 50`,{
    file: "https://cdn.discordapp.com/attachments/437885612079710208/450318612746600448/inferno-fire-fist-37666152.png"
})
}
if(message.content.startsWith("/pistolet")){
    message.channel.send(`**${message.author.username}** lance des balles à eau (type eau) !\nDégâts : 50`,{
    file: "https://cdn.discordapp.com/attachments/437885612079710208/450321685913272321/unknown.png"
})
}
if(message.content.startsWith("/morsure")){
    message.channel.send(`**${message.author.username}** lance une morsure de dragon (type dragon) !\nDégâts : 50`,{
    file: "https://risibank.fr/cache/stickers/d647/64767-full.png"
})
}
if(message.content.startsWith("/tremblement")){
    message.channel.send(`**${message.author.username}** lance un tremblement de terrre (type roche) !\nDégâts : 50`,{
    file: "https://www.nationalgeographic.fr/sites/france/files/styles/image_1190/public/2-booktalk-quakeland.jpg"
})
}
if(message.content.startsWith("/roses")){
    message.channel.send(`**${message.author.username}** lance des roses (type nature) !\nDégâts : 50`,{
    file: "http://lescoquelicots.l.e.pic.centerblog.net/410185a4.jpg"
})
}
if(message.content.startsWith("/rayon")){
    message.channel.send(`**${message.author.username}** lance un éblouissement (type lumière) !\nDégâts : 50`,{
    file: "https://fr.cdn.v5.futura-sciences.com/buildsv6/images/wide1920/4/9/4/494173d4ab_124246_superman-rayon-laser.jpg"
})
}
if(message.content.startsWith("/possession")){
    message.channel.send(`**${message.author.username}** lance un esprit qui peux posséder un adversaire (type dark) !\nDégâts : 25`,{
    file: "http://static.hitek.fr/img/actualite/2016/01/14/w_tv-fullscreen-ledernierexw0079685-csn-655fc.jpg"
})
}
if(message.content.startsWith("/tnt")){
    message.channel.send(`**${message.author.username}** lance une explosion (type feu) !\nDégâts : 25`,{
    file: "https://cdn.pixabay.com/photo/2016/03/31/15/13/dynamite-1293082_960_720.png"
})
}
if(message.content.startsWith("/noyade")){
    message.channel.send(`**${message.author.username}** lance une mer où se noie l'adversaire (type eau) !\nDégâts : 25`,{
    file: "http://actu7.info/wp-content/uploads/2017/05/noyade-OKKKKK.jpg"
})
}
if(message.content.startsWith("/parade")){
    message.channel.send(`**${message.author.username}** lance une parade du dragon (type dragon) !\nDégâts : 25`,{
    file: "https://thumbs.dreamstime.com/b/dragon-chinois-dans-un-d%C3%A9fil%C3%A9-39078227.jpg"
})
}
if(message.content.startsWith("/cailloux")){
    message.channel.send(`**${message.author.username}** lance une averse de cailloux (type roche) !\nDégâts : 25`,{
    file: "https://www.tereaflandres.com/69-large_default/cailloux-concasse-vert-ox-2040-en-sac.jpg"
})
}
if(message.content.startsWith("/prison")){
    message.channel.send(`**${message.author.username}** lance une prison enfleurie (type nature) !\nDégâts : 25`,{
    file: "https://i.ytimg.com/vi/iFKQvpEOv0w/maxresdefault.jpg"
})
}
if(message.content.startsWith("/eblouissement")){
    message.channel.send(`**${message.author.username}** lance un éblouissement (type lumière) !\nDégâts : 25`,{
    file: "http://tpe-mmkj.e-monsite.com/medias/images/eblouissement.jpg"
})
}
if (message.content === "/aide combat"){  

    const embed = new Discord.RichEmbed()
    .setTitle("aide pour les commandes de combat")
    .setColor(0xcc0099)
    .setDescription("pour les attaques de 200 , voir /aide combat 1 \npour les attaques de 100 , voir /aide combat 2 \npour les attaques de 50 , voir /aide combat 3 \npour voir les attaques de 25 , voir /aide combat 4")
    .setFooter("Si il y a un problème , voir chef de guilde")
    
    message.channel.send({embed});
}
}
)
