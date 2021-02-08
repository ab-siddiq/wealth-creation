
const wealthName = document.getElementById("wealth-name").value;

const nameDisplay = document.getElementById("name-display").innerHTML;

const wealthNameNext = document.getElementById("wealth-name-next");

wealthNameNext.addEventListener("click", function () {
    const wealthAnnualIncome = document.getElementById("wealth-creation-annual-income");
    const wealthName = document.getElementById("wealth-creation-name");
    wealthName.style.display = "none";
    wealthAnnualIncome.style.display = "block";
    document.getElementById("name-display").innerHTML = wealthName;
})

const wealthAnnualPrevious = document.getElementById("wealth-annual-previous");
const wealthAnnualNext = document.getElementById("wealth-annual-next");

wealthAnnualPrevious.addEventListener("click", function () {
    const wealthAnnualIncome = document.getElementById("wealth-creation-annual-income");
    const wealthName = document.getElementById("wealth-creation-name");
    wealthName.style.display = "block";
    wealthAnnualIncome.style.display = "none";
    nameDisplay.innerHTML = wealthName;
})

wealthAnnualNext.addEventListener("click", function () {
    const wealthAnnualIncome = document.getElementById("wealth-creation-annual-income");
    const wealthName = document.getElementById("wealth-creation-name");
    wealthName.style.display = "none";
    wealthAnnualIncome.style.display = "block";
    nameDisplay.innerHTML = wealthName;
})