var MyLib = 
{
	validNumber : function(n){
		let res = true
    	if (typeof n !== "number" || !isFinite(n) || isNaN(n))
        	res = false
    	return res;
	},
	addDays : function(value){
		let res = new Date()
		//res.getDate()
    	res.setDate(res.getDate() + value)
    	return res;
	},
	evenFilter : function(value){
	let res = value.filter(elem => elem % 2 == 0);
    	return res;
	},
	cutStrings : function(value,length){
		for (let i = 0; i < value.length; i++) {
        	value[i] = value[i].substr(0, length);
    	}
    	return value;
	},
	getFibonachi : function (n) {
		var f = [0, 1];

		if (n <= 2) { 
    		var result = f.slice(0, n); 
		} else {
    		for (i = 0; i < n - 2; i++) {
        		f.push(f[f.length - 1] + f[f.length - 2]); 
    		}
    		var result = f; 
		}
		return result
	},
	myDeepCopy :function(value){
		const clone = JSON.parse(JSON.stringify(value));
		return clone
	},
	extend : function(source, bonus ){
		for (key in bonus) {
        	obj[key] = bonus[key]
    	}
    	return obj
	},
	//функцию, которая будет возводить свой аргумент в указанную степень pow
	powBuilder : function(pow){
		const res = function (n) {
        	return Math.pow(n, pow);
    	}
    	return res;
	},
	countIntegerArguments : function(...args){
		if (args.length === 0) {
	    	return 0
	  	}
		let counter = 0;

    	for (let arg of args) {
        	if (typeof arg === "number")
            	counter++;
    	}
    	return counter;
	},
	// countIntegerArgumentstwo : function(...args){
	// 	args.reduce((res, arg) => typeof arg === "number" ? res+1 : res, 0)
	// },
	countIntegerArgumentstr : function(...args){
		  const [first, ...rest] = args
	  	if (args.length === 0) {
	    	return 0
	  	}
	  	return (typeof first === "number" ? 1 : 0) + MyLib.countIntegerArgumentstr(...rest)
	},
	executeWithDelay : function(func, delay){
		 setTimeout(func, delay);
	},
	getComment : function(id){
		return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then(response => response.json())
  		.then(json => console.log(json))
	},
	getUserAge : function(user){
		let date = user.personalInfo.dob;
		return (new Date().getYear() - (new Date(date)).getYear())-1

	}
}
String.prototype.capitalize = function() {
    	return this.charAt(0).toUpperCase() + this.slice(1);
}