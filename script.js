/**
 *  Function to update the output text as a user types in the textarea
 */

function updateText() {
    const inputText = document.getElementById('text-input').value;
    document.getElementById('text-output').innerText = inputText;
}

/** 
 * Function to add a bold class to "Formatted Text" when the Bold button is clicked
 * (Toggle the bold class for the output text)
 */

function makeBold(element) {
    element.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Function to add  italic class to "Formatted Text" when the Italic button is clicked
 * (Toggle the italic class for the output text)
 */

function makeItalic(element) {
    element.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
}

/**
 * Function to add underline class to "Formatted Text" when the Underline button is clicked
 * (Toggle the underline class for the output text)
 */

function makeUnderline(element) {
    element.classList.toggle('active');
    const formattedText = document.getElementById('text-output');
    if (formattedText.classList.contains('underline')) {
        formattedText.classList.remove('underline');
    } else {
        formattedText.classList.add('underline');
    }
}

/** 
 *  Toggle the align style for "Formatted Text" when the appropriate button is clicked
 *  Toggle the style textAlign attribute
 *  Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
    // CODE GOES HERE
}