import PluginVariables as msqcvar;
const displaytext = StringBuffer();
const player = [0,0,0,0,0,0,0];
const race=[0,0,0,0,0,0,0,0];
const MCckeyPress = [0,0,0,0,0,0,0];
const MCkey = [0,0,0,0,0,0,0];
const playergswitch = [0,0,0,0,0,0,0];
const PLoc1 = [ 1,3,5,7,9,11,13,15 ];
const PLoc2 = [ 2,4,6,8,10,12,14,16 ];
const PaLoc1X1 =  [0x0058dc60, 0x0058DC88,  0x0058DCB0, 0x0058DCD8, 0x0058DD00, 0x0058DD28, 0x0058DD50, 0x0058DD78];
const PaLoc1Y1 =  [0x0058dc64, 0x0058DC8c,  0x0058DCB4, 0x0058DCDc, 0x0058DD04, 0x0058DD2c, 0x0058DD54, 0x0058DD7c];
const PaLoc1X2 =  [0x0058dc68, 0x0058DC90,  0x0058DCB8, 0x0058DCe0, 0x0058DD08, 0x0058DD30, 0x0058DD58, 0x0058DD80];
const PaLoc1Y2 =  [0x0058dc6c, 0x0058DC94,  0x0058DCBc, 0x0058DCe4, 0x0058DD0c, 0x0058DD34, 0x0058DD5c, 0x0058DD84];
const PaLoc2     =  [0x0058dc74,0x0058DC9C, 0x0058DCC4, 0x0058DCEC, 0x0058DD14, 0x0058DD3C,  0x0058DD64, 0x0058DD8C];
const PmX = [0x0058efac,0x0058efc0,0x0058EFD4,0x0058EFE8,0x0058EFFC,0x0058F010, 0x0058F024,0x0058F038 ];
const PmY = [0x0058efb0,0x0058efc4,0x0058EFD8,0x0058EFEc,0x0058f000,0x0058F014, 0x0058F028,0x0058F03c ];
const PML = [248, 249, 250, 251, 252, 253, 254, 255];
const Pinit= [0,0,0,0,0,0,0,0];
const Buffer1 = [0,0,0,0,0,0,0,0];
const Shiftbuffer = [0,0,0,0,0,0,0];
const pressShift  = [0,0,0,0,0,0,0];
const pressG  = [0,0,0,0,0,0,0];
const Gbuffer  = [0,0,0,0,0,0,0];
const playergtimer= [0,0,0,0,0,0,0];

const MCbool = [0,0,0,0,0,0,0];

const superI = [0,0,0,0,0,0,0];

const SR = [0,0,0,0,0,0,0];
const Gsync = [0,0,0,0,0,0,0];
const AmpedMarker = EUDArray(104);
const Pspawner = [ 69,58,47,36,25,14,73,82 ];
const HiddenLoc=[91,92,93,94,95,96,97,98];
const MCckey =[Db("A"),Db("B"),Db("C"),Db("D"),Db("E"),Db("F"),Db("G"),Db("H")
                           ,Db("I"),Db("J"),Db("K"),Db("L"),Db("M"),Db("N"),Db("O")
                          ,Db("P"),Db("Q"),Db("R"),Db("S"),Db("T"),Db("U")
                          ,Db("V"),Db("W"),Db("X"),Db("Y"),Db("Z"),
                          Db("None"), Db("RMclick") ];
                          
  var k;                        
//note SetResources(player,Add,1,Ore);
function MarkerReset(player){
SetResources(player,Add,1,Ore);
        for(var i=1;i<13; i++){
             const MarkerEpdMaster =   CUnit.from_read(AmpedMarker[player*13+i])  ; 
		if(playergswitch[player]!=0   ){ 
		  setloc(PLoc1[player], MarkerEpdMaster.posX, MarkerEpdMaster.posY);
		  MoveUnit(All,219,player,PLoc1[player],Pspawner[player]); 
		  addloc(Pspawner[player],3,0); 
 		  playergswitch[player]-=3; 
	         } 
		if(playergswitch[player]==0  ){   
 	  	  setloc(Pspawner[player], 10+(100*player),10 );
		  } 
	  }

}


function MulticastSYS( player) {
   
				   if(msqcvar.VKeyPress_SP5[player]){MCkey[player]       =1; MCckeyPress[player]=0;} 
				 else if(msqcvar.VKeyPress_B[player]){MCkey[player]      =1; MCckeyPress[player]=1;} 
				 else if(msqcvar.VKeyPress_C[player]){MCkey[player]      =1; MCckeyPress[player]=2;} 
				 else if(msqcvar.VKeyPress_SP6[player]){MCkey[player]  =1; MCckeyPress[player]=3;} 
				 else if(msqcvar.VKeyPress_E[player]){MCkey[player]      =1; MCckeyPress[player]=4;} 
				 else if(msqcvar.VKeyPress_F[player]){MCkey[player]      =1; MCckeyPress[player]=5;} 
				 else if(msqcvar.VKeyPress_G[player]){MCkey[player]     =1; MCckeyPress[player]=6;}  
				 else if(msqcvar.VKeyPress_H[player]){MCkey[player]     =1; MCckeyPress[player]=7;} 
				 else if(msqcvar.VKeyPress_I[player]){MCkey[player]       =1; MCckeyPress[player]=8;} 
				 else if(msqcvar.VKeyPress_J[player]){MCkey[player]       =1; MCckeyPress[player]=9;} 
				 else if(msqcvar.VKeyPress_K[player]){MCkey[player]    =1; MCckeyPress[player]=10;} 
				 else if(msqcvar.VKeyPress_L[player]){MCkey[player]    =1;  MCckeyPress[player]=11;} 
				 else if(msqcvar.VKeyPress_SP3[player]){MCkey[player] =1; MCckeyPress[player]=12;} 
				 else if(msqcvar.VKeyPress_SP1[player]){MCkey[player] =1; MCckeyPress[player]=13;} 
				 else if(msqcvar.VKeyPress_O[player]){MCkey[player]    =1; MCckeyPress[player]=14;} 
				 else if(msqcvar.VKeyPress_SP4[player]){MCkey[player] =1; MCckeyPress[player]=15;} 
				 else if(msqcvar.VKeyPress_Q[player]){MCkey[player]   =1;  MCckeyPress[player]=16;} 
				 else if(msqcvar.VKeyPress_R[player]){MCkey[player]    =1; MCckeyPress[player]=17;} 
				 else if(msqcvar.VKeyPress_S[player]){MCkey[player]    =1; MCckeyPress[player]=18;} 
				 else if(msqcvar.VKeyPress_T[player]){MCkey[player]    =1; MCckeyPress[player]=19;} 
				 else if(msqcvar.VKeyPress_SP2[player]){MCkey[player] =1;MCckeyPress[player]=20;}
				 else if(msqcvar.VKeyPress_V[player]){MCkey[player]    =1; MCckeyPress[player]=21;}
				 else if(msqcvar.VKeyPress_W[player]){MCkey[player]    =1;MCckeyPress[player]=22;}
				 else if(msqcvar.VKeyPress_X[player]){MCkey[player]    =1; MCckeyPress[player]=23;}
				 else if(msqcvar.VKeyPress_Y[player]){MCkey[player]    =1; MCckeyPress[player]=24;}
				 else if(msqcvar.VKeyPress_Z[player]){MCkey[player]    =1; MCckeyPress[player]=25;}  
				 else if(msqcvar.VKeyDown_ESC[player]){MCkey[player]=1; MCckeyPress[player]=26;} 
				 else if(msqcvar.VMousePress_R[player]){MCkey[player]=1; MCckeyPress[player]=27;}  
				 							    else{MCkey[player] =0;}

		if(playergswitch[player]>1000  ){playergswitch[player]=0; }  
  //player Initialization
    if( Pinit[player]<1){
        race[player] = bread(0x0057F1C0+player);
           settblf((1160+player), 0, "/x  Currently Assigned:\n\x13[{:s}]\n Multi-Cast  Command \n  \x1f    A\x04mped\x01 Extra Key   ", MCckey[ 27] );   
              setloc(HiddenLoc[player], 64+(player*128),128,64+(player*128),192);
       	 CreateUnit(1,9,HiddenLoc[player],player);
               wwrite(0x66EC48 + 583 * 4, 309);
               CreateUnit(13,219,Pspawner[player],player);
                     foreach ( epd: EUDLoopCUnit ()){ 
          	          if (epd.unitType==219 && epd.owner == player  && epd.unknown0x8C == 0){   
           		         epd.remove_collision(); 
            		        AmpedMarker[(13*player)+ superI[player]]= epd;
          		        superI[player]++;
              	        epd.unknown0x8C = superI[player];   
                          }
                     }   
             setloc(Pspawner[player], 10+(100*player),10 );  
             Pinit[player] =1;        
      }  
else{once  wwrite(0x66EC48 + 583 * 4, 332);}

//#07.3 MultiCast Single use setup
      if(!msqcvar.VKeyPress_LSHIFT[player]&& Shiftbuffer[player]==0){pressShift[player] =0;}
      if(msqcvar.VKeyPress_LSHIFT[player]){Shiftbuffer[player] +=3;      pressShift[player] =1;}
if( Shiftbuffer[player]>=12){ Shiftbuffer[player]=10;  }
if( Shiftbuffer[player]>=1){ Shiftbuffer[player]-=1; pressShift[player]=1; }  

  //MultiCast 
if(playergtimer[player]>0){playergtimer[player]--;}
if(Buffer1[player]>= 2){Buffer1[player]-= 1;}  
if(
MCkey[player] ==0
 
&&playergtimer[player]==0 
&&  pressG[player]==1 
&& Gbuffer[player]<=5
){ pressG[player]=0;
if(!msqcvar.VKeyPress_LSHIFT[player]){MarkerReset(player);} 
}  
if(!msqcvar.VKeyPress_LSHIFT[player] && playergswitch[player] && Shiftbuffer[player]){MarkerReset(player);} 

if( Gbuffer[player]>=1){ Gbuffer[player]-=1;  

}     
if( Gbuffer[player]>=7&&Gbuffer[player]<=10){ Gbuffer[player]=6;  }
 if(Gbuffer[player]>=6){   pressG[player]=1;  }     
  if( MCkey[player] == 1){pressG[player]=1;Gbuffer[player]+=2; }   



}



function MarkerMove(player ){

        for(var i=0;i<13; i++){ 
             const playerselectEpd = CUnit.from_read(EPD(0x6284E4+(i*4)+(player*48)));    
             const MarkerEpdMaster =   CUnit.from_read(AmpedMarker[(player*13)+i])  ;
		var o;
		var l;
		var t;
		var r;
		var b;        
     
if(playerselectEpd !=0 && playergtimer[player]<1 && playergswitch[player] ==(i*3)-3 &&pressG[player]   ){
//if(playerselectEpd.orderState ==0&&i==1){ PlayWAV( ); }

if(


wread(PmX[player]) <=  wread(PaLoc1X1[player]) ||
wread(PmY[player]) <= wread(PaLoc1Y1[player]) ||
wread(PmX[player]) >= wread(PaLoc1X2[player])  ||
wread(PmY[player]) >= wread(PaLoc1Y2[player])
){

SetResources(player,Add,1,Gas);

o= playerselectEpd.unitType;
        l=        wread(0x6617C8 + o * 8);
        t=         wread(0x6617CA + o * 8);
        r=       wread(0x6617CC + o * 8);
        b=      wread(0x6617CE + o * 8);


var ii;

ii++;
if(ii==1||ii==2){ 
playerselectEpd.orderState=0; 
playerselectEpd.orderID=6; 
playerselectEpd.orderTargetX=wread(PmX[player]);
playerselectEpd.orderTargetY=wread(PmY[player]);
ii=0;
}
playergtimer[player]=3;
playergswitch[player]=(i*3);
setloc(PLoc2[player], MarkerEpdMaster.posX , MarkerEpdMaster.posY);
setloc(PLoc1[player],wread(PmX[player]) ,wread(PmY[player]) +12);
MoveUnit(All,219,player,PLoc2[player],PLoc1[player]);

 addloc(PLoc1[player],-(l*2)-2,-(t*2)-2,(r*2)+2,(b*2)+2);
}

}




}

}


