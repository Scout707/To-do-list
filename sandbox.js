const currentTime = () =>
{
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let session = "AM";
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();
  month++;

  if (hours > 12)
  {
    hours -= 12;
    session = "PM";
  }
  if (hours == 0)
  {
    hours = 12;
    session = "AM";
  }
  if (minutes < 10)
  {
    minutes = "0" + minutes;
  }
  if (seconds < 10)
  {
    seconds = "0" + seconds;
  }
  let clock = hours + ":" + minutes + ":" + seconds + " " + session +"\t" + "|\t" + "" +date + "/" + month + "/" + year ;
  document.getElementById("clock").innerText = clock; 
  let t = setTimeout(function(){currentTime() }, 1000);

}
currentTime();

let array = [];
const listMaker = () =>{
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  
  if (inputValue === '')
  {
    alert('\tPlease enter something\t');
  }

  else
  {
    
    localStorage.setItem("To-do list",JSON.stringify(li));
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById('input').value = '';
}

const remover = () =>{
  document.getElementById("myUL").innerText = "";
}

let list1 = document.querySelector('ul');
list1.addEventListener('click',function(rm)
{
  if (rm.target.tagName == 'LI')
  {
    rm.target.remove();
  }
  
});












