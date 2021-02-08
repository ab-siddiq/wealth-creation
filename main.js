

// const nameDisplay = document.getElementById("name-display").innerHTML;
// const annualIncomeDisplay = document.getElementById("annual-income-display").innerHTML;
// const financialIncomeDisplay = document.getElementById("financial-income-display").innerHTML;
// const currentAgeDisplay = document.getElementById("current-age-display").innerHTML;
// const ageGoalDisplay = document.getElementById("age-goal-display").innerHTML;
// const investmentDisplay = document.getElementById("investment-display").innerHTML;
// const riskDisplay = document.getElementById("risk-display").innerHTML;

const wealthNameNext = document.getElementById("wealth-name-next");

wealthNameNext.addEventListener("click", function () {
    const wealthNameInput = document.getElementById("wealth-name").value;
    console.log(wealthNameInput);


    const wealthAnnualIncome = document.getElementById("wealth-creation-annual-income");
    const wealthName = document.getElementById("wealth-creation-name");
    wealthName.style.display = "none";
    wealthAnnualIncome.style.display = "block";
    document.getElementById("name-display").innerHTML = wealthNameInput;
})
// 
const wealthAnnualPrevious = document.getElementById("wealth-annual-previous");
const wealthAnnualNext = document.getElementById("wealth-annual-next");

wealthAnnualPrevious.addEventListener("click", function () {
    const wealthAnnualIncome = document.getElementById("wealth-creation-annual-income");
    const wealthName = document.getElementById("wealth-creation-name");
    wealthName.style.display = "block";
    wealthAnnualIncome.style.display = "none";
    
})

wealthAnnualNext.addEventListener("click", function () {
    const annualIncomeInput = document.getElementById("wealth-annual-income").value;
    console.log(annualIncomeInput);


    const wealthAnnualIncome = document.getElementById("wealth-creation-annual-income");
    const wealthFinancialIncome = document.getElementById("wealth-creation-financial-income");
    wealthFinancialIncome.style.display = "block";
    wealthAnnualIncome.style.display = "none";

    document.getElementById("annual-income-display").innerHTML  = annualIncomeInput;
})
//

const wealthFinancialPrevious = document.getElementById("wealth-financial-previous");
const wealthFinancialNext = document.getElementById("wealth-financial-next");

wealthFinancialPrevious.addEventListener("click", function () {
    const wealthAnnualIncome = document.getElementById("wealth-creation-annual-income");
    const wealthFinancialIncome = document.getElementById("wealth-creation-financial-income");
    wealthAnnualIncome.style.display = "block";
    wealthFinancialIncome.style.display = "none";
    
})

wealthFinancialNext.addEventListener("click", function () {
    const financialIncomeInput = document.getElementById("wealth-financial-income").value;
   


    const wealthCurrentAge = document.getElementById("wealth-creation-current-age");
    const wealthFinancialIncome = document.getElementById("wealth-creation-financial-income");
    wealthFinancialIncome.style.display = "none";
    wealthCurrentAge.style.display = "block";
    
    document.getElementById("financial-income-display").innerHTML  = financialIncomeInput;
})

//
const wealthAgePrevious = document.getElementById("wealth-age-previous");
const wealthAgeNext = document.getElementById("wealth-age-next");

wealthAgePrevious.addEventListener("click", function () {
    const wealthCurrentAge = document.getElementById("wealth-creation-current-age");
    const wealthFinancialIncome = document.getElementById("wealth-creation-financial-income");
    wealthCurrentAge.style.display = "none";
    wealthFinancialIncome.style.display = "block";
   
})

wealthAgeNext.addEventListener("click", function () {
    const currentAgeInput = document.getElementById("wealth-current-age").value;
    


    const wealthCurrentAge = document.getElementById("wealth-creation-current-age");
    const wealthAgeGoal = document.getElementById("wealth-creation-age-goal");
    wealthCurrentAge.style.display = "none";
    wealthAgeGoal.style.display = "block";
    
    document.getElementById("current-age-display").innerHTML  = currentAgeInput;
})

///
const wealthAgeGoalPrevious = document.getElementById("wealth-age-goal-previous");
const wealthAgeGoalNext = document.getElementById("wealth-age-goal-next");

wealthAgeGoalPrevious.addEventListener("click", function () {
    const wealthCurrentAge = document.getElementById("wealth-creation-current-age");
    const wealthAgeGoal = document.getElementById("wealth-creation-age-goal");
    wealthCurrentAge.style.display = "block";
    wealthAgeGoal.style.display = "none";
    nameDisplay.innerHTML = wealthName;
})

wealthAgeGoalNext.addEventListener("click", function () {
    const ageGoalInput = document.getElementById("wealth-age-goal").value;

    const wealthInvestment = document.getElementById("wealth-creation-upfront-investment");
    const wealthAgeGoal = document.getElementById("wealth-creation-age-goal");
    wealthAgeGoal.style.display = "none";
    wealthInvestment.style.display = "block";

    document.getElementById("age-goal-display").innerHTML  = ageGoalInput;
   
})

///

const wealthInvestmentPrevious = document.getElementById("wealth-investment-previous");
const wealthInvestmentNext = document.getElementById("wealth-investment-next");

wealthInvestmentPrevious.addEventListener("click", function () {
    const wealthAgeGoal = document.getElementById("wealth-creation-age-goal");
    const wealthInvestment = document.getElementById("wealth-creation-upfront-investment");
    wealthInvestment.style.display = "none";
    wealthAgeGoal.style.display = "block";
    
})

wealthInvestmentNext.addEventListener("click", function () {
    const investmentInput = document.getElementById("wealth-investment").value;

    const wealthInvestment = document.getElementById("wealth-creation-upfront-investment");
    const wealthRisk = document.getElementById("wealth-creation-risk");
    wealthInvestment.style.display = "none";
    wealthRisk.style.display = "block";
    
    document.getElementById("investment-display").innerHTML  = investmentInput;
})

//
const wealthRiskPrevious = document.getElementById("wealth-risk-previous");


wealthRiskPrevious.addEventListener("click", function () {
    const riskInput = document.getElementById("wealth-risk").value;

    const wealthRisk = document.getElementById("wealth-creation-risk");
    const wealthInvestment = document.getElementById("wealth-creation-upfront-investment");
    wealthRisk.style.display = "none";
    wealthInvestment.style.display = "block";
    
    document.getElementById("risk-display").innerHTML  = riskInput;
})