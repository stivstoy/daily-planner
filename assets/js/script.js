var day = moment().format('MMMM Do YYYY');
var hour = moment().format('h');
var description =""
const hours =[9, 10, 11, 12, 1, 2, 3, 4, 5]

document.getElementById("currentDay").innerHTML = day;

timeDisplay();

function timeDisplay() {
    var text = '';
    for (var i = 0; i < hours.length; i++) {
       var hourDisplay = text =hours[i];
       let div = document.createElement('div');
         div.id = 'container';
          div.className = 'container';
          document.body.appendChild(div);        
          div.innerHTML = "<div class ='row' id = 'row'><div id = 'hour' div class='hour'><script>document.log hourdisplay</script> </div><div id ='description' div class='description'> this is description </div> <div class='saveBtn' div id='saveBtn'> save</div>";

            }
        }   
    


