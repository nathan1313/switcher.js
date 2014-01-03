#switcher.js
===========

Easy find and replace tool for large static websites. Great for implementing call tracking. Easily track calls from Adwords, Bing and other advertising venues. 

##Usage

Simply declare your paramater, current phone number on all your static pages and what you would like to switch that number to.
Then change all advertisements to reflect that change.  

##Multi-Number Example

Often numbers aren't added to the page in a uniform fashion. Search for multiple variations of a phone number and standardize the replacement. 

	$("body *").replaceText( /1.555.555.5555|1-555-555-5555|555-555-5555|555.555.5555/gi, "555-555-5556" );

##Multi-Param Example

Normally calls would be generated from multiple advertisment sources. Simply compare all used paramaters in if statements.

	if(ppcParam == "adwords"){
	$("body *").replaceText( /1.555.555.5555|1-555-555-5555|555-555-5555|555.555.5555/gi, "555-555-5556" );
	}
	if(ppcParam == "yellowPages"){
	$("body *").replaceText( /1.555.555.5555|1-555-555-5555|555-555-5555|555.555.5555/gi, "555-555-5557" );
	}

The phone number will only change if the parameter is matched. 