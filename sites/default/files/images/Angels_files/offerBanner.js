//Include the cookie sheet
//document.write('<script type="text/javascript" src="/html/includes/cookieSheet.js"></script>');
//flag to return distribution bucket or no bucket
var offerBucket = true;
var ABC_TESTING = true;
//flag to show banner on landing pages 
var landingFlag = false;
//flag to show offer asset on Semi Sale pages 
var sasABFlag = false;
//flag to show banner on collection pages
//var collABFlag = false;

// If true, this flag will replace the private sale clearance graphic
// on index2.cfm and select_size.cfm pages
var privSaleTest = false;
var isPlayed = "";

//MDC variables
// Logic associated with implementing a test
var LAUNCH_DATE = "02-17-10";// Must be updated with each full content launch
var HOME_PAGE = "homepage";
var LANDING_PAGE = "landing";
var IMAGE = "image";
var LOCAL_DIV = "localDiv";
var REMOTE_DIV = "remote";
//home page AB test logic 

function homePagerunTest(hpFlag)
{
	var cmBucket = getVSCookie("vShip");
	var bucketVal = getExperience("T1");
	var ftrImage = new Image();
	var ftrMap="";
	//var bannerMap="";
	var coreText="Home Page " + getCMTestString();
	var troyText="HOMEPAGE " + getCMTestString();
	//var bannerImage = new Image();	
	var flashFlag = 'N';
	

	var requiredFlashVersion = "9.0.0";			
	var flashXml = "/images/homepage/11-19-09/xml/vs-data-b.xml";
	
	var flashFtr = "/images/homepage/02-17-10/VS_Home.swf";	
	var promoXml = "/images/homepage/02-17-10/xml/promo.xml";
	var swfCtn = "/images/homepage/02-17-10/VS_Home_contained.swf";
	
	//set default version first	
	if(cmBucket == "market") {
		bucketVal='Y';
	} 
	if(hpFlag==true)
	{		
		if(bucketVal=='B'){			
			document.getElementById('video_on').style.display = 'block';		
			if (swfobject.hasFlashPlayerVersion(requiredFlashVersion))
			{
				var flashvars = { xmlPath: "/images/homepage/02-17-10/xml/vs-data-b.xml" ,promoXMLPath:promoXml, containedSwfPath:swfCtn};
				var params = {allowFullScreen: true, allowScriptAccess: "always", wmode: "transparent", bgcolor: "#FFFFFF"};			
				var attributes = {id: "flash_content"};
				swfobject.embedSWF("/images/homepage/02-17-10/VS_Home.swf", "flash_content", "286", "124", "9", "/html/includes/flash/expressInstall.swf", flashvars, params, attributes);
			}
		}
		else {
			document.getElementById('video_off').style.display = 'block';			
		}
	}	
	//coremetrics call for Home Page
	cmCreateTechPropsTag(coreText,"MAIN PAGES");
	troyMetrics(troyText);
	
}

//Landing pages offer banner loader
function loadBanner()
{
	var cmBucket = getVSCookie("vShip");
	var bucketVal = getExperience("T1");
	var altText = "";
	var offerImage = new Image();
	var offerLink ="";
	//set default version first	
	altText ="";
	
	//set default version first	
	if(cmBucket == "market" || cmBucket == "marketMSN") {
		bucketVal='A';
	}
	
	if (landingFlag == true) 
	{	
		if (bucketVal=='B'){
			offerImage.src = "/images/common/spacer.gif";
			document.getElementById('offer_img').style.height = '25px';
			document.getElementById('offer_img').style.width = '1px';
			document.getElementById("offer_link").removeAttribute('href');
			document.getElementById("offer_link").setAttribute('nohref',"");					
		}	
		else {
			offerImage.src = "/images/landing/siteoffer/offer.gif";			
			altText = "$15 Off $100 or More, $30 Off $150, $75 Off $250. Use offer code SPRING10. Click for details.";
			offerLink = "javascript:ShowPopup2('/html/popup/SpecialOffer/index.html', 430, 380, 'no');";
			document.getElementById("offer_link").href = offerLink;
			document.getElementById("offer_img").src = offerImage.src;	
			document.getElementById("offer_img").setAttribute('alt', altText);			
		}		
	}
	else 
	{
			offerImage.src = "/images/landing/siteoffer/offer.gif";			
			altText = "$15 Off $100 or More, $30 Off $150, $75 Off $250. Use offer code SPRING10. Click for details.";
			offerLink = "javascript:ShowPopup2('/html/popup/SpecialOffer/index.html', 430, 380, 'no');";
			document.getElementById("offer_link").href = offerLink;
			document.getElementById("offer_img").src = offerImage.src;	
			document.getElementById("offer_img").setAttribute('alt', altText);	
	}
	document.getElementById("offer_link").style.fontSize='0pt';
}

//Private Sale Offer Image Loader
function privateSaleOffer()
{
	var bucketVal = getExperience("T1");
	if(getVSCookie("vShip") == 'market') bucketVal='Y';

	if (privSaleTest == true)
	{
		if(bucketVal == 'A'){
			document.getElementById("promo").src ="/images/private_sale/clearance_promo.gif";		
			document.getElementById("promo").alt = "Clearance, Up to 75% Off 1500+ Styles";
		}
		else if(bucketVal == 'B'){
			document.write('<map id=\'SaleMap\' name=\'SaleMap\'><area shape=\'rect\' coords=\'0,0,285,260\' href=\'javascript:ShowPopup("/html/popup/091509ClearanceLTO/index.html",500,380,"no");\' alt="Ends Tomorrow! Extra 20% Off All Clearance. Save up to 80% on already-reduced styles. Use offer code CLEAR20. Click for details."></map>');
			document.getElementById("promo").src ="/images/private_sale/clearance_promo_b.gif";
			document.getElementById("promo").useMap ="#SaleMap";
			document.getElementById("promo").alt = "Ends Tomorrow! Extra 20% Off All Clearance. Save up to 80% on already-reduced styles. Use offer code CLEAR20. Click for details.";
		}
		else{		
			document.getElementById("promo").src ="/images/private_sale/clearance_promo_b.gif";
			document.getElementById("promo").alt = "Ends Tomorrow! Extra 20% Off All Clearance. Save up to 80% on already-reduced styles. Use offer code CLEAR20. Click for details.";
		}
	}
	else
	{		
		document.getElementById("promo").src ="/images/private_sale/clearance_promo.gif";
		document.getElementById("promo").useMap = "#promoMap";				
	}

}

//Semi Sale (Search The Sale and Clearance) offer image loader
function SASloadOffer()
{
	var altText = "";
	var offerImage = new Image();
	var offerLink ="";
	//set default version first	
	altText ="";
	
	var bucketVal = getExperience("T1");
	var cmBucket = getVSCookie("vShip");
	if(cmBucket == "market" || cmBucket == "marketMSN") {
		bucketVal='Y';
	}
	
	if (sasABFlag == true) 
	{			
		if(bucketVal=='B'){
			offerImage.src = "/images/semisale/header_left_b.gif";
			offerLink = "";
			document.getElementById("offerUrl").coords ="0,0,0";
			document.getElementById("hdr_left").src = offerImage.src;
			document.getElementById("hdr_right").src = "/images/semisale/header_right_b.gif"; 			
			document.getElementById("offerUrl").href = offerLink;
			document.getElementById("offerUrl").setAttribute('alt', altText);
		}
		else {
			offerImage.src = "/images/semisale/header_left_a.gif";
			altText = "Free Shipping on Orders of $100 or More. Use offer code FREE100. Click for details.";
			offerLink = "javascript:ShowPopup('/html/popup/SpecialOffer/index.html',432,380);";
			document.getElementById("offerUrl").coords ="104,97,70";
			document.getElementById("hdr_left").src = offerImage.src; 
			document.getElementById("hdr_right").src = "/images/semisale/header_right.gif"; 
			document.getElementById("offerUrl").href = offerLink;
			document.getElementById("offerUrl").setAttribute('alt', altText);
		}
	/*
		else {
			if(bucketVal=='F'){
				offerImage.src = "/images/semisale/header_left_f.gif";
				altText = "Last Day! Free Shipping on Orders of $50 or More. Use offer code 50FREE. Click for details.";
				document.getElementById("offerUrl").coords ="102,97,75";
			}
			else {
				offerImage.src = "/images/semisale/header_left_a.gif";
				altText = "Free Shipping on Orders of $100 or More. Use offer code FREE100. Click for details.";
				document.getElementById("offerUrl").coords ="104,97,70";
			}			
			offerLink = "javascript:ShowPopup('/html/popup/SpecialOffer/index.html',432,380);";			
			document.getElementById("hdr_left").src = offerImage.src; 
			document.getElementById("hdr_right").src = "/images/semisale/header_right.gif"; 
			document.getElementById("offerUrl").href = offerLink;
			document.getElementById("offerUrl").setAttribute('alt', altText);
			document.getElementById("offerMid").style.display = "block";
		}
	*/
	}
	else {
			offerImage.src = "/images/semisale/header_left_a.gif";
			altText = "Free Shipping on Orders of $100 or More. Use offer code FREE100. Click for details.";
			offerLink = "javascript:ShowPopup('/html/popup/SpecialOffer/index.html',432,380);";
			document.getElementById("offerUrl").coords ="104,97,70";
			document.getElementById("hdr_left").src = offerImage.src; 
			document.getElementById("offerUrl").href = offerLink;
			document.getElementById("offerUrl").setAttribute('alt', altText);
	}

	//document.getElementById("hdr_left").src = offerImage.src; 
	//document.getElementById("offerUrl").href = offerLink;
	//document.getElementById("offerUrl").setAttribute('alt', altText);
}
//Sales + Special Landing page asset loader
function loadSaleSpecial()
{
	var bucketVal = getOfferVersion();
	//maps
	document.write('<map name = "offerLeftMap">');
	document.write('<area shape = "rect" coords = "0,0,272,247" href = "/Sale/index2.cfm" alt = "Clearance, Up to 75% Off 1900+ Styles"/>');
	document.write('</map>');
	document.write('<map name="offerLeftMapB">');
	document.write('<area shape="rect" coords="104,209,151,230" href="javascript:ShowPopup2(\'/html/popup/091509ClearanceLTO/index.html\',500,380,\'no\');" alt="Ends Tomorrow! Extra 20% Off All Clearance. Save up to 80% on already-reduced styles. Use offer code CLEAR20. Click for details.">');
	document.write('<area shape = "rect" coords = "5,0,229,247" href="/Sale/index2.cfm" alt="Ends Tomorrow! Extra 20% Off All Clearance. Save up to 80% on already-reduced styles. Use offer code CLEAR20. Click for details.">');
	document.write('</map>');

	var bucketVal = getExperience("T1");

	if(getVSCookie("vShip") == 'market') bucketVal='Y';

	if(privSaleTest==true)
	{
		if(bucketVal == 'A')
		{
			document.getElementById("offerLeft").src ="/images/private_sale/clearance_2_a.gif";		
			document.getElementById("offerLeft").useMap = "#offerLeftMap";	
		}
		else if(bucketVal == 'B'){
			document.getElementById("offerLeft").src ="/images/private_sale/clearance_2_b.gif";		
			document.getElementById("offerLeft").useMap = "#offerLeftMapB";	
		}
		else{	
			document.getElementById("offerLeft").src ="/images/private_sale/clearance_2_b.gif";		
			document.getElementById("offerLeft").useMap = "#offerLeftMapB";	
		}
	}
	else{		
		document.getElementById("offerLeft").src ="/images/private_sale/clearance_2.gif";
		document.getElementById("offerLeft").useMap = "#offerLeftMap";		
	}

}

//Collection page banner loader ***** GENERALLY its always set to OFF ****
function collOfferBanner()
{		
	var abcBucket=getVSCookie("abcTestBucket");
	var altText = "";
	var offerImage = new Image();
	//set default version first	
	altText ="";
	collABFlag=false;
	if (collABFlag == true) 
	{
		if(abcBucket=='J' || abcBucket=='K' || abcBucket=='L'){
		offerImage.src='/images/landing/siteoffer/offer_b.gif';
		altText ="$15 off Orders of $100+. Use offer code GETVS. Click for details.";
		document.getElementById("offer_img").src = offerImage.src; 
		document.getElementById("offer_link").href = "javascript:ShowPopup('/html/popup/SpecialOffer/index.html',380,380);";	
		document.getElementById("offer_img").setAttribute('alt', altText);
		document.getElementById("bannerDiv").style.display="block";
		//document.getElementByTagName("h1").style.padding="0";
		}
		else if(abcBucket=='D' || abcBucket=='E' || abcBucket=='F'){
		offerImage.src='/images/landing/siteoffer/offer.gif';
		altText ="Special Offer: $15 Off a $100 Order; $30 Off a $150 Order; $75 Off a $250 Order. Use offer code GETVS. Click for details.";
		document.getElementById("offer_img").src = offerImage.src; 
		document.getElementById("offer_link").href = "javascript:ShowPopup('/html/popup/SpecialOffer/index.html',380,380);";
		document.getElementById("offer_img").setAttribute('alt', altText);
		document.getElementById("bannerDiv").style.display="block";
		//document.getElementByTagName("h1").style.padding="0px";
		}
		else{
			document.getElementById("bannerDiv").style.display="none";
		}
	}
	else {
		document.getElementById("bannerDiv").style.display="none";
	}
}

function ShowPopup(path,height,width){
	var popupLink;
	var params ="";
	if(height > 500) params = 'scrollbars=yes,scrolling=yes,left=20,top=20,height=500,width =' + width;
	else params = 'scrollbars=no,scrolling=no,left=20,top=20,height=' + height +',width =' + width;
	var wintitle='SpecialOffer';
	if (location.host.indexOf("limited.com") != -1){
		popupLink = "http://"+ location.host + path;
	}
	else{
		popupLink = "http://www2.victoriassecret.com" + path;
	}
	if(height==380) wintitle = 'SpecialOffer';
	else if(height==500) wintitle = 'SpecialOffer1';
	else wintitle = 'SpecialOffer2';
		var mywin = window.open(popupLink,wintitle,params);void(0);	
		mywin.focus();
}

function ShowPopup2(path,height,width,scrollFlag){
	var popupLink;
	var params ="";
	if(scrollFlag=="yes") params = 'scrollbars=yes,scrolling=yes,left=20,top=20,height=500,width =' + width;
	else params = 'scrollbars=no,scrolling=no,left=20,top=20,height=' + height +',width =' + width;
	var wintitle='SpecialOffer';
	if (location.host.indexOf("limited.com") != -1){
		popupLink = "http://"+ location.host + path;
	}
	else{
		popupLink = "http://www2.victoriassecret.com" + path;
	}
	if(height==380) wintitle = 'SpecialOffer';
	else if(height==500) wintitle = 'SpecialOffer1';
	else wintitle = 'SpecialOffer2';
		// var mywin = window.open(popupLink,wintitle,params); void(0);	
		var title = Math.floor (Math.random() * 11);
		
		var mywin = window.open (popupLink, title, params);
		mywin.focus();
}

//Cookie Distribution bucket for AB test
function getOfferVersion()
{	
	//var abcBucket=getVSCookie("abcTestBucket");
	//return nothing when there is no AB test on the site;
	//if(offerBucket==false) return "";	
	//return Marketing version offer bucket from here 
	//var cmBucket = getVSCookie("vShip");	
	//if(cmBucket == "marketMsn")
	//{
	//	return "A";
	//}
	//else {
	//	return "B"
	//}
	return getCMTestString();
}

function displayDSCollBanner(type){
	var abcBucket=getVSCookie("abcTestBucket");
	var altText = "";
	var offerImage = new Image();
	if(type == 'collection'){
		offerImage.src='/images/landing/siteoffer/061509_lto_fs_25_destination_summer_hdr.gif';
		altText ="Last Day! Free Shipping on Any $25 Destination Summer Purchase. Use offer code DSUMMER. Click for details.";	
		document.getElementById("offer_img").src = offerImage.src; 
		document.getElementById("offer_link").href = "javascript:ShowPopup('/html/popup/061309DSTOffer/index.html',500,380);";	
		document.getElementById("offer_img").setAttribute('alt', altText);
		document.getElementById("bannerDiv").style.display="block";
	}
	else if(type == 'landing'){
		offerImage.src='/images/landing/siteoffer/061509_lto_fs_25_destination_summer_offer.gif';
		altText ="Last Day! Free Shipping on Any $25 Destination Summer Purchase. Use offer code DSUMMER. Click for details.";	
		document.getElementById("offer_img").src = offerImage.src; 
		document.getElementById("offer_link").href = "javascript:ShowPopup('/html/popup/061309DSTOffer/index.html',500,380);";	
		document.getElementById("offer_img").setAttribute('alt', altText);	
		//style fix
		document.getElementById("offer_link").style.fontSize='0pt';			
	}
}

function setSessionCookie(c_name,value,expiredays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value);
}

function getCookie(c_name)
{
	if (document.cookie.length>0)
  	{
  		c_start=document.cookie.indexOf(c_name + "=");
  		if (c_start!=-1)
    	{
    		c_start=c_start + c_name.length+1;
    		c_end=document.cookie.indexOf(";",c_start);
    		if (c_end==-1) c_end=document.cookie.length;
    		return unescape(document.cookie.substring(c_start,c_end));
    	}
 	}
	return "";
}

/*
This function is called for any asset being swapped by an AB test. It returns without taking any action if the test 
has only one experience defined in the cookie sheet. 
*/
function loadExperience(pageType, divID, mapName, testName, sourceType){
	// don't replace anything if there are no alternative test expereinces
	if (getNbrExperiences(testName) <= 1 ) {
		return;
	}
	var experience = getExperience(testName);
	if (pageType == HOME_PAGE) {
		var coreText="Home Page " + getCMTestString();
		var trackingText="HOMEPAGE";
		cmCreateTechPropsTag(coreText,"MAIN PAGES");
		troyMetrics(trackingText);

	}
	var divColl = document.getElementById(divID);
	// The replacement assets are not in the source HTML file but are in folders in docroot.
	if (sourceType == IMAGE )
	{
		if(pageType == HOME_PAGE){
				var imgColl = divColl.getElementsByTagName("img");		
				var imageName = imgColl[0].getAttribute("name");
				imgColl[0].setAttribute("src", "/images/homepage/" + LAUNCH_DATE + "/" + experience.toLowerCase() 
						+ "/" + imageName + ".jpg");
				imgColl[0].setAttribute("useMap",mapName + "_" + experience);		
		}
		else if(pageType == LANDING_PAGE){
			var collName = getParameter("cgNbr");
			// Return if the URL is invalid
			if ( collName == "" ) {
				return;
			}
			var imgColl = divColl.getElementsByTagName("img");		
			var imageName = imgColl[0].getAttribute("name");
			imgColl[0].setAttribute("src", "/images/landing/" + LAUNCH_DATE + "/" + collName.toUpperCase() + "/" 
				+ experience.toLowerCase() + "/" + imageName + ".jpg");
			imgColl[0].setAttribute("useMap","#"+mapName);		
		}
	}
	// Use div asset in the local file with the necessary name for the test instead of an asset from the docroot folder.
	else if (sourceType == LOCAL_DIV ) {
		var newDivID = divID + "_" + experience.toUpperCase();
		document.getElementById(divID).innerHTML = document.getElementById(newDivID).innerHTML;	
	}
	// The html content in folders under doc root will be used.
	else if ( sourceType == REMOTE_DIV ) {
		if(pageType == HOME_PAGE){
				divColl.setAttribute("src", "/html/homepage/" + "/" + experience.toLowerCase() 
						+ "/" + divID + ".html");
				imgColl[0].setAttribute("useMap","#" + mapName);		
		}
		else if(pageType == LANDING_PAGE){
			var collName = getParameter("cgNbr");
			// Return if the URL is invalid
			if ( collName == "" ) {
				return;
			}
			imgColl[0].setAttribute("src", "/html/landing/" + collName.toUpperCase() + "/" 
				+ experience.toLowerCase() + "/" + divID + ".html");
			imgColl[0].setAttribute("useMap","#"+mapName);		
		}
	}
	else {
		return;
	}
}