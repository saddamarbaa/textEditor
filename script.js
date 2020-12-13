/**
 * TODO:  textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 *  Function to update the output text as a user types in the textarea
 */

function updateText() {
    const inputText = document.getElementById('text-input').value;
    document.getElementById('text-output').innerText = inputText;
}

/** 
 * Function to add a .bold class to "Formatted Text" when the bold button is clicked
 * Toggle the bold class for the output text
 */

function makeBold(element) {
    element.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
    //CODE GOES HERE
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
    // CODE GOES HERE
}