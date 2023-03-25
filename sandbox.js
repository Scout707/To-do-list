let counter = 0, array = [];
let taskList = [];

if(counter >= localStorage.getItem('size'))
    {
        localStorage.setItem('size', JSON.stringify(counter));
    }

const listMaker = () =>{
    let li = document.createElement("li");
    let inputVal = document.getElementById("text").value;
    let txt = document.createTextNode(inputVal);
    li.appendChild(txt);
    
    if (li === '')
    {
        alert("Please enter something!");
    }
    else{
        taskList.push(inputVal);
        localStorage.setItem('Task' + counter, JSON.stringify(inputVal));
        ++counter;
        document.getElementById('myUL').appendChild(li);
        document.getElementById("text").value = '';

        if(counter >= localStorage.getItem('size'))
        {
            localStorage.setItem('size', JSON.stringify(counter));
        }
    }


}

let listRemover = document.querySelector('ul');
    listRemover.addEventListener('click', function(rm){
        if (rm.target.tagName == 'LI')
        {
            counter = taskList.indexOf(rm.target.innerText);
            localStorage.removeItem("Task" + counter)
            rm.target.innerText = '';
            rm.target.remove;
        }
    })

const removeAll = () =>
{
    document.getElementById("myUL").innerText = "";
    localStorage.clear();

}


if (document.getElementById('myUL').innerText == '')
{
        while(counter != localStorage.getItem('size'))
        {
            if (localStorage.getItem('Task' + counter) != null)
            {
                let li = document.createElement("li");
                let inputVal = localStorage.getItem('Task' + counter);
                inputVal = inputVal.replace(/["]/g, '');
                taskList.push(inputVal);
                console.log(taskList);
                let txt = document.createTextNode(inputVal);
                li.appendChild(txt);
                document.getElementById('myUL').appendChild(li);
                counter++;
            }
            else
            {
                counter++;
            }

        }
}




  
