$(window).on('load', function() { 

	$('.advisory').showAdvice();
	console.log($('#adviser1').hideAdvice());

})

!function ($) {

	Advice = function(element, options) {
		console.log("Inside Advice constructor");
		this.$element = $(element);
		this.options = options;
		this.$advice = this.$element.find('.advice');

		this.placeAdvice();
	};


	Advice.prototype.placeAdvice = function() {
		console.log("placeAdvice() called");
		var elemWidth = this.$element.width(),
		    elemHeight = this.$element.height(),
		    elemTop = this.$element.offset().top,
		    elemLeft = this.$element.offset().left,
		    adviceHeight = this.$advice.height(),
		    adviceWidth = this.$advice.width();

		this.$advice.show();
		this.$advice.offset({
			left: elemLeft + (elemWidth - adviceWidth)/2,
			top: elemTop - adviceHeight 
		});
	};

	Advice.prototype.hideAdvice = function() {
		console.log("inside hideAdvice()");
		this.$advice.hide();
	};


	$.fn.showAdvice = function(option) {
		console.log("inside showAdvice()");
		return this.each(function() {
			console.log("Inside each()");
			var $this = $(this);
			var options = typeof option == 'object' && option;
			$this.data('advice', new Advice(this, options));
		});
	};

	$.fn.hideAdvice = function(option) {
		console.log("inside hideAdvice()");
		return this.each(function() {
			console.log("inside each()");
			var $this = $(this);
			var options = typeof option == 'object' && option;
			$this.data()['advice'].hideAdvice();
		});
	};

	$.fn.Constructor = Advice;
}(window.jQuery);
