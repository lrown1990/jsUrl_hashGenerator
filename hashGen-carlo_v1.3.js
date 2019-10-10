var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var hh = today.getHours();
	hh = ("0" + hh).slice(-2);
var mn = today.getMinutes();
	mn = ("0" + mn).slice(-2);
today = yyyy + mm + dd + hh + mn;


window.onload = function() {
	
    if(!window.location.hash) {
        window.location = window.location + '#' + today;
        window.location.reload(); }
		
	check = '#' + today;
	location2 = window.location.href.split("#")[0]
	if ( check != window.location.hash){
		window.location = location2 + '#' + today;
		window.location.reload();
}
	}

//by Carlo Sinatra