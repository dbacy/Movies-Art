
function getTeams() {
	let year = document.getElementById('year').value;
	let league = document.getElementById('league').value;

fetch(`https://api-baseball.p.rapidapi.com/teams?league=${league}&season=${year}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "ef1331e10fmsh48fc63619bb0a2dp13cd54jsn3fc4e1f295de",
			"x-rapidapi-host": "api-baseball.p.rapidapi.com"
		}
	})
	.then(response => response.json()) //  wait for the response and convert it to JSON
	.then(teams => showTeams(teams.response))
	.catch(err => {
		console.error(err);
	});
}

function showTeams(teams) {
	let teamTable = document.getElementById('teams');
	let html = "";
	for (let team of teams) {
		html += `
		<tr>
			<td>${team.name}</td>
			<td>
				<img src=${team.logo} height=50px width=50px>
			</td>
			<a href ="API-Baseball-Stat.js"> 
			<td><input type=checkbox id=${team.name}></td>
			</a>
		</tr>`
	}
	teamTable.innerHTML = html;
}

function check() {
	document.getElementById("myCheck").checked = true
}

function uncheck() {
	document.getElementById("myCheck").checked = false
}


