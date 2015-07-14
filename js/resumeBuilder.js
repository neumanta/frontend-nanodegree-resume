/*
	TAN codeing goes here
 */

/* Appends the new text to the existing Main section which is
	identified as:
		<div id="main">
*/


var sampleObject = {
	"items" : [
		{
			"XXXX" : "",
			"XXXX" : "",
			"XXXX" : "",
			"XXXX" : "",
			"XXXX" : "",
			"XXXX" : ""
		}
	]
};


var work = {
	"jobs" : [
		{
			"employer" : "Computer Automation Systems, Inc.",
			"title" : "Developer",
			"location" : "Denver, Colorado",
			"dates" : "1998-Present",
			"description" : "Software developer and development manager."
		},
		{
			"employer" : "Technology Solutions Company",
			"title" : "Consultant",
			"location" : "Chicago, Illinois",
			"dates" : "1994-1998",
			"description" : "Provide architecture and technical guidance on a variety of projects."
		},
		{
			"employer" : "Lashley, Van Horne, and Neuman",
			"title" : "Senior Developer",
			"location" : "Atlanta, Georgia",
			"dates" : "1988-1990",
			"description" : ""
		}
	]	
};

var projects = {
	"project" : [
		{
			"title" : "toxiCALL(r)",
			"dates" : "1998-Present",
			"description" : "Software for poison control centers",
			"image" : "http://main.toxicall.com/Main/Content/Images/toxiCALL.png"
		},
		{
			"title" : "toxiTRACK(r)",
			"dates" : "2001-Present",
			"description" : "Poison Center Centralized Management.",
			"image" : "http://main.toxicall.com/Main/Content/Images/toxiTRACK.png"
		},
		{
			"title" : "toxiCALL(r) Data Analysis",
			"dates" : "2012-Present",
			"description" : "Poison Center Data Analysis Tool",
			"image" : "http://main.toxicall.com/Main/Content/Images/toxiCALL-Data-Analysis.png"
		}
	]
};	

var bio = {
	"name" : "Thomas Neuman",
	"role" : "Developer",
	"welcomeMessage" : "Greeting from Tom!",
	"pic" : "http://www.ohmygahh.com/wp-content/uploads/2013/03/michael-cera-dorky-guy-2013.jpg",
	"contacts" : 
		{
			"geneirc" : "",
			"mobile" : "",
			"email" : "neumanta@aol.com",
			"github" : "",
			"twitter" : "",
			"blog" : "",
			"location" : "Denver, Colorado"
		}
	,
	"skills" : [
		"C#", 
		"VB6", 
		"Python", 
		"Java", 
		"HTML", 
		"CSS"]
};

var education = {
	"schools" : [
		{
			"name" : "Devry Institute of Technology",
			"location" : "Chicago, Illinois",
			"degree" : "BS",
			"major" : "Game and Simulation Programming",
			"dates" : 2010,
			"url" : "http://www.devry.edu/"
		},
		{
			"name" : "Georgia Institute of Technology",
			"location" : "Atlanta, Georgia",
			"degree" : "MSCS",
			"major" : "in progress",
			"dates" : 2015,
			"url" : "http://www.gatech.edu/"
		}

	],
	"onlineCourses" : [
		{
			"title": "Front-end Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015",
			"url": "http://www.udacity.com/"
		}
	]

};




bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("#header").append(HTMLbioPic.replace("%data%", bio.pic));

	// Each contact must be formatted manually, no array present.
	//$("#header").append(HTMLcontactGeneric.replace("%data%", bio.contacts.generic));
	//$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
	//$("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	//$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
	//$("#header").append(HTMLblog.replace("%data%", bio.contacts.blog));
	$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));


	// Check to see if any skills have been defined
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));	
		}
	}

};


work.display = function() {
	// Add the jobx to the list
	if (work.jobs.length > 0) {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var employerInfo = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
				.concat(HTMLworkTitle.replace("%data%", work.jobs[job].title))
				.concat(HTMLworkDates.replace("%data%", work.jobs[job].dates))
				.concat(HTMLworkLocation.replace("%data%", work.jobs[job].location))
				.concat(HTMLworkDescription.replace("%data%", work.jobs[job].description));
			$(".work-entry:last").append(employerInfo);	
			// dot signifies the class. 
			//	:last indicates append to the last entry.
		
		}
	}
}

education.display = function() {
	if (education.schools.length > 0) {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var schoolInfo = HTMLschoolName.replace("%data%", education.schools[school].name)
				.concat(HTMLschoolDegree.replace("%data%", education.schools[school].degree))
				.concat(HTMLschoolDates.replace("%data%", education.schools[school].dates))
				.concat(HTMLschoolLocation.replace("%data%", education.schools[school].location))
				.concat(HTMLschoolMajor.replace("%data%", education.schools[school].major));
			$(".education-entry:last").append(schoolInfo);	
			// dot signifies the class. 
			//	:last indicates append to the last entry.
		
		}
	}

	$("#education").append(HTMLonlineClasses);
	if (education.onlineCourses.length > 0) {
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var schoolInfo = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)
				.concat(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school))
				.concat(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates))
				.concat(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
			$(".education-entry:last").append(schoolInfo);	
			// dot signifies the class. 
			//	:last indicates append to the last entry.
		
		}
	}
}

//$(document).click(function(loc) {
//	// Display the location where the user clicks on the page
//	logClicks(loc.pageX, loc.pageY);
//});




function inName(oldName) {
    var finalName = oldName;
    // Your code goes here!
console.log("Old Name: " + oldName);

	// Test to ensure the name has been passed,
	//		if the name has not been passed use the bio name.
	if (oldName === undefined)
		oldName = bio.name;

    if (oldName.length + "" > 0) { // ensure oldName is a string, not null
	    var n = oldName.trim().split(" ");
	   
	    n[0] = n[0].slice(0,1).toUpperCase() + n[0].slice(1).toLowerCase();
	    n[1] = n[1].toUpperCase();
	    
	    finalName = n.join(" ");
	}
    return finalName;
}


projects.display = function() {
	if (projects.project.length > 0) {
		for (project in projects.project) {
			$("#projects").append(HTMLprojectStart);
			var image = HTMLprojectImage.replace("%data%", projects.project[project].image);
			image = image.replace("<img ", "<img height='auto' width='150' ");
			var projectInfo = HTMLprojectTitle.replace("%data%", projects.project[project].title)
				.concat(HTMLprojectDates.replace("%data%", projects.project[project].dates))
				.concat(HTMLprojectDescription.replace("%data%", projects.project[project].description))
				.concat(image);
			$(".project-entry:last").append(projectInfo);	
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#map-div").append(googleMap);






