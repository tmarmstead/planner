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

    
    /* Use moment to capture current hour
     Evaluate time-block hours and compare them to current hour
            If past: gray
            Present: green
            Future: red
    */
    let eachRow = $('.time-block').children('button');
    let individualId = eachRow.attr('id');
    console.log(individualId);
    let hourNow = parseInt(moment().format('H'));

    // Array.from(eachRow).forEach(eachRow => {
    //     let individualIds = row.id;
    //     let eachRowsTime = []
    // })



    // function evaluateHours() {
    //     let hourArr = [];
    //     const currentHour = moment().hours();
    //     let eachRow = $('.hour')
    //     console.log(eachRow);
    //     for (let i = 0; i < array.length; i++) {
    //         const element = array[i];
            
        
        // if(eachRow === currentHour){
        //     console.log('row by current hr');
        // } else {
        //     console.log('keep working');
        // }
    // }
// evaluateHours();








})

// let createIdArray = [];
// let rows = $('time-block');
// let indidualIds = createIdArray.concat(rows.siblings('.hour').value);
// console.log(createIdArray);
