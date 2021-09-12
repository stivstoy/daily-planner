var day = moment().format('MMMM Do YYYY');
var hour = moment().format('h');
var description =  '';
var hourDisplay = "";
const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var schedule = [];
var descriptionValue ='';
var textAreaValue;
var descRows;
document.getElementById("currentDay").innerHTML = day;

//checking for local storage
if (JSON.parse(window.localStorage.getItem('scheduleItems'))) {
    schedule = JSON.parse(window.localStorage.getItem('scheduleItems'));    
}
else {
   schedule = [];
}

//display schedule layout
timeDisplay();

//display scheduled items stored
displayItems();

// function part of the textarea Event Listener to monitor additions and changes to textarea values to store     
function updateValue(e) {
       id = e.target.id;
       descriptionValue = e.target.value;                    
 }

// onClick function of the save button to retrieve the description entered and id (selected time) to store
 function descValue (){
         storeDesc(descriptionValue,id);
 }
  
 //function to build and display schedule layout
function timeDisplay() {
        for (var i = 0; i < hours.length; i++) {
        hourDisplay = hours[i];  
       let container = document.createElement('div');           
        container.className = 'container';        
        document.body.appendChild(container);
        var row = document.createElement('div');
        row.className ='row';        
        container.appendChild(row);
        let hour = document.createElement('div');
        hour.className ='hour';
        row.appendChild(hour);
        let description= document.createElement('div');
        description.className ='description';
         var textArea = document.createElement("TEXTAREA");
        textArea.setAttribute('name', 'post'+hourDisplay);
        textArea.id= hourDisplay;
        textArea.value ='';               
        description.appendChild(textArea);
        row.appendChild(description);
        let saveBtn= document.createElement('div');
        saveBtn.className ='saveBtn';
        var btn = document.createElement("BUTTON");
        btn.id= 'btn'+hourDisplay;
        btn.setAttribute("onclick", "descValue()");
         btn.innerHTML = "Save";
        btn.setAttribute("type", "submit");
        saveBtn.appendChild(btn);
        row.appendChild(saveBtn);

        //convert military time values from the hours array to standard time to display on the schedule layout
        hour.innerHTML = moment(hourDisplay, 'HH').format('h A');

        //identify textarea element to add an event listener
        textAreaValue = document.getElementById(textArea.id);
        
        //set event listener to monitor textarea value changes
        textAreaValue.addEventListener('change', updateValue);
     
        // call function to set time block color code  
        backgroundDisplay();
        
  //function to set color-coded time block to indicate whether time displayed is in the past, present, or future      
function backgroundDisplay() {       
        hour = moment().format('HH');
         if(hourDisplay > hour) {
         descRows = document.getElementsByClassName("description");
        descRows[i].className += " future";
         }
    
        if(hourDisplay == hour) {
        descRows= document.getElementsByClassName("description");
        descRows[i].className += " present";
        }
    
        if ( hourDisplay < hour) {
        descRows = document.getElementsByClassName("description");
        descRows[i].className += " past";
        }   
         
       }
    }
    
    }

// function to store textarea scheduled items
function storeDesc(description, hourDisplay) {
    const hoursDataObj = {
        desc: description,
        time: hourDisplay
    }
 
     schedule.push(hoursDataObj);
     console.log(schedule);
     window.localStorage.setItem('scheduleItems', JSON.stringify(schedule));
     window.localStorage.getItem('scheduleItems');
      JSON.parse(window.localStorage.getItem('scheduleItems'));
     displayItems();
   
}

// function to display stored scheduled items
function displayItems() {
   
    for (var i = 0; i < schedule.length; i++) {
      var textDescHour = document.getElementById(schedule[i].time);
      var textDescHourId = textDescHour.id;
      if (schedule[i].time === textDescHourId){
       document.getElementById(schedule[i].time).value = schedule[i].desc;
        document.getElementById(schedule[i].time).innerHTML =  schedule[i].desc;
        }

        }
}
