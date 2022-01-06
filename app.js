const listUl = document.querySelector('.products--list ul')

let i=0;
Products.forEach(() => {
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
                <p>${product.price.toLocaleString()} Đ</p>
            </a>
        </li>
        `
    });
} else {
    const createUl = document.querySelector('.products--list')
    createUl.innerHTML += `<ul class="list"></ul>`
    const listProduct = document.getElementsByClassName('list') // return Array
    let x = 0;
    Products.forEach((product) => {
        if(product.tag == '#food'){
            x = 0;
        }
        else if (product.tag == '#drink' && product.tag != '#beer'){
            x = 1;
        }
        listProduct[x].innerHTML +=
        `
        <li>
            <a href="" tag-name="${product.tag}">
                <img src="${product.image}" alt="">
                <p>${product.name}</p>
                <p>${product.price.toLocaleString()} Đ</p>
            </a>
        </li>
        `
    });
}

