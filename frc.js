
let addSebet = document.querySelectorAll('#sebet');


const tbody = document.querySelector('#tab');

for (let i = 0; i < addSebet.length; i++) {
    addSebet[i].addEventListener('click', function (e) {
        e.preventDefault(); 


        let Id = addSebet[i].parentElement.getAttribute('data-id');
        let Name = addSebet[i].previousElementSibling.previousElementSibling.innerText;
        let Image = addSebet[i].parentElement.firstElementChild.getAttribute('src');


        let sebethtml = JSON.parse(localStorage.getItem('sebethtml')) || [];

        sebethtml.push({
            id: Id,
            name: Name,
            img: Image,
            count: 1 
        });

        localStorage.setItem('sebethtml', JSON.stringify(sebethtml));


        updateBasketTable();
    });
}


function updateBasketTable() {

    let basket = JSON.parse(localStorage.getItem('sebethtml')) || [];

    tbody.innerHTML = '';


    if (basket.length !== 0) {
        for (const product of basket) {
            let tr = document.createElement('tr');


            let tdImg = document.createElement('td');
            let img = document.createElement('img');
            img.setAttribute('src', product.img); 
            img.setAttribute('width', '150px')
            tdImg.appendChild(img); 

            let tdName = document.createElement('td');
            tdName.innerText = product.name;

            let tdCount = document.createElement('td');
            tdCount.innerText = product.count; 

            tr.append(tdImg, tdName, tdCount);
            tbody.appendChild(tr);
        }
    }
}
updateBasketTable();
