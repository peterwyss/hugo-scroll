var elem_o = "<div class='status-offen' >Offen</div>";
var elem_g = "<div class='status-geschlossen' >Geschlossen</div>";
var status = "";
$.getJSON( "/js/status.json", function( data ) {
    console.log( data );
    status = data.badeplatz.status;
    console.log(status)
    if( status == "geschlossen") {
        $(elem_g).prependTo( ".content" );
    }else {
        $(elem_o).prependTo( ".content" );

    }
    
});
