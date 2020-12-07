
function validation(){
    var ime=document.getElementById("ime").value
    var prezime=document["Forma"]["prezime"].value;
    var mail=document["Forma"]["Mail"].value;
    if (ime=""){
        alert("Polje je prazno, molimo popunite");
        return false;
    }
    if(prezime=""){
        alert("Polje je prazno, molimo popunite");
        return false;
    }
    if (mail=""){
        alert("Polje je prazno, molimo popunite");
        return false;
    }

    location.href='';
}
