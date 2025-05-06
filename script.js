const tipButton = document.querySelectorAll(".tip-button");
const customTip = document.getElementById("custom-tip")
const peopleInput = document.getElementById("people")
const billInput = document.getElementById("bill")
const resetButton = document.getElementById("reset")


let bill = 0;
let people = 0;
let tipPercent = 0;

function calcTip() {
    const tipPerson = document.getElementById("tip-person");
    const totalPerson = document.getElementById("total-person");

    console.log(bill, tipPercent, "hdhhhdhd")

    if(people !== 0 || bill !== 0 || tipPercent !== 0) {
        resetButton.classList.remove("bg-green-750");
        resetButton.classList.add("bg-green-200")
    }
    if(people === 0 || people === null) {
        tipPerson.textContent = "₦0.00";
        totalPerson.textContent = "₦0.00"
    } else {
        const totalTip = bill * tipPercent;
        console.log(totalTip)
        const tipPerPerson = totalTip / people;
        const totalPerPerson = Number((totalTip) + Number(bill)) /people;

        console.log(tipPerson, totalPerson)

        tipPerson.textContent = `${tipPerPerson.toFixed(2)}`;
        totalPerson.textContent = `${totalPerPerson.toFixed(2)}`
    }
}

function handlePercentClick(button) {
    return () => {
        tipButton.forEach((b) => {b.classList.remove("bg-green-400")});

        console.log(tipButton)
        customTip.classList.remove("border-orange-400")
        customTip.classList.remove("border-2")
        button.classList.add("bg-green-400");
        customTip.value = "";
        tipPercent = button.dataset.tipPercent

        console.log(tipPercent)

        calcTip()
        
    }
}


tipButton.forEach((button) => {
    button.addEventListener("click", handlePercentClick(button))
})


customTip.addEventListener("input", (e) => {
    const currVal =  e.target.value;
    if(currVal <= 0 || currVal >=100) {
        customTip.classList.add("#FF0000");
        customTip.classList.add("border-2")
    } else {
        customTip.classList.remove("#FF0000");
        customTip.classList.remove("border-2");
        tipButton.forEach((b) => {b.classList.remove("#FF0000")});
        tipPercent = currVal / 100
        calcTip()

    }
})

peopleInput.addEventListener("input", (e) => {
    const currVal = e.target.value;
    const peopleWarning = document.getElementById("people-warning");
    const peopleContainer = document.getElementById("people-container")

    if(currVal == 0 ) {
        peopleWarning.classList.remove("hidden")
        peopleContainer.classList.add("#FF0000")
        peopleContainer.classList.add("border-2");
        people = 0
    } else {
        peopleWarning.classList.add("hidden")
        peopleContainer.classList.remove("#FF0000")
        peopleContainer.classList.remove("border-2")

        people = currVal;
        calcTip()
    }
})


billInput.addEventListener("input", (e) => {
    const currVal = e.target.value;
    bill = currVal;
    calcTip()
})