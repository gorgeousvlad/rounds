require("./main.scss");
// var $ = require("jquery");
var Round = require("./Round.js")

const MAX = 20
const COLORS = [
	{"color":"blue","indent":0},
	{"color":"green","indent":25},
	{"color":"red","indent":35},
	{"color":"purple","indent":45}
]


//начальная отрисовка всех шариков
function render (playground){
	playground.empty();
	rounds = []
	for(let i =0; i < MAX; i++){
		
		for (let j =0; j<COLORS.length; j++){
			if (!(i%(j+1))){

				round = new Round(50,COLORS[j].color).JQuery;
				round.appendTo(playground);
				
				let width_  = round.outerWidth()
				round
					.css({
						"left":(playground.outerWidth()/MAX)*i+COLORS[j].indent,top:Math.random()*(playground.outerHeight() - width_* 3) + width_
					});
				rounds.push(round)
				console.log(rounds)
			}
		}

	};
	return rounds;
};

function main(){
	
	// var playground = $(".playground");
	var playground = $(".playground");
	rounds = render(playground);
	
	//setInterval(showRounds,200);
	var pixelsPerFrame = 5;
	//запуск движения шариков
	requestAnimationFrame(function frame() {

		rounds.forEach( round => {
				if (round.data("direction") === undefined) {
					if (Math.round(Math.random()) > 0)
						round.data("direction",1)
					else
						round.data("direction",-1)
				}
				if ((round.position().top <= 0) || (round.position().top >= playground.outerHeight() - (round.outerHeight() + 5) )){
					round.data("direction",round.data("direction")*(-1));
				}
				round.css({"top":round.position().top + pixelsPerFrame*round.data("direction")});
			});
		requestAnimationFrame(frame);
	});
	
}


$(main);