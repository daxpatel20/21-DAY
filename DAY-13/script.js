
const data = [
'Surat','Ahmedabad','Mumbai','Delhi','Bangalore','Hyderabad','Chennai','Kolkata',
'Pune','Jaipur','Lucknow','Kanpur','Nagpur','Indore','Bhopal','Patna',
'Vadodara','Rajkot','Agra','Varanasi','Amritsar','Chandigarh','Coimbatore',
];


function delayFunc(fn, time){
    let t;
    return function(...arg){
        clearTimeout(t);
        t = setTimeout(()=>fn(...arg), time);
    }
}


const input = document.getElementById('input');
const list = document.getElementById('list');
const empty = document.getElementById('empty');


function searchData(text){
    list.innerHTML = '';

    if(!text.trim()){
        list.classList.remove('show');
        empty.classList.remove('show');
        return;
    }

    const res = data.filter(x =>
        x.toLowerCase().includes(text.toLowerCase())
    );

    if(res.length === 0){
        empty.classList.add('show');
        list.classList.remove('show');
    } else {
        empty.classList.remove('show');
        list.classList.add('show');

        res.forEach(x=>{
            const li = document.createElement('li');
            li.className = 'item';
            li.textContent = x;

            li.addEventListener('click', ()=>{
                input.value = x;
                list.classList.remove('show');
                empty.classList.remove('show');
            });

            list.appendChild(li);
        });
    }
}

const runSearch = delayFunc(searchData, 500);


input.addEventListener('input', e=>{
    const val = e.target.value;

    if(!val.trim()){
        list.classList.remove('show');
        empty.classList.remove('show');
    }

    runSearch(val);
});

document.addEventListener('click', e=>{
    if(!e.target.closest('.main-box')){
        list.classList.remove('show');
        empty.classList.remove('show');
    }
});