/**
 * Function to update the output text as you type in the textarea
 */

function updateText() {
    const inputText = document.getElementById('text-input').value;
    document.getElementById('text-output').innerText = inputText;
    console.log(inputText)
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
 *  Function to add the align style for "Formatted Text" when the appropriate align button is clicked
 *  (Toggle the style textAlign attribute)
 *  (Toggle the active state for the align butttons)
 */

function alignText(element, alignType) {
    document.getElementById('text-output').style.textAlign = alignType;
    // select all the element ByClassName align
    const butttonsList = document.getElementsByClassName('align');
    // Iterate over the butttonsList and remove the active class
    for (let i = 0, length = butttonsList.length; i < length; i++) {
        if (butttonsList[i].classList.contains('active')) {
            butttonsList[i].classList.remove('active');
        }
    }
    // add the active class only for the current element
    element.classList.toggle('active');
}