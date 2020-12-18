
function getTeamStat() {
    let year = document.getElementById('year').Value
    let team = document.getElementById('team').Value
    let league = document.getElementById('league').Value


    fetch(`https://api-baseball.p.rapidapi.com/teams/statistics?league=${league}season=${year}&team=${team}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "ef1331e10fmsh48fc63619bb0a2dp13cd54jsn3fc4e1f295de",
                "x-rapidapi-host": "api-baseball.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(teamStats => showTeams(teamStats.response))
        .catch(err => {
            console.error(err);
        });
}

function showTeamsStats(teamStats) {
    let teamStatTable = document.getElementById('teams/statistics');
	let html = "";
	for (let team of teamStats) {
        html += `
        <tr> 
        <td>${team.team.name}</td>
        <td>${team.games.played}</td>
        <td>${team.points.total}</td>
        </tr>`
    }
    teamStatTable.innerHTML = html;
}