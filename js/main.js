function hideElement(){
  document.getElementById("element").style.display="none";
}
function showElement(){
  document.getElementById("element").style.display="block";
}
function isMobileDevice() {
  testExp = new RegExp('Android|webOS|iPhone|iPad|' +
    		       'BlackBerry|Windows Phone|'  +
    		       'Opera Mini|IEMobile|Mobile' ,
    		      'i');
  if (testExp.test(navigator.userAgent))
       document.getElementById("test").innerHTML =
       		"Your device is a Mobile Device and this site is not made for mobile devices, therefore you may experince some  anomalies";
  else
       document.getElementById("test").innerHTML =
       		"Your device is NOT a Mobile Device. Go ahead to the site!";
//Original Script from http://www.opentechguides.com/how-to/article/javascript/98/detect-mobile-device.html
}
