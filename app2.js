const listUl = document.querySelector('.product-container ul')

const createUl = document.querySelector('.product-container')
var listProduct = document.getElementById('list') // return Array

let i=0;
Products.forEach((product) => {
    if(i == 4){
        listProduct = document.createElement('ul')
        createUl.appendChild(listProduct)
        i=0
    }
    listProduct.innerHTML +=
    `
    <li>
        <a href="#">
            <img src="${product.image}" alt="">
            <p>${product.name}</p>
            <p>${product.price}</p>
        </a>
    </li>
    `
    i++;
});
