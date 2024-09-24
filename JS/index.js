// Card-1
// Event listener for the button
document.getElementById("btnOne").addEventListener("click", function (event) {
  event.preventDefault();

  // Get input and text field values
  const inputOne = getInputFieldValueById("inputOne");
  const balanceOne = getTextFieldValueById("balanceOne");
  const totalBalance = getTextFieldValueById("totalBalance");

  // Clear the input field
  document.getElementById("inputOne").value = "";

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

  // Add the History
  const historyItem = document.createElement("div");
  historyItem.className =
    "text-start px-3 py-4 border-2 border-r-gray-300 rounded-lg";

  historyItem.innerHTML = `
    <h2 class= "text-lg lg:text-2xl font-medium lg:font-semibold">${inputOne} Taka is Donate for Flood at Noakhali, Bangladesh</h2> 
    
    <p class= "text-xs lg:text-base text-gray-400">Date: ${new Date().toLocaleDateString()}, 
    Time: ${new Date().toLocaleTimeString()}, 
    Country: Bangladesh</p>
   `;
  //Should be a common function
  document.getElementById("historySection").appendChild(historyItem);

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

  // Clear the input field
  document.getElementById("inputTwo").value = "";

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

  // Add the History
  const historyItem = document.createElement("div");
  historyItem.className =
    "text-start px-3 py-4 border-2 border-r-gray-300 rounded-lg";

  historyItem.innerHTML = `
    <h2 class= "text-lg lg:text-2xl font-medium lg:font-semibold">${inputTwo} Taka is Donate for Flood Relief in Feni,Bangladesh</h2> 
    
    <p class= "text-xs lg:text-base text-gray-400">Date: ${new Date().toLocaleDateString()}, 
    Time: ${new Date().toLocaleTimeString()}, 
    Country: Bangladesh</p>
   `;
  //Should be a Common function
  document.getElementById("historySection").appendChild(historyItem);

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

  // Clear the input field
  document.getElementById("inputThree").value = "";

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

  // Add the History
  const historyItem = document.createElement("div");
  historyItem.className =
    "text-start px-3 py-4 border-2 border-r-gray-300 rounded-lg";

  historyItem.innerHTML = `
    <h2 class= "text-lg lg:text-2xl font-medium lg:font-semibold">${inputThree} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2> 
    
    <p class= "text-xs lg:text-base text-gray-400">Date: ${new Date().toLocaleDateString()}, 
    Time: ${new Date().toLocaleTimeString()}, 
    Country: Bangladesh</p>
   `;
  //Should be a common function
  document.getElementById("historySection").appendChild(historyItem);

  // Show successful donation
  document.getElementById("congrats").classList.remove("hidden");
});

// Close modal functionality
document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("congrats").classList.add("hidden");
});
