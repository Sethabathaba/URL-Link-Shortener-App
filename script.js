// Function to validate URL
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;  
  }
}

let inputVal = document.querySelector('#inputVal');
let outputVal = document.querySelector('#outputVal');
let btn = document.querySelector('#btnShort');
let btnCopy = document.querySelector('#copy');

btn.addEventListener('click', () => {
  let op = inputVal.value.trim();

  if (!op) return alert("Enter a URL first");

  // Validate URL
  if (!isValidUrl(op)) {
    return alert("Please enter a valid URL (starting with http:// or https://)");
  }

  let code = Math.random().toString(36).substring(2, 8); 
  let fakeShortURL = "https://by.ly/" + code;

  outputVal.value = fakeShortURL;
  console.log(`Original: ${op}, Shortened: ${fakeShortURL}`);
});

btnCopy.addEventListener('click', () => {
  let textToCopy = outputVal.value;

  if (!textToCopy) return alert("Nothing to copy!");

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Copied to clipboard!");
    })
    .catch(err => {
      alert("Failed to copy");
      console.error(err);
    });

  outputVal.value = ""; // Clear the output field after copying
  inputVal.value = ""; // Clear the input field after copying 
  console.log("Copied text:", textToCopy);
  console.log("Input field cleared");
  console.log("Output field cleared");
});
