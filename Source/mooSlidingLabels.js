/*
---
description:     
  - mooSlidingLabels enables you to use the HTML5 placeholder property (even with html4), and make it slide in any of the 4 direction (top, left, bottom, right)

authors:
  - Marcelo Origoni

version:
  - 1.0

license:
  - MIT-style license

requires:
  - core:   '*'
  
provides:
  - mooSlidingLabels
...
*/

var mooSlidingLabels = new Class({
	Implements: [Options,Events],
	options: {
		slideTo: 'left',
		speedOut: 250,
		speedIn: 250,
		labelClass: 'placeholder',
		inputClass: '',
		divClass: 'container',
		property: 'placeholder'
		},
	initialize: function(inputs,options){
		//Set the options
		if(MooTools.version >= '1.3'){
			Object.merge(this.options,options);
			options = this.options;
		}else{
			options = $merge(this.options,options);
		}
		if(options.property != 'value' && options.property != 'placeholder'){
			options.property = 'placeholder';
		}
		// Create the variables
		var div,label,slideIn,slideOut;
		//Create the containters of the sliders
		inputs.each(function(input,i){
			var move;
			inputClone = input.clone()
			div = new Element('div',{'class':options.divClass});
			div.setStyles({position:'relative',float:'left'});
			div.setStyles(input.getStyles());
			label = new Element('label',{'class':options.labelClass,'text':input.getProperty(options.property)});
			label.setStyles({position:'absolute',left:'2px',top:'2px'});
			inputClone.setProperty(options.property,'')
			label.addEvent('click',function(){
				this.getParent().getElement('input').focus();
			})
			inputClone.addEvent('blur',function(){
				if(this.getProperty('value') == ''){
					var slideIn = new Fx.Tween(this.getParent().getElement('label'),{duration:options.speedIn,link: 'chain'});
					slideIn.start('opacity','1');
					switch(options.slideTo){
						case 'top':
						case 'bottom':
							slideIn.start('top','2px');
							break;
						case 'right':
						case 'left':
						default:
							slideIn.start('left','2px');
							break;
					}	
				}else{
					var slideIn = new Fx.Tween(this.getParent().getElement('label'),{duration:options.speedIn,link: 'chain'});
					slideIn.start('opacity','0');
				}
			});
			inputClone.addEvent('focus',function(){
				if(this.getProperty('value') == ''){
					switch(options.slideTo){
						case 'top':
							move = '-'+(this.getStyle('height').toInt() + this.getStyle('border-top-width').toInt() + 2)+'px'
							break;
						case 'bottom':
							move = (this.getStyle('height').toInt() + this.getStyle('border-bottom-width').toInt() + 2) +'px'
							break;
						case 'right':
							move = (this.getStyle('width').toInt() + 4)+'px'						
							break;
						case 'left':
						default:
							move = '-'+this.getParent().getElement('label').getStyle('width').toInt()+'px';
							break;							
					}

					var slideIn = new Fx.Tween(this.getParent().getElement('label'),{duration:options.speedOut,link: 'chain'});
					slideIn.start('opacity','1');
					switch(options.slideTo){
						case 'top':
						case 'bottom':
							slideIn.start('top',move);
							break;
						case 'right':
						case 'left':
						default:
							slideIn.start('left',move);
							break;
					}							
				}else{
					var slideIn = new Fx.Tween(this.getParent().getElement('label'),{duration:options.speedOut,link: 'chain'});
					slideIn.start('opacity','0');
				}
			});
			inputClone.removeProperty('placeholder');
			inputClone.inject(div);
			label.inject(div);
			div.replaces(input);
		});
	}
});
