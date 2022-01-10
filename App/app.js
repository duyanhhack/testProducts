const listUl = document.querySelector('.products__list ul')

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
                <p class="product__name">${product.name}</p>
                <p class="product__price">${product.price.toLocaleString('de-DE')} Đ</p>
            </a>
        </li>
        `
    });
} else {
    const createUl = document.querySelector('.products__list')
    createUl.innerHTML += `<ul class="list__product"></ul>`
    const listProduct = document.getElementsByClassName('list__product') // return Array
    let x = 0;
    Products.forEach((product) => {
        if(product.tag === '#food'){
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
                <p class="product__name">${product.name}</p>
                <p class="product__price">${product.price.toLocaleString('de-DE')} Đ</p>
            </a>
        </li>
        `
    });
}

gotop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function() {
    $('#slider--top').owlCarousel({
        loop: true,
        items:1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
    });

    $('#slider--bottom').owlCarousel({
        loop: true,
        items:1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
    });
})