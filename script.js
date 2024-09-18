

function add(event){
    event.preventDefault()
let name=document.getElementById("names")
let Rolls=document.getElementById("rolls")
let age=document.getElementById("ages")
let gender=document.getElementById("males")
let Option=document.getElementById("option");
let mail=document.getElementById("mails")



let table=document.getElementById("tables")


  let first=name.value
  let second=Rolls.value
  let third=age.value
  let fourth=gender.value
  let fifth=Option.value
  let sixth=mail.value
  
  
let template=`
<tr>
<td>${first}</td>
<td>${second}</td>
<td>${third}</td>
<td>${fourth}</td>
<td>${fifth}</td>
<td>${sixth}</td>
<td><button onclick="deletebook(this)" id="btn">Delete</button></td>
</tr>`
table.innerHTML+=template;

}
p

P


function deletebook(button){

  var row=button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

