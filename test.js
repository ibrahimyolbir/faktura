function print_today(){
    var now = new Date();
    var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
    var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
    function fourdigits(number) {
        return (number < 1000) ? number + 1900 : number;
      }
      var today =  months[now.getMonth()] + " " + date + ", " + (fourdigits(now.getYear()));
      return today;
}

$(document).ready(function(){
$("#date").val(print_today()); 
});


 