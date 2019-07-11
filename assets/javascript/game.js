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
var total;
total = number()

//number()

function crystalNum () 
{
    var crystalRandomNum = (Math.floor(Math.random()*12)+1);
    return crystalRandomNum
}
var rubyNum;
var diamontNum;
var goldNum;
var emeraldNum

rubyNum = crystalNum()
diamontNum = crystalNum()
goldNum = crystalNum()
emeraldNum = crystalNum()

//crystalNum()

console.log(total); // works

// 2. objects variable and value, and variables that need to be stored
var wins = 0;
var losses = 0;
var points = 0;

// 2.a. wins and losses on DOM
$("#wins").html(Number(wins));
$("#losses").html(Number(losses));

var ruby = {
    value: rubyNum
}
var diamont = {
    value: diamontNum
}
var gold = {
    value: goldNum
}
var emerald = {
    value: emeraldNum
}

// assign  a value to the div
$("#ruby").attr("value",ruby.value);
$("#diamont").attr("value",diamont.value);
$("#gold").attr("value",gold.value);
$("#emerald").attr("value",emerald.value);

//display random number and points on the DOM
function startOver()
{
$("#randomNumber").html(Number(total)); // reset
$("#playerScore").html(Number(points)); // reset
points=0
total
//does not reset the total
}
startOver()

// 3. make the objects function when they are clicked
$(".col-1").on("click", function(event)
{
    clickSum = event.target;
    stoneNumber = clickSum.getAttribute('value'); // the image does not have a value
    points += Number(stoneNumber);

    console.log(clickSum)
    console.log(points)


// console.log(rubySum) //this will be added to total score
// 4. Total Value
// I dont know if this is necessary -> var totalSum = rubySum
// 4. add the number to the total score and compare if it is equal, less, or greater than the randomNumber
    $("#playerScore").html(Number(points))
    {
        if (points === total)
        {
            $("#winLoss").html("<span>You Won!!!</span>");
            wins+= 1;
            $("#wins").html(Number(wins));
            startOver()
        }
        else if (points < total)
        {
            $("#playerScore").html(Number(points));
        }
        else
        {
            $("#winLoss").html("<span>You loss!!!</span>");
            losses+= 1;
            $("#losses").html(Number(losses));
            startOver()
        }
    }
})