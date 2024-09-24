document.getElementById("btnOne").addEventListener("click", function (event) {
  event.preventDefault();
  const inputOne = getInputFieldValueById("inputOne");
  const balanceOne = getTextFieldValueById("balanceOne");
  const totalBalance = getTextFieldValueById("totalBalance");

  const firstBalance = inputOne + balanceOne;
  document.getElementById("balanceOne").innerText = firstBalance;

  const finalBalance = firstBalance + totalBalance;
  document.getElementById("totalBalance").innerText = finalBalance;
});
