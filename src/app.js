/*
* File: app.js
* Author: Szép Andor
* Copyright: 2026, Szép Andor
* Group: Szoft I/N
* Date: 2026-03-18
* Github: https://github.com/andorbandi/
* Licenc: MIT
*/

import { calcPerimeter, calcArea } from './rhombus.js';

const rhrombusForm = document.querySelector('#rhombusForm');
const sideInput = document.querySelector('#side');
const angleInput = document.querySelector('#angle');
const perimeterInput = document.querySelector('#perimeter');
const areaInput = document.querySelector('#area');

rhrombusForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('számít...')
    startCalculation();

})

function startCalculation() {
    const side = Number(sideInput.value);
    const angle = Number(angleInput.value);
    console.log(side, angle);

    const perimeter = calcPerimeter(side);
    const area = calcArea(side, angle);
    perimeterInput.value = perimeter;
    areaInput.value = area;
}


