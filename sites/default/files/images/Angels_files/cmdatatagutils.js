<!--
/*
 * cmdatatagutils.js
 *
 * Coremetrics Tag v3.1,   2/28/2002
 * COPYRIGHT 1999-2002 COREMETRICS, INC. 
 * ALL RIGHTS RESERVED. U.S.PATENT PENDING
 *
 * The following functions aid in the creation of Coremetrics data tags.
 *
 * Date			Imp Eng			Desc
 * 07/17/06		Hutch White		Add cm_em code
 * 02/05/07		Hutch White		Restore Newsletter Tag
 * 03/26/07 	Hutch White		Add conversion Tags
 * 04/23/07		MOCHOA			Enabled Foresee Tag functions
 *								Enabled RespondentID parameter for the pageview tag
 * 06/19/08     LHIBBARD        Added manual tagging
 *
 */

// TAG GENERATING FUNCTIONS ---------------------------------------------------
if(document.location.href.indexOf("limited.com")>=0) {
	
					cmSetClientID("60000021",false,"testdata.coremetrics.com","victoriassecret.com"); 
	
			}
			else {
				if(document.location.href.indexOf("victoriassecret.com")>=0 || document.location.href.indexOf("vspink.com")>=0 )
				
				cmSetClientID("90000021",false,"www25.victoriassecret.com","victoriassecret.com"); 
			}

var cm_TrackLink = "A";
var cm_TrackImpressions = "S";

/*
 * Calling this function points tags to the production database
 */
function cmSetProduction(){
	cm_HOST="www25.victoriassecret.com/eluminate?"; 
}

	if(!cm_HOST){
			if(document.location.href.indexOf("limited.com")>=0) {
	
					var cm_HOST="testdata.coremetrics.com/cm?";
					var cm_ClientID = "60000021";
	
			}
			else {
				if(document.location.href.indexOf("victoriassecret.com")>=0 || document.location.href.indexof("secure.victoriassecret.com")>=0 || document.location.href.indexOf("vspink.com")>=0 )
				
				var cm_HOST="www25.victoriassecret.com/eluminate?";
				var cm_ClientID = "90000021";
		}
	
	}

function cmIndexOfParameter (parameter) {
	var turl=document.URL.toLowerCase();
	return turl.indexOf(parameter);
}

function cmCreateForeseeTag(respondentID, surveyName) {
        var cm = new _cm("tid", "7", "vn2", "e3.1");
        cm.li = "100003";
        cm.ps1 = respondentID;
        cm.ps2 = surveyName;
        cm.writeImg();
}

function cmCreateConversionEventTag(eventID, actionType, categoryID, points) {
	var cm = new _cm("tid", "14", "vn2", "e4.0");
	cm.cid = eventID;
	cm.cat = actionType;
	cm.ccid = categoryID;
	cm.cpt = points;
	cm.writeImg();
 }

function cmCheckCMEM() {
	if (cmIndexOfParameter("cm_em") != -1){
		var s = document.URL.toLowerCase();
		var begin = s.indexOf("cm_em");
		var end = s.indexOf("&", begin);
		if (end == -1) {
			end = s.length;
		}
		var middle = s.indexOf("=", begin);

		var emailAddress = s.substring(middle + 1, end);

		if (emailAddress.indexOf(":") != -1){
			var tempArray = emailAddress.split(":");
			emailAddress = tempArray[1];
		}

		cmCreateRegistrationTag(emailAddress,emailAddress);
	}
}

function cmCreateManualLinkClickTag(href,name,pageID) {	
	if (cmCreateLinkTag == null && cM != null) {
		var cmCreateLinkTag = cM;
	}
	if (cmCreateLinkTag != null) {		
		var dt = new Date();
		cmLnkT3 = dt.getTime();
		cmCreateLinkTag(cm_ClientTS, cmLnkT3, name, href, false, pageID);
	}
}

function cmCreateManualImpressionTag(pageID, trackSP, trackRE) {
		var cm = new _cm("tid","9","vn2","e4.0");
		cm.pi = pageID;
		cm.cm_sp = trackSP;
		cm.cm_re = trackRE;
		cm.st = cm_ClientTS;
		cm.writeImg();
}

function cmCreateManualPageviewTag(pageID, categoryID,DestinationURL,ReferringURL,searchTerm) {
	var cm = new _cm("tid","1","vn2","e4.0");
	cm.pi = pageID;
	cm.cg = categoryID;
	cm.ul = DestinationURL;
	cm.rf = ReferringURL;
	if (searchTerm) {
		cm.se=searchTerm;
	}
	cm.writeImg();
}

/*
 * Creates a Tech Props tag.
 * pageID		: required. Page ID to set on this Pageview tag
 */
function cmCreateTechPropsTag(pageID, categoryID) {
	if (pageID) {
		var cm=new _cm("tid", "6", "vn2", "e3.1");
		cm.pc="Y";
		cm.pi = cmStripIllegals(pageID);
		cm.cg = cmStripIllegals(categoryID);
		// if available, override the referrer with the frameset referrer
		if (parent.cm_ref != null) {
			cm.rf = parent.cm_ref;
			parent.cm_ref = document.URL;
		}
		cm.addTP();

		cmCheckCMEM();

		cm.writeImg();
	}
}
/*
 * Creates a Custome tag with the given Page ID
 *
 * pageID		: required. Page ID to set on this Pageview tag
 * searchString	: optional. Internal search string enterred by user to reach
 *				  this page.
 * categoryID	: optional. Category ID to set on this Pageview tag
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateCustomTag(lineNumber,pageID, productID, productName, productQuantity, categoryID, activityType,ctlgCde) {
	var cm = new _cm("tid", "7", "vn2", "e3.1");
	cm.pi = pageID;
	cm.li = lineNumber;
	cm.ps1 = productID;
	cm.ps2 = cmStripIllegals(productName);
	cm.ps3 = productQuantity;
	cm.ps6 = cmStripIllegals(categoryID);
	cm.ps9 = pageID;
	if (activityType != null){
		cm.ps8 = activityType;
	}
	if (ctlgCde != null) {
		cm.ps10 = cmStripIllegals(ctlgCde);
	}	

	// if available, override the referrer with the frameset referrer
	if (parent.cm_ref != null) {
		cm.rf = parent.cm_ref;
		parent.cm_ref = document.URL;
	}

	cmCheckCMEM();

	cm.writeImg();
}

/*
 * Creates a Pageview tag with the given Page ID
 *
 * pageID		: required. Page ID to set on this Pageview tag
 * searchString	: optional. Internal search string enterred by user to reach
 *				  this page.
 * categoryID	: optional. Category ID to set on this Pageview tag
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreatePageviewTag(pageID, searchString, categoryID, numSearchResults, respondentID) {
	if (pageID == null) {
		pageID = getDefaultPageID();
	}

	var cm = new _cm("tid", "1", "vn2", "e3.1");
	cm.pi = cmStripIllegals(pageID);
	if (searchString) {
		cm.se = cmStripIllegals(searchString);
	}
	if (numSearchResults){
		cm.sr = numSearchResults;
	}
	if (categoryID) {
		cm.cg = cmStripIllegals(categoryID);
	}
		if (respondentID) {
		cm.ps1 = respondentID;
	}

	// if available, override the referrer with the frameset referrer
	if (parent.cm_ref != null) {
		cm.rf = parent.cm_ref;
		parent.cm_ref = document.URL;
	}

	cmCheckCMEM();

	cm.writeImg();
}

/*  strips illegal characters*/
function cmStripIllegals_old(s){
	var amparray = s.split(/&[^;]*;/);
    	s = amparray.join("");    
 	var retStr="";
	var bad="\t\r\n\"'$&*^,%_";
    	for (var i=0;i<s.length;i++){
       	   var c=s.charAt(i);
	   if (bad.indexOf(c)<0)
		retStr+=c;
    }
    return retStr;
}

function cmStripIllegals(s){
	var amparray = s.split(/&[^;]*;/);
    	s = amparray.join("");    
 	var retStr="";
	var bad="\t\r\n\"'$&*^,%_™©®";
    	for (var i=0;i<s.length;i++){
       	   var c=s.charAt(i);
	   if (bad.indexOf(c)<0)
		retStr+=c;
    }
    return retStr;    
}

/*
 * Creates a Pageview tag with the default value for Page ID. 
 * Format of Page ID is "x/y/z/MyPage.asp"
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateDefaultPageviewTag() {
	cmCreatePageviewTag(getDefaultPageID(), null, null);
}

/*
 * Creates a Productview Tag
 * Also creates a Pageview Tag by setting pc="Y"
 * Format of Page ID is "PRODUCT: <Product Name> (<Product ID>)"
 *
 * productID	: required. Product ID to set on this Productview tag
 * productName	: required. Product Name to set on this Productview tag
 * categoryID	: optional. Category ID to set on this Productview tag 
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateProductviewTag(productID, productName, categoryID, index) {
	var cm = new _cm("tid", "5", "vn2", "e3.1");

	if (productName == null) {
		productName = "";
	}

	// if available, override the referrer with the frameset referrer
	if (parent.cm_ref != null) {
		cm.rf = parent.cm_ref;
		parent.cm_ref = document.URL;
	}

	cm.pr = productID;
	cm.pm = cmStripIllegals(productName);
	cm.cg = cmStripIllegals(categoryID);
	cm.pc = "N";
	cm.pi = "PRODUCT: " + productName + " (" + productID + ")";

	cmCheckCMEM();

	cm.writeImg();
}

/*
 * Variables and Arrays to support Lineitem Aggregation
 */

var cmShopProducts = new Array();
var cmShopIds = new Array();
var cmShopCats = new Array();
var cmShopQtys = new Array();
var cmShopBOQtys = new Array();
var cmShopPrices = new Array();
var cmShopSKUs = new Array();
var cmShopCounter = 0;
var cmShopOrderIds = new Array();
var cmShopCustomerIds = new Array();
var cmShopOrderPrices = new Array();

/* Internal, to support aggregation */
function cmGetProductIndex(id){
	var i =0;
	for (i=0; i<cmShopCounter; i++)
	{
		if (id==cmShopIds[i])
		{
			return i;
		}
	}
	return -1;
}

/*
 * Creates a Shop tag with Action 5 (Shopping Cart)
 *
 * productID	: required. Product ID to set on this Shop tag
 * quantity	: required. Quantity to set on this Shop tag
 * productPrice	: required. Price of one unit of this product
 * categoryID	: optional. Category to set on this Shop tag
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateShopAction5Tag(productID, productName, productQuantity, productPrice, categoryID, backOrdered) {
	var index = cmGetProductIndex(productID);
	if(index!=-1){
		var oldPrice = cmShopPrices[index];
		var oldQty = cmShopQtys[index];
		var oldBOQty = cmShopBOQtys[index];
		var newQty = oldQty + parseInt(productQuantity);
		var newBOQty = oldBOQty + parseInt(backOrdered);
		var newPrice = (oldPrice*oldQty + parseInt(productQuantity)*parseFloat(productPrice))/(newQty);

		cmShopPrices[index] = newPrice;
		cmShopQtys[index] = newQty;
		cmShopBOQtys[index] = newBOQty;

	} else {
		if (!categoryID) {
			categoryID = "";
		}

		cmShopProducts[cmShopCounter] = cmStripIllegals(productName);
		cmShopIds[cmShopCounter] = productID;
		cmShopCats[cmShopCounter] = cmStripIllegals(categoryID);
		cmShopQtys[cmShopCounter] = parseInt(productQuantity);
		cmShopPrices[cmShopCounter] = parseFloat(productPrice);
		cmShopBOQtys[cmShopCounter] = parseInt(backOrdered);
		cmShopCounter++;
	}
}

/* render the aggregated cart lineitems with Shop 5 tags*/
function cmDisplayShop5s(){
	var i;
	for(i=0; i<cmShopCounter;i++){
		var cm = new _cm("tid", "4", "vn2", "e3.1");
		cm.at = "5";
		cm.pr = cmShopIds[i]; 
		cm.pm = cmShopProducts[i];
		cm.cg = cmShopCats[i];
		cm.qt = cmShopQtys[i] ;
		cm.bp = cmShopPrices[i];
		cm.sx2 = cmShopBOQtys[i];
		cm.pc = "N";
		cm.writeImg();
	}
	cmShopCounter=0;
}

/*
 * Creates a Shop tag with Action 9 (Order Receipt / Confirmed)
 *
 * productID	: required. Product ID to set on this Shop tag
 * productName	: required. Product Name to set on this Shop tag
 * quantity	: required. Quantity to set on this Shop tag
 * productPrice	: required. Price of one unit of this product
 * customerID	: required. ID of customer making the purchase
 * orderID	: required. ID of order this lineitem belongs to
 * orderTotal	: required. Total price of order this lineitem belongs to
 * categoryID	: optional. Category to set on this Shop tag
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateShopAction9Tag(productID, productName, productQuantity,
				productPrice, customerID, orderID,
				orderTotal, categoryID,  backOrdered) {
	var index = cmGetProductIndex(productID);
	if(index!=-1){
		var oldPrice = cmShopPrices[index];
		var oldQty = cmShopQtys[index];
		var oldBOQty = cmShopBOQtys[index];
		var newQty = oldQty + parseInt(productQuantity);
		var newBOQty = oldBOQty + parseInt(backOrdered);
		var newPrice = (oldPrice*oldQty + parseInt(productQuantity)*parseFloat(productPrice))/(newQty);

		cmShopPrices[index] = newPrice;
		cmShopQtys[index] = newQty;
		cmShopBOQtys[index] = newBOQty;
		cmShopSKUs[index] = "|" + productID + "|" + newPrice + "|" + newQty + "|";
	} else {
		if (!categoryID) {
			categoryID = "";
		}
		cmShopProducts[cmShopCounter] = cmStripIllegals(productName);
		cmShopIds[cmShopCounter] = productID;			
		cmShopOrderIds[cmShopCounter] = orderID;
		cmShopOrderPrices[cmShopCounter] = orderTotal;
		cmShopCustomerIds[cmShopCounter] = customerID;
		cmShopCats[cmShopCounter] = cmStripIllegals(categoryID);
		cmShopQtys[cmShopCounter] = parseInt(productQuantity);
		cmShopPrices[cmShopCounter] = parseFloat(productPrice);
		cmShopSKUs[cmShopCounter] = "|" + productID + "|" + productPrice + "|" + productQuantity + "|";
		cmShopBOQtys[cmShopCounter] = parseInt(backOrdered);
		cmShopCounter++;
	}
}

/* render the aggregated order lineitems with Shop 9 tags*/
function cmDisplayShop9s(){
	var i;
	for(i=0; i<cmShopCounter;i++){
		var cm = new _cm("tid", "4", "vn2", "e3.1");
		cm.at = "9";
		cm.pr = cmShopIds[i]; 
		cm.pm = cmShopProducts[i];
		cm.cg = cmShopCats[i];
		cm.qt = cmShopQtys[i] ;
		cm.bp = cmShopPrices[i];
		cm.cd = cmShopCustomerIds[i];
		cm.on = cmShopOrderIds[i];
		cm.tr = cmShopOrderPrices[i];
		cm.sx2 = cmShopBOQtys[i];
		cm.pc = "N";
		cm.writeImg();
	}
	cmShopCounter=0;
}

/*
 * Creates an Order tag
 *
 * orderID			: required. Order ID of this order
 * orderTotal		: required. Total of this order (minus tax and shipping)
 * orderShipping	: required. Shipping charge for this order
 * customerID		: required. Customer ID that placed this order
 * customerCity		: optional. City of Customer that placed this order
 * customerState	: optional. State of Customer that placed this order
 * customerZIP		: optional. Zipcode of Customer that placed this order
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateOrderTag(orderID, orderTotal, orderShipping, customerID, 
			  customerCity, customerState, customerZIP, orderCoupon, orderTax, shippingDescription, customerCountry) {
	
		var cm = new _cm("tid", "3", "vn2", "e3.1");
		cm.on = orderID;
		cm.tr = orderTotal;
		cm.osk = getOSK();
		cm.sg = orderShipping;
		cm.cd = customerID;
		cm.sa = customerState;
		cm.ct = customerCity;
		cm.zp = customerZIP;
		cm.or1 = orderCoupon;
		cm.or2 = orderTax;
		cm.or3 = shippingDescription;
		cm.cy = customerCountry;
		cm.writeImg();
	
}

function getOSK() {
	var i =0;
	var result = "";
	for (i=0; i<cmShopCounter; i++)
	{
		result += cmShopSKUs[i];
	}
	return result;
}

/*
 * Creates a Registration tag and/or a Newsletter tag
 *
 * customerID		: required for Registration. ID of Customer to register.
 * customerEmail	: required for Newsletters. Optional for Registration.
 * customerCity		: optional. City of Customer that placed this order
 * customerState	: optional. State of Customer that placed this order
 * customerZIP		: optional. Zipcode of Customer that placed this order
 * newsletterName	: required for Newsletters. The name of the Newsletter.
 * subscribe		: required for Newsletters. Either "Y" or "N"
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateRegistrationTag(customerID, customerEmail, customerCity,
				customerState, customerZIP) {
	var cm = new _cm("tid", "2", "vn2", "e3.1");
	cm.cd = customerID;
	cm.em = customerEmail;
	cm.sa = customerState;
	cm.ct = customerCity;
	cm.zp = customerZIP;

	//if (newsletterName && subscribe) {
		//cm.nl = newsletterName;
		//cm.sd = subscribe;
	//}
	
	cm.writeImg();
}

/* Creates an Error Tag
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
 
function cmCreateErrorTag(pageID,categoryID) {
	//pageID = getDefaultPageID();
	var cm=new _cm("tid", "404", "vn2", "e3.1");  //DO NOT CHANGE THESE PARAMETERS
	
	// get the referrer from the frameset
	if (parent.cm_ref != null) {
		cm.rf = parent.cm_ref;
		parent.cm_ref = document.URL;
	}

	cm.pc = "Y";
	cm.pi = cmStripIllegals(pageID);
	cm.cg = cmStripIllegals(categoryID);

	cmCheckCMEM();

	cm.writeImg();
	var messageText = "cmPageID:" + pageID + ",cmCatID:" + categoryID + ",cmDocLocation:" + document.location;
	//ltsMetrics(messageText);
}

/*
 * Creates a Newsletter tag 
 * Added 11/4/05 
 * customerEmail		: Required
 * newsletterName       : Required
 * subscriptionFlag		: Required - either a "Y" or an "N".
 * customerCity			: optional - City of Customer that placed this order.
 * customerState		: optional - State of Customer that placed this order.
 * customerZIP			: optional - Zip Code of Customer that placed this order.
 * gender				: optional - send nulls if not populated.
 *
 * returns nothing, causes a document.write of an image request for this tag.
 */
function cmCreateNewsletterTag(customerEmail,newsletterName,subscriptionFlag, customerCity, customerState, customerZIP,gender) {
	var cm = new _cm("tid", "2", "vn2", "e3.1");
	cm.em = customerEmail;
	cm.nl = newsletterName;
	cm.sd = subscriptionFlag;
	cm.sa = customerState;
	cm.ct = customerCity;
	cm.zp = customerZIP;
	if (gender) {
		cm.gd = gender;
	}
	
	cm.writeImg();
}

// HELPER FUNCTIONS -----------------------------------------------------------
/* These functions are used by the tag-generating functions and/or may be used
 * in in general as convenience functions
 */

/*
 * Creates an acceptable default Page ID value to use for Pageview tags.
 * The default Page ID is based on the URL, and consists of the path and
 * filename (without the protocol, domain and query string).
 * 
 * example:
 * returns "x/y/MyPage.asp" for the URL http://www.mysite.com/x/y/MyPage.asp
 */
function getDefaultPageID() { 
	var pageName = window.location.pathname; 

	// eliminates everything after "?" (for Opera browswers)
	var tempIndex1 = pageName.indexOf("?");
	if (tempIndex1 != -1) {
		pageName = pageName.substr(0, tempIndex1);
	}
	// eliminates everything after "#" (for Opera browswers)
	var tempIndex2 = pageName.indexOf("#");
	if (tempIndex2 != -1) {
		pageName = pageName.substr(0, tempIndex2);
	}
	// eliminates everything after ";"
	var tempIndex3 = pageName.indexOf(";");
	if (tempIndex3 != -1) {
		pageName = pageName.substr(0, tempIndex3);
	}

	var slashPos = pageName.lastIndexOf("/");
	if (slashPos == pageName.length - 1) {
		pageName = pageName + "default.asp"; /****************** SET TO DEFAULT DOC NAME */
	}

	while (pageName.indexOf("/") == 0) {
		pageName = pageName.substr(1,pageName.length);
	}

	return(pageName); 
} 

if (defaultNormalize == null) { var defaultNormalize = null; }

function myNormalizeURL(url, isHref) {
    var newURL = url;
    // ... transform newURL here ...
    if (defaultNormalize != null) {
        newURL = defaultNormalize(newURL, isHref);
    }
    return newURL;
}

// install normalization
if (document.cmTagCtl != null) {
    var func = "" + document.cmTagCtl.normalizeURL;
    if (func.indexOf('myNormalizeURL') == -1) {
        defaultNormalize = document.cmTagCtl.normalizeURL;
        document.cmTagCtl.normalizeURL = myNormalizeURL;
    }
}

//-->
