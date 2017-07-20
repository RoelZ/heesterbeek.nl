var url = "/steam/json.php?accountid=76561198015555807";

$.ajax({
	url: url,
	dataType: "json",
	success: function(data){
		console.log(data);
	},
	error: function(req,text,error){
		console.log(text);
		console.log(error);
		console.log("DIDN'T WORK!")
	}
});
/*
$.get(url,function(error, json, dataType){
  console.log(json);
});

var jqxhr = $.get( "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=B56030D1092EBB1AF70E6D389FD6CBE7&steamid=76561198015555807&callback=?", function() {
  alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });

function logResults(json){
  console.log(json);
}

$.ajax({
  url: "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=B56030D1092EBB1AF70E6D389FD6CBE7&steamid=76561198015555807&format=json",
  dataType: "jsonp",
  jsonpCallback: "logResults"
});
*/
// Setup an event listener to make an API call once auth is complete
    function onLinkedInLoad() {
        IN.Event.on(IN, "auth", getProfileData);
    }

    // Handle the successful return from the API call
    function onSuccess(data) {
        // Pre-populate your form fields here once you know the call 
        // came back successfully
    }

    // Handle an error response from the API call
    function onError(error) {
        console.log(error);
    }

    // Use the API call wrapper to request the member's basic profile data
    function getProfileData() {
        IN.API.Raw("/people/~:(firstName,lastName,emailAddress)").result(onSuccess).error(onError);
    }

		// leeftijd = today 
		// progress = year today - birthyear
		var birthyear = "1982";
		var birthday = "07-25-";
		var currentyear = new Date().getFullYear();
		var birthdate = new Date(birthday+currentyear);
		

		if(birthdate < new Date()){
			var age = currentyear-birthyear;
		} else {
			var age = (currentyear-birthyear)-1;
		}
		
		$('.counter').empty();
		
		for(i=1;i<=age;i++){
			$('.counter').append('<span>'+i+'</span>')
		}
		//$('.level').empty().append(age);
		
		// getting the number of days
		function numberDaysToBirthday(birthdate){
			if(new Date() > birthdate){
				return Math.round((new Date() - birthdate)/(1000*60*60*24));
			}
			else {
				return Math.round(365-(birthdate - new Date())/(1000*60*60*24));
			}
		}
		
		
		var quartre = 365 / 4; //91.25
		console.log(numberDaysToBirthday(birthdate) + ' ' + quartre)
		var stepComplete = false;
		
		function stepCompletion(i,el){
			if(!stepComplete){
				
				// als je dit jaar nog jarig moet worden
				//var percentageComplete = 
				var percentageComplete = Math.round(100-((numberDaysToBirthday(birthdate)-quartre*i)/(quartre))*100);
				
				if(numberDaysToBirthday(birthdate) < quartre){
					//percentage
					if(i==0){
					console.log(percentageComplete+"%");
						//console.log("100 - ("+ numberDaysToBirthday(birthdate) +" / ("+quartre+" * ( "+i+" +1 )) * 100) = "+percentageComplete);//console.log(percentageComplete+"% = "+(100-percentageComplete)+"%");//console.log(percentageComplete+"% = "+(100-percentageComplete)+"%");
						el.addClass('complete');					
						el.css('background-position',percentageComplete+'% bottom');
						stepComplete = true;
					}
				}else if(numberDaysToBirthday(birthdate) < quartre *2){
					//1st complete
					if(i==1){
					console.log(percentageComplete+"%");
						//console.log("100 - ("+ numberDaysToBirthday(birthdate) +" / ("+quartre+" * ( "+i+" +1 )) * 100) = "+percentageComplete);//console.log(percentageComplete+"% = "+(100-percentageComplete)+"%");
						el.addClass('complete');
						el.css('background-position',percentageComplete+'% bottom');
						stepComplete = true;
					}
					else
						el.addClass('complete');
				}else if(numberDaysToBirthday(birthdate) < quartre*3){
					//2nd complete
					if(i==2){
					console.log(percentageComplete+"%");
						el.addClass('complete');
						el.css('background-position',percentageComplete+'% bottom');
						stepComplete = true;
					}
					else
						el.addClass('complete');
				}else if(numberDaysToBirthday(birthdate) < quartre*4){
					//3rd complete
					if(i==3){
					console.log(percentageComplete+"%");
					
						el.addClass('complete');
						el.css('background-position',percentageComplete+'% bottom');
						stepComplete = true;
					}
					else
						el.addClass('complete');
				}else if(numberDaysToBirthday(birthdate) == quartre*4){
					//4th complete
					console.log('echt?! JE BENT JARIG! LEVEL UP!');
				}
				console.log(i);
			}
		}
		
		$('.steps li').each(function(i){
		var el = $(this);
		setTimeout(function(){
			stepCompletion(i,el);
		},i*500);
		
	});