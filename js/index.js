/*
Author: Dharmil Chhadva
ID: C0884179
Date: 9th Aug, 2023
Description: This js creates functionalities of the paint app
*/

// Getting canvas element
const canvas = document.getElementById('main');
const context = canvas.getContext('2d');

// Set the default brush color and size
let brushColor = '#000000';
let brushSize = 5;

// Adding event listeners to the brush color changing buttons
document.getElementById('black').addEventListener('click', () => {
  brushColor = '#000000';
});

document.getElementById('pink').addEventListener('click', () => {
  brushColor = '#F50057';
});

document.getElementById('blue').addEventListener('click', () => {
  brushColor = '#2979FF';
});

document.getElementById('yellow').addEventListener('click', () => {
  brushColor = '#FFD600';
});

// Adding event listener to the eraser button
document.getElementById('erase').addEventListener('click', () => {
    brushColor = '#FFFFFF'; // Set eraser color to white
  });

// Adding event listener to the brush size slider
document.getElementById('slider').addEventListener('input', (event) => {
  brushSize = event.target.value;
  document.getElementById('brushSize').textContent = brushSize;
});

// Initial values for the variables needed
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Adding an event listener for mouse down on the canvas
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  lastX = event.offsetX;
  lastY = event.offsetY;
});

// Adding an event listener for mouse movement over the canvas
canvas.addEventListener('mousemove', (event) => {
  if (isDrawing) {
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.strokeStyle = brushColor;
    context.lineWidth = brushSize;
    context.stroke();
    lastX = event.offsetX;
    lastY = event.offsetY;
  }
});

// Adding an event listener for mouse up on the canvas
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

// Adding an event listener for mouse out of the canvas
canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});


// Add event listener to the new button
document.getElementById('new').addEventListener('click', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});