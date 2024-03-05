let loanAmountInput = document.getElementById('loanAmountInput');
let interestRateInput = document.getElementById('interestRateInput');
let loanTermInput = document.getElementById('loanTermInput');
let calculateBtn = document.getElementById('calculateBtn');




function calculateLoan() { 
   
  let interestRate = loanAmountInput.value * (interestRateInput.value / 100) / 12;
  console.log(interestRate);
  let totalInterest = interestRate * loanTermInput.value;
  console.log(totalInterest);
  let monthlyPayment = (loanAmountInput.value/12) + interestRate;
  console.log(monthlyPayment);
  let totalPayment = parseFloat(loanAmountInput.value) + parseFloat(totalInterest); 
  console.log(totalPayment);

  let result = document.getElementById('result');
  result.innerHTML = `
  
  <p>Monthly Payment: ${monthlyPayment}</p>
  <p>Total Payment: ${totalPayment}</p>
  <p>Total Interest: ${totalInterest}</p>
  
  `
 
};


calculateBtn.addEventListener('click', calculateLoan)