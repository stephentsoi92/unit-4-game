/*the game consist that a number will be given to the player. the player 
has four crystal options where each crystal have a hidden value and the 
player needs to click on the crystals in order to figure out the value. 
the game will conclude once the sum of the crystals is equal to the 
number that is given or it surpasses that number.
*/
// 1. getting a random number
function number () 
{
    var randomNum = (Math.floor(Math.random()*121)+19);
    return randomNum
}
$("#randomNumber").html(Number(number())); //how to put a function in here

console.log(number()) // works

// 2. objects variable and value, and variables that need to be stored
var wins = 0
var losses = 0
var totalScore = 0
function crystalNumbers () {
    var ruby = {
        value: 4
    }
    var diamont = {
        value: 10
    }
    var gold = {
        value: 15
    }
    var emerald = {
        value: 1
    }
}

// 3. make the objects function when they are clicked
//var crystalOne = clickOne
$("#ruby").on("click", function()
{
    var rubySum = ruby.value;
    var rubyTotal = rubySum +=;
})

console.log(rubySum) //this will be added to total score
// 4. Total Value
var totalSum = rubySum
// 4. add the number to the total score
$("#playerScore").html(Number(totalSum))
{
    if (totalSum === randomNum)
    {
        $("#winLoss").html("<span>You Won!!!</span>")
        wins++
        $("#wins").html(Number(wins))
        number()
        crystalNumbers()
    }
    else if (totalSum < randomNum)
    {
        $("#playerScore").html(Number(totalSum))
    }
    else
    {
        $("#winLoss").html("<span>You loss!!!</span>")
        losses++
        $("#wins").html(Number(losses))
        number()
        crystalNumbers()
    }
}
