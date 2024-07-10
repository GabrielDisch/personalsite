// This is the JavaScript code
// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

const colorField = document.getElementById("color-field");
const fontSizeField = document.getElementById("font-size-field");
const clickButton = document.getElementById("click-button");
const text = document.getElementById("text");
const checkbox = document.getElementById("checkbox");
const body = document.body;
// let (or var) to declare variables

function buttonPress() {
    text.innerHTML = "Wow! You pressed the button!";

    body.style.backgroundColor = colorField.value;
    text.style.fontSize = `${fontSizeField.value}px`; // NOTE: the [`] key is above the [Tab] key
    let fail = '${fontSizeField.value}px'; // Apostrophe will not work
}

function checkboxChange() {
    let checked = checkbox.checked;
    console.log(`The checkbox has this state: ${checked}`);

    if (checked) {
        body.style.outlineStyle = "solid";
    } else {
        body.style.outlineStyle = "none";
    }

}
let data = [0, 1];
let list = document.getElementById("myList");
var counter = 0;
function testButton() {
    counter += 1;
    data[counter + 1] = data[counter] + data[counter - 1];
    let li = document.createElement('li');
    li.innerText = data[counter - 1];
    list.appendChild(li);
  }