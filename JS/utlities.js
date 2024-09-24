// Input value
function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

//  Text Value
function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

// Show And Hidden Section
function showSectionBy(id) {
  //Hidden all the Section
  document.getElementById("donationSection").classList.add("hidden");
  document.getElementById("historySection").classList.add("hidden");
  //Show the Section
  document.getElementById(id).classList.remove("hidden");
}
