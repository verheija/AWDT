var main = function () {
    "use strict"
    var wk = '&#9812';
    var wq = '&#9813';
    var wr = '&#9814';
    var wb = '&#9815';
    var wn = '&#9816';
    var wp = '&#9817';
    var bk = '&#9818';
    var bq = '&#9819';
    var br = '&#9820';
    var bb = '&#9821';
    var bn = '&#9822';
    var bp = '&#9823';

var table = document.createElement("table");
for (var i = 1; i <= 8; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j <= 8; j++) {
        var td = document.createElement('td');
        td.style.textAlign = 'center';
        td.style.fontsize = '50px';
        //td.appendChild(document.createTextNode(' '));
        if (i%2 == j%2) {
            td.className = "white";
        } else {
            td.className = "black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

//assign table elements to official notation
var locations = {};
var a = 97;
for (var i = 1, k = 8; i <= 8, k > 0; i++, k--) {
    for (var j = 1; j <= 8; j++){
        locations[[String.fromCharCode(a+(j-1))]+k] = table.rows[(i-1)].cells[(j-1)];
        // id toevoegen
        locations[[String.fromCharCode(a+(j-1))]+k].id = [String.fromCharCode(a+(j-1))]+k;
    }
    

/*locations.a5 = table.rows[3].cells[0];
locations.a6 = table.rows[2].cells[0];
locations.a7 = table.rows[1].cells[0];
locations.a8 = table.rows[0].cells[0];
*/

console.table(locations);
}


//place pawns
for (var k = 0; k < 8; k++) {
    table.rows[1].cells[k].innerHTML = bp;
    table.rows[6].cells[k].innerHTML = wp;
}
//placing the black pieces
//var a1 = table.rows[0].cells[0];
//a1.innerHTML = wr;

table.rows[0].cells[0].innerHTML = br;
table.rows[0].cells[1].innerHTML = bn;
table.rows[0].cells[2].innerHTML = bb;
table.rows[0].cells[3].innerHTML = bq;
table.rows[0].cells[4].innerHTML = bk;
table.rows[0].cells[5].innerHTML = bb;
table.rows[0].cells[6].innerHTML = bn;
table.rows[0].cells[7].innerHTML = br;


//placing the white pieces
table.rows[7].cells[0].innerHTML = wr;
table.rows[7].cells[1].innerHTML = wn;
table.rows[7].cells[2].innerHTML = wb;
table.rows[7].cells[3].innerHTML = wq;
table.rows[7].cells[4].innerHTML = wk;
table.rows[7].cells[5].innerHTML = wb;
table.rows[7].cells[6].innerHTML = wn;
table.rows[7].cells[7].innerHTML = wr;

//console.log(table.rows[2].cells[3].innerHTML);
$(locations.a1).on("click", function () {
    locations.a1.innerHTML = "";
});

$(locations.e2).on("click", function () {
    locations.e4.innerHTML = locations.e2.innerHTML;
    locations.e2.innerHTML = "";
});

$(locations.e7).on("click", function () {
    locations.e5.innerHTML = locations.e7.innerHTML;
    locations.e7.innerHTML = "";
});

document.body.appendChild(table);
}

$(document).ready(main);
