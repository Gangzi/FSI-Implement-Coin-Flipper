// TODO: Declare any global variables we need
var headCount = 0
var tailCount = 0
var totalFlips = 0

var htmlPic = document.getElementById('coinPic');

var htmlHeadNum = document.getElementById('heads');
var htmlHeadPercentage = document.getElementById('heads-percent');
var htmlTailNum = document.getElementById('tails');
var htmlTailPercentage = document.getElementById('tails-percent');


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
   

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('Flip').addEventListener('click', function () {
        var flipNum = Math.floor(Math.random() * 2)
        totalFlips++

        if (flipNum === 0) {
            console.log('Heads')
            htmlPic.src = "./assets/images/penny-heads.jpg"

            headCount++
        } else if (flipNum === 1) {
            console.log('Tail')
            htmlPic.src = "./assets/images/penny-tails.jpg"

            tailCount++
        }
       

        displayScoreboard()
    })
    document.getElementById('Clear').addEventListener('click', function () {

        headCount = 0
        tailCount = 0
        totalFlips = 0

        htmlHeadNum.textContent = 0
        htmlTailNum.textContent = 0
        htmlHeadPercentage.textContent = 0
        htmlTailPercentage.textContent = 0
    })

    function displayScoreboard() {
        htmlHeadNum.textContent = headCount
        htmlTailNum.textContent = tailCount
        htmlHeadPercentage.textContent = (headCount / totalFlips * 100).toFixed(2) + '%'
        htmlTailPercentage.textContent = (tailCount / totalFlips * 100).toFixed(2) + '%'
    }







    // Flip Button Click Handler
    // TODO: Determine flip outcome
    // TODO: Update image and status message in the DOM

    // Update the scorboard
    // TODO: Calculate the total number of rolls/flips
    // Make variables to track the percentages of heads and tails
    // TODO: Use the calculated total to calculate the percentages
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
    // TODO: Update the display of each table cell


    // Clear Button Click Handler
    // TODO: Reset global variables to 0
    // TODO: Update the scoreboard (same logic as in flip button click handler)

})