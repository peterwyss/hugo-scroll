var elem_o = "<div class='status-offen' >Offen</div>";
var elem_g = "<div class='status-geschlossen' >Geschlossen</div>";
var status = "";

$.getJSON( "/js/status.json", function( data ) {
    console.log( data );
    status = data.badeplatz.status;
    console.log(status)
    var elem1 = document.getElementById("offen");
    var elem2 = document.getElementById("geschlossen");

    if( status == "geschlossen") {
        elem1.style.visibility = "hidden"
        elem2.style.visibility = "visible"
    }else {
        elem1.style.visibility = "visible";
        elem2.style.visibility = "hidden";
    }
    
});
