async function getCountryInfo(){
    let name = localStorage.getItem('country')
    const url = `https://restcountries.com/v3.1/name/${name}`;
    try { 
        const allCountriesInfo = await fetch(url).then(res => res.json());
        return allCountriesInfo;
    }catch(error){
        console.log(error.message);
        return [];
    }    
}

const countryData = await getCountryInfo()
const image = countryData[0]['flags']['png']
let img = document.createElement('img');
img.src = image;
document.querySelector('div').appendChild(img);

function stringify(object, string = "") {
    for (let key in object) {
        if (typeof object[key] === "object") {
            return stringify(object[key], string);
        }
        string += `${object[key]},`;
    }
    return string.slice(0, string.length - 1);
}

function createTable(countryData){
    for (let k in countryData){
        let th = document.createElement('th')
        let td = document.createElement('td')
        let tr = document.createElement('tr')
        th.innerText = String(k)
        let value = countryData[k]
        for (let i = 0; i <= 5; i++){
            if (Array.isArray(value)){
                value = JSON.stringify(value)
            }else if (typeof value == 'object'){
                value = stringify(value)
            }   else {
                    break;
                }
        }
        td.innerText = String(value)
        tr.appendChild(th)
        tr.appendChild(td)
        document.querySelector('tbody').appendChild(tr)
    }
}

createTable(countryData[0])