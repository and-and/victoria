//*********** Checkout Specific Code Here

// checkout cookie starts here
function CheckoutCookie() {
	this.cookieName = "CHECKOUTCOOKIE";
	this.myCookies = new Array();
	this.delim = "|";
	this.string = getVSCookie(this.cookieName);
	if (this.string != "") {
		this.deserialize();
	}
}

CheckoutCookie.prototype.get = function(name) {
	return this.myCookies[name];
}

CheckoutCookie.prototype.set = function(name,value) {
	if (value == "") {
		return;
	}
	// should escape the piping
	if (name == this.delim || value == this.delim) {
		alert("Warning: This page may not function as expected, please contact customer service.");
	}
	this.myCookies[name] = value.toUpperCase();
	this.serialize();
	this.save();
}

CheckoutCookie.prototype.save = function() {
	this.string = encode(this.string);
	if (this.string.length > 2000) {
		alert("Warning: This page may not function as expected, please contact customer service.");
	}
	setVSCookie(this.cookieName,this.string, VSCC_EXPIRATION_DATE);
}

CheckoutCookie.prototype.serialize = function() {
	var str = "";
	for (var name in this.myCookies) {
		str = str + name + "=" + this.myCookies[name] + this.delim;
	}
	str = str.substring(0,str.length-1);
	this.string = str;
}

CheckoutCookie.prototype.deserialize = function() {
	var str = this.string;
	str = decode(this.string);
	var tokens = str.split(this.delim);
	for (i=0;i<tokens.length;i++) {
		var nvp = tokens[i].split("=");
		this.myCookies[nvp[0]] = nvp[1];
	}
}

// initialize checkout cookie
var checkoutCookie = new CheckoutCookie();
// this is the code that sync's the checkout cookie with the experience from the MDC
var checkoutExperience = getExperience("T4");
if (checkoutExperience == "B")  {
	checkoutCookie.set("offer_seg","C2");
} else if (checkoutExperience == "C")  {
	checkoutCookie.set("offer_seg","C3");
} else {
	checkoutCookie.set("offer_seg","C1");
}

checkoutExperience = getExperience("T5");
if (checkoutExperience == "B")  {
	checkoutCookie.set("deal_seg","C5");
//	alert("deal_seg - C5");
} else {
	checkoutCookie.set("deal_seg","C4");
//	alert("deal_seg - C4");
}
