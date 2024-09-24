const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");

// Donation Button
donationBtn.addEventListener("click", function () {
  donationBtn.classList.remove("bg-gray-200", "hover:bg-gray-300");

  donationBtn.classList.add("bg-lime-300", "hover:bg-lime-400");

  historyBtn.classList.add("bg-gray-200", "hover:bg-gray-300");

  historyBtn.classList.remove("bg-lime-300", "hover:bg-lime-400");
});

//History Button
historyBtn.addEventListener("click", function () {
  historyBtn.classList.remove("bg-gray-200", "hover:bg-gray-300");

  historyBtn.classList.add("bg-lime-300", "hover:bg-lime-400");

  donationBtn.classList.remove("bg-lime-300", "hover:bg-lime-400");

  donationBtn.classList.add("bg-gray-200", "hover:bg-gray-300");
});
