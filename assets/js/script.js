// WHEN I open the planner
$("document").ready(function() {
    // THEN the current day is displayed at the top of the calendar
    $("#currentDay").text(moment().format("dddd , MMMM Do YYYY"))
    
    
    // WHEN I scroll down
    // THEN I am presented with time blocks for standard business hours

    var currentTime = moment().format('HH');
   
    
    // WHEN I view the time blocks for that day
    textArea = $("input").each(function(){
        var textId = $(this).attr("id");
        // THEN each time block is color-coded to indicate whether it is in the past, present, or future
        if(textId < currentTime) {
            //grey
            // console.log(this);
            $(this).addClass("list-group-item-secondary");
        } 
        else if(textId == currentTime) {
            //red
            // console.log(this);
            $(this).addClass("list-group-item-danger");
        } 
        else if (textId >  currentTime) {
            //green
            // console.log(this);
            $(this).addClass("list-group-item-success");
        }
        
        setInterval(function(){
            textArea
        }, 1000);
    
    });

    // WHEN I click the save button for that time block
    $(".saveBtn").on("click", function(event) {
       //console.log(event.target.parentElement.id);

        var timeOfDay = event.target.parentElement.id;
        // var timeOfDay = $(this).parent().attr("id");
        var textContent = $("#" + timeOfDay).children("input").val().trim();
        //var textContent = $(this).parent().children("input").val().trim();


    
        // THEN the text for that event is saved in local storage
        localStorage.setItem(timeOfDay, textContent);
        //console.log(timeOfDay, textContent);       
        
    });
    
   
    // WHEN I refresh the page // THEN the saved events 
    $("#9am").children("input").val(localStorage.getItem("9am")); 

    $("#10am").children("input").val(localStorage.getItem("10am"));

    $("#11am").children("input").val(localStorage.getItem("11am"));

    $("#12pm").children("input").val(localStorage.getItem("12pm"));

    $("#1pm").children("input").val(localStorage.getItem("1pm"));

    $("#2pm").children("input").val(localStorage.getItem("2pm"));

    $("#3pm").children("input").val(localStorage.getItem("3pm"));

    $("#4pm").children("input").val(localStorage.getItem("4pm"));

    $("#5pm").children("input").val(localStorage.getItem("5pm"));

});

   













