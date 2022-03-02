function alertExtDemo(){
    alert("External Alert.");
}
function confirmExtDemo(){
    if(confirm("Are you sure..??")){
        alert("YESSS");
    }
    else{
        alert("NOOOO");
    }
}
function promptExtDemo(){
    var fName=prompt("Enter Firstname Here..");
    var lName=prompt("Enter Lastname Here..");
    alert(fName+" "+lName);
}