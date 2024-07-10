// This is the JavaScript code
// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions
const colorInput = document.getElementById("colorID");
const buttonInput = document.getElementById("button1");
const textBox = document.getElementById("demo");
const body = document.body;
const checkBox = document.getElementById("checkbox");

function checkBoxPress()
{
    let checked = checkBox.checked;
    console.log('Checkbox is ${checked}');

    if (checked)
    {
        body.style.borderStyle = "solid";
    }
}

function buttonPress() {
text.innerHTML = "test test test";

body.style.backgroundColor = colorInput.value;
}
``