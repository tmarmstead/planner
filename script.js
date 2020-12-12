$(document).ready(function () {
    $('#current-day').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
   
    
    // Pull all values in local storage
    // localstorage.getItem('9')

    $('#9').siblings('textarea').val(localStorage.getItem('9'))
    $('#10').siblings('textarea').val(localStorage.getItem('10'))
    $('#11').siblings('textarea').val(localStorage.getItem('11'))
    $('#12').siblings('textarea').val(localStorage.getItem('12'))
    $('#1').siblings('textarea').val(localStorage.getItem('1'))
    $('#2').siblings('textarea').val(localStorage.getItem('2'))
    $('#3').siblings('textarea').val(localStorage.getItem('3'))
    $('#4').siblings('textarea').val(localStorage.getItem('4'))
    $('#5').siblings('textarea').val(localStorage.getItem('5'))


    // Capture time/value from DOM
    // Place those values into local storage
    $('.save-btn').on('click', function () {
        let time = $(this).attr('id');
        let value = $(this).siblings('.description').val();
        console.log(time, value);
        localStorage.setItem(time, value);
    })

    // clear data button
    

    let updateTime;

    function runningTime(){
        $('#current-day').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }

    function executeTime(){
        updateTime = setInterval(runningTime, 1000);
        // console.log('look at it work?');
    }
    executeTime();

    function pastPresentfuture(){
        let eachRow = $('.time-block').children('button');
        let buttonId = eachRow.attr('id');
        console.log(buttonId);

        let hourNow = (moment().format('H'));
        console.log(hourNow);
        // loop through every time-block
            if (buttonId = hourNow) {
            console.log('equal')

            } else if (buttonId < hourNow){
            $('#nine').css("background-color", "grey");
            $('#nine').css("opacity", "5%");
        } else {
            $('#nine').css("background-color", "red");
            $('#nine').css("opacity", "20%");
            }
        
            console.log(eachRow);
            
            if (buttonId[1] === hourNow) {
            console.log('equal')

            } else if(buttonId < hourNow){
            $('#ten').css("background-color", "grey");
            $('#ten').css("opacity", "20%");
            } else {
            $('#ten').css("background-color", "red");
            $('#ten').css("opacity", "20%");
            }
            
            if (buttonId < hourNow) {
            console.log('equal')

            } else {
            $('#eleven').css("background-color", "red");
            $('#eleven').css("opacity", "20%");
            }
            if (buttonId[3] === hourNow) {
            console.log('equal')

            } else {
            $('#twelve').css("background-color", "red");
            $('#twelve').css("opacity", "20%");
            }
           
            if (buttonId[4] === hourNow) {
            console.log('equal')

            } else {
            $('#one').css("background-color", "red");
            $('#one').css("opacity", "20%");
            }
            if (buttonId[5] === hourNow) {
            console.log('equal')

            } else {
            $('#two').css("background-color", "red");
            $('#two').css("opacity", "20%");
            }
            if (buttonId[6] === hourNow) {
            console.log('equal')

            } else {
            $('#three').css("background-color", "red");
            $('#three').css("opacity", "20%");
            }

            if (buttonId[7] === hourNow) {
            console.log('equal')

            } else {
            $('#four').css("background-color", "red");
            $('#four').css("opacity", "20%");
            }

            if (buttonId[8] === hourNow) {
                console.log('equal')
    
            } else {
            $('#five').css("background-color", "red");
            $('#five').css("opacity", "20%");
            }

    }
    
    pastPresentfuture();
   
    



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
