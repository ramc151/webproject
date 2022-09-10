const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')
const city_name = document.getElementById('city_name')
const temp_real = document.getElementById('temp_real')
const temp_status = document.getElementById('temp_status')
// const datahide = document.querySelector('.middle_layer')

const getInfo = async(event) => {
    let cityVal = cityName.value;
    event.preventDefault();
    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`
        // datahide.classList.add('data_hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=47016780d8bf05e337b59391696a8242`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData) 

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp_real.innerText = arrData[0].main.temp;

            // condition to check 
            const tempMood = arrData[0].weather[0].main;

            if(tempMood == "Clear"){
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color : #eccc68;'></i>"
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color : #f1f2f6;'></i>"   
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud-rain' style='color : #a4b0be;'></i>"
            }else{
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color : #eccc68;'></i>"
            }
            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Plz enter the city name properly`
            // datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo)