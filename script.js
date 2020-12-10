$(document).ready(function () {
    $('#current-day').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
   
    
    // Pull all values in local storage
    // localstorage.getItem('9')

    $('#9').siblings('textarea').val(localStorage.getItem('9'))
    $('#10').siblings('textarea').val(localStorage.getItem('10'))


    // Capture time/value from DOM
    // Place those values into local storage
    $('.save-btn').on('click', function () {
        let time = $(this).attr('id');
        let value = $(this).siblings('.description').val();
        console.log(time, value);
    })

    let updateTime;

    function runningTime(){
        $('#current-day').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }

    function executeTime(){
        updateTime = setInterval(runningTime, 1000);
        console.log('look at it work?');
    }
    executeTime();

    
    // setInterval(function updateTime(){
    //     $('#current-day').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    // }, 1000);
    /* Use moment to capture current hour
     Evaluate time-block hours and compare them to current hour
            If past: gray
            Present: green
            Future: red
    */

    function evaluateHours() {
        const currentHour = moment().hours();
    }









})