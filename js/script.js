var url = "http://46.101.130.226:8088/referendum?cmd=status";

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

var xhr = createCORSRequest('GET', url);
if (!xhr) {
  throw new Error('CORS not supported');
}

xhr.onload = function() {
	var responseText = xhr.responseText;
	console.log(responseText);
	// process the response.
	process(responseText);
};

xhr.onerror = function() {
  console.log('There was an error!');
};

xhr.send();


/*var xhr = new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4 && xhr.status == 200) {
	var obj = JSON.parse(xhr.responseText);
		process(obj);
	}
};
xhr.send();*/
/*
function randomId(prefix,suffix){
	return (prefix || "_id_") +
		   Math.floor(Math.random()*999999+1000000) +
		   (suffix || "")
	;
}

function loadJSONP(url,success,failure){
	console.log("Attempting JSONP...");
	var s = document.createElement("script");
	var cbname = randomId("_cbf");
	console.log(cbname);
	s.src = url + "?callback=" + cbname;
	var processed = false;
	window[cbname]=function(obj){
		processed=true;
		console.log("Processing the JSON object");
		success(obj);
	};
	s.onload = function(){
		if(!processed){
			console.error("JSONP: Unpadded answer for: " + url);
			if(failure) failure();
		}
		console.log("Cleaning up injected <script> element");
		document.body.removeChild(this);
		delete window[cbname] ;
	};
	s.onerror = function(){
		console.error("JSONP: Resource non available for: " + url);
	};
	document.body.appendChild(s);
}*/
function process(jsonText){
	var status = JSON.parse(jsonText);
	var el = document.getElementById("info_status");
	var html = "Tweet: " + status.tweets + " / Utenti: " + status.users + " (status: " + status.content + ")";
	//var html = "<p>There are " + pubs.length + " publications<p><ul>";
  /*for(var i=0; i<5; ++i){
    html+="<li>" + pubs[i].authors_string +
          ", '<em>" + pubs[i].title +
          "</em>', " + pubs[i].date +
          "</li>";
  }
  html+="</ul>";*/
  el.innerHTML = html;
  //el.style.color = "black";
}/*

window.onload = function(){
  loadJSONP(url,process);
};*/


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

/*var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight
    });
    document.body.appendChild(pattern.canvas());*/