// "use strict";

// var testApp = angular.module("testApp", []);

// paste in your Google Chrome JavaScript console when watching a live feed...
// currently, you cannot post more than 3 comments at a time, the 4th will be removed...
const textBox = document.getElementById("live-comments-input-field");
const submitButton = document.querySelectorAll(".post-button");

const commentArray = ["Here's", "Here's my", "Here's my comment..."];

var index;
// 4: Message not sent: You've been sending too many messages. Take a break and try again.
for (index = 0; index <= 3; ++index) {
	addComment(index);
}
function addComment(index) {
	textBox.textContent = commentArray[index];
	submitButton[0].click();
}

// <kirkg@laurenselectric.com>