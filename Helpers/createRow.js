export function createRow(countryName, countryCode, capital){
    let tbody = document.querySelector('tbody')
    let newRow = tbody.insertRow(-1);
    let countryNameCell = newRow.insertCell(0);
    let capitalCell = newRow.insertCell(1)
    let countryCodeCell = newRow.insertCell(2);
    countryNameCell.innerText = countryName
    capitalCell.innerText = capital
    countryCodeCell.innerText = String(countryCode)
}