/*
* File: rhombus.js
* Author: Szép Andor
* Copyright: 2026, Szép Andor
* Group: Szoft I/N
* Date: 2026-03-18
* Github: https://github.com/andorbandi/
* Licenc: MIT
*/

function calcPerimeter(side) {
    return 4 * side
}


function calcArea(side, angle) {
    const rad = angle * Math.PI / 180;
    return Math.pow(side, 2) * Math.sin(rad)
}


export { calcPerimeter, calcArea }