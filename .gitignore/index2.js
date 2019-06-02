const discord = require ('discord.js')
const bot = new discord.Client()
//stat init
var wr_general = 50
var wr_inferno = 50
var wr_mirage = 50
var wr_Dust = 50
var wr_cache = 50
var wr_overpass = 50
var wr_train = 50
var wr_nuke = 50
var tool_wr_general = 0
var tool_wr_inferno = 0
var tool_wr_mirage = 0
var tool_wr_Dust = 0
var tool_wr_cache = 0
var tool_wr_overpass = 0
var tool_wr_train = 0
var tool_wr_nuke = 0
var w_wr_general = 0
var w_wr_inferno = 0
var w_wr_mirage = 0
var w_wr_Dust = 0
var w_wr_cache = 0
var w_wr_train = 0
var w_wr_nuke = 0
var w_wr_overpass = 0
bot.login("NTc5NjgyNDU3MjQ3Mjg1MjY3.XPOoTA.jPMwSF_ja_3oC0kkvP6Ccktdfvk")
bot.on('message', message => {

     if (message.content === '!add wr_general'){
        tool_wr_general = tool_wr_general + 1
        message.channel.sendMessage('Les stats générales ont été modifiées')
        }
        else if (message.content === '!add wr_inferno'){
          tool_wr_general = tool_wr_general + 1
          tool_wr_inferno = tool_wr_inferno + 1
          message.channel.sendMessage('Les stats de inferno ont été modifiées')
        }
        else if (message.content === '!add wr_mirage'){
              tool_wr_general = tool_wr_general + 1
              tool_wr_mirag = tool_wr_mirage + 1
              message.channel.sendMessage ('Les stats de mirage ont été modifiées')
              }
              else  if (message.content === '!add wr_Dust'){
                tool_wr_general = tool_wr_general + 1
                tool_wr_Dust = tool_wr_Dust + 1
                message.channel.sendMessage ('Les stats de Dust ont été modifiées')
                }
                else  if (message.content === '!add wr_cache'){
                  tool_wr_general = tool_wr_general + 1
                  tool_wr_cache = tool_wr_cache + 1
                  message.channel.sendMessage ('Les stats de cache ont été modifiées')
                  }
                  else if (message.content === '!add wr_overpass'){
                    tool_wr_general = tool_wr_general + 1
                    tool_wr_overpass = tool_wr_overpass + 1
                    message.channel.sendMessage ('Les stats de overpass ont été modifiées')
                    }
                    else  if (message.content === '!add wr_train'){
                      tool_wr_general = tool_wr_general + 1
                      tool_wr_train = tool_wr_train + 1
                      message.channel.sendMessage ('Les stats de train ont été modifiées')
                      }
        
                      else  if (message.content=== '!add wr_nuke'){
                        tool_wr_general = tool_wr_general + 1
                        tool_wr_nuke = tool_wr_nuke + 1
                        message.channel.sendMessage('Les stats de nuke ont été modifiées')
                        }
        
                        else if (message.content === '!add w_wr_general'){
        w_wr_general = w_wr_general + 1
        tool_wr_general = tool_wr_general + 1
        message.channel.sendMessage ('Les stats générales ont été modifiées')
        }
        else  if (message.content === '!add w_wr_inferno'){
          w_wr_general = w_wr_general + 1
          w_wr_inferno = w_wr_inferno + 1
          tool_wr_inferno = tool_wr_inferno + 1
          tool_wr_general = tool_wr_general + 1
          message.channel.sendMessage('Les stats de inferno ont été modifiées')
          }
          else  if (message.content === '!add w_wr_mirage'){
            w_wr_general = w_wr_general + 1
            w_wr_mirage = w_wr_mirage + 1
            tool_wr_general = tool_wr_general + 1
            tool_wr_mirag = tool_wr_mirage + 1
            message.channel.sendMessage('Les stats de mirage ont été modifiées')
            }
            else  if (message.content === '!add w_wr_Dust'){
              w_wr_general = w_wr_general + 1
              w_wr_Dust = w_wr_Dust + 1
              tool_wr_general = tool_wr_general + 1
              tool_wr_Dust = tool_wr_Dust + 1
              message.channel.sendMessage ('Les stats de Dust ont été modifiées')
              }
              else  if (message.content === '!add w_wr_cache'){
                w_wr_general = w_wr_general + 1
                w_wr_cache = w_wr_cache + 1
                tool_wr_general = tool_wr_general + 1
                tool_wr_cache = tool_wr_cache + 1
                message.channel.sendMessage('Les stats de cache ont été modifiées')
                }
                else   if (message.content === '!add w_wr_overpass'){
                 w_wr_general = w_wr_general + 1
                   w_wr_overpass = w_wr_overpass + 1
                   tool_wr_general = tool_wr_general + 1
                   tool_wr_overpass = tool_wr_overpass + 1
                   message.channel.sendMessage ('Les stats de overpass ont été modifiées')
                  }
                  else  if (message.content === '!add w_wr_train'){
                    w_wr_general = w_wr_general + 1
                    w_wr_train = w_wr_train + 1
                    tool_wr_general = tool_wr_general + 1
                    tool_wr_train = tool_wr_train + 1
                    message.channel.sendMessage ('Les stats de train ont été modifiées')
                    }
        
                    else   if (message.content === '!add w_wr_nuke'){
                      w_wr_general = w_wr_general + 1
                      w_wr_nuke = w_wr_nuke + 1
                      tool_wr_nuke = tool_wr_nuke + 1
                      tool_wr_general = tool_wr_general + 1
                      message.channel.sendMessage('Les stats de nuke ont été modifiées')
                      }
        
        wr_general = w_wr_general/tool_wr_general*100
        
          wr_inferno =  w_wr_inferno/ tool_wr_inferno*100
        
            wr_mirage = w_wr_mirage/tool_wr_mirage*100
        
              wr_Dust = w_wr_Dust/tool_wr_Dust*100
        
                wr_cache = w_wr_cache/tool_wr_cache*100
        
                  wr_overpass = w_wr_overpass/tool_wr_overpass*100
        
                    wr_train = w_wr_train/ tool_wr_train*100
        
                      wr_nuke = w_wr_nuke/tool_wr_nuke*100
        
                      if (message.content === '!stat'){
          message.channel.sendMessage ('Le winrate général est de '+ wr_general+' %' );
        }
        else if (message.content === '!stat_inferno'){
            message.channel.sendMessage ('Le winrate de inferno est de '+ wr_inferno+' %' );
          }
          else  if (message.content === '!stat_mirage'){
              message.channel.sendMessage ('Le winrate de mirage est de '+ wr_mirage+' %' );
            }
            else  if (message.content === '!stat_Dust'){
                message.channel.sendMessage ('Le winrate de Dust est de '+wr_Dust+' %' );
              }
              else  if (message.content === '!stat_cache'){
                  message.channel.sendMessage ('Le winrate de cache est de '+ wr_cache+' %' );
                }
                else  if (message.content === '!stat_overpass'){
                    message.channel.sendMessage ('Le winrate de overpass est de '+ wr_overpass+' %' );
                  }
                  else  if (message.content === '!stat_train'){
                      message.channel.sendMessage ('Le winrate de train est de '+ wr_train+' %' );
                    }
//AUTRE

if (message.content === '!info_stat'){
  message.channel.sendMessage('Liste des commandes : ')
  message.channel.sendMessage('Pour ajouter une victoire : ')
  message.channel.sendMessage('add w_wr_general')
  message.channel.sendMessage('add w_wr__inferno')
  message.channel.sendMessage('add w_wr_mirage')
  message.channel.sendMessage('add w_wr_Dust')
  message.channel.sendMessage('add w_wr_cache')
  message.channel.sendMessage('add w_wr_overpass')
  message.channel.sendMessage('add w_wr_train')
  message.channel.sendMessage('add w_wr_nuke')
  message.channel.sendMessage('Pour ajouter une défaite : ')
  message.channel.sendMessage('add wr_general')
  message.channel.sendMessage('add wr_inferno')
  message.channel.sendMessage('add wr_mirage')
  message.channel.sendMessage('add wr_Dust')
  message.channel.sendMessage('add wr_cache')
  message.channel.sendMessage('add wr_overpass')
  message.channel.sendMessage('add wr_train')
  message.channel.sendMessage('add wr_nuke')
  message.channel.sendMessage('Pour voir les stats : ')
  message.channel.sendMessage('stat')
  message.channel.sendMessage('stat_inferno')
  message.channel.sendMessage('stat_mirage')
  message.channel.sendMessage('stat_Dust')
  message.channel.sendMessage('stat_cache')
  message.channel.sendMessage('stat_overpass')
  message.channel.sendMessage('stat_train')
  message.channel.sendMessage('stat_nuke')
  message.channel.sendMessage('Les commandes doivent être précédées d un point d exclamation ! ')
  message.channel.sendMessage('ENJOY ! ')
  
  
}



})
