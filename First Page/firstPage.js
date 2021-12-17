import { getAllCountries } from "../Helpers/getCountries.js";
import { createRow } from "../Helpers/createRow.js";

function renderResult(filter=null){
    for (let country of countriesInfo){
        let countryName = country['name']['common']
        let companyNameLower = countryName.toLowerCase()
        if (filter && !companyNameLower.startsWith(filter.toLowerCase())) continue;
        let countryCode = country['cca2']
        let capital = country['capital']
        createRow(countryName, countryCode, capital)
    }
}


function renderNewResult(){
    document.querySelector('tbody').innerHTML = ''
    renderResult(searchInput.value)
    createLinks()   
}


function newPage(element){
    document.location = '../Countries/country.html'
    localStorage.setItem('country', element);
}



function createLinks(){
    let elements = document.querySelectorAll('tbody tr td:first-child')
    Array.from(elements).forEach(function(element) {
        element.addEventListener('click', newPage.bind(null, element.innerText));
    });
}

let countriesInfo = await getAllCountries();
renderResult();
let searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', function(event) {
    if ((event.code == 'Delete' || event.code == 'Backspace') && searchInput.value == "") {
        renderResult();
        createLinks();
    };
})
let searchButton = document.getElementById('button');
searchButton.addEventListener("click", renderNewResult);
createLinks()