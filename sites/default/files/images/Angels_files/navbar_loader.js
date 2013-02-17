
 //common_addon part
NS4		= (document.layers);
IE4		= (document.all);
ver4	= (NS4 || IE4);
IE5		= (IE4 && navigator.appVersion.indexOf("5.")!=-1);
isMac	= (navigator.appVersion.indexOf("Mac") != -1);
IE45	= (IE4 && isMac && navigator.appVersion.indexOf("4.5")!=-1);
isMenu	= true;
if (isMac && navigator.appVersion.indexOf("MSIE 4.0")!=-1) isMenu = false;
if (isMac && !IE45 && !NS4) callOnload = true;
else callOnload = false;
HM_DOM = (document.getElementById) ? true : false;
HM_NS4 = (document.layers) ? true : false;
HM_NS6 = (navigator.vendor == ("Netscape6") || navigator.product == ("Gecko"));
HM_NS4old = (HM_NS4 && (parseFloat(navigator.appVersion) < 4.02));
HM_IE = (document.all) ? true : false;
HM_IE4 = HM_IE && !HM_DOM;
HM_Mac = (navigator.appVersion.indexOf("Mac") != -1);
HM_IE4M = HM_IE4 && HM_Mac;
HM_IsMenu = (HM_DOM || (HM_NS4 && !HM_NS4old) || (HM_IE && !HM_IE4M));


if (HM_IsMenu)
	isMenu = HM_IsMenu;
if (HM_DOM && (navigator.vendor == ("Netscape6") || navigator.product == ("Gecko")))
	callOnload = true;

HM_GECKO = (HM_DOM && navigator.product && navigator.product == "Gecko") ? true : false;

if (IE5 && isMac) HM_DOM = false;
if(window.event + "" == "undefined") event = null;

function HM_f_PopUp(){return};
function HM_f_PopDown(){return};

popUp = HM_f_PopUp;
popDown = HM_f_PopDown;
src_inc = "";

var uniqueNameOldOnload = null;

function init() {
	if ( uniqueNameOldOnload ) uniqueNameOldOnload() ;
	flashDetect();
}

/*function displayNavDelimiter(){
}*/

var LLN_key;
var appserver = "";
var wwwserver = "";
var static_appserver = "";
var static_wwwserver = "";
var cookie_domain="";
if (location.host.indexOf("limited.com") != -1){
	appserver = location.protocol + "//" + location.host;
	wwwserver = location.protocol + "//" + location.host;
	imgserver = location.protocol + "//" + location.host;
	if (location.protocol == "https:")
	{	imgserver = "https://" + location.host;
		appserver = "https://" + location.host;
	}
	static_appserver = "http://" + location.host;
	static_wwwserver = "http://" + location.host;
	static_imgserver = "http://" + location.host;
	secure_appserver = "https://" + location.host;
    cookie_domain = ".limited.com";
} else {
	appserver = location.protocol + "//www.victoriassecret.com";
	wwwserver = location.protocol + "//www.victoriassecret.com";
	imgserver = location.protocol + "//www.victoriassecret.com";
	if (location.protocol == "https:")
	{	imgserver = "https://secure.victoriassecret.com";
		appserver = "https://secure.victoriassecret.com";
	}

	static_appserver = "http://www.victoriassecret.com";
	static_wwwserver = "http://www.victoriassecret.com";
	static_imgserver = "http://www.victoriassecret.com";
	secure_appserver = "https://secure.victoriassecret.com";	
    cookie_domain = ".victoriassecret.com";
}

// CODE FOR LANGUAGE MAP, WELCOME MESSAGE FOR TOP NAV, CHECKOUT COOKIE
function showWelcomeMessage()
 {
	var NavbarCookie = getVSCookie("NAVBAR");
	var nickname = "";
	if (NavbarCookie != "")
    	{	if (NavbarCookie.lastIndexOf(",") != -1) {
			var item_count = NavbarCookie.substring(NavbarCookie.lastIndexOf(",") + 1, NavbarCookie.length);
		}
		if (isNumeric(item_count)){

			nickname = NavbarCookie.substring(0, NavbarCookie.lastIndexOf(","));
		} else
		{	
			nickname = NavbarCookie;
		}
	}
	else
	{
		nickname = NavbarCookie;
	}
	var showheader = false;
	if (nickname != "")
	{
		document.getElementById("signinpart").innerHTML = "<!-- mp_trans_disable_start -->" + nickname + "<!-- mp_trans_disable_end -->" + ", YOU ARE SIGNED IN";//nickname + ", YOU ARE SIGNED IN";
		var sign_in_image  = document.getElementById("sign_in_image");
		sign_in_image.src = "/themes/base/images/top_nav_right_2_alt.gif";		
		sign_in_image.height = "33";
		sign_in_image.alt = "sign out";	
		
		//document.getElementById("sign_in_link").style.display="none";
		//document.getElementById("sign_out_link").style.display="block";
		document.getElementById("sign_in_link").href="/commerce/logoff.vs?namespace=main&origin=myMain.jsp&event=link.logout";
		showheader = true;
	}
	if (getVSCookie('SHOPCA') != '') {
		document.getElementById("ca_link").style.display = "block";
		showheader = true;
	}
	if (showheader)
	{
		document.getElementById("signinpart").style.className="row statusText";
		document.getElementById("signinpart").style.display="block";
	}
  }

function getMiniBagCount()
{
	// Code for setting check out cookie
	var checkoutCookie1=new CheckoutCookie();
	itemcount = checkoutCookie1.get("mini_bag_count");
	if(itemcount==undefined)
	{
	   itemcount="0";
	}
	else
	{
		itemcount=itemcount.split("\\");
		itemcount=itemcount[0];		
	}
	document.getElementById("bag-count").innerHTML=itemcount;

}
function checkThirdParty()
{
     if (document.getElementById("affiliateid").value != null)
        {   
          var vsaffid = document.getElementById("affiliateid").value;
          //VSDAFFILIATE cookie will have an expiry date of 2 days
          setCookie('VSDAFFILIATE',vsaffid,2);
        }        
}


//Function to check whether the UID cookie has already been set 
function checkCookie()
{

      var UID=getCookie('UID');
      if (UID==null || UID=="")
        {         
          var createdUUID = uuid();
          createdUUID = createdUUID.replace("-","")+"9999";
          //UID cookie will have an expiry date of 20 years/7300 days
          setCookie('UID',createdUUID,7300);
        }
        
}

//This Function takes cookie name as input and checks whether the cookie is created
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


//This Function takes cookie name, value, No. of days to expire as input and creates the cookie
function setCookie(c_name,value,expires)
{        
      var exdate=new Date();
      var cookie_domain = "";
          if(expires != "" && expires != null)
          {
          	exdate.setDate(exdate.getDate()+expires);
          }
          //check if the domain is "ad.infosys.com"
          if (location.host.indexOf("limited.com") != -1){		
	      cookie_domain = ".limited.com";
	   }else{	  		
	      cookie_domain = ".victoriassecret.com";
	   }
	      
	var curCookie=c_name+ "=" +escape(value) + "; path=/" + "; domain=" + cookie_domain + ";expires=" + exdate.toUTCString() + ";";
       //alert("SetCookie: "+curCookie);
   
      document.cookie = curCookie;
}
function uuid()
{
  // Private array of chars to use
  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');  
    var chars = CHARS, uuid = [];
    radix = chars.length;
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (var i = 0; i < 36; i++) 
    {
        if (!uuid[i]) 
        {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
    } 
    return uuid.join('');  
}
function displaySecureImages()
{
	var securePaths=loadImages.split(",");	
}


function highlightTopNav()
{
  if(typeof(TopNavHighlightPath)!="undefined")
  {
    var highlightIndex="";
    var highlightedPath="";
    var categoryPaths=categPaths.split(",");
    for(var i=0;i<categoryPaths.length;i++){
      if(categoryPaths[i]==TopNavHighlightPath){
        highlightIndex=i;
        highlightedPath=categoryPaths[i];
        break;
      }
    }
    var highlightURL=""
    var highlightPaths=highlight.split(",");
    for(var j=0;j<highlightPaths.length;j++){
      if(j==highlightIndex){
        highlightURL=highlightPaths[j];
        break;
      }
    }
    
    var highlightPath=TopNavHighlightPath;
    if(document.getElementById(highlightedPath)!=null){
      document.getElementById(highlightedPath).src= highlightURL;	
    }	
    if(highlightPath == "shopping_bag"){
      document.getElementById("top_shopping_bag").src="/themes/base/images/top_nav_right_1_on.gif";
    }
    if (highlightPath == "your_account") {
      document.getElementById("top_your_account").src="/themes/base/images/top_nav_right_3_on.gif";
    }
    if (highlightPath == "sign_in") {
      document.getElementById("sign_in_image").src="/themes/base/images/top_nav_right_2_on.gif";
    }	
  }
}
/*

function highlightTopNav()
{
	var highlightIndex="";
	var highlightedPath="";
	var categoryPaths=categPaths.split(",");
	if(TopNavHighlightPath==undefined){
		var TopNavHighlightPath="";
	}
	for(var i=0;i<categoryPaths.length;i++){
		if(categoryPaths[i]==TopNavHighlightPath){
			highlightIndex=i;
			highlightedPath=categoryPaths[i];
			break;
		}
	}
	var highlightURL="";
	var highlightPaths=highlight.split(",");
	for(var j=0;j<highlightPaths.length;j++){
		if(j==highlightIndex){
			highlightURL=highlightPaths[j];
			break;
		}
	}
	var highlightPath=TopNavHighlightPath;
    if(document.getElementById(highlightedPath)!=null)
	{
		document.getElementById(highlightedPath).src= highlightURL;	
	}
	else if(highlightPath == "shopping_bag")
	{
		document.getElementById("top_shopping_bag").src="/themes/base/images/top_nav_right_1_on.gif";
	}
	else if (highlightPath == "sign_in") {
		document.getElementById("sign_in_image").src="/themes/base/images/top_nav_right_2_on.gif";
	}
	else if (highlightPath == "your_account") {
		document.getElementById("top_your_account").src="/themes/base/images/top_nav_right_3_on.gif";
	}
	else if (highlightPath == "get_email") {
		document.getElementById("top_get_email").src="/themes/base/images/top_nav_right_4_on.gif";
	}
}
*/
//
// Cookie Constants
//
var VSCC_WINDOW_DATE = "2013-01-24"; 										// for ChocChip Cookie Test
var MDC_EXPIRATION_DATE = new Date(Date.parse("Dec 31, 2038")); 			// MDC Test cookie expiration date
var VSCC_EXPIRATION_DATE = new Date(Date.parse("Dec 31, 2038")); 			// Customer classification (choc chip) cookie expiration date
var UID_EXPIRATION_DATE = new Date(Date.parse("Dec 31, 2038")); 			// UID cookie expiration date
var MKTG_EXPIRATION_DATE = new Date(Date.parse("Dec 31, 2038")); 		// Marketing Channel cookie expiration date changed for Vship implementation
var ABC_TESTING = true; 	// whether to turn all of this functionality on
var MAX_TESTS = 10; 			// Max number of separate tests possible
var MAX_BUCKETS = 100;  	// Number of possible values per test
var MDC_COOKIE_NAME = "abcTestBucket";
var MDC_EXPRDATE_COOKIE_NAME = "abcTestBucketDate";
var MKTG_COOKIE_NAME = "vShip";
var NO_COOKIE_CMVAL = "Z";	// Special CM tag value so no cookie customers do not affect CM results
var MKTG_CMVAL = "Y"; 		// Special CM tag value so marketing channel customers do not affect direct load CM results
var OFFER_TEST = "T1"; 		// Offer tests are always T1 in the cookie sheet				

//Include the cookie sheet PLEASE DO NOT REMOVE THIS LINE OF CODE
//document.write('<script type="text/javascript" src="/app/common/cookieSheet.js"></script>');
var abTestOnForPinkNavBar = false;
var cookieObject = new Array(MAX_TESTS);

checkUserAnalytics();

//comment the following call to vsShip after the ABTest
vsShipOffer();

//To get the query string value from the url newly added
function getQuerystring(key, default_)
{
  if (default_==null) default_="";
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
  var qs = regex.exec(window.top.location);
  if(qs == null)
    return default_;
  else
    return qs[1];
}


//to set the vShip cookie value already present but added the code

function vsShipOffer(){
//to Set the cookie value vShip newly added
      var coreParam =window.top.location.search.substring(1);
      var tstExpCm_mmcNew = "";
      var tstExpCm_mmc = "";
	  var MKTG_Update = "";
	  var MKTG_Result = "";
	  var MKTG_Index = "";
      var cm_mmc = getQuerystring('cm_mmc');	  
      if(coreParam.indexOf("cm_mmc")!=-1) {	  
		var MKTG_array = getVSCookie(MKTG_COOKIE_NAME).split("|");		
		MKTG_Update = getTstExp(cm_mmc);
		for(var j = 0;j<MKTG_Update.length;j++){
			if(MKTG_Update[j] != "" && MKTG_Update[j] != undefined){
				tstExpCm_mmc = MKTG_Update[j].split("|")[1];
				MKTG_Index = MKTG_Update[j].split("|")[0] - 1;
				
				if(tstExpCm_mmc!="") { 
					for(var i = 0;i<MAX_TESTS;i++){
						if(i == MKTG_Index){
							MKTG_Result = MKTG_Result + tstExpCm_mmc;
						}
						else{
							MKTG_Result = MKTG_Result + MKTG_array[i];
						}
						if(i != 9){
							MKTG_Result = MKTG_Result + "|";
						}			
					}
					if(j+1<MKTG_Update.length){
						MKTG_array = MKTG_Result.split("|");
						MKTG_Result = "";
					}
				} 
			}
		}
		setVSCookie(MKTG_COOKIE_NAME, MKTG_Result, MKTG_EXPIRATION_DATE);
		var offBucket = getVSCookie(MKTG_COOKIE_NAME);		
	}	
}


//To get the test+exp+cm_mmc value newly added function
function getTstExp(cm_mmc) {
    var tst = "";
    var tstExpCmmmc = "";
	var MKTG_Array = new Array();
    var market_exp_date = "";
    var flagCm_mmc = false;

    for (i = 0; i < cookieSheetObject.tests.length; i++) {
        for (j = 1; j < cookieSheetObject.tests[i].singleTest.length - 1; j++) {
            var tempcm_mmc = "cm_mmc=" + cm_mmc;
            var tempcm_mmc_default = "cm_mmc";
            if (tempcm_mmc == cookieSheetObject.tests[i].singleTest[j].cm_mmc) {

                var temp_length = cookieSheetObject.tests[i].singleTest.length - 1;
                market_exp_date = cookieSheetObject.tests[i].singleTest[temp_length].marketing_expiration_date;
                MKTG_Array[i] = cookieSheetObject.tests[i].singleTest[0].name.split("T")[1] + "|" + tempcm_mmc + ":" + market_exp_date;
                flagCm_mmc = true;
				break;
            } else {
				if (tempcm_mmc_default == cookieSheetObject.tests[i].singleTest[j].cm_mmc) {
					var temp_length = cookieSheetObject.tests[i].singleTest.length - 1;
					market_exp_date = cookieSheetObject.tests[i].singleTest[temp_length].marketing_expiration_date;
					MKTG_Array[i] = cookieSheetObject.tests[i].singleTest[0].name.split("T")[1] + "|"+tempcm_mmc_default + ":" + market_exp_date;
					flagCm_mmc = true;
					break;
				}
			}
        }
    }
    if (flagCm_mmc == false) {
        return tstExpCmmmc;
    }
	else{
		return MKTG_Array;
	}
}

//Return the Marketing Version
//******************************************************************************
//Uses cm_mmc parameter to determine experience, if cm_mmc parameter does not exist
//Update the market cookie with the default cm_mmc parameter
//******************************************************************************

function getMarketExperience(testName,MKTG_COOKIE_NAME_Value,rendersLike){
	var noTestFound = "";
	if(MKTG_COOKIE_NAME_Value == "MARKET_N_T1"){
		eraseVSCookie(MKTG_COOKIE_NAME);
		return noTestFound;
	}
	var testFound = false;
	var testNum = 0;
	
    while ((testFound == false) && (testNum < cookieSheetObject.tests.length)) {
        if (cookieSheetObject.tests[testNum].singleTest[0].name == testName) {
            testFound = true;
        } else {
            testNum++;
        }
    }
	var testObject = cookieSheetObject.tests[testNum].singleTest;
	var testIndex = testName.split("T")[1];
	var testIndex = testIndex-1;
	var MKTG_Test_Object = MKTG_COOKIE_NAME_Value.split("|")[testIndex];
	var MKTG_Value = MKTG_Test_Object.split(":")[0];
	var MKTG_Date = new Date(MKTG_Test_Object.split(":")[1]);
	var today = new Date();
	if(today < MKTG_Date){
		for(var i = 1;i< testObject.length;i++){
			if(MKTG_Value == testObject[i].cm_mmc){
				if(testObject[i].renders_like != "" && rendersLike){
					return testObject[i].renders_like;
				}
				else{
					return testObject[i].experience;
				}
			}
		}
	}
	return noTestFound;
	//if cm_mmc was not present in the test
}



// Start of MDC Cookie code
//******************************************************************************
// This Object will need to be updated with each new ABC test deployment
//******************************************************************************


function createAbcTestCookie() {
	for (j=0; j < MAX_TESTS; j++) {
		var randomNumber=Math.floor(Math.random()*MAX_BUCKETS )+ 1;	




		cookieObject[j] = randomNumber;	
	}	
	return cookieObject;
}

function setAbcTestBucket(testName,value) {
	var testIndex = getCookieIndex(testName);
	cookieObject[testIndex] = value;
	setMultiDimensionalVSCookie();
}
/*
 * Get the cookie for a single test dimension
 */
function getAbcTestBucket(testName) {	
	var testIndex = getCookieIndex(testName);
	return cookieObject[testIndex];
}
/*
 * Return a valid MDC
 */
function getMultiDimensionalVSCookie() {
	var invalidCookie = false;
	var value = new Array();
	value = String(getVSCookie(MDC_COOKIE_NAME)).split(',');
	if (value.length != MAX_TESTS) {
		invalidCookie = true;
	} 
	else {			
		for (j=0; j < MAX_TESTS; j++) {
			if (j > value.length) {
				//cookieObject[j] = 0;
				invalidCookie = true;
			} else {
				cookieObject[j] = value[j];
				if ( cookieObject[j] < 1 || cookieObject[j] > MAX_BUCKETS) {
					invalidCookie = true;
				}			
			}
		}
	}

	var MDCExpirationDate = getVSCookie(MDC_EXPRDATE_COOKIE_NAME);	
	if(MDCExpirationDate==""){
		setVSCookie(MDC_EXPRDATE_COOKIE_NAME, MDC_EXPIRATION_DATE, MDC_EXPIRATION_DATE);
		invalidCookie = true;		
	}
	// Plant a new cookie if the previous one had invalid values or an incorrect number of dimensions
	if (invalidCookie) {	
		cookieObject = createAbcTestCookie();
		setMultiDimensionalVSCookie();
	}
	
	return cookieObject;
}


function setMultiDimensionalVSCookie() {	

	setVSCookie(MDC_COOKIE_NAME, cookieObject, MDC_EXPIRATION_DATE);
}


/* 
 * 		Find the position in the Multi-deimensional cookie being used by this test
 */

function getCookieIndex(testName) {
	var testIndex = 0;
	for (j=0; j<cookieSheetObject.tests.length; j++) {
		if (cookieSheetObject.tests[j].singleTest[0].name == testName) {
			testIndex = cookieSheetObject.tests[j].singleTest[0].cookiePos - 1; // Decrement the testIndex since the actual cookie index starts at 0 
		}
	}
	
	return testIndex; 
	
}

/*
*	Return a string that provides a symbolic identifier for the customer experience to be used for this test dimension.
*		Special values are returned if customer cookies are disabled or if this customer is in the marketing channel.
*/
function getExperience(testName) {
    var INVALID_TEST_EXP = "A";
    var experienceName = "";
    var testFound = new Boolean(false);
    var testNum = 0;
    //vShip newly added variables
    var MKTG_COOKIE_NAME_New = "";
    var MKTG_COOKIE_NAME_Value = "";
    var index2 = 2;
    var index1 = 1;
    while ((testFound == false) && (testNum < cookieSheetObject.tests.length)) {
        if (cookieSheetObject.tests[testNum].singleTest[0].name == testName) {
            testFound = true;
        } else {
            testNum++;
        }
    }
    if (testFound == true) {
        var value = getAbcTestBucket(testName);
        var testObject = cookieSheetObject.tests[testNum].singleTest;
        var foundExperience = new Boolean(false);

        if (getVSCookie(MDC_COOKIE_NAME) == undefined || getVSCookie(MDC_COOKIE_NAME) == "") return testObject[0].default_experience;

        //vShip cookie is set then get that experience value which matches with the cm_mmc Parameter
        MKTG_COOKIE_NAME_Value = getVSCookie(MKTG_COOKIE_NAME);
        if (MKTG_COOKIE_NAME_Value != "") {
			experienceName = getMarketExperience(testName,MKTG_COOKIE_NAME_Value,true);
			if(experienceName != ""){
				return experienceName;
			}
        }
        for (testExp = 1; testExp < testObject.length; testExp++) {
            var lowBound = testObject[testExp].low - 0;
            var hiBound = testObject[testExp].high - 0;
            if ((value >= lowBound) && (value <= hiBound)) {
                experienceName = testObject[testExp].experience;
                foundExperience = true;
                break;
            }
        }
        if (foundExperience == false) {
            experienceName = testObject[0].default_experience;
        }
        return experienceName;
    } else {
        return INVALID_TEST_EXP;
    }
}


//check if current user is in the default experience, this is used for coremetrics tagging only.
function getCMTagExperience(testName){
	var DEFAULT_EXP = "X";
	var INVALID_TEST_EXP = "A";
	var experienceName = "";
	var testFound = new Boolean(false);
	var testNum = 0;
	//vShip newly added variables
	var MKTG_COOKIE_NAME_New = "";
	var MKTG_COOKIE_NAME_Value = "";
	var index2 = 2;
	var index1 = 1;
	while ((testFound == false) && (testNum < cookieSheetObject.tests.length)) {
		if (cookieSheetObject.tests[testNum].singleTest[0].name == testName) {
			testFound = true;
		} else {
			testNum++;
		}
	}
	if (testFound == true) {
		var value = getAbcTestBucket(testName);
		var testObject = cookieSheetObject.tests[testNum].singleTest;
		var foundExperience = new Boolean(false);

		if (getVSCookie(MDC_COOKIE_NAME) == undefined || getVSCookie(MDC_COOKIE_NAME) == "") return DEFAULT_EXP;

		for (testExp = 1; testExp < testObject.length; testExp++) {
			var lowBound = testObject[testExp].low - 0;
			var hiBound = testObject[testExp].high - 0;
			if ((value >= lowBound) && (value <= hiBound)) {
				experienceName = testObject[testExp].experience;
				foundExperience = true;
				break;
			}
		}
		if (foundExperience == false) {
			experienceName = DEFAULT_EXP;
		}
		return experienceName;
	} else {
		return INVALID_TEST_EXP;
	}
}


/*
*	Return a string that provides a symbolic identifier for the customer experience to be used for this test dimension.
*		Special values are returned if customer cookies are disabled or if this customer is in the marketing channel.
*		for cookie Editor
*/
function getExperienceCookieEditor(testName) {
	var INVALID_TEST_EXP = "A";
	var experienceName = "";
	var testFound = new Boolean(false);
	var testNum = 0;
	//vShip newly added variables
       var MKTG_COOKIE_NAME_New = "";
       var MKTG_COOKIE_NAME_Value = "";
       var index2 = 2;
       var index1 = 1;
	while ((testFound == false) && (testNum<cookieSheetObject.tests.length)) {
		if (cookieSheetObject.tests[testNum].singleTest[0].name == testName) {
			testFound = true;
		} else {
			testNum++;
		}
	}

	if (testFound == true) {
		var value = getAbcTestBucket(testName);
		var testObject = cookieSheetObject.tests[testNum].singleTest;
		var foundExperience = new Boolean(false);
		
		//if(getVSCookie(MDC_COOKIE_NAME)==undefined || getVSCookie(MDC_COOKIE_NAME)=="") return testObject[0].default_experience;

		for (testExp = 1; testExp<testObject.length; testExp++) {
		
			var lowBound = testObject[testExp].low - 0;
			var hiBound = testObject[testExp].high - 0;
			if ((value >= lowBound) && (value <= hiBound)) {
				experienceName = testObject[testExp].experience;
				foundExperience = true;
				break;
			}
		}

		if (foundExperience == false) {
			experienceName = testObject[0].default_experience;
		}
		return experienceName;
	} else {
		return INVALID_TEST_EXP;
	}
	

}


/*
Build a string for inclusion in CM tracking data for all active tests
*/
function getCMTestString() {
	var testCMString = "";
	var noCookie = false;
	var hasMktgCookie = false;
	var cmValue = "";
	var temp_val="T";
	
	if (ABC_TESTING) {
		var testCookie = getVSCookie(MDC_COOKIE_NAME);
		if (testCookie == "" || testCookie == undefined) {
			noCookie = true;
		}
		var mktgCookie = getVSCookie(MKTG_COOKIE_NAME);
		if (mktgCookie != "" && mktgCookie != undefined) {
			hasMktgCookie = true;
		}
		// Assemble the string for all configured test dimensions
		
		for(i=1;i<=MAX_TESTS;i++){
		for (testNum = 0; testNum < cookieSheetObject.tests.length; testNum++) {
				var testName = cookieSheetObject.tests[testNum].singleTest[0].name;//"T" + testNum;
				var temp_testName=temp_val+i;
				//alert(temp_testName+"         "+temp_val);
				// Override the normal value for customers without cookies enabled
				if (noCookie) {
					cmValue = NO_COOKIE_CMVAL;
				} else {
					cmValue = getExperience(testName);
				}
				
				// Special case for T1 only that marketing test traffic will receive a CM value of Y
				if (hasMktgCookie && testName == OFFER_TEST) {
					cmValue = MKTG_CMVAL
				}
				
				// If a test is active ( more than 1 value) add it to the Cm string
				if ( getNbrExperiences(testName) > 1 ) {
					if(testName!=temp_testName){
						continue;
					}
					else
					testCMString = testCMString + "|" + testName + cmValue;
				}
		}
		}
	}
	//alert(testCMString);
	
	return testCMString;
}



/*
Build a string for inclusion in CM tracking data for all active tests running on an page
*/

function getCMTestStringPage(testval) {
	// quickview testing
	if($('.collection')[0]){
		testval += 'T6,';
	}
	var testCMString = "";
	var noCookie = false;
	var hasMktgCookie = false;
	var cmValue = "";
	var testCMStringcmtag="";
	var temp_val="T";
	var testExp;
	var j=0;
	var testArr=testval.split(',');
	if (ABC_TESTING) {
		var testCookie = getVSCookie(MDC_COOKIE_NAME);
		if (testCookie == "" || testCookie == undefined) {
			noCookie = true;
		}
		var mktgCookie = getVSCookie(MKTG_COOKIE_NAME);
		if (mktgCookie != "" && mktgCookie != undefined) {
			hasMktgCookie = true;
		}
		// Assemble the string for all configured test dimensions
		
		for(i=1;i<=MAX_TESTS;i++){
			for(j=0;j<testArr.length;j++){
				var testName = testArr[j];
				var temp_testName=temp_val+i;
				if(testName!=temp_testName){
						continue;
				}
				else{
					// Override the normal value for customers without cookies enabled
					if (noCookie) {
						cmValue = NO_COOKIE_CMVAL;
					} else {
						cmValue = getCMTagExperience(testName);
					}
					// Special case for T1 only that marketing test traffic will receive a CM value of Y
					if (hasMktgCookie) {
						var temp_cmValue = getMarketExperience(testName,mktgCookie,false);
						if(temp_cmValue != ""){
							cmValue = temp_cmValue;
						}
					}
					// If a test is active ( more than 1 value) add it to the Cm string
					if ( getNbrExperiences(testName) > 1 ) {
						for (testNum = 0; testNum < cookieSheetObject.tests.length; testNum++) {
							for (k=1;k<cookieSheetObject.tests[testNum].singleTest.length;k++){
								if(testName==cookieSheetObject.tests[testNum].singleTest[0].name && cmValue==cookieSheetObject.tests[testNum].singleTest[k].experience){
									if(cookieSheetObject.tests[testNum].singleTest[k].cm_tag!=""){
										testCMStringcmtag=cookieSheetObject.tests[testNum].singleTest[k].cm_tag;
										testCMString = testCMString + "|" + testCMStringcmtag;
										break;
									}
									else
									{
										testCMString = testCMString + "|" + testName + cmValue;
										break;
									}
								}
								else if(testName==cookieSheetObject.tests[testNum].singleTest[0].name && cmValue =='X'){
									testCMString = testCMString + "|" + testName + cmValue;
									break;
								}
							}
						}
						if(noCookie){
							testCMString = testCMString + "|" + testName + cmValue;	
						}
					}
				}
			}
		}
	}	
	return testCMString;
}





/*
Build a string for inclusion in CM tracking data for a single test
*/
function getCMTestValue(testName) {
	var testCMString = "";
	var noCookie = false;
	var mktgCookie = false;
	var cmValue = "";
	

	
	if (ABC_TESTING) {
		var testCookie = getVSCookie(MDC_COOKIE_NAME);
		
		var mktgChannelCookie = getVSCookie(MDC_COOKIE_NAME);
		
		// Override the normal value for customers without cookies enabled
		if (testCookie == "" || testCookie == undefined) {
			cmValue = NO_COOKIE_CMVAL;
		} else {
			cmValue = getExperience(testName);
		}
		
		// Special case for T1 only that marketing test traffic will receive a different CM value
		if (mktgCookie != "" && mktgCookie != undefined && testName == OFFER_TEST) {
			cmValue = MKTG_CMVAL
		}
		
		// If a test is active ( more than 1 value) add it to the Cm string
		if ( getNbrExperiences(testName) > 1 ) {
			testCMString = testCMString + "|" + testName + cmValue;
		}
	}
		return testCMString;
}


/*
Return the tag value for a single test.
*/
function getTestVal(testName) {
	var noCookie = false;
	var hasMktgCookie = false;
	var expValue = " ";
	var liveTest = false;

	var testCookie = getVSCookie(MDC_COOKIE_NAME);
	if (testCookie == "" || testCookie == undefined) {
		noCookie = true;
	}
	var mktgCookie = getVSCookie(MKTG_COOKIE_NAME);
	if (mktgCookie != "" && mktgCookie != undefined) {
		hasMktgCookie = true;
	}

	if (noCookie) {
		expValue = NO_COOKIE_CMVAL;
	} else {
		for (j=0; j<cookieSheetObject.tests.length; j++) {
			if (cookieSheetObject.tests[j].singleTest[0].name == testName) {
				liveTest = true;
				break;
			}
		}
		if ( liveTest ) {
			expValue = getExperience(testName);
		}
	}
	
	// Special case for T1 only that marketing test traffic will receive a tracking tag value of Y
	if (hasMktgCookie && testName == OFFER_TEST) {
		expValue = MKTG_CMVAL
	}
		
	//alert(testName + ":" + expValue);
	return expValue;
}








// Return the number of different user experiences given a single test
function getNbrExperiences(testName) {
	var found = false;
	for (j=0; j<cookieSheetObject.tests.length; j++) {
		if (cookieSheetObject.tests[j].singleTest[0].name == testName) {
			testIndex = j;
			found = true;
			//alert("FOUND test Index:" + testIndex);
			break;
		}
	}
	if ( found == false) {
		var numExperiences = 0; 
	} else {
		var numExperiences = cookieSheetObject.tests[testIndex].singleTest.length - 1; 
	}
	return numExperiences;
}
//MDC Cookie code ends here

//ABtest code ends here


function formatVSDate(cDate)
{

	var varCDay = '' + cDate.getDate();	
	if (varCDay.length == 1) {
		varCDay = "0"+varCDay;
	}

	var varCMonth = '' + (cDate.getMonth()+1);		
	if (varCMonth.length == 1) {
		varCMonth = "0"+varCMonth;
	}

	var varCYear = cDate.getFullYear();
	var currDate = varCMonth + '' + varCDay + '' +varCYear;
	return currDate;

}

function getUserDetail(strVSCCAnalytics) {
	return strVSCCAnalytics.substr(0, strVSCCAnalytics.indexOf('/'));
}

function getOrderDetail(strVSCCAnalytics) {
	return strVSCCAnalytics.substr(strVSCCAnalytics.indexOf('/')+1);
}

function getVSCCDate(strVSCCUser) {
	var strVSCCDate = strVSCCUser.substr(strVSCCUser.indexOf('-')+1);
	var dtWinDate = new Date( strVSCCDate.substr(6,2), strVSCCDate.substr(0,2)-1, strVSCCDate.substr(2,2));
	dtWinDate.setFullYear(dtWinDate.getFullYear()+100);
	return  dtWinDate;
}

function getVSWindow()
{		
	var dtWinDate = new Date(VSCC_WINDOW_DATE.substr(0,4), VSCC_WINDOW_DATE.substr(5,2)-1, VSCC_WINDOW_DATE.substr(8,2));
	return dtWinDate;
}


function checkUserAnalytics() 
{		
	var currDate = formatVSDate(new Date());
	
	//Check if VSCCBAR (Choc Chip) Cookie is already planted on the users machine
	var strVSCCAnalytics = getVSCookie('VSCCBAR');	
	var strVSCCStatus=strVSCCAnalytics;
	if (strVSCCAnalytics=='' || strVSCCAnalytics==null)
	{
		//If not, check if abcTestBucket is planted on the users machine - implies a Returner
		var strABCTestBucket = getVSCookie('abcTestBucket');		
		if (strABCTestBucket == null || strABCTestBucket == '')
		{
			//if not, set her as a new User
			strVSCCStatus = "1001110-" + currDate +"/";
		}
		else {
			//if yes, set her as a Visitor
			strVSCCStatus = "1010110-" + currDate +"/";
		}		
	}
	else {
		var strNVPUser = getUserDetail(strVSCCAnalytics);
		var strPUser = getOrderDetail(strVSCCAnalytics);
		var dtVSCCookieDate = getVSCCDate(strNVPUser);
		var dtWindow = getVSWindow();
		//if the choc chip is already planted, check if the change over date is greater than cookie date
		if (dtWindow.valueOf() > dtVSCCookieDate.valueOf()) {
			//New Window Change the status to Visitor or Purchaser based on the purchase details
			//Also record the Transition Date
			if (strPUser != "") {
				//if the coockie has purchaser details, she becomes a Purchaser (either from New User or from Visitor)
				strVSCCStatus = '1010000-' + currDate +'/' + strPUser;
			}			
			else {
				//else if the cookie is a new user, she becomes a visitor. if visitor, she still be an visitor
				strVSCCStatus = "1010110-" + currDate +"/";
			}			
		}			
	}
	setVSCookie("VSCCBAR", strVSCCStatus, VSCC_EXPIRATION_DATE);

	//This cookie should be planted next to ChocChip to catch new users.

	if (ABC_TESTING)
	{	
		getMultiDimensionalVSCookie();
	}
}

function updateUserAnalytics(status, orderamount, giftcardamount, egcamount, custLBI) 
{
	var currDate = formatVSDate(new Date());	
	var strVSCCAnalytics = getVSCookie('VSCCBAR');
	var strVSCCStatus="";	
	if (strVSCCAnalytics != '' && strVSCCAnalytics!=null) {
		var strNVPUser = getUserDetail(strVSCCAnalytics);
		if (status == 'P') {		
			strVSCCStatus = strNVPUser +'/1010000-' + currDate + '-' +(orderamount*2219) + '-' + (giftcardamount*122) + '-' + (egcamount*3158) + '-' + (custLBI*6);
		}			
	}
	setVSCookie("VSCCBAR", strVSCCStatus, VSCC_EXPIRATION_DATE);
}
//new style with search box
// styles have been moved to /themes/base/candice/css/transitional.css
/*
document.writeln("<style>");
document.writeln("li.hidden {height:0px;margin:0px;padding:0px;}");
document.writeln("li.hidden .deptLink {display:none;}");
document.writeln(".searchinput {font:10px Arial;color:#333333;border-top:1px solid #404040;border-right:1px solid #d0d0d0;border-bottom:1px solid #d0d0d0;border-left:1px solid #404040;width:100px;padding:0px;margin:0px;background-color:#FFFFFF;}");
document.writeln("</style>");
*/
/**
	global mapping between sections and header images
*/

sectionHeaderImages = {
	main	: imgserver + "/images/common/navbar/navbar.gif",
	cqo		: imgserver + "/images/common/navbar/navbar_cqo.gif",
	cat		: imgserver + "/images/common/navbar/navbar_cqo.gif",
	search	: imgserver + "/images/common/navbar/navbar_search.gif",
	email	: imgserver + "/images/common/navbar/navbar_email.gif",
	cust	: imgserver + "/images/common/navbar/navbar_cust.gif",
	acct	: imgserver + "/images/common/navbar/navbar_acct.gif",
	bag		: imgserver + "/images/common/navbar/navbar_bag.gif", 
	brp		: imgserver + "/images/common/navbar/navbar_bra.gif",
	pty		: imgserver + "/images/common/navbar/navbar_pty.gif",
	slp		: imgserver + "/images/common/navbar/navbar_slp.gif",
	clo		: imgserver + "/images/common/navbar/navbar_clo.gif",
	tee		: imgserver + "/images/common/navbar/navbar_clo.gif",
	swt		: imgserver + "/images/common/navbar/navbar_clo.gif",
	shu		: imgserver + "/images/common/navbar/navbar_shu.gif",
	swm		: imgserver + "/images/common/navbar/navbar_swm.gif",
	baf		: imgserver + "/images/common/navbar/navbar_baf.gif",	
	sal	    : imgserver + "/images/common/navbar/navbar_sal.gif", 
	pnk	    : imgserver + "/images/common/navbar/navbar_pnk.gif"
	//gif	    : imgserver + "/images/common/navbar/navbar_gft.gif"
};

/** global menu settings */
MENU_SETTINGS = {
	CURRENT_SECTION		: "main",
	DEFAULT_SECTION 	: "main",
	ACTIVATE_SECTIONS	: true,
	NAV_FORM_RESET		: false
};

/* sets global variable for current site section
 * uses default value, if necessary
 */
function setCurrentSection(section)
{
	if (!section || section == "")
		section = MENU_SETTINGS.DEFAULT_SECTION;
	section = section.toLowerCase();
	MENU_SETTINGS.CURRENT_SECTION = section;	
}

function getCurrentSection()
{	
	return MENU_SETTINGS.CURRENT_SECTION;
}

/* return image path based on the section passed
 * return default image path if blank
 * or no path exists for the section
 */
function getSectionImagePath()
{	
	var imgPath = eval("sectionHeaderImages." + MENU_SETTINGS.CURRENT_SECTION);	
	imgPath = eval("sectionHeaderImages." + MENU_SETTINGS.CURRENT_SECTION);			
	if (typeof imgPath == "undefined"
					|| !MENU_SETTINGS.ACTIVATE_SECTIONS) {
		imgPath = eval("sectionHeaderImages." + MENU_SETTINGS.DEFAULT_SECTION);
	}
	return imgPath;
}
/* swaps header image based on the current section
 * optionally section could be passed along
 */
function swapNavbarImage(section)
{
	if (section && section != "")
		setCurrentSection(section);
	if (!document.images || !document.images["topnavbar"] || !document.images["topnavbar"].src)
		return;
	var imagePath = getSectionImagePath();
	if (document.images["topnavbar"].src != imagePath)
		document.images["topnavbar"].src = imagePath;
}

function getVSCookie(name, overloaded){
	var result = "";
	var start = document.cookie.indexOf(name + "=");
	var end;
	if (start != -1){
		start += (name.length + 1);
		end = document.cookie.indexOf(";", start);
		if (end == -1)
			end = document.cookie.length;
		if(!overloaded)
			result = unescape(document.cookie.substring(start, end));
		else
			result = decodeURIComponent(document.cookie.substring(start, end));
	}
	return result;
}

function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0)
    date.setTime(date.getTime() - skew);
}

function setVSCookie(name, value, expires) {
    var eDate = "";
    if(expires != "" && expires != null)
    {
    	eDate = ";expires=" + expires.toUTCString() + ";";
    }
    var curCookie = name + "=" + escape(value) + "; path=/" + "; domain=" + cookie_domain + eDate;
    document.cookie = curCookie;
}

function eraseVSCookie(name)
{
	setVSCookie(name,"","");
}

function hasFlash(flash) {
	setVSCookie("hasFlash",flash);
}

function flashDetect() {
	var flashCookie = getVSCookie('hasFlash');
	if (flashCookie== null || flashCookie == "") {
		setVSCookie("hasFlash",0);
		var flashMovie = '';
		flashMovie = flashMovie + '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="1" height="1" align="middle">';
		flashMovie = flashMovie + '<param name="allowScriptAccess" value="sameDomain" />';
		flashMovie = flashMovie + '<param name="movie" value="/flash/flash_version.swf" />';
		flashMovie = flashMovie + '<param name="low" value="high" />';
		flashMovie = flashMovie + '<param name="bgcolor" value="#FFEAF2" />';
		flashMovie = flashMovie + '<embed src="/flash/flash_version.swf" quality="high" bgcolor="#FFEAF2" width="1" height="1" name="flash_detect" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';
		if(document.getElementById("flashDetect")){
			document.getElementById("flashDetect").innerHTML = flashMovie;
		}
	}
}

isLoaded = false;
isWin = true;
HM_MenuWidth = 150;
HM_ChildOverlap = 0;
HM_ChildOffset = 0;
HM_ChildPerCentOver = null;
HM_TopSecondsVisible = .9;
HM_FontFamily = "Helvetica,Arial,sans-serif";
HM_FontSize = 7;
HM_FontBold = false;
HM_FontItalic = false;
HM_FontColor = "333333";
HM_FontColorOver = "333333";
HM_BGColor = "white";
HM_BGColorOver = "#FFC7DE";
HM_BorderWidth = 1;
HM_BorderColor = "#848684";
HM_BorderStyle = "solid";
HM_ItemPadding = 1;
HM_SeparatorSize = 0;
HM_SeparatorColor = "#848684";
HM_ImageSrc = imgserver + "/images/common/navbar/tri.gif";
HM_ImageSize = 7;
HM_ImageHorizSpace = 3;
HM_ImageVertSpace = 2;
HM_KeepHilite = true;
HM_ClickStart = false;
HM_ClickKill = false;
HM_StatusDisplayBuild = 0;
HM_StatusDisplayLink = 1;
HM_UponDisplay = null;
HM_UponHide = null;

(navigator.appVersion.indexOf("Win") > 0)?isWin=true:isWin=false;
if (!isWin && !isMac) isX = true;
else isX = false;
stylename=(window.opener!=null)?"globalstyles_popup":((isWin)?"globalstyles_normal":(isX)?"xglobalstyles":(isMac)?"macglobalstyles":"altglobalstyles");
stylename="globalstyles_normal";function getURLParam(urlParam){
	var retval = "";
	var qrystr = location.search;
	var first = qrystr.indexOf(urlParam + '=');
	if (first == -1) return retval; //not found
	var first_end = qrystr.indexOf('&', first);
	if (first_end == -1) first_end = qrystr.length+1; //this name-value pair is the last
	var start = first+urlParam.length+1;
	var end = first_end;
	if (start>end) { retval = ""; }
	else{
		retval = qrystr.substring(start, end);
		retval = unescape(retval);
	}
	return retval;
}

function isNumeric(num){
	for (i=0; i<num.length; i++)
		if (num.charAt(i) < "0" || num.charAt(i) > "9")
			return false;
	return true;
}

function setNavbarCookie(nickName, count) {
    curNavbar = getVSCookie("NAVBAR");
    if (curNavbar.lastIndexOf(",") != -1) {
		// see if current count is different from count passed in
		var tmpCount = curNavbar.substring(curNavbar.lastIndexOf(",") + 1, curNavbar.length);
		if (parseInt(tmpCount, 10) != count)
		{
			setVSCookie("NAVBAR", nickName + "," + count);
		}
    }
    else {
	      setVSCookie("NAVBAR", nickName + "," + count);
    }
}

function displayBagCount(){
	var NavbarCookie = getVSCookie("NAVBAR");
	var item_count = 0;
	if (NavbarCookie != ""){
		if (NavbarCookie.lastIndexOf(",") != -1){
			item_count = NavbarCookie.substring(NavbarCookie.lastIndexOf(",") + 1, NavbarCookie.length);
			if (item_count == "")
				item_count = 0;
			if (!isNumeric(item_count))
				item_count = 0;
		}
	}	document.writeln("<div nowrap=true class=\"breadcrumb\">");
	if (HM_NS4)
		document.writeln("<a href=\"" + static_appserver + "/commerce/viewBag.vs?namespace=shoppingBag&origin=myMain.jsp&event=link.viewBag\" class=\"breadcrumbLink\">Items in Bag:&nbsp;" + parseInt(item_count) + "</a>");
	else
		document.writeln("<a style=\"text-decoration:none;\" href=\"" + static_appserver + "/commerce/viewBag.vs?namespace=shoppingBag&origin=myMain.jsp&event=link.viewBag\" class=\"breadcrumbLink\">Items in Bag:&nbsp;" + parseInt(item_count) + "</a>");
	document.writeln("</div>");
}


//var tmpImg = new Image();
//tmpImg.onload = function () {
//  alert("Image is ready");
//} 
function getUUID()
{
	if (location.pathname == "/index.html" || location.pathname == "/index.html") return;
	if (location.protocol == "https:" && location.href.indexOf('commerce/') != -1) return;
	if (! getVSCookie("UID").length > 0) 
	{
		callUID();
	}
	
}

function setCookieEnabledCheck() {

	var cookieEnableFlag = getVSCookie("ceatbt");
	if (cookieEnableFlag == null || cookieEnableFlag == "") 
	{
		setVSCookie("ceatbt","y");
	}	
}
//display welcome string and first nav bar
function displayTopNav(welcome_flg, login_form_flg, action_url){
//bilinqual site redirect code  ...
	var domArr = location.hostname.split(".");
	var subDomain = domArr[0];
	var langImgPath = "/images/common/pagenav/top_nav_english.gif";
	if (location.host.indexOf("limited.com") != -1){
		//english to spanish from local domain		
		langImgPath="/images/common/pagenav/top_nav_english.gif";	
		document.write("<map name=\"langImgMap\">");		
		document.write("<area shape=\"rect\" coords=\"54,0,133,21\" alt=\"Spanish\"  onClick=\"cmCreateConversionEventTag('Global', '2', 'espanol', '0');\" href=\"javascript:switchSpanish();\" />");
		document.write("</map>");
	}

	if (location.host.indexOf("victoriassecret.com") != -1){
		if(subDomain == "www" || subDomain == "www2" || subDomain == "search"){
		//english to spanish		
			langImgPath="/images/common/pagenav/top_nav_english.gif";	
			document.write("<map name=\"langImgMap\">");		
			document.write("<area shape=\"rect\" coords=\"54,0,133,21\" alt=\"Spanish\" onClick=\"cmCreateConversionEventTag('Global', '2', 'espanol', '0');\" href=\"javascript:switchLanguage();\" />");
			document.write("</map>");		
		}

		if(subDomain == "espanol" || subDomain == "espanol2"){
		//spanish to english	
			langImgPath = "/images/common/pagenav/top_nav_english_off.gif";
			document.write("<map name=\"langImgMap\">");
			document.write("<area shape=\"rect\" coords=\"0,0,53,21\" alt=\"English\"  href=\"javascript:switchLanguage();\" />");
			document.write("</map>");		
		}
	}

//bilingual code ends here ...

	getUUID();
	setCookieEnabledCheck();	
	if (arguments.length == 1)
		login_form_flg = false;
	if (arguments.length == 3)
		tmp_url = action_url;
	else
		tmp_url = "/";
	if (login_form_flg)
		form_action_url = escape(tmp_url);
	else
		form_action_url = secure_appserver + "/commerce/signin.vs?namespace=main&origin=myMain.jsp&event=link.login"+ escape(tmp_url);
	if (IE45 && isMac)
		default_size = 6;
	else if (IE4)
		default_size = 11;
	else
		default_size = 8;
	var signin_str = "";
	var adamsForm = "";
	var adamsEndTD = "";

	document.writeln("<a name='top'><div id=\"siteContent\"><div id=\"siteContentClip\"><table width=\"733\" border=0 cellspacing=0 cellpadding=0 id=\"logoHeader\">");
	if (login_form_flg)
	{
		document.writeln("<form action='" + secure_appserver + "/commerce/signin.vs?namespace=shoppingBag&origin=viewBag.jsp&event=link.login' name=login method=\"post\"><tr>");
	}
	else
	{
		document.writeln("<form action='http://www.victoriassecret.com/commerce/signin.vs?namespace=main&origin=myMain.jsp&event=link.login' name=login><tr>");
	}
	document.write('<td align=left width=283><a href="' + static_wwwserver + '" ><img src="' + imgserver + '/images/common/navbar/logo.gif" border=0 alt="" width="283" height="38"></a></td>');
	document.write("<td class=navtitle valign=top align=right width=450>");
	if (getVSCookie('SHOPCA') != '')
		document.write('<div style="margin-top: 9px; margin-left: 35px;"><a href="http://www.airmilesshops.ca/servlet/ContentServer?pagename=airmilesshops/Home&RefererPage=VSCOB" title="airmilesshop.ca"><img src="' + imgserver + '/images/common/navbar/yourshops.gif" border=0 alt="airmilesshop.ca" width="109" height="20" align="left"></a></div>');	if (welcome_flg){
		var NavbarCookie = getVSCookie("NAVBAR");
		if (NavbarCookie != ""){
			if (NavbarCookie.lastIndexOf(",") != -1){
				var item_count = NavbarCookie.substring(NavbarCookie.lastIndexOf(",") + 1, NavbarCookie.length);
				if (isNumeric(item_count))
					var nickname = NavbarCookie.substring(0, NavbarCookie.lastIndexOf(","));
				else{
					var nickname = NavbarCookie;
				}
			}else{
				var nickname = NavbarCookie;
			}
			if (nickname != "")
			{
				signin_str = "<td height=\"17\" align=\"left\" valign=\"top\"><table cellspacing=\"0\" cellpadding=\"0\" ><tr><td height=\"17\" align=\"left\" valign=\"top\" style=\"font:10pxArial;color:#333;line-height:10px;\">&nbsp;&nbsp;</td><td height=\"17\" align=\"left\" valign=\"middle\" style=\"font:10px Arial;color:#333;line-height:10px;text-transform:uppercase;\">" + "<!-- mp_trans_disable_start -->" + nickname + "<!-- mp_trans_disable_end -->" + ", YOU ARE SIGNED IN</td><td valign=top><a href=\"" + static_appserver + "/commerce/logoff.vs?namespace=main&origin=myMain.jsp&event=link.logout\" class=titleLink><img src=\"" + imgserver + "/images/common/navbar/btn_sign_out.gif?\" border=\"0\" alt=\"sign out\" width=\"77\" height=\"17\"></a></td></tr></table></td>";
			}
			else
				signin_str = "<td height=\"17\" align=\"left\" valign=\"top\"><a href=\"" + secure_appserver + "/commerce/signin.vs?namespace=main&origin=myMain.jsp&event=link.login\"><img src=\"" + imgserver + "/images/common/navbar/btn_sign_in.gif?\" alt=\"Sign In\" width=\"77\" height=\"17\" hspace=\"0\" vspace=\"0\" border=\"0\" align=\"top\" ></a></td>";
		}
		else
		{
			signin_str = "<td height=\"17\" align=\"left\" valign=\"top\"><a href=\"" + secure_appserver + "/commerce/signin.vs?namespace=main&origin=myMain.jsp&event=link.login\"><img src=\"" + imgserver + "/images/common/navbar/btn_sign_in.gif?\" alt=\"Sign In\" width=\"77\" height=\"17\" hspace=\"0\" vspace=\"0\" border=\"0\" align=\"top\" ></a></td>";
		}
	}
	//adamsFormBegin = "<table cellpadding='0' cellspacing='0' border='0'><tr><td valign='top' colspan=4><img src=\"" + imgserver + "/images/common/clr_spcr.gif\" height=\"11\" width=\"1\"></td></tr><tr>";
	adamsFormBegin = "<table cellpadding='0' cellspacing='0' border='0'><tr><td valign='top' colspan=4><img src=\"" + imgserver + "/images/common/clr_spcr.gif\" height=\"11\" width=\"1\"></td></tr><tr><td colspan=2><img src=\"" + imgserver + "/images/common/clr_spcr.gif\" width=\"0px\"/></td><td colspan=2 align='right'><img src=\"" + imgserver + "/images/common/pagenav/top_nav_english.gif\" border=\"0\" useMap=\"#langImgMap\"//></td></tr><tr>";
	adamsForm = adamsForm + "<td width=\"52\" height=\"17\" align=\"left\" valign=\"top\"><img src=\"" + imgserver + "/images/atomz/search_label.gif\" width=\"52\" height=\"17\" hspace=\"0\" vspace=\"0\" border=\"0\" align=\"top\"></td><td height=\"17\" align=\"left\" valign=\"top\"><form name=\"vjunk\" id=\"vjunk\" action=\"http://search.victoriassecret.com/exec/\" method=\"post\"><input name=\"q\" type=\"text\" value=\"\" class=\"searchinput\"></td><td width=\"29\" height=\"17\" align=\"left\" valign=\"top\"><img src=\""+ imgserver + "/images/common/clr_spcr.gif\" height=1 width=1><br><input type=\"image\" class=\"image\" name=\"searchsubmit\" value=\"Search\" src=\"" + imgserver + "/images/atomz/btn_go_search.gif\" border=\"0\" width=\"29\" height=\"17\" align=\"top\" hspace=\"0\" vspace=\"0\"></form></td>";
	adamsEndTD = "</tr></table>";
	adamsForm = adamsFormBegin + adamsForm;
	adamsForm += signin_str;
	adamsForm += adamsEndTD;
	if (!welcome_flg)document.write('&nbsp;');
	if (getVSCookie('SHOPCA') != '') paddingWidth = 300; else paddingWidth = 450;
	document.write('</form>');
	document.write(adamsForm);
	document.write('</td></tr>');
	document.write('</table>');	
}

/**
 * display bottom nav links
 *
 */
function displayBottomNav(){
	if (HM_GECKO) setStyleByClass("DIV","bodyContainer","width","733px"); // bodyContainer stylesheet tweak
	var delimiter = '<span style=" margin-left:7px;"></span>|<span style=" margin-left:7px;"></span>';
	var hackersafe= '<a href="javascript:popUpWindow(\'' + static_appserver + '/html/common/security_privacy.html#SECURITY\',480,520,\'yes\',\'yes\')" title="Privacy &amp; Security"><img width="65" height="37" border="0" src=" '+ imgserver + '/images/common/navbar/vs_secure.gif"></img></a>';
	//var hackerstyle= determineHackerStyle();
	promptString = "Sign Up for Email";
	marginAdjust = (HM_GECKO)?-4:-22;
	document.write('</div></div><form name="frmBottomNavEmail" id="bottomNavEmail" action="' + static_appserver + '/emailSignup/email.html?passedEmail=' //'/commerce/application" '
	+ 'onsubmit="if(!MENU_SETTINGS.NAV_FORM_RESET)document.frmBottomNavEmail.passedEmail.value = \'\';">'
	//+ '<input type="hidden" name="namespace" value="emailexclusive">'
	//+ '<input type="hidden" name="origin" value="myMain.jsp">'
	//+ '<input type="hidden" name="event" value="link.emailexclusive">'
	+ '<table border="0" cellspacing="0" cellpadding="0" align="center"><tr><td align="left">' 
	+ hackersafe
	+ '</td><td align="left">'
	+ '<div class="bottomNavLine2" style="margin-left:15px;">'
	+ '<a href="' + static_appserver + '/commerce/giftcard-cyo.vs?namespace=main&origin=myMain.jsp&event=link.giftcardcyo" class="navLink1" title="Gift Cards">Gift Cards</a>'
	+ '<span style=" margin-left:7px;"></span>|<span style=" margin-left:6px;"></span>'
	+ '<a href="' + secure_appserver + '/html/custsrvc/orderstatus/" class="navLink1" title="Order Status">Order Status</a>'
	+ '<span style=" margin-left:7px;"></span>|<span style=" margin-left:6px;"></span>'
	+ '<a href="' + static_appserver + '/html/custsrvc/request/" class="navLink1" title="Request a Catalogue">Request a Catalogue</a>'
	+ '<span style=" margin-left:6px;"></span>|<span style=" margin-left:6px;"></span>'
	+ '<a href="' + static_appserver + '/html/custsrvc/contact/" class="navLink1" title="Contact Us">Contact Us</a>'
	+ '<span style=" margin-left:7px;"></span>|<span style=" margin-left:6px;"></span>'
	+ '<a href="' + static_appserver + '/html/custsrvc/storeloc/" class="navLink1" title="Store Locator">Store Locator</a>'
	+ '<span style=" margin-left:7px;"></span>|<span style=" margin-left:6px;"></span>'
	+ '<a href="' + static_appserver + '/html/custsrvc/angelcard/" class="navLink1" title="Angel Card">Angel Card</a>'
	+ '<span style=" margin-left:6px;"></span>|<span style=" margin-left:7px;"></span>'
	+ '<input type="text" id="signUpForEmailText" name="passedEmail" value="' + promptString + '" style="width:110px; color: #333333;margin-top:0px;padding-top: 0px;" class="navsmall" onfocus="if (!MENU_SETTINGS.NAV_FORM_RESET) {this.value = \'\'; MENU_SETTINGS.NAV_FORM_RESET = true;}" onblur="if (this.value.length == 0) {MENU_SETTINGS.NAV_FORM_RESET = false;this.value = promptString;}"></span>'//	+ '<span style="margin-left: 7px;"margin-top:-1px;class="navLink1">&gt;</span><span style="margin-left: 2px;"margin-top:-1px;><a href="/emailSignup/email.html?passedEmail=" title="Go" class="navLink1">'
//	+ '<span style="margin-left: 7px;"margin-top:-1px;class="navLink1">&gt;</span><span style="margin-left: 2px;"margin-top:-1px;><a href="javascript:if(!MENU_SETTINGS.NAV_FORM_RESET)document.frmBottomNavEmail.passedEmail.value = \'\';document.frmBottomNavEmail.submit();" title="Go" class="navLink1">'
	+ '<span style="margin-left: 7px;"margin-top:-1px;class="navLink1">&gt;</span><span style="margin-left: 2px;"margin-top:-1px;><a href="javascript:if(!MENU_SETTINGS.NAV_FORM_RESET)document.frmBottomNavEmail.passedEmail.value = \'\';emailSignup();" title="Go" class="navLink1">'
	+ 'GO</a></span>'
	+ '</div>'
	+ '<div class="bottomNavLine2" style="margin-left:15px;">'
	+ '<a href="javascript:popUpWindow(\'' + static_appserver + '/html/common/website_use.html\',335,370,\'yes\',\'yes\')" class="navLink1" title="Site Terms & Notices">Site Terms & Notices</a>'
	+ '<span style=" margin-left:6px;"></span>|<span style=" margin-left:6px;"></span>'
	+ '<a href="javascript:popUpWindow(\'' + static_appserver + '/html/common/security_privacy.html\',480,520,\'yes\',\'yes\')" class="navLink1" title="Privacy &amp; Security">Privacy &amp; Security</a>'
	+ delimiter
	+ '<a href="javascript:popUpWindow(\'' + static_appserver + '/html/common/california_privacy.html\', 380, 395,\'yes\',\'yes\')" class="navLink1" title="Your California Privacy Rights">Your California Privacy Rights</a>'
	+ delimiter
	+ '<a href="' + static_appserver + '/html/custsrvc/recallinfo/index.cfm " class="navLink1" title="Recall Information">Recall Information</a>'
	+ delimiter
	+ '<span style="font-size: 10px;font-family: Arial, Helvetica;color: #666;">&copy;' + (new Date()).getFullYear() + ' Victoria\'s Secret. All rights reserved</span></div>'
	+ '</td></table><br>'
	+ '</div></form><div id="flashDetect"></div>');
	uniqueNameOldOnload = ( window.onload ) ? window.onload : false ;
	window.onload = init;
	//i2a tracking code for iCrossing pixel  DO NOT REMOVE
	document.writeln("<script type=\"text/javascript\" src=\"/html/includes/i2a.js\"></script>");	
	//TroyMetrics for internal tracking
	troyMetricsNav();
}

function troyMetricsNav(trackParam){
	var time = new Date();
	if(trackParam==undefined || trackParam=='')
		trackParam = getVSCookie("abcTestBucket");//pass cookie values if trackParam is null or not supplied		
	var trackElement = "<img src=\"/m/a.gif?curPage="+location.href+"&referrer="+document.referrer+"&time=" + time.valueOf() +"&testBucket="+ trackParam + "\" width = \"0\" height = \"0\"/>";
	document.write(trackElement);
}

function emailSignup() {
	//var form = document.getElementById("signupForEmailForm");
	var email = document.getElementById("signUpForEmailText").value;		
	var action = static_appserver + "/emailSignup/email.html?passedEmail=";	
	if(email == "Sign up for Email" ) window.location = static_appserver + "/emailSignup/email.html?passedEmail=";
	else window.location = static_appserver + "/emailSignup/email.html?passedEmail=" + email;
}

function displayItemsMenu()
{
	displayFlatItemsMenu();
}

//display the menus
function displayFlatItemsMenu(){
	// array with link values for the navbar
	var nav_links = new Array();
	var nav_links_count = 8;
	nav_links = [
		static_appserver + "/",
		static_appserver + "/catalogue/",
		//static_appserver + "/commerce/application?namespace=emailexclusive&origin=myMain.jsp&event=link.emailexclusive",
		static_appserver + "/emailSignup/email.html?passedEmail=",
		static_appserver + "/html/custsrvc/",
		static_appserver + "/commerce/main/acctMenu.jsf?namespace=main&origin=myMain.jsp&event=link.yourAccount",
		static_appserver + "/commerce/viewBag.vs?namespace=shoppingBag&origin=myMain.jsp&event=link.viewBag",
		static_appserver + "/category/?cgnbr=OSBRPZZZZZZ",
		static_appserver + "/category/?cgnbr=OSPTYZZZZZZ",
		static_appserver + "/category/?cgnbr=OSSLPZZZZZZ",
		static_appserver + "/category/?cgnbr=OSCLOZZZZZZ",
		static_appserver + "/category/?cgnbr=OSSHUZZZZZZ",
		static_appserver + "/category/?cgnbr=OSSWMZZZZZZ",
		static_appserver + "/category/?cgnbr=OSBAFZZZZZZ",
		static_appserver + "/search/sale/",
		//static_appserver + "/category/?cgnbr=OSSALZZZZZZ&rfnbr=711",
		static_appserver + "/category/?cgnbr=OSPNKZZZZZZ",
		static_appserver + "/category/?cgnbr=OSGIFZZZZZZ"
	];
	document.write('<map name="navbar_map">'
	// + '<area shape="rect" alt="" coords="0,0,58,15" href="' + nav_links[0] + '" TARGET="_parent" ALT="Home">'
	// + '<area shape="rect" alt="" coords="83,0,214,15" href="' + nav_links[1] + '" TARGET="_parent" ALT="Catalogue Quick Order">'
	// + '<area shape="rect" alt="" coords="248,0,346,15" href="' + nav_links[2] + '" TARGET="_parent" ALT="Sign Up for Email">'
	// + '<area shape="rect" alt="" coords="382,0,486,15" href="' + nav_links[3] + '" TARGET="_parent" ALT="Customer Service">'
	// + '<area shape="rect" alt="" coords="521,0,604,15" href="' + nav_links[4] + '" TARGET="_parent" ALT="Your Account">'
	// + '<area shape="rect" alt="" coords="641,0,720,15" href="' + nav_links[5] + '" TARGET="_parent" ALT="Shopping Bag">'
	// + '<area shape="rect" alt="" coords="0,17,58,34" href="' + nav_links[6] + '" TARGET="_parent" ALT="Bras">'
	// + '<area shape="rect" alt="" coords="59,17,127,34" href="' + nav_links[7] + '" TARGET="_parent" ALT="Panties">'
	// + '<area shape="rect" alt="" coords="129,17,220,34" href="' + nav_links[8] + '" TARGET="_parent" ALT="Sleepwear">'
	// + '<area shape="rect" alt="" coords="220,17,300,34" href="' + nav_links[9] + '" TARGET="_parent" ALT="Clothing">'
	// + '<area shape="rect" alt="" coords="301,17,360,34" href="' + nav_links[10] + '" TARGET="_parent" ALT="Shoes">'
	// + '<area shape="rect" alt="" coords="363,17,414,34" href="' + nav_links[11] + '" TARGET="_parent" ALT="Swim">'
	// + '<area shape="rect" alt="" coords="418,17,481,34" href="' + nav_links[12] + '" TARGET="_parent" ALT="Beauty">'
	// + '<area shape="rect" alt="" coords="484,17,534,34" href="' + nav_links[15] + '" TARGET="_parent" ALT="Gifts">'
	// + '<area shape="rect" alt="" coords="541,17,654,34" href="' + nav_links[13] + '" TARGET="_parent" ALT="Sale &amp; Specials">'
	// + '<area shape="rect" alt="" coords="656,17,732,34" href="' + nav_links[14] + '" TARGET="_parent" ALT="Pink">'
	// + '</map>');
	+ '<area shape="rect" alt="" coords="0,0,48,15" href="' + nav_links[0] + '" TARGET="_parent" ALT="Home">'
	+ '<area shape="rect" alt="" coords="83,0,214,15" href="' + nav_links[1] + '" TARGET="_parent" ALT="Catalogue Quick Order">'
	+ '<area shape="rect" alt="" coords="248,0,346,15" href="' + nav_links[2] + '" TARGET="_parent" ALT="Sign Up for Email">'
	+ '<area shape="rect" alt="" coords="382,0,486,15" href="' + nav_links[3] + '" TARGET="_parent" ALT="Customer Service">'
	+ '<area shape="rect" alt="" coords="521,0,604,15" href="' + nav_links[4] + '" TARGET="_parent" ALT="Your Account">'
	+ '<area shape="rect" alt="" coords="641,0,720,15" href="' + nav_links[5] + '" TARGET="_parent" ALT="Shopping Bag">'
	+ '<area shape="rect" alt="" coords="0,17,61,34" href="' + nav_links[6] + '" TARGET="_parent" ALT="Bras">'
	+ '<area shape="rect" alt="" coords="63,17,137,34" href="' + nav_links[7] + '" TARGET="_parent" ALT="Panties">'
	+ '<area shape="rect" alt="" coords="139,17,238,34" href="' + nav_links[8] + '" TARGET="_parent" ALT="Sleepwear">'
	+ '<area shape="rect" alt="" coords="240,17,325,34" href="' + nav_links[9] + '" TARGET="_parent" ALT="Clothing">'
	+ '<area shape="rect" alt="" coords="327,17,395,34" href="' + nav_links[10] + '" TARGET="_parent" ALT="Shoes">'
	+ '<area shape="rect" alt="" coords="397,17,456,34" href="' + nav_links[11] + '" TARGET="_parent" ALT="Swim">'
	+ '<area shape="rect" alt="" coords="458,17,528,34" href="' + nav_links[12] + '" TARGET="_parent" ALT="Beauty">'
	+ '<area shape="rect" alt="" coords="530,17,656,34" href="' + nav_links[13] + '" TARGET="_parent" ALT="Sale &amp; Specials">'
	+ '<area shape="rect" alt="" coords="659,17,732,34" href="' + nav_links[14] + '" TARGET="_parent" ALT="Pink">'
	+ '</map>');


	var navbarImage = getSectionImagePath();
	document.write('<table cellspacing=0 cellpadding=0 border=0 width=\"733\" id=\"topnavbar\"><tr><td valign=top>');
	document.write('<img width="733" height="35" src="'
	+ navbarImage
	+ '?" alt="" border="0" usemap="#navbar_map" name="topnavbar">');
	document.write('</td></tr></table>');
}

function setStyleByClass(t,c,p,v){
	var elements;
	if(t == '*') {
		// '*' not supported by IE/Win 5.5 and below
		elements = (HM_IE) ? document.all : document.getElementsByTagName('*');
	} else {
		elements = document.getElementsByTagName(t);
	}
	for(var i = 0; i < elements.length; i++){
		var node = elements.item(i);
		for(var j = 0; j < node.attributes.length; j++) {
			if(node.attributes.item(j).nodeName == 'class') {
				if(node.attributes.item(j).nodeValue == c) {
					eval('node.style.' + p + " = '" +v + "'");
				}
			}
		}
	}
}

function popUpWindow(url, width, height, resizable, scrollbars){
	if (arguments.length == 1){
		width = 335;
		height = 370;
		resizable = "yes";
		scrollbars = "yes";
	}else if (arguments.length == 3){
		resizable = "no";
		scrollbars = "no";
	}else if (arguments.length == 4){
		scrollbars = "no";
	}
	var win = window.open(url, "PopUp", "width=" + width + ",height=" + height + ",resizable=" + resizable + ",scrollbars=" + scrollbars + ",menubar=no,toolbar=no,left=20,top=20");
}
/**
 * returns a random integer between 0 and bucketCount-1 (both inclusive)
 *
 * @param bucketsCount an integer between 1 and 10
 */

function getBucket(bucketsCount)
{
	if (!bucketsCount || !isNumeric(bucketsCount))
		bucketsCount = 2;
	return Math.floor(Math.random() * bucketsCount);
}
/**
 * check the bucket cookie; if it is not set - calculate the bucket,
 * set the cookie, set global flag to call coremetrics.
 *
 * @param bucketCount integer between 1-10
 */

function tagBucket(cookiename,bucketCount)
{
	var bucketCookieValue = getVSCookie(cookiename);
	if (bucketCookieValue == "")
	{		
		// set the cookie (A, B, C, etc) and set the flag indicating that we need to call coremetrics
		bucketCookieValue = String.fromCharCode(getBucket(bucketCount) + 65);
		setVSCookie(cookiename, bucketCookieValue, MDC_EXPIRATION_DATE);
		AB_CALL_COREMETRICS = true;
	}
	// set global variable
	AB_BUCKET = bucketCookieValue;
}
var AB_BUCKET = getVSCookie("abcTestBucket");
// fireclick
//if (location.protocol == "http:" && isWin){
//	if(typeof jQuery == "function"){
//		jQuery(function(){
//			jQuery.getScript("http://a644.g.akamai.net/f/644/67/3h/hints.netflame.cc/service/script/www.victoriassecret.com");
//		});
//	}
//	else{
//		document.writeln('<!-- mp_trans_disable_start="ES" -->');
//		document.writeln("<script defer src=\"http://a644.g.akamai.net/f/644/67/3h/hints.netflame.cc/service/script/www.victoriassecret.com\"></script>");
//		document.writeln('<!-- mp_trans_disable_end -->');
//	}
//}
// end fireclick
common_loaded = true;//---//


// SMORE Cookie Starts Here

function SmoreCookie() {
	this.cookieName = "SMORECOOKIE";
	this.myCookies = new Array();
	this.delim = "|";
	this.string = getVSCookie(this.cookieName);
	if (this.string != "") {
		this.deserialize();
	}
}

SmoreCookie.prototype.get = function(name) {
	return this.myCookies[name];
}

SmoreCookie.prototype.set = function(name,value) {
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

SmoreCookie.prototype.save = function() {
	this.string = encode(this.string);
	if (this.string.length > 2000) {
		alert("Warning: This page may not function as expected, please contact customer service.");
	}
	setVSCookie(this.cookieName,this.string, VSCC_EXPIRATION_DATE);
}

SmoreCookie.prototype.serialize = function() {
	var str = "";
	for (var name in this.myCookies) {
		str = str + name + "=" + this.myCookies[name] + this.delim;
	}
	str = str.substring(0,str.length-1);
	this.string = str;
}

SmoreCookie.prototype.deserialize = function() {
	var str = this.string;
	str = decode(this.string);
	var tokens = str.split(this.delim);
	for (i=0;i<tokens.length;i++) {
		var nvp = tokens[i].split("=");
		this.myCookies[nvp[0]] = nvp[1];
	}
}

// initialize smore cookie
var smoreCookie = new SmoreCookie();
// add this in case cm_em is in URL
var cm_em_urlparam = getParameter("cm_em");
if (cm_em_urlparam != "") {
	smoreCookie.set("email",cm_em_urlparam);
}
// BASE64 Encode
function encode(decStr){
	var base64s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var bits, dual, i = 0, encOut = '';
	while (decStr.length >= i + 3) {
		bits =
		(decStr.charCodeAt(i++) & 0xff) <<16 |
		(decStr.charCodeAt(i++) & 0xff) <<8  |
		decStr.charCodeAt(i++) & 0xff;
		encOut +=
		base64s.charAt((bits & 0x00fc0000) >>18) +
		base64s.charAt((bits & 0x0003f000) >>12) +
		base64s.charAt((bits & 0x00000fc0) >> 6) +
		base64s.charAt((bits & 0x0000003f));
    }
	if (decStr.length -i > 0 && decStr.length -i < 3) {
		dual = Boolean(decStr.length -i -1);
		bits =
		((decStr.charCodeAt(i++) & 0xff) <<16) |
		(dual ? (decStr.charCodeAt(i) & 0xff) <<8 : 0);
		encOut +=
		base64s.charAt((bits & 0x00fc0000) >>18) +
		base64s.charAt((bits & 0x0003f000) >>12) +
		(dual ? base64s.charAt((bits & 0x00000fc0) >>6) : '=') +
		'=';
    }
	return encOut
}


function decode(encStr) {
	var base64s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var bits, decOut = '', i = 0;
	for (; i<encStr.length; i += 4) {
		bits =
		(base64s.indexOf(encStr.charAt(i))    & 0xff) <<18 |
		(base64s.indexOf(encStr.charAt(i +1)) & 0xff) <<12 | 
		(base64s.indexOf(encStr.charAt(i +2)) & 0xff) << 6 |
		base64s.indexOf(encStr.charAt(i +3)) & 0xff;
		decOut += String.fromCharCode(
		(bits & 0xff0000) >>16, (bits & 0xff00) >>8, bits & 0xff);
	}
	if (encStr.charCodeAt(i -2) == 61) {
		undecOut=decOut.substring(0, decOut.length -2);
	}
	else if (encStr.charCodeAt(i -1) == 61) {
		undecOut=decOut.substring(0, decOut.length -1);
	}
	else {
		undecOut=decOut;
	}
	return unescape(undecOut);
}

function getParameter(name){
 	var out = "";
	var href = window.location.href;
	if ( href.indexOf("?") > -1 ) {
		var qs = href.substr(href.indexOf("?")).toLowerCase();
		var aqs = qs.split("&");
		for ( var i = 0; i < aqs.length; i++ ){
			if (aqs[i].indexOf(name.toLowerCase() + "=") > -1 ){
				var parm = aqs[i].split("=");
				out = parm[1];
				break;
			}
		}
	}
	return unescape(out);
}

/* added timeout so that you can not leave browser idle */
var session_minutes = 90;
var timeout;
var curLoc = (window.top.location).toString();
if ((curLoc.indexOf("vsallaccess") != -1 || curLoc.indexOf("s6z") != -1) && getVSCookie("NAVBAR").length > 0) {
	clearTimeout(timeout);
	timeout = setTimeout("renewSession()",3600000);
}else{
	clearTimeout(timeout);
	timeout = setTimeout("toSessionExpired()",session_minutes*60*1000);
}
function renewSession(){
	$("body").append("<iframe class='sessionIframe' width='1px' height='1px' style='display:none;' src='" + VSD.www + "/commerce/keepalive?bypass_mobi=yes' ></iframe>");
	if(VSD.ABTesting.is("commerce")){
		$.ajax(VSD.swww + "/commerce2/bagsummary?bypass_mobi=yes");
	}
}
function toSessionExpired() {
	var current_location = (window.top.location).toString();
	var session_page = "http://www.victoriassecret.com/error/sessionexpired.html";	
	var session_page2 = "http://www.victoriassecret.com/error/sessionexpired.html#alt";
	if (location.host.indexOf("limited.com") != -1){
	    var session_page = "/error/sessionexpired.html";	
	    var session_page2 = "/error/sessionexpired.html#alt";
	}
	var loggedin = isLoggedIn();
	var onsessionexp = (current_location.indexOf(session_page)!=-1);
	if(onsessionexp == false > 0){
		var checkoutCookie = new CheckoutCookie();
		checkoutCookie.set("mini_bag_count","0");
		removeCookie("NAVBAR");
		removeCookie("username");
		removeCookie("JSESSIONID_VSCOM");
		removeCookie("JSESSIONID");
		location.href = loggedin ? session_page2:session_page;
	}
}

function removeCookie(name){
	var now = new Date();
	document.cookie = name+"=1;expires=" + now.toGMTString() + ";";
}

function isLoggedIn() {
	var NavbarCookie = getVSCookie("NAVBAR");
	var nickname = "";
	if (NavbarCookie != "") {
		if (NavbarCookie.lastIndexOf(",") != -1) {
			var item_count = NavbarCookie.substring(NavbarCookie.lastIndexOf(",") + 1, NavbarCookie.length);
		}
		if (isNumeric(item_count)) {
			nickname = NavbarCookie.substring(0, NavbarCookie.lastIndexOf(","));
		} else {
			nickname = NavbarCookie;
		}
	} else {
		nickname = NavbarCookie;
	}
	var showheader = false;
	
	if (nickname != "") {
		return true;
	} else {
		return false;
	}

}


// LTS Metrics
function ltsMetrics(msgTxt){
	var ref = document.referrer;
	if (ref != undefined && ref != "") {
		msgTxt = msgTxt + "&from=" + ref;
	}
	var time = new Date();
    var trackElement = "<img src=\"/m/a.gif?"+msgTxt+"&time=" + time.valueOf() + "\" width = \"0\" height = \"0\"/>";
    document.write(trackElement);
}

//*********** Checkout Specific Code Here
//Include the cookie sheet PLESE DO NOT REMOVE THIS LINE OF CODE
if(typeof jQuery == "function"){
	jQuery.getScript(appserver + "/html/includes/checkout/checkout.js");
}
else{
	document.write('<script type="text/javascript" src="' + appserver + '/html/includes/checkout/checkout.js"></script>');
	if (document.body.id != null && document.body.id != "atb" && document.body.id != "vsb" && document.body.id != "opc") {
		document.write('<script type="text/javascript" src="' + appserver + '/themes/base/js/jquery.js"></script>');
	}
}

/*SAS function specific to Homepage*/
function validclearHomePage(interlink,anid,selid1,selid2,selid3,collpage)
{
		var urlToInterimPage = '/ss/Satellite?SASNavFlag=Yes&c=Page&pagename=vsdonlineshop%2FIntermediatePageTemplate';
		var fir=document.getElementById(selid1)
		var sec=document.getElementById(selid2);
		var thir=document.getElementById(selid3);
		var appendURL = "?";
		if(collpage.indexOf("?")!=-1){
			appendURL = "&";
		}
		try{
		var appendURL = appendURL +"Bras_SizeCode=" + fir.options[fir.selectedIndex].value +"&Panties_SizeCode=" + sec.options[sec.selectedIndex].value+"&Collection_BrandNameAssoc=" +thir.options[thir.selectedIndex].value;
		}catch(err){}
		
		collpage = collpage + appendURL;
		if(fir.selectedIndex!=0 && thir.selectedIndex!=0 && sec.selectedIndex==0 )
		{
			var r=document.getElementById(anid);
			r.href=collpage;
		}
		else if(sec.selectedIndex!=0 && thir.selectedIndex!=0 && fir.selectedIndex==0 )
		{
			var r=document.getElementById(anid);
			r.href=collpage;
		}
		else if(fir.selectedIndex!=0 && sec.selectedIndex!=0 && thir.selectedIndex!=0 )
		{
			var r=document.getElementById(anid);
			r.href=collpage;
		}
		else
		{
			var appendURL = "&Bras_SizeCode=" + fir.options[fir.selectedIndex].value +"&Panties_SizeCode=" + sec.options[sec.selectedIndex].value+ "&Collection_BrandNameAssoc=" +thir.options[thir.selectedIndex].value;
			interlink = urlToInterimPage+interlink + appendURL;
			interlink=unescape(interlink);
			var r=document.getElementById(anid);
			r.href=interlink;
		}
}

function callUID()
{
	//alert("call uid");
	var uidUrl = appserver + '/commerce/createUUID.jsp';
	$.post( uidUrl, function(mydata){		
		});
}
