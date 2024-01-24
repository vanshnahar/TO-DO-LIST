let todolist=[];
let tododate=[];
displayItem();
function addtodo(){
  let inputElement=document.querySelector("#todo-add");
  let dateElement=document.querySelector("#todo-date");
  let todoitem=inputElement.value;
  let dateitem=dateElement.value;
  
  todolist.push({item:todoitem,duedate:dateitem});
  inputElement.value='';
  dateElement.value='';
  
  displayItem();
    
}
function displayItem(){
      let displayElement=document.querySelector(".todo-container");
      let newhtml='';

      for(let i=0 ;i<todolist.length;i++){
        let {item,duedate}=todolist[i];
      newhtml
      +=`
    <span>${item}</span>
    <span>${duedate} </span>
    <button class="delete-btn" onclick=" todolist.splice( ${i},1); displayItem();">Delete</Button>
  
      `;}
      displayElement.innerHTML= newhtml;
}