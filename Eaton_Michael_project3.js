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

