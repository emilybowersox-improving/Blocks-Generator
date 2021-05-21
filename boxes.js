//click a button that generates 5 boxes, each with a random number in it, when you click on a box it's color changes 

const button = document.querySelector('#box-button');
const boxesSpace = document.querySelector('#boxes-space');

//create a box when you click button
button.addEventListener('click', (event) => {

//generating a random number of boxes between 1 to 10
    const randomGeneration = Math.ceil(Math.random() * 10);
    for(i = 0; i < randomGeneration; i++) {
        var newSquare = document.createElement('div');
        newSquare.classList.add("box");

        const randomNumber = Math.ceil(Math.random() * 500);
        newSquare.textContent = randomNumber;

        boxesSpace.append(newSquare);
    }
    console.log(randomGeneration + " boxes created.")
});


//toggle boxes color when you click on them
boxesSpace.addEventListener('click', (event) => {
    if(event.target.classList.contains('boxes-space') === false) {
        event.target.classList.toggle('click-grey');
    }
});







// notes
//just make a div with certain dimensions/border!