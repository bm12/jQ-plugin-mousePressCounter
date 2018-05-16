(function($) {
	$.fn.mousePress = function(options) {
		var settings = $.extend({
			inc: '.count_inc',
	 		dec: '.count_dec',
			counter:'.count_inp',
			min: 0,
			max: Infinity,
			timeOut: 100,
			timeStep: 10
		}, options);
		var timer;
		var pressed = false;
		var iteration = 0;
		var minMoreZero = settings.min > 0;
		settings.timeOut = settings.timeOut < 4 ? 4 : settings.timeOut;
		
		return this.each(function() {
			var $inc = $(settings.inc, this);
			var $dec = $(settings.dec, this);
			var $counter = $(settings.counter, this);
			
			console.log($(this).attr('data-id'));
			
			var stepIterInc = 5;
			var stepIterDec = 5;
			var newTimeOutInc = settings.timeOut;
			var newTimeOutDec = settings.timeOut;
			
			minMoreZero ? $counter.val(settings.min) : minMoreZero;
			
			$inc.off('.mousePress');
			$dec.off('.mousePress');
			
			
			$inc.on('mousedown.mousePress',function() {
				doInc();
			});
			$inc.on('mouseup.mousePress',offTimeOut);
			$inc.on('mouseleave.mousePress',offTimeOut);

			$dec.on('mousedown.mousePress',function() {
				doDec();
			});
			$dec.on('mouseup.mousePress',offTimeOut);
			$dec.on('mouseleave.mousePress',offTimeOut);
			

			function doInc() {
				if ($counter.val() < settings.max) {
					$counter.val(function(i, val) {
						return Number(val) + 1;
					});
					iteration++;
//					console.log(iteration);
					
					if (iteration > stepIterInc && newTimeOutInc > 4){
						newTimeOutInc = (newTimeOutInc-settings.timeStep) >= 4 ? (newTimeOutInc-settings.timeStep) : 4;
						stepIterInc += 5;
						console.log(newTimeOutInc+" time");
					}

					(iteration === 1) ? timer = setTimeout(doInc, 250) : timer = setTimeout(doInc, newTimeOutInc);

				}
			}
			function doDec() {
				if ($counter.val() > settings.min){
					
					$counter.val(function(i, val) {
						return Number(val) - 1;
					});
					iteration++;
					
//					console.log(iteration);
					
					if (iteration > stepIterDec && newTimeOutDec > 4){
						newTimeOutDec = (newTimeOutDec-settings.timeStep) >= 4 ? (newTimeOutDec-settings.timeStep) : 4;
						stepIterDec += 5;
						console.log(newTimeOutInc+" time");
					}

					(iteration === 1) ? timer = setTimeout(doDec, 250) : timer = setTimeout(doDec, newTimeOutDec);

				}
			}
			
			function offTimeOut(){
				clearTimeout(timer);
				iteration = 0;
				stepIterInc = stepIterDec = 5;
				newTimeOutInc = newTimeOutDec = settings.timeOut;
			}
		})

	};
})(jQuery);