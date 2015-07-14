/*
	TAN codeing goes here
 */

/* Appends the new text to the existing Main section which is
	identified as:
		<div id="main">
*/



var name = "Thomas Neuman";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Software Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
var skills = ["C#", "VB6", "Python", "Java", "HTML", "CSS"];

var formattedContactInfo = HTMLcontactGeneric.replace("%contact%", "Phone: ").replace("%data%", "303-680-7774");
var formattedBioPic =  HTMLbioPic.replace("%data%", "http://www.ohmygahh.com/wp-content/uploads/2013/03/michael-cera-dorky-guy-2013.jpg");
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", "Greetings from Tom");
var formattedSkills = HTMLskills.replace("%data%", skills.join(","));

// Name is prepended because we want it at the beginning
//		 of the header tag (there is a list in there)
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

// Setup the bio object
var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"contactInfo" : formattedContactInfo,
	"pictureURL" : formattedBioPic,
	"welcomeMessage" : formattedWelcomeMessage
};




// $("#header").prepend(formattedSkills);
$("#header").prepend(bio.role);
$("#header").prepend(bio.name);

$("#header").append(bio.welcomeMessage);
$("#header").append(bio.pictureURL);
$("#header").append(bio.contactInfo);

var work = {};
work.position = "Developer";
work.employer = "Computer Automation Systems, Inc.";
work.yearsWorked = 25;
work.city = "Aurora";

var educationCurrent = {};
educationCurrent["lastSchool"] = "Georgia Institute of Technology";
educationCurrent["yearsAttended"] = "2015";
educationCurrent["city"] = "Atlanta, Georgia/Online";

// This code is not presenting properly
$("#workExperience").append(work["position"]);
$("#education").append(educationCurrent.name);

var education = {
	"schools" : [
		{
			"name" : "Devry Institute of Technology",
			"location" : "Online",
			"degree" : "BS",
			"majors" : ["Game and Simulation Programming"],
			"dates" : 2010,
			"url" : "http://www.devry.edu/"
		},
		{
			"name" : "Georgia Institute of Technology",
			"location" : "Atlanta, Georgia / Online",
			"degrees" : ["MSCS"],
			"major" : "in progress",
			"dates" : 2015,
			"url" : "http://www.gatech.edu/"
		}

	]

};











