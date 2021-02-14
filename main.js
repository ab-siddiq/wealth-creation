const wealthNameNext = document.getElementById("wealth-name-next");

wealthNameNext.addEventListener("click", function () {
    const wealthNameInput = document.getElementById("wealth-name").value;
    const wealthAnnualIncome = document.getElementById("wealth-creation-annual-income");
    const wealthName = document.getElementById("wealth-creation-name");
    wealthName.style.display = "none";
    wealthAnnualIncome.style.display = "block";
    document.getElementById("name-display").innerHTML = wealthNameInput;
})
// annual income

const wealthAnnualNext = document.getElementById("wealth-annual-next");

wealthAnnualNext.addEventListener("click", function () {
    const annualIncomeInput = document.getElementById("wealth-annual-income").value;
    const wealthAnnualIncome = document.getElementById("wealth-creation-annual-income");
    const wealthFinancialIncome = document.getElementById("wealth-creation-financial-income");
    wealthFinancialIncome.style.display = "block";
    wealthAnnualIncome.style.display = "none";

    document.getElementById("annual-income-display").innerHTML  = annualIncomeInput;
})
//

const wealthFinancialNext = document.getElementById("wealth-financial-next");


wealthFinancialNext.addEventListener("click", function () {
    const financialIncomeInput = document.getElementById("wealth-financial-income").value;
    const wealthCurrentAge = document.getElementById("wealth-creation-current-age");
    const wealthFinancialIncome = document.getElementById("wealth-creation-financial-income");
    wealthFinancialIncome.style.display = "none";
    wealthCurrentAge.style.display = "block";
    
    document.getElementById("financial-income-display").innerHTML  = financialIncomeInput;
})

//

const wealthAgeNext = document.getElementById("wealth-age-next");

wealthAgeNext.addEventListener("click", function () {
    const currentAgeInput = document.getElementById("wealth-current-age").value;
    const wealthCurrentAge = document.getElementById("wealth-creation-current-age");
    const wealthAgeGoal = document.getElementById("wealth-creation-age-goal");
    wealthCurrentAge.style.display = "none";
    wealthAgeGoal.style.display = "block";
    
    document.getElementById("current-age-display").innerHTML  = currentAgeInput;
})

///

const wealthAgeGoalNext = document.getElementById("wealth-age-goal-next");


wealthAgeGoalNext.addEventListener("click", function () {
    const ageGoalInput = document.getElementById("wealth-age-goal").value;

    const wealthInvestment = document.getElementById("wealth-creation-upfront-investment");
    const wealthAgeGoal = document.getElementById("wealth-creation-age-goal");
    wealthAgeGoal.style.display = "none";
    wealthInvestment.style.display = "block";

    document.getElementById("age-goal-display").innerHTML  = ageGoalInput;
   
})

///

const wealthInvestmentNext = document.getElementById("wealth-investment-next");
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


// ===========================================Need Help Questions==================================
// function getInputSetInput(getInputID,displayID,hideID,setInputID) {
//     let getInputValue = document.getElementById(getInputID);
//     let displayItem = document.getElementById(displayID);
//     let hideItem = document.getElementById(hideID);
//     displayItem.style.display = "block";
//     hideItem.style.display = "none";
//     document.getElementById(setInputID) = getInputValue;
// }
//  button display  event listener
function needHelpQuestionButtonEvent(displayID, hideID,condition) {
    let itemDisplay;
    let itemHide;
    let questionWeight;
    if (condition==true) {
        itemDisplay = document.getElementById("wealth-question-"+displayID);
        itemHide = document.getElementById("wealth-question-" + hideID);
        
    }
    if (condition==false){
        itemDisplay = document.getElementById(displayID);
        itemHide = document.getElementById(hideID);
    }

    itemDisplay.style.display = "block";
    itemHide.style.display = "none";
    riskCalculation();
}
// get question value
function getNeedHelpQuestionValue(optionID, optionScoreID, questionOptionID, questionWeight) {
    let getInputValue = parseFloat(document.getElementById(optionID).value);
    
    let calculateQuestionWeight = getInputValue * questionWeight; 
    document.getElementById(optionScoreID).innerHTML = questionWeight;
    document.getElementById(questionOptionID).innerHTML = getInputValue;
    console.log(getInputValue*questionWeight + " pressed ", typeof (getInputValue));
}
function riskCalculation() {
    // let questionOne = getQuestionWeight('question-one-weight');
    // let questionTwo = getQuestionWeight('question-two-weight');
    // let questionThree = getQuestionWeight('question-three-weight');
    // let questionFour = getQuestionWeight('question-four-weight');
    // let questionFive = getQuestionWeight('question-five-weight');
    const demoWeight = .24;
    const w1 = .15;
    const w2 = .18;
    const w3 = .15;
    const w4 = .18;
    const w5 = .1;
    const highestScore = w1*4+w2*4+w3*4+w4*4+w5*4+demoWeight*24;
    const lowestScore = w1+w2+w3+w4+w5+demoWeight*12;
    let questionOneOption = getQuestionWeight('question-one-option');
    let questionTwoOption = getQuestionWeight('question-two-option');
    let questionThreeOption = getQuestionWeight('question-three-option');
    let questionFourOption = getQuestionWeight('question-four-option');
    let questionFiveOption = getQuestionWeight('question-five-option');
    let questionOneWeight = (questionOneOption*w1);
    let questionTwoWeight = (questionTwoOption*w2);
    let questionThreeWeight = (questionThreeOption*w3);
    let questionFourWeight = (questionFourOption*w4);
    let questionFiveWeight = (questionFiveOption*w5);
    const demographicScore = (18 * demoWeight);
    let sumRiskValue = questionOneWeight + questionTwoWeight + questionThreeWeight + questionFiveWeight + questionFiveWeight + demographicScore;
    console.log(sumRiskValue, '=>risk', highestScore, '=>high', lowestScore, '=>low', demographicScore, 'demo');
    if (sumRiskValue >= 3.64 && sumRiskValue <= 6) {
        document.getElementById('risk-id').innerHTML = 'Safe Risk';
        setRisk('risk1');
    } else if (sumRiskValue > 6 && sumRiskValue <= 7.5) {
        setRisk('risk2');
        document.getElementById('risk-id').innerHTML ='Moderate Risk';
    } else if (sumRiskValue > 7.5 && sumRiskValue <= 8.8) {
        setRisk('risk3');
        document.getElementById('risk-id').innerHTML ='Aggressive Risk';
    } else { console.log('false');}
}

function getQuestionWeight(id) {
    let questionWeight = parseFloat(document.getElementById(id).innerHTML);
    
    console.log(questionWeight, typeof (questionWeight));
    return questionWeight;
}
function setRisk(id) {
    document.getElementById(id).click();
}
// demographic score calculation
const wealthDemographicsScoreBack = document.getElementById("wealth-demographic-score-back");
const wealthDemographicScoreEvaluate = document.getElementById("wealth-demographic-score-evaluate");

wealthDemographicsScoreBack.addEventListener("click", function () {
    const wealthQuestionSix = document.getElementById("wealth-question-six");
    const wealthRiskQuestionArea = document.getElementById("wealth-risk-question-area");
    const wealthDemographicCalculation = document.getElementById("wealth-demographic-calculation");
    wealthQuestionSix.style.display = "block";
    wealthRiskQuestionArea.style.display = "block";
})

wealthDemographicScoreEvaluate.addEventListener("click", function () {
    const wealthDemographicCalculation = document.getElementById("wealth-demographic-calculation");
    const wealthDemographicRiskQuotient = document.getElementById("wealth-demographic-risk-quotient");
    wealthDemographicRiskQuotient.style.display = "block";
    wealthDemographicCalculation.style.display = "none";
})

// document.getElementById('wealth-demographic-risk-quotient-continue').addEventListener('click',function () {
//     document.getElementById('exampleModal').style.display = 'none';
//     console.log('dfghsdf')
// })