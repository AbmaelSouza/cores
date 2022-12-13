const d = new Date( "November 20, 2022" );
var dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
var cor = ["laranja", "branca", "laranja", "azul", "branca", "laranja", "azul"]
var cortexto = {
    laranja: "#ffa500",
    branca: "#F0FFFF",
    azul: "#6991ff"
}
var folgas = [];
var proxfolga;
var proxfolgadata;
var datateste = 0;
var data = new Date();
data.setDate( data.getDate() + datateste )
data.setHours( 0, 0, 0, 0 );
var amanha = new Date();
amanha.setDate( amanha.getDate() + 1 + datateste );
amanha.setHours( 0, 0, 0, 0 );
var damanha = new Date();
damanha.setDate( damanha.getDate() + 2 + datateste );
damanha.setHours( 0, 0, 0, 0 );
var diasem = data.getDay();
var diasemamanha = amanha.getDay();
var diasemdamanha = damanha.getDay();
var dif = data.getTime() - d.getTime();
var diasdif = Math.ceil( dif / 1000 / 60 / 60 / 24 );
var a = new Date( "November 20, 2022" );
folgas.push( d );
for (let i = 0; i <= diasdif / 2; i = i + 2) {
    folgas.push( a );
    a = new Date( a.setDate( a.getDate() + 1 ) );
    folgas.push( a );
    a = new Date( a.setDate( a.getDate() + 7 ) );
}
for (let i = 0; i <= folgas.length; i++) {
    let a = folgas[i].getTime() - data.getTime();
    if (a > 0) {

        proxfolga = folgas[i];
        break
    }
}
proxfolgadata = Math.ceil( (proxfolga.getTime() - data.getTime()) / 1000 / 60 / 60 / 24 );

function checkfolga() {
    for (let i = 0; i < folgas.length; i++) {
        if (folgas[i].getTime() === data.getTime()) {
            return true;
        }
    }
}

function checkfolgaam() {
    for (let i = 0; i < folgas.length; i++) {
        if (folgas[i].getTime() === amanha.getTime()) {
            return true;
        }
    }
}
function checkfolgadam() {
    for (let i = 0; i < folgas.length; i++) {
        if (folgas[i].getTime() === damanha.getTime()) {
            return true;
        }
    }
}

var texto = "A "
var texto2 = ""
$( document ).ready( function () {
    var diasemana = $( "#diasemana" );
    diasemana.append( dias[diasem][0].toUpperCase() + dias[diasem].slice( 1 ) );
    var cortext = $( "#cortext" );
    var cortext2 = $( "#cortext2" );
    var cortext3 = $( "#cortext3" );
    var diasfolga = $( "#diasfolga" );
    cortext.append( cor[diasem].toUpperCase() );
    cortext.css( "color", cortexto[cor[diasem]] )
    if(!checkfolgaam()) {
        cortext2.append( cor[diasemamanha].toUpperCase() );
        cortext2.css( "color", cortexto[cor[diasemamanha]] )
    }else {cortext2.append( "FOLGA" );
        cortext2.css( "color", cortexto[cor[diasemamanha]] )}
    if (!checkfolgadam()) {
        cortext3.append( cor[diasemdamanha].toUpperCase() );
        cortext3.css( "color", cortexto[cor[diasemdamanha]] )
    }else{ cortext3.append( "FOLGA" );
        cortext3.css( "color", cortexto[cor[diasemdamanha]] )}
    if (checkfolga() && checkfolgaam()) {
        diasfolga.append( "A sua folga é HOJE e AMANHÃ" );
    } else if (checkfolga()) {
        diasfolga.append( "A sua folga é HOJE e " );
        if (proxfolgadata > 1) {
            texto2 = "s";
            texto = "a ";
            diasfolga.append( texto + "próxima folga é em " + proxfolgadata + " dia" + texto2 );}

        } else if (checkfolgaam()) {
            diasfolga.append( "A sua folga é AMANHÃ" );

        }else { diasfolga.append( texto + "próxima folga é em " + proxfolgadata + " dia" + texto2 );}
} );
