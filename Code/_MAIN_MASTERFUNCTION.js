import PluginVariables as msqcvar;
import  _MultiCast as MC;
function beforeTriggerExec(){

  foreach(player : EUDLoopPlayer()){
         setcurpl(player); 
    MC.MulticastSYS(player);  
 if(MC.pressG[player]||MC.pressShift[player]){MC.MarkerMove(player);}
if(MC.MCckeyPress[player]==1) { CreateUnit(1, 0,  MC.PML[player],player);}
        }
     }  

function onPluginStart(){

}
function afterTriggerExec(){

}
