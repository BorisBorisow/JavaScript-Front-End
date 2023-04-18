function attachEvents() {
    //get all elements
    const inputElement = document.getElementById("location");
    const getBtn = document.getElementById("submit");
    const divDisplay = document.getElementById("forecast");
    const currentDiv = document.getElementById("current");
    const upcomingDiv = document.getElementById("upcoming");
    const baseUrl = `http://localhost:3030/jsonstore/forecaster`;

    // define weather symbols
    let sunny = "&#x2600";
    let partlySunny = "&#x26C5"; 
    let overcast = "&#x2601";
    let rain = "&#x2614";
    let degrees = "&#176";
    let code = "";

    // define upcoming and current weather DIVs
    let divElementUpcoming = document.createElement("div");
    let divElementCurrent = document.createElement("div");

    // add event listener to getBtn
    getBtn.addEventListener("click", (e) => {
        divElementUpcoming.innerHTML = "";
        divElementCurrent.innerHTML = "";

        divElementUpcoming.setAttribute("class", "forecast-info")
        divElementCurrent.setAttribute("class", "forecasts")

        divDisplay.style.display = "inline";

        // fetch location data from server -> name, code
        fetch(`${baseUrl}/locations`)
            .then(response => response.json())
            .then(data => {
                data.forEach(locationInfoObject => {
                    if (locationInfoObject.name == inputElement.value) {
                        return code = locationInfoObject.code;
                    }
                });
                // code -> fetch location for today 
                fetch(`${baseUrl}/today/${code}`)
                    .then(response => response.json())
                    .then(data => {
                        let spanGroup = document.createElement("span");
                        let conditionSpan = document.createElement("span");
                        let temperatureSpan = document.createElement("span");
                        let locationSpan = document.createElement("span");
                        let spanWithIcon = document.createElement("span");
                        
                        spanWithIcon.setAttribute("class", "condition symbol");
                        spanGroup.setAttribute("class", "condition");
                        locationSpan.setAttribute("class", "forecast-data");
                        temperatureSpan.setAttribute("class", "forecast-data");
                        conditionSpan.setAttribute("class", "forecast-data");

                        locationSpan.textContent = data.name;
                        temperatureSpan.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`
                        conditionSpan.textContent = data.forecast.condition;
                        let condition = data.forecast.condition

                        if (condition == "Sunny") {
                            spanWithIcon.innerHTML = sunny;
                        } else if (condition == "Partly sunny") {
                            spanWithIcon.innerHTML = partlySunny;
                        } else if (condition == "Overcast") {
                            spanWithIcon.innerHTML = overcast;
                        } else if (condition == "Rain") {
                            spanWithIcon.innerHTML = rain;
                        }
                        spanGroup.appendChild(locationSpan);
                        spanGroup.appendChild(temperatureSpan);
                        spanGroup.appendChild(conditionSpan);
                        divElementCurrent.appendChild(spanWithIcon);
                        divElementCurrent.appendChild(spanGroup);

                        currentDiv.appendChild(divElementCurrent);
                    }) 
                    .catch(error => console.log(error))
                
                fetch(`${baseUrl}/upcoming/${code} `)
                    .then(response => response.json())
                    .then(data => {
                    
                        let nextDays = data.forecast;
                        nextDays.forEach(x => {
                            let spanGroup = document.createElement("span");
                            let conditionSpan = document.createElement("span");
                            let temperatureSpan = document.createElement("span");
                            let spanWithIcon = document.createElement("span");
                            
                            spanWithIcon.setAttribute("class", "symbol");
                            spanGroup.setAttribute("class", "upcoming");
                            temperatureSpan.setAttribute("class", "forecast-data");
                            conditionSpan.setAttribute("class", "forecast-data");
                           
                            temperatureSpan.innerHTML = `${x.low}${degrees}/${x.high}${degrees}`
                            conditionSpan.textContent = x.condition;
                            let condition = x.condition;
                            if (condition == "Sunny") {
                                spanWithIcon.innerHTML = sunny;
                            } else if (condition == "Partly sunny") {
                                spanWithIcon.innerHTML = partlySunny;
                            } else if (condition == "Overcast") {
                                spanWithIcon.innerHTML = overcast;
                            } else if (condition == "Rain") {
                                spanWithIcon.innerHTML = rain;
                            }
                            spanGroup.appendChild(temperatureSpan);
                            spanGroup.appendChild(spanWithIcon);
                            spanGroup.appendChild(conditionSpan);
                            divElementUpcoming.appendChild(spanGroup);
                            upcomingDiv.appendChild(divElementUpcoming);
                        })
                        
                    })
            })
    });

}

attachEvents();