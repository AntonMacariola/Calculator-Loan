const sellingAmoutTotal= document.querySelector(".selling-amount");
const downpaymentAmount = document.querySelector(".loan-downpayment");
const loanTenureInput = document.querySelector(".loan-period");


const totalAmountValue = document.querySelector(".loan-totalAmount .value");
const downpaymentValue = document.querySelector(".total-downpayment .value");
const monthlypaymentValue = document.querySelector(".monthly-payment .value");

const  computeBtn = document.querySelector(".calculate-btn ");

let sellingAmount = parseFloat(sellingAmoutTotal.value);
let downpayment = parseFloat(downpaymentAmount.value);
let loanTenure = parseFloat(loanTenureInput.value);
let interestRate = 0.0557;
let interest =  interestRate/ 12 / 100;

const calculateSellingAmount = function(){
    let totalLoanAmount = sellingAmount -(sellingAmount*(downpayment/100));
    return totalLoanAmount;
};

const updateData = function(totalLoanAmount){
    let theAmountValue = Math.round(totalLoanAmount)
    let thisAmountValue = theAmountValue.toLocaleString("en-US");
    totalAmountValue.innerHTML = thisAmountValue;

    let monthlyDues = Math.round(totalLoanAmount/loanTenure);
    let thismonthlyDues = monthlyDues.toLocaleString("en-US");
    monthlypaymentValue.innerHTML = thismonthlyDues;

    let initialPayment = Math.round(sellingAmount-totalLoanAmount);
    let theDownpayment = initialPayment.toLocaleString("en-US");
    downpaymentValue.innerHTML = theDownpayment;
};

const init = function(){
    let totalLoanAmount = calculateSellingAmount();
    updateData(totalLoanAmount);
};

init();

const refreshInput = function(){
    sellingAmount = parseFloat(sellingAmoutTotal.value);
    downpayment = parseFloat(downpaymentAmount.value);
    loanTenure = parseFloat(loanTenureInput.value);
};

computeBtn.addEventListener("click", function(){
    refreshInput();
    let totalLoanAmount = calculateSellingAmount();
    updateData(totalLoanAmount);
});