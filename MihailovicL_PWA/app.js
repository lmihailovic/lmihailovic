/*const main = document.querySelector('main').innerHTML = tab;*/
const apiUrl = "https://api.spacexdata.com/v3/info";

window.addEventListener('load', e => {
    getApiData();

    if('serviceWorker' in navigator){
        try {    
            navigator.serviceWorker.register('sw.js');
            console.log('ServiceWorker registrovan!');
        } catch (error){
            console.log('ServiceWorker nije registrovan!');
        }
    }
})

async function getApiData() {
    const response = await fetch(apiUrl);
    var data = await response.json();

    console.log(data);

    displayData(data)

}

function displayData(data) {
    const dataShowcaseDiv = document.getElementById("divInfo")

    const name = data.name;
    const ceo = data.ceo;
    const founder = data.founder;
    const founded = data.founded;
    const employees = data.employees;
    const valuation = data.valuation;

    /* ovo dole je kod za prikaz jednog podatka kao paragraf na stranici*/
    const nameElem = document.createElement("p");   /* stvara novi paragraf */
    nameElem.innerHTML = "Ime: " + name;            /* dodeljuje vrednost paragrafu - innerHtml je kao izmedju tagova */
    dataShowcaseDiv.appendChild(nameElem);          /* dodaje stvoreni paragrav u gorepristupljen divInfo */

    const ceoElem = document.createElement("p");   
    ceoElem.innerHTML = "CEO: " + ceo;
    dataShowcaseDiv.appendChild(ceoElem);

    const founderElem = document.createElement("p");   
    founderElem.innerHTML = "Osnivač: " + founder;
    dataShowcaseDiv.appendChild(founderElem);

    const foundedElem = document.createElement("p");   
    foundedElem.innerHTML = "Godina osnivanja: " + founded;
    dataShowcaseDiv.appendChild(foundedElem);

    const employeesElem = document.createElement("p");   
    employeesElem.innerHTML = "Broj zaposlenih: " + employees;
    dataShowcaseDiv.appendChild(employeesElem);

    const valuationElem = document.createElement("p");   
    valuationElem.innerHTML = "Procena vrednosti: " + valuation;
    dataShowcaseDiv.appendChild(valuationElem);

    /*
    console.log(name);
    console.log(ceo);
    */
}