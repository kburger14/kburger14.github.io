function changeText1() {
	$("#uno").html("yo yo where did i go");
}
function changeText4() {
	$("#cuatro").html("no. aint nobody messin with ma click.");
}
function game() {
	var rando = Math.floor(Math.random() * 11);
        var a = prompt("guess a number entre diez y uno");
                while (a != rando) {
                        if (a < rando) {
                                var a = prompt("too low, guess higher!");
                        }
                        else {
                                var a = prompt("too high, try a lower guess");
                        }
                };
                if (a == rando) {
                        alert("winnnerrrrrr")
                        };
}
