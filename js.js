

function fosco (){
    var data = new Date();
        var day = data.getDate();
            var month = data.getMonth();
                var year = data.getFullYear();
                                                        
            var tempo = document.getElementById("date");
        tempo.value = day + "/" + (month+1) + "/" + year;
}
fosco();


function hour () {
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var clock = document.getElementById("clock");
    clock.value = hour + ":" + minutes + ":" + (seconds<10 ? "0"+seconds : seconds);

    setTimeout("hour()",1000);
}
hour();