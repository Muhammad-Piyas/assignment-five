// Card-1
// Event listener for the button
document.getElementById("btnOne").addEventListener("click", function (event) {
  event.preventDefault();

  // Get input and text field values
  const inputOne = getInputFieldValueById("inputOne");
  const balanceOne = getTextFieldValueById("balanceOne");
  const totalBalance = getTextFieldValueById("totalBalance");

  // Validate donation amount
  if (inputOne <= 0 || isNaN(inputOne)) {
    alert("Invalid Donation Amount");
    return;
  }

  // Update balanceOne and totalBalance
  const firstBalance = inputOne + balanceOne;
  document.getElementById("balanceOne").innerText = firstBalance.toFixed(2);

  const finalBalance = inputOne + totalBalance;
  document.getElementById("totalBalance").innerText = finalBalance.toFixed(2);

  // Show successful donation
  document.getElementById("congrats").classList.remove("hidden");
});

// Close modal functionality
document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("congrats").classList.add("hidden");
});

// Card-2
// Event listener for the button
document.getElementById("btnTwo").addEventListener("click", function (event) {
  event.preventDefault();

  // Get input and text field values
  const inputTwo = getInputFieldValueById("inputTwo");
  const balanceTwo = getTextFieldValueById("balanceTwo");
  const totalBalance = getTextFieldValueById("totalBalance");

  // Validate donation amount
  if (inputTwo <= 0 || isNaN(inputTwo)) {
    alert("Invalid Donation Amount");
    return;
  }

  // Update balanceOne and totalBalance
  const firstBalance = inputTwo + balanceTwo;
  document.getElementById("balanceTwo").innerText = firstBalance.toFixed(2);

  const finalBalance = inputTwo + totalBalance;
  document.getElementById("totalBalance").innerText = finalBalance.toFixed(2);

  // Show successful donation
  document.getElementById("congrats").classList.remove("hidden");
});

// Close modal functionality
document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("congrats").classList.add("hidden");
});

// Card-3
// Event listener for the button
document.getElementById("btnThree").addEventListener("click", function (event) {
  event.preventDefault();

  // Get input and text field values
  const inputThree = getInputFieldValueById("inputThree");
  const balanceThree = getTextFieldValueById("balanceThree");
  const totalBalance = getTextFieldValueById("totalBalance");

  // Validate donation amount
  if (inputThree <= 0 || isNaN(inputThree)) {
    alert("Invalid Donation Amount");
    return;
  }

  // Update balanceOne and totalBalance
  const firstBalance = inputThree + balanceThree;
  document.getElementById("balanceThree").innerText = firstBalance.toFixed(2);

  const finalBalance = inputThree + totalBalance;
  document.getElementById("totalBalance").innerText = finalBalance.toFixed(2);

  // Show successful donation
  document.getElementById("congrats").classList.remove("hidden");
});

// Close modal functionality
document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("congrats").classList.add("hidden");
});
