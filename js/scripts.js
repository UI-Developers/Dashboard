// JS - Alert Banner

const alert = document.getElementById( "alert" );

// create the html for the banner
alert.innerHTML = `<div class="alert-banner">
	<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
	to complete</p>
	<a href="javascript:void(0);"><p class="alert-banner-close">&times;</p></a>
  </div>`;

// add event listener to close button
alert.addEventListener( 'click' , e => {
	const element = e.target;
		if (element.classList.contains( "alert-banner-close" )) {
		alert.style.display = "none"
	}
});

// JS - Messaging Section
const user = document.getElementById("user-search");
const message = document.getElementById("user-message");
const send = document.getElementById("btn-send");
const messageUser = document.getElementById("messageUser");

function displayMessage(outcomeMessage) {
	messageUser.innerHTML = `<spam>`+ outcomeMessage +`</spam>`;
	message.value = "";
	user.value = "";
}

// add event listener to close button Message User
messageUser.addEventListener( 'click' , e => { 
	const element = e.target;
		if (element.classList.contains( "messageOutcome-close" )) {
		messageUser.style.display = "none";
	}
});

// new notifications indicator 
function refreshNotificationIcon() {
	var notification = document.getElementById('ul').getElementsByTagName('li');
	if (notification.length > 0) {
		document.getElementById('notification').style.visibility="visible";
	} else {
		document.getElementById('notification').style.visibility="hidden";
	}
}
refreshNotificationIcon();


// bell notification messages
const ul = document.getElementById('ul');
const messageInput = document.getElementById('user-message');
const usernameInput = document.getElementById('user-search');
const btnClose = document.getElementsByClassName('btn-close');

function receivedNotification() {
	let li = document.createElement('li');
	li.innerHTML += '<a><span class="green-circle">&#9679;</span>' + usernameInput.value + ': ' + messageInput.value + '<button class="btn-close">&times;</button></a>';
	ul.appendChild(li);
	refreshNotificationIcon();
}

// Remove Notification
document.addEventListener('click', function(e) {
	if (e.target.className == 'btn-close') {
		let li = e.target.parentNode.parentNode;
		let ulList = li.parentNode;
		ulList.removeChild(li);
		refreshNotificationIcon();
	}
});

send.addEventListener( 'click' , function() {
// ensure user and message fields are filled out
var outcomeMessage;
if (user.value === "" && message.value === "" ) {
		outcomeMessage = "<p class='messageOutcome-error'>Please fill out user and message fields before sending</p>";
	} else if (user.value === "" ) {
		outcomeMessage = "<p class='messageOutcome-error'>Please fill out user field before sending</p>";
	} else if (message.value === "" ) {
		outcomeMessage = "<p class='messageOutcome-error'>Please fill out message field before sending</p>";
	} else {
		outcomeMessage = `<p class='messageOutcome-success'>Message successfully sent to: ${user.value}<a href="javascript:void(0);"><span class="messageOutcome-close">&times;</span></a></p>`;
	}
	var argument = [message.value, user.value];
	receivedNotification(...argument);
	displayMessage(outcomeMessage);
});



