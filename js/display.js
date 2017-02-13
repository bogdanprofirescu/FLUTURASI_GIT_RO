var indexr1c1, indexr1c2, indexr1c3, indexr1c4, indexr1c5, indexr1c6, indexr1c7, indexr1c8;
var indexr2c1, indexr2c2, indexr2c3, indexr2c4, indexr2c5, indexr2c6, indexr2c7, indexr2c8;
var indexr3c1, indexr3c2, indexr3c3, indexr3c4, indexr3c5, indexr3c6, indexr3c7, indexr3c8;
var indexr4c1, indexr4c2, indexr4c3, indexr4c4, indexr4c5, indexr4c6, indexr4c7, indexr4c8;
var indexr5c1, indexr5c2, indexr5c3, indexr5c4, indexr5c5, indexr5c6, indexr5c7, indexr5c8;
var indexr6c1, indexr6c2, indexr6c3, indexr6c4, indexr6c5, indexr6c6, indexr6c7, indexr6c8;
var indexr7c1, indexr7c2, indexr7c3, indexr7c4, indexr7c5, indexr7c6, indexr7c7, indexr7c8;
var indexr8c1, indexr8c2, indexr8c3, indexr8c4, indexr8c5, indexr8c6, indexr8c7, indexr8c8;
var indexr9c1, indexr9c2, indexr9c3, indexr9c4, indexr9c5, indexr9c6, indexr9c7, indexr9c8;
var index10c1, index10c2, index10c3, index10c4, index10c5, index10c6, index10c7, index10c8;
var index_nume, index_prenume;

var data;
var tableLine;
var targetFile;
var luna_selected=false;
var limba_selected=false;
var index_luna;


$(document).ready(function()
{
  $("#csv-file").change(handleFileSelect);

 function handleFileSelect(evt) {
          targetFile = evt.target.files[0];
                }
 });

 function go_process(){

if (luna_selected) {
       try {
     Papa.parse(targetFile, { complete: function(results) {  data=results.data; ProgramStart(results); } });
         }
   catch(err) {
       alert(err.message+"\n \n Adaugati un fisier cu formatul corect daca nu ati facut asta deja.");
   }}
   else alert("Trebuie sa selectati o luna.");

}

function HideIntro()
{
  // var x = document.getElementById("germana").checked;
  // if (x=="true") $(document.body).append("<iframe class='myframe' src = 'languageGER.txt' onload='readLanguage()'> </iframe>")
  // else $(document.body).append("<iframe class='myframe' src = 'language.txt' onload='readLanguage()'> </iframe>");

  var tag_luna=document.getElementsByClassName('month')[0];
  tag_luna.innerHTML=tableLine[index_luna];

  var intro=document.getElementById('start_message');
  intro.style.display="none";
  }

 function ProgramStart(parsed_data)
 {
   HideIntro();
   AppendTemplate();
   IdentifyColumns(parsed_data);
   PrintData();

 }



 //this function is called immediatelly after loading the <iframe> and loads names of categories
 function readLanguage() {

  var names=document.getElementById('myframe').contentDocument.body.firstChild.innerHTML;
  tableLine = names.split("\n");//tableLine is an array of category names for the template
  document.getElementsByClassName('r1c1')[0].innerHTML=tableLine[0]; //Salariu incadrare(ger)
  document.getElementsByClassName('r1c4')[0].innerHTML=tableLine[1]; //Concediu odihna(ger)
  document.getElementsByClassName('r1c7')[0].innerHTML=tableLine[2]; //CAS(ger)
  document.getElementsByClassName('r2c1')[0].innerHTML=tableLine[3]; //Ore lucrate/salariu orar(ger)
  document.getElementsByClassName('r2c4')[0].innerHTML=tableLine[4]; //Salariu realizat(ger)
  document.getElementsByClassName('r2c7')[0].innerHTML=tableLine[5]; //Somaj(ger)
  document.getElementsByClassName('r3c1')[0].innerHTML=tableLine[6]; //Salariu aferent timpului lucrat(ger)
  document.getElementsByClassName('r3c4')[0].innerHTML=tableLine[7]; //Retineri(ger)
  document.getElementsByClassName('r3c7')[0].innerHTML=tableLine[8]; //Sanatate(ger)
  document.getElementsByClassName('r4c1')[0].innerHTML=tableLine[9]; //Concediu fara plata/Absente(ger)
  document.getElementsByClassName('r4c4')[0].innerHTML=tableLine[10]; //Depasiri plan net/brut(ger)
  document.getElementsByClassName('r4c7')[0].innerHTML=tableLine[11]; //Deducere personala(ger)
  document.getElementsByClassName('r5c1')[0].innerHTML=tableLine[12]; //Ore suplimentare(ger)
  document.getElementsByClassName('r5c4')[0].innerHTML=tableLine[13]; //Alte venituri(ger)
  document.getElementsByClassName('r5c7')[0].innerHTML=tableLine[14]; //Venit net(ger)
  document.getElementsByClassName('r6c1')[0].innerHTML=tableLine[15]; //Ore suplimentare(ger)
  document.getElementsByClassName('r6c7')[0].innerHTML=tableLine[16]; //Impozit pe salariu(ger)
  document.getElementsByClassName('r7c1')[0].innerHTML=tableLine[17]; //Ore de noapte(ger)
  document.getElementsByClassName('r7c4')[0].innerHTML=tableLine[18]; //Tichete masa/Stimulente(ger)
  document.getElementsByClassName('r7c7')[0].innerHTML=tableLine[19]; //SALARIU NET(ger)
  document.getElementsByClassName('r8c4')[0].innerHTML=tableLine[20]; //C.M. din fd salarii(ger)
  document.getElementsByClassName('r8c7')[0].innerHTML=tableLine[21]; //Avans incasat(ger)
  document.getElementsByClassName('r9c4')[0].innerHTML=tableLine[22]; //C.M. din C.C.I(ger)
  document.getElementsByClassName('r9c7')[0].innerHTML=tableLine[23]; //Retineri(ger)
  document.getElementsByClassName('r10c1')[0].innerHTML=tableLine[24]; //Sp. permanente/Alte sporuri(ger)
  document.getElementsByClassName('r10c4')[0].innerHTML=tableLine[25]; //SALARIU BRUT REALIZAT(ger)
  document.getElementsByClassName('r10c7')[0].innerHTML=tableLine[26]; //REST DE PLATA(ger)
  document.getElementsByClassName('doc_title')[0].innerHTML=tableLine[27];//Fluturas de lichidare
  document.getElementsByClassName('job_title')[0].innerHTML=tableLine[28];// Sofer de autocamion
  document.getElementsByClassName('diurna')[0].innerHTML=tableLine[29];// Sofer de autocamion
 }


function AppendTemplate()
{
  var template = $('.container');
  $('.container').show();
    var tag_luna=document.getElementsByClassName('month')[0];
  tag_luna.innerHTML=tableLine[index_luna];
};

function PrintData()
{
  //add the templates
  var template = $('.container');
  for(i=1;i<data.length-2;i++) {
    template.clone().insertAfter(template); }

//get elements
  var name_element=document.getElementsByClassName('name');
  var r1c3_element=document.getElementsByClassName('r1c3');
  var r10c3_elment=document.getElementsByClassName('r10c3');
  var r3c6_elment=document.getElementsByClassName('r3c6');
  var r2c2_element=document.getElementsByClassName('r2c2');
  var r3c3_element=document.getElementsByClassName('r3c3');
  var r1c5_element=document.getElementsByClassName('r1c5');
  var r1c6_element=document.getElementsByClassName('r1c6');
  var r2c6_element=document.getElementsByClassName('r2c6');
  var r8c6_element=document.getElementsByClassName('r8c6');
  var r9c6_element=document.getElementsByClassName('r9c6');
  var r10c6_element=document.getElementsByClassName('r10c6');
  var r1c8_element=document.getElementsByClassName('r1c8');
  var r2c8_element=document.getElementsByClassName('r2c8');
  var r3c8_element=document.getElementsByClassName('r3c8');
  var r5c8_element=document.getElementsByClassName('r5c8');
  var r4c8_element=document.getElementsByClassName('r4c8');
  var r6c8_element=document.getElementsByClassName('r6c8');
  var r7c8_element=document.getElementsByClassName('r7c8');
  var r8c8_element=document.getElementsByClassName('r8c8');
  var r9c8_element=document.getElementsByClassName('r9c8');
  var r10c8_element=document.getElementsByClassName('r10c8');

  //fill the data
for(i=1;i<data.length-1;i++)
{
    name_element[i-1].innerHTML=data[i][index_nume]+" "+data[i][index_prenume];
    r1c3_element[i-1].innerHTML=data[i][index_r1c3]; //salariu
    r10c3_elment[i-1].innerHTML=data[i][index_r10c3];//spor_perm
    r3c6_elment[i-1].innerHTML=data[i][index_r3c6];//retineri1
    r2c2_element[i-1].innerHTML=data[i][index_r2c2];//lucrat
    r3c3_element[i-1].innerHTML=data[i][index_r3c3];//brut
    r1c5_element[i-1].innerHTML=data[i][index_r1c5];//ore_co
    r1c6_element[i-1].innerHTML=data[i][index_r1c6];//c_odihna
    r2c6_element[i-1].innerHTML=data[i][index_r2c6];//sal_real
    r8c6_element[i-1].innerHTML=data[i][index_r8c6];//fs
    r9c6_element[i-1].innerHTML=data[i][index_r9c6];//ass
    r10c6_element[i-1].innerHTML=data[i][index_r10c6];//brut_impoz
  r1c8_element[i-1].innerHTML=data[i][index_r1c8];//pensie
  r2c8_element[i-1].innerHTML=data[i][index_r2c8];//somaj
  r3c8_element[i-1].innerHTML=data[i][index_r3c8];//sanatate
  r5c8_element[i-1].innerHTML=data[i][index_r5c8];//ven_net
  r4c8_element[i-1].innerHTML=data[i][index_r4c8];//ded_pers
  r6c8_element[i-1].innerHTML=data[i][index_r6c8];//impozit
  r7c8_element[i-1].innerHTML=data[i][index_r7c8];//net
  r8c8_element[i-1].innerHTML=data[i][index_r8c8];//avans
  r9c8_element[i-1].innerHTML=data[i][index_r9c8];//retineri
  r10c8_element[i-1].innerHTML=data[i][index_r10c8];//rest_plata
}

}
 //checking the size of the array
 function size(ar){
   var row_count = ar.length;
   var row_sizes = []
   for(var i=0;i<row_count;i++){
     row_sizes.push(ar[i].length);
   }
   return [row_count, Math.max.apply(null, row_sizes)]
 }

//Indentify what index have the columns for each data field in the table
 function IdentifyColumns(parsed)
 {
  //  console.log(parsed);
   var rows=size(parsed.data)[0];
   rows--; //parser-ul indetifica cu un rand mai mult decat are fisierul
   var columns=size(parsed.data)[1];

   for( var m=0; m<columns; m++)
    switch (data[0][m])
         {
            case "nume": {index_nume=m; } break; //console.log(parsed.data[0][m]+" "+m);
            case "prenume": {index_prenume=m; } break;
            case "salariu": {index_r1c3=m; } break;
            case "spor_perm": {index_r10c3=m;} break;
            case "retineri1": { index_r3c6=m;} break;
            case "lucrat": {index_r2c2=m; } break;
            case "brut": { index_r3c3=m; } break;
            case "ore_co": {index_r1c5=m; } break;
            case "c_odihna": {index_r1c6=m; } break;
            case "sal_real": {index_r2c6=m; } break;
            case "fs": {index_r8c6=m;} break;//posibila corectura la coloana
            case "ass": {index_r9c6=m; } break;//posibila corectura la coloana
            case "brut_impoz": {index_r10c6=m; } break;
            case "pensie": { index_r1c8=m; } break;
            case "somaj": { index_r2c8=m; } break;
            case "sanatate": { index_r3c8=m; } break;
            case "ven_net": { index_r5c8=m; } break;
            case "ded_pers": { index_r4c8=m; } break;
            case "impozit": { index_r6c8=m; } break;
            case "net": {index_r7c8=m; } break;
            case "avans": { index_r8c8=m; } break;
            case "retineri": { index_r9c8=m; } break;
            case "rest_plata": { index_r10c8=m; } break;
      };

};

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function clicklink(luna)
{
  // alert(luna);
  document.getElementById('luna_aleasa').innerHTML=luna;
  var tag_luna=document.getElementsByClassName('month')[0];
  luna_selected=true;
  switch (luna)
       {
          case "ianuarie":  index_luna=30; break;
          case "februarie":  index_luna=31;break;
          case "martie":  index_luna=32; break;
          case "aprilie": index_luna=33; break;
          case "mai":  index_luna=34;break;
          case "iunie":  index_luna=35;break;
          case "iulie":  index_luna=36;break;
          case "august":  index_luna=37;break;
          case "septembrie":  index_luna=38;break;
          case "octombrie":  index_luna=39;break;
          case "noiembrie": index_luna=40; break;
          case "decembrie":  index_luna=41;break;
    };
    // tag_luna.innerHTML=tableLine[index_luna];

}
// function LoadLanguageInfo(language)
// {
//   var x = document.getElementById("germana").checked;
//   if (x=="true") alert("germana")
//           else alert("romana");
//
// }

function Print() {
// var prtContent = document.getElementById("your div id");
// var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
// WinPrint.document.write(prtContent.innerHTML);
// WinPrint.document.close();
// WinPrint.focus();
// WinPrint.print();
// WinPrint.close();
window.print();
}
