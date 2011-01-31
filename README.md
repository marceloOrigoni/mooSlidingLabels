mooTwits
===========
![Screenshot](http://marcelo.origoni.com.ar/images/mooSlidingLabels.png)
	- mooSlidingLabels allows to give an alternative sliding effect to the placeholder attribute of any given input..
	  
How to use
----------

	1.	#JS
		new mooSlidingLabel(inputs[,options]);
		element must be a input element or a collection of inputs elements
		options are:
			slideTo -->  it's the label will slide to, accepts 'left', 'top','right' and 'bottom' any other value will be resolved as left. Default 'left.
			speedOut -->  it's the speed of the Fx.Tween to slide the label onfocus, accepts any integer nad 'short','normal' or 'long'. Defaults to 250.
			speedIn -->  it's the speed of the Fx.Tween to slide the label onblur, accepts any integer nad 'short','normal' or 'long'. Defaults to 250.
			labelClass -->  it's the class that will be assigned to the label. Default 'placeholder'
			inputClass -->  it's the class that will be assigned to the input. Default ''
			divClass -->  it's the class that will be assigned to the containing div. Default 'container'
			property -->  it's the property were mooSlidingLabels will get the text to display in the label. accepts 'value' or 'placeholder'. Default 'placeholder'.
