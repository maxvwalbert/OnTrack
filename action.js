var productiveWebsite;

var myTime = 6000;

var myVar;

var options = {
	body: "You've Started Your Homework!",
	icon: "Pencil-icon.png"
}

var options2 = {
	body: "You still have unfinished HW!",
	icon: "Pencil-icon.png"
}

var options3 = {
	body: "No More Work Means No More Push Notifcations. C ya next time :D.",
	icon: "Pencil-icon.png"
}

function onStart() {
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
	//TODO: Check to see if the user is on a productive website
	//If not do this:
	var notification2 = new Notification("Reminder", options2);
}

function onStop() {
	var notification2 = new Notification("Time to relax!", options3);
	window.clearInterval(myVar);
}

chrome.notifications.onClicked.addListener(redirectWindow);

function redirectWindow() {
	window.open(productiveWebsite);
}