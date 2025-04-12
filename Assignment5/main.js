/*
Name: Lukas Cadman
Student Number: 100880949
File: main.js
Date: April 10th, 2025
Description: This is the Java Script file for Assignment 5, where I will be correcting mistakes and added accessibility options to the web page.
*/

// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

// initializes the ARIA state
showHideBtn.setAttribute('aria-expanded', 'false');

// Handles clicking and keyboard events
showHideBtn.addEventListener('click', toggleComments);
showHideBtn.addEventListener('keydown', (event) => { 
  if (event.key === 'Enter', event.key === ' ') {
    event.preventDefault();
    toggleComments();
  }
});

function toggleComments() {
  const isExpanded = showHideBtn.getAttribute('aria-expanded') === 'true';
  if (!isExpanded) {
    showHideBtn.textContent = 'Hide comments'
    commentWrapper.style.display = 'block'
    showHideBtn.setAttribute('aria-expanded', 'true');
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
    showHideBtn.setAttribute('aria-expanded', 'false');
  }
}

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};  

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
