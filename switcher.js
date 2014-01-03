$( document ).ready(function() {
//Declare current number here.
  var phoneNumber = "555-555-5555";
//Declare replacement number. 
  var newNumber = "555-555-5556";
//url attribute to look for here. 
  var ppcString = "adwords";

//Replaces new number with old number if the paramater = the string. This can allow for multiple url attributes. 
if(ppcParam == ppcString){
  $("body *").replaceText( phoneNumber, newNumber );
}
//Modifies all links to make this change carry thorughout navigation of site. 
$('a').each(function() {
  $(this).attr('onclick', "javascript:addURL(this);")
});
});


//search code
$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});
//gets url attribute associated with pmc. 
var ppcParam = $.getUrlVar('pmc');

//checks to see if a url attribute is present. 

function addURL(element)
{
    $(element).attr('href', function() {
    	if(ppcParam == null){
    		return this.href;
    	}
    	else{
        return this.href + "?pmc=" + ppcParam;
    }
    });
}
//code to replace text. Slightly modified from here. Credit to Ben Alman. 

/*
 * jQuery replaceText - v1.1 - 11/21/2009
 * http://benalman.com/projects/jquery-replacetext-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);