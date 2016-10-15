function disegna(xvalues,yvalues,id){
    var data = [{
    x: xvalues,
    y: yvalues,
    marker:{
    	color: ['#0099ff', '#ff9933']
  	},
    type: "bar"
  }];
  var annotationContent = [];
  var layout = {
    //title: "Intenzioni di voto",
    /*width: 400,
    height: 400,*/
    ticks:"outside",
    font: {
      size: 12
    },
    yaxis: {
    	  tickformat: "%"
    },
    annotations: annotationContent
  };
  for( var i = 0 ; i < xvalues.length ; i++ ){
	  var result = {
	    x: xvalues[i],
	    y: yvalues[i].toPrecision(4),
	    text: (yvalues[i]*100).toPrecision(4)+"%",
	    xanchor: 'center',
	    yanchor: 'bottom',
	    showarrow: false
	  };
  annotationContent.push(result);
  var annot = {
	    	   xref: 'paper',
				yref: 'paper',
				x: 0,
				xanchor: 'right',
				y: 1,
				yanchor: 'bottom',
				text: '<b>Utenti %</b>',
				showarrow: false
  		};
	annotationContent.push(annot);
}

  Plotly.plot(id, data, layout);
}

function disegnaTrend(xvalues,y1,y2,y3,id){
	var trace1={
		name:"SI",
	   	x: xvalues,
	   	y: y1,
       	type: "scatter",
       	fill: "tozeroy",
       	mode: "lines"		
	};
	var trace2={
		name:"NO",
	   	x: xvalues,
	   	y: y2,
       	type: "scatter",
       	fill: "tonexty",
       	mode: "lines"
	};
	var trace3={
		name:"Maggioranza",
		x: xvalues,
		y: y3,
		type: "scatter",
		mode: "lines",
		line: {
		    dash: 'dot',
		    width: 4
  		}
	};
    var data = [trace1,trace2,trace3];
  var layout = {
    //title: "Trend voto",
    font: {
      size: 12
    },
    yaxis: {
    	  tickformat: "%",
    	  range: [0,1]
    },
    xaxis: {
    	title: "Time",
    	type: 'date',
		//tickformat: "%a, %d"
    },
	annotations: [{
	    	   xref: 'paper',
				yref: 'paper',
				x: 0,
				xanchor: 'right',
				y: 1,
				yanchor: 'bottom',
				text: '<b>Utenti %</b>',
				showarrow: false
  				}]
  };

  Plotly.plot(id, data, layout);
}

function disegnaDayTrend(xvalues,y1,y2,y3,id){
	var trace1={
		name:"SI",
	   	x: xvalues,
	   	y: y1,
	   	mode: 'lines+markers',
  		line: {shape: 'hv'},
  		type: 'scatter',
       	fill: "tozeroy",
	};
	var trace2={
		name:"NO",
	   	x: xvalues,
	   	y: y2,
	   	mode: 'lines+markers',
  		line: {shape: 'hv'},
  		type: 'scatter',
       	fill: "tonexty"
	};
	var trace3={
		name:"Maggioranza",
		x: xvalues,
		y: y3,
		type: "scatter",
		mode: "lines",
		line: {
		    dash: 'dot',
		    width: 4
  		}
	};
    var data = [trace1,trace2,trace3];
  var layout = {
    //title: "Trend voto",
    font: {
      size: 12
    },
    yaxis: {
    	  tickformat: "%",
    	  range: [0,1]
    },
    xaxis: {
    	title: "Time",
    	type: 'date',
		//tickformat: "%a, %d"
    },
	annotations: [{
	    	   xref: 'paper',
				yref: 'paper',
				x: 0,
				xanchor: 'right',
				y: 1,
				yanchor: 'bottom',
				text: '<b>Utenti %</b>',
				showarrow: false
  				}]
  };

  Plotly.plot(id, data, layout);
}

function disegnaWeekTrend(xvalues,y1,y2,y3,id){
	var trace1={
		name:"SI",
	   	x: xvalues,
	   	y: y1,
	   	mode: 'lines+markers',
  		line: {shape: 'hv'},
  		type: 'scatter',
       	fill: "tozeroy",
	};
	var trace2={
		name:"NO",
	   	x: xvalues,
	   	y: y2,
	   	mode: 'lines+markers',
  		line: {shape: 'hv'},
  		type: 'scatter',
       	fill: "tonexty"
	};
	var trace3={
		name:"Maggioranza",
		x: xvalues,
		y: y3,
		type: "scatter",
		mode: "lines",
		line: {
		    dash: 'dot',
		    width: 4
  		}
	};
    var data = [trace1,trace2,trace3];
  var layout = {
    //title: "Trend voto",
    font: {
      size: 12
    },
    yaxis: {
    	  tickformat: "%",
    	  range: [0,1]
    },
    xaxis: {
    	title: "Time",
    	type: 'date',
		//tickformat: "%a, %d"
    },
	annotations: [{
	    	   xref: 'paper',
				yref: 'paper',
				x: 0,
				xanchor: 'right',
				y: 1,
				yanchor: 'bottom',
				text: '<b>Utenti %</b>',
				showarrow: false
  				}]
  };

  Plotly.plot(id, data, layout);
}

function disegnaPop(xv,y1,y2,y3,id){
	
	var trace1={
		//histnorm: 'count',
		name: "SI",
		x: xv,
		y: y1,
		type: 'bar'
		
	};
	var trace2={
		name: "NO",
		x: xv,
		y: y2,
		type: 'bar'
	};
	var trace3={
		name: "Altro",
		x: xv,
		y: y3,
		type: 'bar',
		marker:{
    		color: '#006633'
    	}   	
	};
  	var data = [trace1,trace2,trace3];
  	var layout = {
	  	//title: 'Popolarità',
		xaxis: {title: 'Time',
    	type: 'date'},
		barmode: 'stack',
		bargap: 0.25,
		bargroupgap: 0.3,
		annotations: [{
	    	   xref: 'paper',
				yref: 'paper',
				x: 0,
				xanchor: 'right',
				y: 1,
				yanchor: 'bottom',
				text: '<b>#Tweets/h</b>',
				showarrow: false
  				}]
	};

  Plotly.plot(id, data, layout);
}

function stackedArea(traces) {
	for(var i=1; i<traces.length; i++) {
		for(var j=0; j<(Math.min(traces[i]['y'].length, traces[i-1]['y'].length)); j++) {
			traces[i]['y'][j] += traces[i-1]['y'][j];
		}
	}
	return traces;
}
/*
function disegnaPopVote(xv,y1,y2,y3,y4,id){
	var trace1={
		name: "SI",
		x: xv,
		y: y1,
       	type: "scatter",
       	fill: "tozeroy",
       	mode: "lines",  	
	    marker:{
    		color: '#0099ff'
    	}       		
	};
	var trace2={
		name: "Altro",
		x: xv,
		y: y2,
       	type: "scatter",
       	fill: "tonexty",
       	mode: "lines",       	
	    marker:{
    		color: '#006633'
    	} 	
	};
	var trace3={
		name: "NO",
		x: xv,
		y: y3,
       	type: "scatter",
       	fill: "tonexty",
       	mode: "lines",       	
	    marker:{
    		color: '#ff9933'
    	}
	};
	var trace4 = {
		name:"Maggioranza",
		x: xv,
		y: y4,
		type: "scatter",
		mode: "lines",
		line: {
		    dash: 'dot',
		    width: 4
  		}
	};
  	var traces = [trace1,trace2,trace3,trace4];
  	
  	var layout = {
	  	title: 'Voto/Popolarità',
		xaxis: {title: "Popolarità (#Tweets/h)"},
		yaxis: {tickformat: "%"},
		ticks:"outside",
	    font: {
	      size: 12
	    },
	    annotations: [{
	    	   xref: 'paper',
				yref: 'paper',
				x: 0,
				xanchor: 'right',
				y: 1,
				yanchor: 'bottom',
				text: '<b>Utenti %</b>',
				showarrow: false
  				}]
	};

  Plotly.plot(id, traces, layout);
}*/
function disegnaEntity(title,ytitle,col,text,num,id){
	var data=[{
	   	x: num,
	   	y: text,
  		type: 'bar',
  		orientation: 'h',
  		marker:{
    		color: col
    	}
	}];
  var layout = {
    //title: title,
    /*width: 800,*/
    //height: 80vh,
     margin: {
    l: 150,
    r: 20,
    t: 50,
    b: 100
  },
    font: {
      size: 12
    },
    xaxis: {
    	title: "Numero",
    },/*
	annotations: [{
	    	   xref: 'paper',
				yref: 'paper',
				x: 0,
				xanchor: 'right',
				y: 1,
				yanchor: 'bottom',
				text: '<b>'+ytitle+'</b>',
				showarrow: false
  				}]*/
  };
  Plotly.plot(id, data,layout);
}

/*************************************************************/
var loadingErrorMessage = "Server down! :(";
/*************************************************************/
function pre_resize(divID,WIDTH_IN_PERCENT_OF_PARENT,HEIGHT_IN_PERCENT_OF_PARENT){
	var d3 = Plotly.d3;
	var gd3 = d3.select("#"+divID).style({
		width: WIDTH_IN_PERCENT_OF_PARENT + '%',
        'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

        height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
        //'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'   
	});
	var gd = gd3.node();
	return gd;
}
function do_resize(node){
	window.addEventListener('resize', function() { Plotly.Plots.resize(node); });
}
/*************************************************************/
function votingIntentions(input,div){
	Plotly.d3.json(input,function(error,data){
	      if(error){
	        console.error(data);
	        document.getElementById(div).innerHTML=loadingErrorMessage;
	        return;
	      }

      	var gd = pre_resize(div,70,45);

	    var fazione = [];
	    var perc = [];
	    for(var i=0; i<data.length;++i){
		    var row = data[i];
		    fazione.push(row.Fazione);
		    perc.push(+row.Percentuale);
	    }
	    disegna(fazione,perc,div);
    	
    	do_resize(gd);
	});
}

function votingTrend(input,type,div){
	Plotly.d3.json(input,function(error,data){
	      if(error){
	        console.error(data);
	        document.getElementById(div).innerHTML=loadingErrorMessage;
	        return;
	      }
	      var gd = pre_resize(div,95,45);
	      var myDate;
	      var dates = [];
	      var percSI = [];
	      var percNO = [];
	      var maggioranza = [];
	      for(var i=0; i<data.length;++i){
	        var row = data[i];
	        dates.push(row.date);
	        percSI.push(row.SI);
	        percNO.push(row.NO);
	        maggioranza.push(0.5000);
	      }
		  if(type==0){
			  disegnaTrend(dates,percSI,percNO,maggioranza,div);
		  }else if(type == 1){
			  disegnaTrend(dates,percSI,percNO,maggioranza,div);
		  }else if(type == 2){
			  disegnaDayTrend(dates,percSI,percNO,maggioranza,div);
		  }else if(type == 3){
			  disegnaWeekTrend(dates,percSI,percNO,maggioranza,div);
		  }
	      do_resize(gd);
		});
}
function popularitySum(input,div){
	Plotly.d3.json(input,function(error,data){
	      if(error){
	        console.error(data);
	        document.getElementById(div).innerHTML=loadingErrorMessage;
	        return;
	      }
	      var gd = pre_resize(div,95,50);
	      var dates = [];
	      var si = [];
	      var no = [];
	      var altro = [];
	      for(var i=0; i<data.length;++i){
	        var row = data[i];
	        dates.push(row.date);
	        si.push(row.SI);
	        no.push(row.NO);
	        altro.push(row.Altro);
	      }
	      disegnaPop(dates,si,no,altro,div);
	      do_resize(gd);
		});
}
/*
function popularityVote(input){
	Plotly.d3.json(input,function(error,data){
	      if(error){
	        console.error(data);
	        document.getElementById("divGR5").innerHTML=loadingErrorMessage;
	        return;
	      }
	      var gd = pre_resize(div,70,40);
	      var pop = [];
	      var si = [];
	      var no = [];
	      var altro = [];	      
	      var maggioranza = [];
	      for(var i=0; i<data.length;++i){
	        var row = data[i];
	        pop.push(row.popularity);
	        si.push(row.yes);
	        no.push(row.no);
	        altro.push(row.other);
	        maggioranza.push(0.5000);
	      }
	      disegnaPopVote(pop,si,altro,no,maggioranza,"divGR5");
	      do_resize(gd);
		});
}*/
function entity(title,ytitle,col,input,div){
	Plotly.d3.json(input,function(error,data){
	      if(error){
	        console.error(data);
	        document.getElementById(div).innerHTML=loadingErrorMessage;
	        return;
	      }
	      var gd = pre_resize(div,90,60);
	      var text = [];
	      var num = [];
	      //console.log(data.length);
	      for(var i=data.length-16; i<data.length;i++){
	        var row = data[i];
	        text.push(row.entity);
	        num.push(row.num);
	        //console.log("["+i+"]"+row.entity+":"+row.num);
	      }
	      //console.log(data);
	      disegnaEntity(title,ytitle,col,text,num,div);
	      do_resize(gd);
		});
}

onload = function(){

		

		votingIntentions("http://46.101.130.226:8088/referendum/voting_intentions","divGR1");
		/*******************************************************/
		votingTrend("http://46.101.130.226:8088/referendum/voting_trend",0,"divGR2");
		//votingTrend("http://46.101.130.226:8088/referendum/voting_hour_trend",1,"divGR2H");
		votingTrend("http://46.101.130.226:8088/referendum/voting_day_trend",2,"divGR2D");
		votingTrend("http://46.101.130.226:8088/referendum/voting_week_trend",3,"divGR2W");
		/********************************************************/
		popularitySum("http://46.101.130.226:8088/referendum/popularity_sum","divGR3");
		/********************************************************/
		//popularityVote("popularityVote.json");
		/*********************************************************/
		entity("Menzioni (SI)","Utenti","#0099ff","http://46.101.130.226:8088/referendum/mentions_yes","divMS");
		entity("Menzioni (NO)","Utenti","#ff9933","http://46.101.130.226:8088/referendum/mentions_no","divMN");
		entity("Hashtags (SI)","Hashtags","#0099ff","http://46.101.130.226:8088/referendum/hashtags_yes","divHS");
		entity("Hashtags (NO)","Hashtags","#ff9933","http://46.101.130.226:8088/referendum/hashtags_no","divHN");
};

/*(function() {
		var d3 = Plotly.d3;

		var WIDTH_IN_PERCENT_OF_PARENT = 60,
		    HEIGHT_IN_PERCENT_OF_PARENT = 80;

		var gd3 = d3.select('#divGR1')
		    .style({
		        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
		        'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

		        height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
		        'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
		    });

		var gd = gd3.node();

		Plotly.plot("questo", [{
		    type: 'bar',
		    x: [1, 2, 3, 4],
		    y: [5, 10, 2, 8],
		    marker: {
		        color: '#C8A2C8',
		        line: {
		            width: 2.5
		        }
		    }
		}], {
		    title: 'Auto-Resize',
		    font: {
		        size: 16
		    }
		});

		window.onresize = function() {
		    Plotly.Plots.resize(gd);
		};

	})();*/