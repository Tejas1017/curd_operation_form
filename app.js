var selectedRow = null



function onFormSubmit(e) {



  event.preventDefault();




  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  }
  else {
    updateRecord(formData);
  }
  resetForm();
}

//Retrieve the data
function readFormData() {
  var formData = {};
  formData["User_Name"] = document.getElementById("User_Name").value;
  formData["password"] = document.getElementById("password").value;
  formData["Age"] = document.getElementById("Age").value;
  formData["Gender"] = document.getElementById("Gender").value;
  return formData;
}

//Insert the data
function insertNewRecord(data) {
  var table = document.getElementById("show").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.User_Name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.password;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Age;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Gender;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button id ='edit' onClick="onEdit(this); btname()" >edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("User_Name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("password").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Age").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Gender").value = selectedRow.cells[3].innerHTML;
  document.getElementById("hey").value = "edit"

 
  
  
}
// function btname(){
//   alert("hey!!!")
//   let btn = document.getElementById("hey")
//   btn.innerHTML = "edit"

// }
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.User_Name;
  selectedRow.cells[1].innerHTML = formData.password;
  selectedRow.cells[2].innerHTML = formData.Age;
  selectedRow.cells[3].innerHTML = formData.Gender;
}
// let btnEdit = document.getElementById("edit")

// btnEdit.addEventListener("click", function(){
//   alert('hhhh')
//   let btn = document.getElementById("hey")
//   btn.innerHTML ="edit"
  
// })

//Delete the data
function onDelete(td) {

  row = td.parentElement.parentElement;
  document.getElementById('show').deleteRow(row.rowIndex);
  resetForm();

}

//Reset the data
function resetForm() {
  document.getElementById("User_Name").value = '';
  document.getElementById("password").value = '';
  document.getElementById("Age").value = '';
  document.getElementsByTagName("select").value = 'Choose one'
  document.getElementById("hey").value = "add"


  selectedRow = null;
}
function valid_username() {
  let User_Name = document.getElementById('User_Name')
  let regx = /^[a-zA-z0-9_-]{7,16}$/
  if (regx.test(User_Name.value)) {
    document.getElementById('valid_username').style.visibility = 'hidden'
  }
  else if (!regx.test(User_Name.value)) {
    document.getElementById('valid_username').style.visibility = 'visible'
  }




}
function valid_password() {
  let password = document.getElementById('password')
  let regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
  if (regx.test(password.value)) {
    document.getElementById("hey").disabled = false;
    document.getElementById('valid_password').style.visibility = 'hidden'

  }
  else if (!regx.test(password.value)) {
    document.getElementById("hey").disabled = true;
    document.getElementById('valid_password').style.visibility = 'visible'
 

  }
}

function valid_age() {
  let age = document.getElementById('Age')
  
 let regx = /^\S[0-9]{0,3}$/;
 if(regx.test(age.value)){
  document.getElementById("hey").disabled = false;
  
 }
 else{
  document.getElementById("hey").disabled = true;
 }

}




function tog() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function filter() {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("show");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}