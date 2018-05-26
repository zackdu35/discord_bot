const Discord = require("discord.js");
var http = require("http");

const key = require('./data/key.json');
var compos = require('./data/compos.json');
var members = require('./data/members.json');

const client = new Discord.Client();

var result = ""



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    result = ""
    switch(msg.content) {
        case '!lb ?' :
        case '!lb help' :
            msg.channel.send("Liste des commandes :\n\n*members \n*ingame \n*outgame \n*ban \n*add ban \n*compos \n*add compo \n*train \n*add train \n*help \n*doc")
        break;
        case '!lb members':
            for(var i in members){
                result += members[i].name+' - '+members[i].characters+'\n';
            }
            msg.channel.send(result)
        break;
        case '!lb ingame':
            msg.channel.send("* Composition de team ( tank , ap , ad , depush )\n* Communication Vocale ( si possible) : position du jungle ennemie, décalage des laners, summoner\n* Vision jungle ennemie : pink wards etc \n-Achat d’une pink ward au premier back \n-Garder les entrées de notre jungle wardées \n-Le jungler garde une pink dans le cas où il veut cheese un objectif \n-support toujour le plus de pink pour mieux dé-wardé \n* Aggression en lane : -information du jg ennemie \n-Gank ou counter Gank \n-débilité de l'ennemie\n* Dragon : - Jg ennemie mort ou topside + pression sur les lanes bot et mid \n* Nash   : - Jg ennemie mort ou botside + une partie de l'équipe ennemie morte , Possibilité de Nash plus risqué si la game est mal partie\n* Focus sur l'adc ou squishy feed \n* Pas de call risqué si on est devant \n* finir la game le plus vite possible ( ne pas troll si on est tous feed ) ")
        break;
        case '!lb outgame':
            msg.channel.send("* On se pose pour réfléchir en fin de partie : qu’est ce qui à été bien ? et pas bien ?\n* Quelle prise de décision a pu déclencher une victoire ? / une défaite ?\n* Quelle sont les axes d’améliorations pour les games futurs\n* Pourquoi pas regarder des replays de temps en temps")
        break;
        case '!lb ban':
            for(var i in members){
                result += members[i].name+' - '+members[i].ban+'\n';
            }
            msg.channel.send(result)
        break;
        case '!lb compos':
            for(var i in compos){
                result += '**#'+compos[i].id+'** '+compos[i].name+' - '+compos[i].characters+'\n';
            }
            msg.channel.send(result)
        break;
        case '!lb train':
            for(var i in members){
                result += members[i].name+' - '+members[i].train+'\n';
            }
            msg.channel.send(result)
        break;
        case '!lb doc' :
            msg.channel.send('https://docs.google.com/document/d/'+key.google+'/edit')
        break
        case '!lb add train':
            const trainCollector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { time: 10000 });
            var champion = "";
            msg.channel.send("!sim - !sam - !zac - !gwe - !val **+** nom_du_champion");
            trainCollector.on('collect', msg => {
                if (msg.content.includes("!sim")) {
                    champion = msg.content.substring(4).replace(/\s/g, '');
                    members[0].train = champion;
                    msg.channel.send("le pick "+ champion +" a été enregistré");

                } else if(msg.content.includes("!sam")){
                    champion = msg.content.substring(4).replace(/\s/g, '');
                    members[1].train = champion;
                    msg.channel.send("le pick "+ champion +" a été enregistré");

                } else if(msg.content.includes("!zac")){
                    champion = msg.content.substring(4).replace(/\s/g, '');
                    members[2].train = champion;
                    msg.channel.send("le pick "+ champion +" a été enregistré");

                } else if(msg.content.includes("!gwe")){
                    champion = msg.content.substring(4).replace(/\s/g, '');
                    members[3].train = champion;
                    msg.channel.send("le pick "+ champion +" a été enregistré");

                } else if(msg.content.includes("!val")){
                    champion = msg.content.substring(4).replace(/\s/g, '');
                    members[4].train = champion;
                    msg.channel.send("le pick "+ champion +" a été enregistré");

                } else{
                    msg.channel.send("Quelque chose a empêché le bon déroulement de la commande");
                }
            });
        break;
        case '!lb add ban':
            const banCollector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { time: 10000 });
            var champion = "";
            msg.channel.send("!sim - !sam - !zac - !gwe - !val **+** nom_du_champion");
            banCollector.on('collect', msg => {
                if (msg.content.includes("!sim")) {
                    champion = msg.content.substring(4).replace(/\s/g, '');
                    members[0].ban = champion;
                    msg.channel.send("le ban "+ champion +" a été enregistré");
                    
                } else if(msg.content.includes("!sam")){
                    champion = msg.content.substring(4).replace(/\s/g, '');
                    members[1].ban = champion;
                    msg.channel.send("le ban "+ champion +" a été enregistré");

                } else if(msg.content.includes("!zac")){
                    champion = msg.content.substring(4).replace(/\s/g, '');
                    members[2].ban = champion;
                    msg.channel.send("le ban "+ champion +" a été enregistré");

                } else if(msg.content.includes("!gwe")){
                    champion = msg.content.substring(4).replace(/\s/g, '');
                    members[3].ban = champion;
                    msg.channel.send("le ban "+ champion +" a été enregistré");

                } else if(msg.content.includes("!val")){
                    champion = msg.content.substring(4).replace(/\s/g, '');
                    members[4].ban = champion;
                    msg.channel.send("le ban "+ champion +" a été enregistré");

                } else{
                    msg.channel.send("Quelque chose ne s'est pas déroulé comme prévu");
                }
            });
        break;
        case '!lb add compo':
            msg.channel.send("Quelle est le nom de ta nouvelle compo ? **!name 'nom_de_la_compo'**");
            const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { time: 40000 });
            var name,top,jungle,mid,adc,supp = "";
            collector.on('collect', msg => {
                if (msg.content.includes("!name")) {
                    name = msg.content.substring(5).replace(/\s/g, '');
                    msg.channel.send("Quelle est le nom du TOP LANER ? **!top 'nom_du_top'**");
                    collector.on('collect', msg => {
                        if (msg.content.includes("!top")) {
                            top = msg.content.substring(4).trim()
                            msg.channel.send("Quelle est le nom du JUNGLER ? **!jun 'nom_du_jun'**");
                            collector.on('collect', msg => {
                                if (msg.content.includes("!jun")) {
                                    jungle = msg.content.substring(4).trim()
                                    msg.channel.send("Quelle est le nom du MID ? **!mid 'nom_du_mid'**");
                                    collector.on('collect', msg => {
                                        if (msg.content.includes("!mid")) {
                                            mid = msg.content.substring(4).trim()
                                            msg.channel.send("Quelle est le nom de l'ADC ? **!adc 'nom_adc'**");
                                            collector.on('collect', msg => {
                                                if (msg.content.includes("!adc")) {
                                                    adc = msg.content.substring(4).trim()
                                                    msg.channel.send("Quelle est le nom du SUPPORT ? **!supp 'nom_supp'**");
                                                    collector.on('collect', msg => {
                                                        if (msg.content.includes("!supp")) {
                                                            supp = msg.content.substring(5).trim()
                                                            msg.channel.send("la compo "+ name +" a été enregistrée\n\n[TOP] "+top+"\n[JUNGLE] "+jungle+"\n[MID] "+mid+"\n[ADC] "+adc+"\n[SUPP] "+supp);
                                                            compos.push({"id" : compos[compos.length-1].id + 1,"name" : name, "characters": top+", "+jungle+", "+mid+", "+adc+", "+supp})
                                                            console.log(compos);
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        break;
    }
});

client.login(key.discord);
