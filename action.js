var productiveWebsite = "http://www.maxalbert.me";

var myTime = 6000;

var myVar;

var notification2;

var options = {
	body: "You've Started Your Homework!",
	icon: "icon.png"
}

var options2 = {
	body: "You still have unfinished HW!",
	icon: "icon.png"
}

var options3 = {
	body: "No More Work Means No More Push Notifcations. C ya next time :D.",
	icon: "icon.png"
}

function onR1() {
  //<!--this should be value="180000"-->
  //Switch to 6000 for testing purposes
  myTime = 180000;
}

function onR2() {
  myTime = 600000;
}

function onR3() {
  myTime = 1200000;
}

function onStart() {
  window.clearInterval(myVar);

  productiveWebsite = document.getElementById('f1').value;
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Success!", options);
    myVar = setInterval(notifyMe, myTime);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Success!", options);
    	myVar = setInterval(notifyMe, myTime);
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}

function notifyMe() {
	//if(productiveWebsite != currentWebsite) {
	 notification2 = new Notification("Reminder", options2);
   notification2.onclick = function(event) {
    event.preventDefault();
    window.open(productiveWebsite, '_blank');
    }
  //}
}

function onStop() {
	var notification3 = new Notification("Time to relax!", options3);
	window.clearInterval(myVar);
}