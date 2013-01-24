//Michael Eaton
//SDI 1301
//January 21,2013
//Project 3
//5 man boss in javascript

//global Variables


var group = ["Lunrshift", "JohnyB", "Lambofuezz", "Skybrook", "Bluphenix"];
var lootDrops = 3;
var win = "Woot I win!";
var you = "You win"

console.log(group[0] +", " + group[1] +", " + group[2] +", " + group[3] + ", and " + group[4] + " are ready to take on this instance."),
console.log("The info and gear need by each player is: ");



// Json Output Accesssor Method and Procedure Method.
var info ={
    handleData: function (json) {
        for (var i=0; i < json.guildMates.length; i++) {
            var guildmate = json.guildMates [i];
                console.log("Name: " + guildmate.name + ", Level: " + guildmate.level + ", Class: " + guildmate.class + 
                    ", Role: " + guildmate.spec + ", The gear needed: "
                    + guildmate.gearLookingFor + ".");  //Character output from Json
        
        
        
        }
    }
};                    
info.handleData(json2)

//Boss Object

var boss = {
    
        name: "Darkmaster Gandling",
        Level: 92,
        health: 14755000,
        alive: true,
        loot:["Headmaster's Will", "Gloves of Explosive Pain", "Incineration Belt",
            "Lessons of the Darkmaster", "Price of Progress", "Searing Words",
            "Shoulderguards of Painful Lessons", "Tombstone Gauntlets",
            "Vigorsteel Spaulders"],                   

//Method function, Return boolean
        
        bossCheck: function(){     
       
            if(this.alive == true){var status = "Looks like we are ready. Let's get that " + this.health +
            " health down to 0."}//If boss is alive
        
            else
        
            if(this.alive == false){ var status = "Good job guys. Time for loot."}//If boss is dead
        
       return status;
        },
        
        //Method Mutator
        
            death:function(defeat){  
                this.alive = defeat;}, // This make boss dead
                
                
 // Object Property
    lootDrops:{
        
        staff:{
            name:"Headmaster's Will",
            spec:"Caster DPS",
            item:"staff",
            quality:"epic"
            },
        mailGloves:{
            name:"Gloves of Explosive Pain",
            spec:"Healer",
            item:"gloves",
            quality:"rare"
            },
        trinket:{
            name:"Searing Words",
            spec:"melee and Ranged DPS",
            item:"trinket",
            quality:"rare"
        },
        leatherGloves:{
            name:"Tombstone Gauntlets",
            spec:"melee DPS and Druid tank",
            item:"gloves",
            quality:"rare"
            }
    },
    
            };
            
            //Nested loop and nested conditional with array return

var getHealth = function(){
             var bossHealth = boss.health
             var player = group
             if(bossHealth == boss.health){
                while (bossHealth > 0){
                    console.log(boss.name + " is down to " + bossHealth + " health.");
                    bossHealth-=2951000;
            
                        if (bossHealth == 8853000 ){
                
                            for(var i=2; i <3;i++){
                                tele = boss.name + "has teleported " + group[i] + ".";
                                console.log(tele);
                            }   
            
                        }
                        else
                        console.log("No one was teleported.");
                        
                                    
                                    personTele = group[2];
                }  
            }
            else
            console.log("Did we forget to reset the instance?")
             return personTele;
}

//number function with number return
var numberOfDrops = function(){
    drop = lootDrops;
    
    return drop
    
    
};
