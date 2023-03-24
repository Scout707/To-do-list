let counter = 0;let array = [];
let taskList = [];
const listMaker = () =>{
    let li = document.createElement("li");
    let inputVal = document.getElementById("text").value;
    taskList.push(inputVal);
    let txt = document.createTextNode(inputVal);
    li.appendChild(txt);
    
    if (li === '')
    {
        alert("Please enter something!");
    }
    else{
        
        localStorage.setItem('Task' + counter, JSON.stringify(inputVal));
        ++counter;
        document.getElementById('myUL').appendChild(li);
        document.getElementById("text").value = '';
        
    }

}

let listRemover = document.querySelector('ul');
    listRemover.addEventListener('click', function(rm){
        if (rm.target.tagName == 'LI')
        {
            localStorage.removeItem("Task" + taskList.indexOf(rm.target.innerText));
            rm.target.innerText = "";
        
            rm.target.remove;

        }
    })

const removeAll = () =>{
    document.getElementById("myUL").innerText = "";
    localStorage.clear();
}
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    if (localStorage.length != 0)
    {
  
      for (let i = 0; i < localStorage.length; i++)
      {
        array[i] = localStorage.getItem("Task"+ counter)
        counter++;
  
        if (array[i] != null)
        {
          let li = document.createElement("li");
          let inputValue = array[i];
          inputValue = inputValue.replace(/["]/g, '');
          let text = document.createTextNode(inputValue);
          li.appendChild(text);
          document.getElementById("myUL").appendChild(li);
        }
      }
    }
  } 
  
  
