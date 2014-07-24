$(function() {
/*
$("#applySettingsBtn").click(function() {
	var myWidth = $("#myWidth").val() + "px";
	var test = "testing";
	alert (myWidth);
	$("#targetBtn").css("width", myWidth);
});
*/
$("#myWidth").change(function() {
	var myWidth = $("#myWidth").val() + "px";
	var test = "testing";
	/*alert (myWidth);*/
	$("#targetBtn").css("width", myWidth);
});

$("#mySpeed").change(function() {
	var mySpeed = $("#mySpeed").val() + "ms";
	var test = "testing";
	/*alert (myWidth);*/
	$("#targetBtn").css("transition-duration", mySpeed);
});

});
