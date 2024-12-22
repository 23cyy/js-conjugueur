/*Script_conjugaison.html*/
var premierGroupeT1="<p><b>Présent</b></p><br><p>Je XXXX<b>e</b></p><p>Tu XXXX<b>es</b></p><p>Il/elle XXXX<b>e</b></p><p>Nous XXXX<b>ons</b></p><p>Vous XXXX<b>ez</b></p>Ils/elles XXXX<b>ent</b></p>"; 
var premierGroupeT2="<p><b>Futur simple</b></p><br><p>Je XXXX<b>erai</b></p><p>Tu XXXX<b>eras</b></p><p>Il/elle XXXX<b>era</b></p><p>Nous XXXX<b>erons</b></p><p>Vous XXXX<b>erez</b></p>Ils/elles XXXX<b>eront</b></p>"; 
var premierGroupeT3="<p><b>Passé simple</b></p><br><p>Je XXXX<b>ai</b></p><p>Tu XXXX<b>as</b></p><p>Il/elle XXXX<b>a</b></p><p>Nous XXXX<b>âmes</b></p><p>Vous XXXX<b>âtes</b></p>Ils/elles XXXX<b>èrent</b></p>";

function conjuguer()
{
    var vrb=document.getElementById('verbc').value; var tps=document.getElementById('tpsc').value

    if (vrb.substr(-2)=="er" && tps=="Present") 
    {
        document.getElementById('rp1').innerHTML=premierGroupeT1.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
    }
    else if (vrb.substr(-2)=="er" && tps=="Futur simple")
    {
        document.getElementById('rp2').innerHTML=premierGroupeT2.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
    }
    else if (vrb.substr(-2)=="er" && tps=="Passee simple") 
    {
        document.getElementById('rp3').innerHTML=premierGroupeT3.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
    }
    else if (vrb.substr(-2)=="er" && tps=="Tous les temps") 
    {
        document.getElementById('rp1').innerHTML=premierGroupeT1.replace(/XXXX/g,vrb.substr(0,vrb.length-2))
        document.getElementById('rp2').innerHTML=premierGroupeT2.replace(/XXXX/g,vrb.substr(0,vrb.length-2))  
        document.getElementById('rp3').innerHTML=premierGroupeT3.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
    }
    else alert("Je ne sais pas conjuguer ce verbe\n qui n'appartient pas au 1er groupe !");
}
