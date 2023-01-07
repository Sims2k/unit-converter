/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const headerSection = document.querySelector(".header-section")
const checkbox = document.getElementById("checkbox")
const inputNum = document.querySelector(".num-input")
let number
inputNum.addEventListener('input', function() {
	number = inputNum.valueAsNumber
    console.log(number)
});

const convertBtn = document.querySelector(".convert-btn")
const main = document.querySelector("main")
const article = document.querySelector(".unit-article")

let unitComponents = []

convertBtn.addEventListener("click", function(){
    convertUnit(number)
})


let dark = false

checkbox.addEventListener("change", function(){
    headerSection.classList.toggle("dark")
    main.classList.toggle("dark")
    if(!dark){
        dark = true
    } else{
        dark = false
    }
    render(dark);
})



function convertUnit(num) {
    unitComponents = []
    
    let feet = num * 3.281
    let meter = num / 3.281
    
    unitComponents.push({
        title: "Length (Meter/Feet)",
        desc: `${num} meters = ${feet.toFixed(3)} feet | ${num} feet = ${meter.toFixed(3)} meters`
    })
    
    let gallon = num * 0.264
    let liter = num / 0.264

    unitComponents.push({
        title: "Volume (Liters/Gallons)",
        desc: `${num} liters = ${gallon.toFixed(3)} gallons | ${num} gallons = ${liter.toFixed(3)} liters`
    })

    let pound = num * 2.204
    let kilo = num / 2.204
    
    unitComponents.push({
        title: "Mass (Kilograms/Pounds)",
        desc: `${num} kilos = ${pound.toFixed(3)} pounds | ${num} pounds = ${kilo.toFixed(3)} kilos`
    })

   render(dark)     
}

function render(dark) {
    let components = ``
    if(dark){
        for (let i = 0; i < unitComponents.length; i++) {
            components += `
                        <section class="main-section main-section-dark">            
                            <article class="unit-article article-dark">
                                    <h2 class="h2-dark">${unitComponents[i].title}</h2>
                                <p>${unitComponents[i].desc}</p>
                            </article> 
                        </section>
           `
        }
    } else{
        for (let i = 0; i < unitComponents.length; i++) {
            components += `
                        <section class="main-section"> 
                            <article class="unit-article">
                                <h2>${unitComponents[i].title}</h2>
                                <p>${unitComponents[i].desc}</p>
                            </article> 
                        </section>
           `
        }
    }

    main.innerHTML = components;
}

