// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so ${weightInStones} went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — ${weightInStones} weighs 300 pounds, and it was a hot day.'

let newStory = storyText

let xItem = randomValueFromArray(insertXArray);
let yItem = randomValueFromArray(insertYArray);
let zItem = randomValueFromArray(insertZArray);

function replaceStory(){
    storyText = storyText.replace(':insertX:', xItem)
                storyText.replace(':insertY:', yItem)
                storyText.replace(':insertZ:', zItem);
    
    console.log(storyText);
}
// 2. Raw Text Strings

function insertXArray(array){
    'Willy the Goblin', 'Big Daddy', 'Father Christmas'
}

function insertYArray(array){
    'the soup kitchen', 'Disneyland', 'the White House'

}

function insertZArray(array){
    'spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'


}

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature =  Math.round((94 - 32) / 1.8);

    console.log('Weight: ' + weightInStones);
    console.log('Temperature: ' + temperatureInCelsius + ' centigrade');

  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}
replaceStory();

