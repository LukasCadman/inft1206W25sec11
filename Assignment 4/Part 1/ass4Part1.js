

// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  // variable used to store the altered story text
  let storyReplacement = storyText;
  
  // constants for random array values
  const xItem = randomValueFromArray(insertX)
  const yItem = randomValueFromArray(insertY)
  const zItem = randomValueFromArray(insertZ)

  storyReplacement = storyReplacement.replaceAll(':insertx:', xItem)
  storyReplacement = storyReplacement.replaceAll(':inserty:', yItem)
  storyReplacement = storyReplacement.replaceAll(':insertz:', zItem)
  
  
  if(customName.value !== '') {
    const name = customName.value;
    storyReplacement = storyReplacement.replace("Bob", name)    
  }

  if(document.getElementById("uk").checked) {
    const weightInStones = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94 - 32)* 5 / 9) + ' centigrade';
    storyReplacement = storyReplacement.replace('94 fahrenheit', temperature);
    storyReplacement = storyReplacement.replace('300 pounds', weightInStones);
  }


  story.textContent = storyReplacement;
  story.style.visibility = 'visible';
}


