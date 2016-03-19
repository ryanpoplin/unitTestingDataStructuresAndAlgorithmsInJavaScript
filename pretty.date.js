function prettyDate(now, time) {
	"use strict";
  
	var date;
	(typeof time === "string") ? date = new Date(time) : date = new Date();
	console.log(date);

	var diff = ((new Date(now).getTime() - date.getTime()) / 1000);
	var dayDiff = Math.floor(diff / 86400); 

	console.log(diff); 
	console.log(dayDiff); 

	if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
	  console.log(dayDiff);
	  return "This post is over a month old";
	} else {
	  var postDate = dayDiff === 0 && (  
	    diff < 60 && "just now" ||
	    diff < 120 && "1 minute ago" ||
	    diff < 3600 && Math.floor(diff / 60) +
	      " minutes ago" ||
	    diff < 7200 && "1 hour ago" ||
	    diff < 86400 && Math.floor(diff / 3600) +
	      " hours ago") ||
	    dayDiff === 1 && "Yesterday" ||
	    dayDiff < 7 && dayDiff + " days ago" ||
	    dayDiff < 31 && Math.ceil(dayDiff / 7) +
	      " weeks ago";
	  console.log(postDate);
	  return postDate;
	}

}