$(document).ready(function() {
	var $wrap = $('.wrap_count');
	var $inc = $('.size_inc');
	var $dec = $('.size_dec');
	var $counter = $('.size_usr');
	var Timer;
	var pressed = false;
	var iteration = 0;
	var min = 0;
	var max = 100;
	
	$inc.on('mousedown',function() {
		doInc();
	});
	$inc.on('mouseup',offTimeOut);
	$inc.on('mouseleave',offTimeOut);
	
	$dec.on('mousedown',function() {
		doDec();
	});
	$dec.on('mouseup',offTimeOut);
	$dec.on('mouseleave',offTimeOut);
	
	function doInc() {
		if ($counter.val() < max) {
			
			$counter.val(function(i, v) {
			return Number(v) + 1;
			});
			iteration++

			if (iteration === 1) {
				Timer = setTimeout(doInc, 200);
			}else{
				Timer = setTimeout(doInc, 100);
			}
			
		}
	}
	function doDec() {
		if ($counter.val() > min){
			$counter.val(function(i, v) {
				return Number(v) - 1;
			});
			iteration++
			
			if (iteration === 1) {
				Timer = setTimeout(doDec, 200);
			}else{
				Timer = setTimeout(doDec, 100);
			}
			
		}
	}
	function offTimeOut(){
		clearTimeout(Timer);
		iteration = 0;
	}
});