//  put this file in the scripts folder (or the js folder if that is what you called it)
let country = document.getElementById('country');
country.addEventListener('blur', selectCountry);

document.getElementById('getStats').addEventListener('click', getStats);

function selectCountry() {
    let row = document.getElementById(this.value);
    row.classList.toggle('selected');
}

function getStats() {
    fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "ef1331e10fmsh48fc63619bb0a2dp13cd54jsn3fc4e1f295de", //  "AIxP56HptHmshgNo3oo3eXKMlJvXp13w59gjsnNT2jFu4oqvqs",
                "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
            }
        })
        .then(resp => resp.json()) //  wait for the response and convert it to JSON
        .then(covid => { //  with the resulting JSON data do something
            console.table(covid);

            //  put a break point here to look at the data coming from the COVID API

            let table = document.getElementById('countries');

            let innerHtml = '';

            //  need a loop here to create rows for the country data on COVID
            for (let coun of covid.countries_stat) {
                innerHtml += `
                <tr id=${coun.country_name}> 
                <td>${coun.country_name}</td>
                <td>${coun.cases}</td>
                <td>${coun.deaths}</td>
                <td>${coun.total_recovered}</td>
                <td>${coun.new_deaths}</td>
                <td>${coun.new_cases}</td>
                <td>${coun.serious_critical}</td>
                <td>${coun.active_cases}</td>
                <td>${coun.total_cases_per_1m_population}</td>
                <td>${coun.deaths_per_1m_population}</td>
                <td>${coun.total_tests}</td>
                <td>${coun.tests_per_1m_population}</td>
                </tr>`;
            }
            table.innerHTML = innerHtml;

        }).catch(err => {
            console.error(err);
        });
}