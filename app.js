const listUl = document.querySelector('.product-container ul')

let i=0;
Products.forEach((product) => {
    i++;
})
if(i<=4){
    Products.forEach((product) => {
        listUl.innerHTML +=
        `
        <li>
            <a href="">
                <img src="${product.image}" alt="">
                <p>${product.name}</p>
                <p>${product.price}</p>
            </a>
        </li>
        `
    });
} else {
    const createUl = document.querySelector('.product-container')
    createUl.innerHTML += `<ul class="list"></ul>`
    const listProduct = document.getElementsByClassName('list') // return Array
    let x = 0;
    Products.forEach((product) => {
        if(product.tag == '#food'){
            x = 0;
        }
        else if (product.tag == '#drink'){
            x = 1;
        }
        listProduct[x].innerHTML +=
        `
        <li>
            <a href="" tag-name="${product.tag}">
                <img src="${product.image}" alt="">
                <p>${product.name}</p>
                <p>${product.price}</p>
            </a>
        </li>
        `
    });
}

