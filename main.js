require("./main.scss");
var $ = require("jquery");
const MAX = 20
const COLORS = [
	{"color":"blue","indent":0},
	{"color":"green","indent":25},
	{"color":"red","indent":35},
	{"color":"purple","indent":45}
]

function showRounds (){
	var playground = $(".playground");//$(".playground");
	playground.empty();
	for(let i =0; i < MAX; i++){
		
		for (let j =0; j<COLORS.length; j++){
			if (!(i%(j+1))){
				round =$("<div/>")
				.addClass(`round ${COLORS[j].color}`)
				.css({"left":(playground.outerWidth()/MAX)*i+COLORS[j].indent,top:Math.random()*(playground.outerHeight() -150) + 50})
				.appendTo(playground);

			}
		}

	};
};

function main(){
	setInterval(showRounds,200);
}


$(main);