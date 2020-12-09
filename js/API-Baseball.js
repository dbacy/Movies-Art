fetch("https://api-baseball.p.rapidapi.com/odds?game=5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ef1331e10fmsh48fc63619bb0a2dp13cd54jsn3fc4e1f295de",
		"x-rapidapi-host": "api-baseball.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});