// JS - Alert Banner

const alert = document .getElementById( "alert" );

// create the html for the banner
alert.innerHTML = `<div class="alert-banner">
	<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
	to complete</p>
	<a href="#"><p class="alert-banner-close">&times;</p></a>
</div>`;

// add event listener to close button
alert.addEventListener( 'click' , e => {
	const element = e.target;
		if (element.classList.contains( "alert-banner-close" )) {
		alert.style.display = "none"
	}
});

// JS - Messaging Section
const user = document .getElementById( "user-search" );
const message = document .getElementById( "user-message" );
const send = document .getElementByClassName( "btn-send" );

send.addEventListener( 'click' , () => {
// ensure user and message fields are filled out
if (user.value === "" && message.value === "" ) {
	alert( "Please fill out user and message fields before sending" );
	} else if (user.value === "" ) {
		alert( "Please fill out user field before sending" );
	} else if (message.value === "" ) {
		alert( "Please fill out message field before sending" );
	} else {
		alert( `Message successfully sent to: ${user.value}` );
	}
});