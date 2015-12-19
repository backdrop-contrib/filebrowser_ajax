(function ($) {

Backdrop.behaviors.filebrowser_extras = {
        attach: function(context) {

// this module is currently only setup for a filebrowser as a sidebar to the node/edit or node/add forms.

// each time the page loads, set up some variables for the clickhandlers to use in page navigation
$(document).ready(function() {
// viewing node as sidebar (yes) versus node (no)
nodetoload = $( ".block-content article.node-dir-listing" );
if (nodetoload.length > 0)
{
nodetoload = nodetoload[0].id;
nodetoload = nodetoload.replace("-", "/");
}
username = Backdrop.settings.filebrowser_extras.username;
baseurl = location.origin;
pathname = location.pathname;
pathnamearr  = pathname.split("node");
pathname = pathnamearr[0];






// click a folder icon to enter one folder deeper in file structure
$(".filebrowser-folder").unbind().click(function() {
// save top level file & folder content in a variable to return to it easily
if (typeof mw == 'undefined')
{
mw = $( ".views-row > article.node-dir-listing > .content" );
}

// inside folders content are placed in the folder-view element to reduce dom weight and sluggishness
if ($(".folder-view").length == 0)
{
$( ".block article.node-dir-listing" ).append("<h3 class='folder block-title'></h3><div class='folder-view'></div>");
}

var foldertitle = $( this ).text();
var foldernumber = $( this )[0].classList[1].replace("fid-", "");
$( "h3.folder" ).text(".." + foldertitle);

// remove the top level folder content from the dom to avoid name collisions
$( ".block article.node-dir-listing .content" ).detach();
var theurl = baseurl + pathname + nodetoload + "/" + foldernumber; // + " .l-content > .content"
console.log(theurl); // http://localhostnode/1/6

// load in the selected folders content via AJAX, keep javascript actions from that page intact, and reduce dom weight and sluggishness on load
$( ".folder-view" ).load(theurl, function() {
     Backdrop.attachBehaviors();
	// $( "#admin-bar").detach();
	$( ".folder-view style").detach();
	$( ".folder-view header").detach();
	$( ".folder-view .l-top").detach();
	$( ".folder-view .l-footer").detach();
});

// $( "#edit-filebrowser-uploads" ).removeClass("collapsed"); $( "#edit-filebrowser-create-folder" ).removeClass("collapsed");
setTimeout(function() { $( ".folder-view header" ).css("display", "none"); $( ".folder-view .l-top" ).css("display", "none"); $( ".folder-view footer" ).css("display", "none"); $( ".folder-view #main-content" ).css("display", "none"); $( ".folder-view h1" ).css("display", "none"); $( ".folder-view .tabs" ).css("display", "none"); $( "#filebrowser-form-upload input.form-submit" ).addClass("ajax-processed");  }, 2500);
return false;
event.preventDefault();
});






// click on the "go up" icon will remove from dom the second level content and append from variable top level content so the user sees switching pages/folders
$(document).on("click", ".filebrowser-parent", function () {
$( ".folder-view" ).html("");
$( ".folder.block-title" ).text("");
$( ".block article.node-dir-listing" ).append(mw);
return false;
event.preventDefault();
});






// click on file icon inserts the filename into the body field
$(".vr-thumb").unbind().click(function() {
var filename = $( this ).next().children(":first").data("vr");
var text = baseurl + pathname + 'files/' + username + filename;
var existingtextarea = $("#cke_edit-body-und-0-value");
var cursorPos = existingtextarea.prop('selectionStart');
var v = existingtextarea.val();
var textBefore = v.substring(0,  cursorPos );
var textAfter  = v.substring( cursorPos, v.length );
existingtextarea.val( textBefore + text + textAfter ).focus();
return false;
event.preventDefault();
});





// a click handler for the folder instructions tab in case Backdrop attributes don't load or work correctly
$(document).on("click", "#filebrowser-instructions a.fieldset-title", function () {
$( this ).toggleClass("collapsed");
$( "#filebrowser-instructions" ).toggleClass("collapsed");
// $( "#filebrowser-instructions .fieldset-wrapper" ).toggle();
return false;
event.preventDefault();
});






// listener to AJAX events on the node/add/ or node/*/edit page to refresh the file directory sidebar
$(document).ajaxComplete(function(e, xhr, settings) {

// set up some criteria for showing an error message to the user that Backdrop form handling doesnt stop.  If matches the criteria, then show message and stop AJAX.
var thetarget = e.target.URL;
if ((thetarget.indexOf("/node/add/") > 0) || ( (thetarget.indexOf("node") > 0) ) && (thetarget.indexOf("edit") > 0) )
{
var iserror = 0;
var rt = xhr.responseText;
if ((rt.indexOf("Undefined") > 0) || (rt.indexOf("Notice") > 0) ) // || (rt.indexOf("Warning") > 0) -- giving no file name gives a warning, but this should be handled in Backdrop form validate anyways
{
iserror = 1;
var em = $( ".node-dir-listing .content small.messages.error" );
em.text("Error creating file/folder: nothing processed.  Please make sure you have filled out all fields with an accepted file type and try again.").show( "slow" );
setTimeout(function() { em.hide( "slow"); }, 6000);
return false;
event.preventDefault();
}

// show success message on AJAX complete/success for file upload or folder create
// AJAX refresh the folder listings afterwards
var nodetoload = $( ".block-content article.node-dir-listing" )[0].id;
nodetoload = nodetoload.replace("-", "/");

var theaction = $( "#filebrowser-form-upload").attr("action");

// on first level of directories, the form reload action will need to be changed to the node page
// on second plus levels of directories, the form reload action will be already be the node page
if ((theaction.indexOf("/node/add/") > 0) || ( (theaction.indexOf("node") > 0) ) && (theaction.indexOf("edit") > 0) )
{
var theselector = baseurl + pathname + nodetoload + " table.sticky-enabled";
}
else
{
var theselector = baseurl + theaction + " table.sticky-enabled";
}

// reload the sidebar after a file upload or directory creation
if ( (settings.url.indexOf("/system/ajax") > 0) && (xhr.readyState == 4) && (iserror == 0) && (event.currentTarget.responseURL.indexOf("/system/ajax") > 0) )
{
$( "table.sticky-enabled" ).load(theselector, function() {
     Backdrop.attachBehaviors();
});
var sm = $( ".node-dir-listing .content small.messages.status" );
sm.text("Creation successful.").show( "slow" );
setTimeout(function() { sm.hide( "slow"); }, 6000);
return false;
event.preventDefault();
}

}


});


});
}
};

})(jQuery);
