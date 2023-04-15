let counter = 0, keys = [];

if(counter >= sessionStorage.getItem('size'))
    {
        sessionStorage.setItem('size', JSON.stringify(counter));
    };

   
const listMaker = () =>
{
    let li = document.createElement("li");
    let inputVal = document.getElementById("text").value;
    let txt = document.createTextNode(inputVal);
    li.appendChild(txt);
    
    if (inputVal === '')
    {
        alert("Please enter something!");
    }
    else
    {
        localStorage.setItem( inputVal, JSON.stringify(inputVal));
        ++counter;
        document.getElementById('myUL').appendChild(li);
        document.getElementById("text").value = '';
        if(counter >= sessionStorage.getItem('size'))
        {
            sessionStorage.setItem('size', JSON.stringify(counter));
        }
    }
}

let listRemover = document.querySelector('ul');
    listRemover.addEventListener('click', function(rm){
        if (rm.target.tagName == 'LI')
        {
            inputVal = rm.target.innerText;
            localStorage.removeItem(inputVal);

            let element = rm.target;
            element.remove();
            
            let subtractor = sessionStorage.getItem('size') - 1;
            sessionStorage.setItem('size', subtractor);
        }
    });


const removeAll = () =>
{
    document.getElementById("myUL").innerText = "";
    localStorage.clear();
    sessionStorage.setItem('size', JSON.stringify(0));
    counter = 0;
}

    
let count = 0;
keys = Object.keys(localStorage);
if (document.getElementById('myUL').innerText == '')
{
        while(count != sessionStorage.getItem('size'))
        {
            let inputVal = keys[count];

            if (inputVal != null)
            {
                let li = document.createElement("li");
                inputVal = localStorage.getItem(inputVal);
                inputVal = inputVal.replace(/["]/g, '');
                let txt = document.createTextNode(inputVal);
                li.appendChild(txt);
                document.getElementById('myUL').appendChild(li);
                count++;
            }
            else
            {
                count++;
            }

        }
}


