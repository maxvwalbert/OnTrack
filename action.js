var productiveWebsite = "http://www.maxalbert.me";

var myTime = 6000;

var myVar;

var notification2;

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

  if (document.getElementById('r1').checked) {
    myTime = document.getElementById('r1').value;
  }
  else if (document.getElementById('r2').checked) {
    myTime = document.getElementById('r2').value;
  }
  else {
    myTime = document.getElementById('r3').value; 
  }

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
  var currentWebsite;
  chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
      currentWebsite = tabs[0].url;
  });
  console.log(currentWebsite);

	if(productiveWebsite != currentWebsite) {
	 notification2 = new Notification("Reminder", options2);
   notification2.onclick = function(event) {
    event.preventDefault();
    window.open(productiveWebsite, '_blank');
    }
  }
}

function onStop() {
	var notification3 = new Notification("Time to relax!", options3);
	window.clearInterval(myVar);
}