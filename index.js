const Discord = require("discord.js");
const client = new Discord.Client();
const botPrefix = "!lb"

const compos = [{ "name" : "Hard Engage", "characters": "Aatrox, Amumu, Fizz, Miss fortune, Zyra" },
{ "name" : "Hard Engage", "characters": "Gnar, Jarvan IV, Lissandra, Tristana, Janna" },
{ "name" : "Hard Engage", "characters": "Gnar, Jarvan IV, Fizz, Lucian, Soraka" },
{ "name" : "Hard Engage", "characters": "Gnar, Elise, Ahri, Sivir, Alistar" },
{ "name" : "Hard Engage", "characters": "Maokai, Gragas, Azir, Sivir, Annie" },
{ "name" : "Yasuo Knockup", "characters": "Yasuo, Gragas, Orianna, Corki, Alistar" },
{ "name" : "Split Push", "characters": "Jax, Lee, Syndra, Lucian, Braum" },
{ "name" : "Split Push", "characters": "Ryze, Nunu, Yasuo, Tristana, Morgana" },
{ "name" : "Orianna Comp", "characters": "Gragas, Rengar, Orianna, Kog maw, Braum" },
{ "name" : "Orianna Comp", "characters": "Zac, Jarvan IV, Orianna, Ashe, Lulu" },
{ "name" : "Protect the ADC", "characters": "Lulu, Lee sin, Kassasin, Kog maw, Nami" },
{ "name" : "Cloud 9", "characters": "Rumble, Elise, Fizz, Ashe, Zyra" },
{ "name" : "Cloud 9", "characters": "Shen, Zac, Kassadin, Ashe, Zyra" },
{ "name" : "SKT classico", "characters": "Jax, Lee sin, Zed, Vayne,Zyra" },
{ "name" : "Sivir comp", "characters": "Gnar, Elise, Ahri, Sivir, Alistar" },
{ "name" : "Poke comp", "characters": "Ekko, Gragas, Varus, Corki, Janna" },
{ "name" : "Global comp", "characters": "Shen, Nocturn, Karthus, Twitch, Sona" }]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    switch(msg.content) {
        case '!lb members':
            msg.channel.send("Simon : Shen/Swain(champion de con)/Gnar/Sion/Mundo/Ornn/Jax\n Samuel: VI ,Zac, warwick, lee sin (re-train un peu),fiddlestick,elise,\n Zack : Brand | Fizz | Orianna\n Gwen :Caitlyn | Jhin | Varus | Ashe | Ezreal\n Valou : champions de type e-girl\nSacha :\nBapt :\n")
        break;
        case '!lb ingame':
            msg.channel.send("* Composition de team ( tank , ap , ad , depush )\n* Communication Vocale ( si possible) : position du jungle ennemie, décalage des laners, summoner\n* Vision jungle ennemie : pink wards etc \n-Achat d’une pink ward au premier back \n-Garder les entrées de notre jungle wardées \n-Le jungler garde une pink dans le cas où il veut cheese un objectif \n-support toujour le plus de pink pour mieux dé-wardé \n* Aggression en lane : -information du jg ennemie \n-Gank ou counter Gank \n-débilité de l'ennemie\n* Dragon : - Jg ennemie mort ou topside + pression sur les lanes bot et mid \n* Nash   : - Jg ennemie mort ou botside + une partie de l'équipe ennemie morte , Possibilité de Nash plus risqué si la game est mal partie\n* Focus sur l'adc ou squishy feed \n* Pas de call risqué si on est devant \n* finir la game le plus vite possible ( ne pas troll si on est tous feed ) ")
        break;
        case '!lb outgame':
            msg.channel.send("* On se pose pour réfléchir en fin de partie : qu’est ce qui à été bien ? et pas bien ?\n* Quelle prise de décision a pu déclencher une victoire ? / une défaite ?\n* Quelle sont les axes d’améliorations pour les games futurs\n* Pourquoi pas regarder des replays de temps en temps")
        break;
        case '!lb ban':
            msg.channel.send("Gwen : Kai’sa , vayne , lb \nSimon: Irelia/(Illaoi ?)\nsamuel: swain maitre yi fizz (zed)")
        break;
        case '!lb compo':
            var composDisplay = '';

            for(var i in compos){
                composDisplay += compos[i].name+' : '+compos[i].characters+'\n';
                console.log("i : "+ i +" other : "+compos[i].name+' : '+compos[i].characters+'\n')
            }

            msg.channel.send(composDisplay)
        
        break;
        case '!lb train':
            msg.channel.send("Simon : Irelia et connaître mieux les oppositions au top pour ne pas greed (Train le rôle)\nSamuel , re-train lee sin gragra sejuani et fiddle s'entraîner et peut être popy si nécessaire\nZack : Syndra / Kassadin\nGwen :Xayah | Kai’sa\nValou : des supports de type boje et virils\nSacha :\nBapt :")
        break;
        case '!lb ?' :
        case '!lb help' :
            msg.channel.send("List des commandes :\n*members \n*ingame \n*outgame \n*ban \n*compo \n*train \n*help")
        break;         
    }
});

client.login('NDQ1ODUzMDUzMjcxNDA4NjYw.DdxIIA.6b_4PT-PFwUcZey_VLsOdy6-Cog');