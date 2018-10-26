function addStudent(){
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    const tr=true;
   
    if(!name){
        document.getElementById('name').classList.add('error');
        t=false; 
    }
    if(!surname) {
         document.getElementById('surname').style.border = "5px solid red"; 
         t=false;
    }
    
    if (tr) {
        table();
    }
    function table() {
        var name = document.getElementById('name').value;
        var surname = document.getElementById('surname').value;
        var faculty = document.getElementById('faculty').value;
        var table = document.getElementById('students');
        var t = table.insertRow();
        var cell1 = t.insertCell();
        var cell2 = t.insertCell();
        var cell3 = t.insertCell();
    cell1.innerHTML = name;
    cell2.innerHTML = surname;
    cell3.innerHTML = faculty;

    document.querySelector("#name").value="";
    document.querySelector("#surname").value="";
    document.querySelector("#faculty").value = faculty;
    }
    
    
    
    
}

document.querySelector('button').addEventListener('click',addStudent);
