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

let array = []; let val; let  j = 1;
const listMaker = () =>
{
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
    val = inputValue;
    document.getElementById("myUL").appendChild(li);
    localStorage.setItem("tasks" + j,JSON.stringify(val));
    j++;
  }

  document.getElementById('input').value = '';
}

const remover = () =>
{
  document.getElementById("myUL").innerText = "";
  localStorage.clear();
}

let list1 = document.querySelector('ul');
list1.addEventListener('click',function(rm)
{
  if (rm.target.tagName == 'LI')
  {
    rm.target.innerText = null;
    rm.target.remove();
  }

});

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  if (localStorage.length != 0)
  {

    for (let i = 0; i < localStorage.length; i++)
    {
      array[i] = localStorage.getItem("tasks"+ j)
      j++;

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











