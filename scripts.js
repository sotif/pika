"use strict";
function _toConsumableArray(r)
{
	console.log("_toConsumableArray");
	return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()
}

function _nonIterableSpread()
{
	console.log("_nonIterableSpread");
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(r,t)
{
	console.log("_unsupportedIterableToArray");
	if(r){
		if("string"==typeof r)
			return _arrayLikeToArray(r,t);
		var e=Object.prototype.toString.call(r).slice(8,-1);
		return"Object"===e&&r.constructor&&(e=r.constructor.name),
		"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0
	}
}

function _iterableToArray(r)
{
	console.log("_iterableToArray");
	if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])
		return Array.from(r)
}

function _arrayWithoutHoles(r)
{
	console.log("_arrayWithoutHoles");
	if(Array.isArray(r))
		return _arrayLikeToArray(r)
}

function _arrayLikeToArray(r,t)
{
	console.log("_arrayLikeToArray");
	(null==t||t>r.length)&&(t=r.length);
	for(var e=0,n=new Array(t);e<t;e++)
		n[e]=r[e];
	return n
}

var buttons=document.querySelectorAll("button");

function playSound(r)
{
	console.log("_playSound");
	document.getElementById(r).play()
}

_toConsumableArray(buttons).forEach((function(r)
{
	console.log("_toConsumableArray");
	r.addEventListener("click",(function(r)
	{
		playSound(r.target.dataset.sound)
	}
	))
}
));
