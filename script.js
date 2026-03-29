const inputForm = document.getElementById("input-form");
const weekPay = document.getElementById("WeekPay");
const InputButton = document.getElementById("inputButton");

const totalTax = document.getElementById("totalTax");
const FicaRate = document.getElementById("ficaRate");
const FederalTaxRate = document.getElementById("federalTaxRate");
const stateTax = document.getElementById("stateTax");
const payDisplay = document.getElementById("PayDisplay");


const tax_cal = () => {
    let userInput = parseFloat(weekPay.value);

    if (isNaN(userInput)) {
    payDisplay.textContent = ("Enter a vaild Input!");
        return
    }


    const ficaRate = 0.0765;
    const federalTaxRate = 0.10;
    const stateTaxRate = 0.0475;

    
    let ficaTax = ficaRate *  userInput;
    
    let federaltaxrate = federalTaxRate * userInput;
    
    let StateTax = stateTaxRate * userInput;
    
    let tax_total = ficaTax + federaltaxrate + StateTax;
    
    let thisWeek = userInput - tax_total;

    payDisplay.textContent = (`this week's Pay: $${thisWeek.toFixed(2)}`);
    FicaRate.textContent = (`Fica Tax: $${ficaTax.toFixed(2)}`);
    FederalTaxRate.textContent = (`Federal TAX: $${federaltaxrate.toFixed(2)}`);
    stateTax.textContent = (`State Tax: $${StateTax.toFixed(2)}`);
    totalTax.textContent = (`Total Tax: $${tax_total.toFixed(2)}`);



    




};



inputForm.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        tax_cal();
    } 


});


InputButton.addEventListener("click", tax_cal);

