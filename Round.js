// var $ = require("jquery");
module.exports = 
		
		class Round{

		constructor (radius,color){
			let round = $("<div/>").addClass(`round`)
			round.css({
				width:radius,
				height:radius,
				"background-color":color
			})
			this.JQuery  = round;
						
		}
	}