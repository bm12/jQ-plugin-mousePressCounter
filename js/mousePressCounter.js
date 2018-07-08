(function($) {
    $.fn.mousePressCounter = function(options) {
        var settings = $.extend({
            inc: '.counter-inc',
            dec: '.counter-dec',
            counter:'.counter-input',
            min: 0,
            max: Infinity,
            timeOut: 100,
            timeStep: 10
        }, options);
        var timer;
        var iteration = 0;
        var stepIter = 5;
        var timeOut = settings.timeOut;

        function stepper(checkRange, direction, nextStepFn, $counter) {
            if (!checkRange()) return;

            $counter.val(function(i, val) {
                return Number(val) + direction;
            });
            iteration++;

            if (iteration > stepIter && timeOut){
                timeOut = timeOut - settings.timeStep;
                stepIter += 5;
            }

            timer = (iteration === 1) ? setTimeout(nextStepFn, 250) : setTimeout(nextStepFn, timeOut);
        }

        function offTimeOut(){
            clearTimeout(timer);
            iteration = 0;
            stepIter = 5;
            timeOut = settings.timeOut;
        }

        return this.each(function() {
            var $inc = $(settings.inc, this);
            var $dec = $(settings.dec, this);
            var $counter = $(settings.counter, this);
            
            if ($counter.length === 0) return;

            var doInc = function() {
                stepper(function() {
                    return $counter.val() < settings.max;
                }, 1, doInc, $counter);
            };
            var doDec = function() {
                stepper(function() {
                    return $counter.val() > settings.min;
                }, -1, doDec, $counter);
            };

            $counter.val(settings.min);

            if ($counter.prop('type') === 'number') {
                $counter.attr('min', settings.min).attr('max', settings.max);
            }

            $inc.off('.mousePressCounter');
            $dec.off('.mousePressCounter');

            $inc.on('mousedown.mousePressCounter', doInc);
            $inc.on('mouseup.mousePressCounter', offTimeOut);
            $inc.on('mouseleave.mousePressCounter', offTimeOut);

            $dec.on('mousedown.mousePressCounter', doDec);
            $dec.on('mouseup.mousePressCounter', offTimeOut);
            $dec.on('mouseleave.mousePressCounter', offTimeOut);
        });
    };
})(jQuery);