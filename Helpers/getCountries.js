export async function getAllCountries(){
    const url = 'https://restcountries.com/v3.1/all';
    try { 
        const allCountriesInfo = await fetch(url).then(res => res.json());
        return allCountriesInfo;
    }catch(error){
        console.log(error.message);
        return [];
    }    
}
