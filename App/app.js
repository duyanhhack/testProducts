const listUl = document.querySelector('.products__list ul')
const listUl_mobile = document.querySelector('.products-container__mobile .products__list ul')

let i=0;
Products.forEach(() => {
    i++;
})
if(i<=4){
    Products.forEach((product) => {
        listUl.innerHTML +=
        `
        <li>
            <a href="" tag-name="${product.tag}">
                <span>ads</span>
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
                <span>ads</span>
                <img src="${product.image}" alt="">
                <p class="product__name">${product.name}</p>
                <p class="product__price">${product.price.toLocaleString('de-DE')} Đ</p>
            </a>
        </li>
        `
    });
}

// for mobile
if(i<=4){
    Products.forEach((product) => {
        listUl_mobile.innerHTML +=
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
} else {
    const createUl = document.querySelector('.products-container__mobile .products__list')
    createUl.innerHTML += `<ul class="list__product__mobile"></ul>`
    const listProduct = document.getElementsByClassName('list__product__mobile') // return Array
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

    //slider
    $('#slider--top').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
            return;
        }
        var carousel = e.relatedTarget;
        $('.counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        loop: true,
        items:1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 4500,
        autoplayHoverPause: false,
    });

    $('#slider--bottom').on('initialized.owl.carousel changed.owl.carousel', function(event) {
        if (!event.namespace)  {
            return;
        }
        var carousel = event.relatedTarget;
        $('.counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        loop: true,
        items:1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 4500,
        autoplayHoverPause: false,
    });

    // resize
    $(window).resize(function(){
        let items = document.querySelectorAll('.products-container .products__list ul li a')
        let itemsTwo = document.querySelectorAll('.products-container .products-list .lower-list .product')
        let price = document.querySelectorAll('.products-container .products__list ul li a .product__price');
        let productName = document.querySelectorAll('.products-container .products__list ul li a .product__name');
        let productNameTwo = document.querySelectorAll('.lower-list .product .product-name');
        let advertise = document.querySelectorAll('.products-container .products__list ul li a span')

        let width = $(window).width();
        if (width <= 600){
            for(i = 0; i<items.length; i++) {
                if(productName[i].innerText == 'Mỳ trộn xúc xích trứng chiên') {
                    price[i].innerHTML = '23.000 đ'
                }
            }
        }
        else{
            for(i = 0; i<items.length; i++) {
                if(productName[i].innerText == 'Mỳ trộn xúc xích trứng chiên') {
                    price[i].innerHTML = 'pre-order'
                }
            }
        }

        if (width <= 600) {
            for(i = 0; i<items.length; i++) {
                if(productName[i].innerText == 'Sandwich') {
                    advertise[i].innerHTML = 'PRE-ORDER'
                    advertise[i].style.background = '#F99B2A'
                    advertise[i].style.border = '1px solid #F99B2A'
                    advertise[i].style.fontSize = '10px'
                    advertise[i].style.width = '98px'
                    advertise[i].classList.add('show')
                }
                if(productName[i].innerText == 'Mỳ trộn xúc xích trứng chiên') {
                    advertise[i].innerHTML = 'mới'
                    advertise[i].classList.add('show')
                }
                if(productName[i].innerText == 'Trà sữa Thái (xanh)') {
                    items[i].innerHTML = `
                        <span>ads</span>
                        <img src="./images/products/beer.png" alt="">
                        <p class="product__name">Bia Heniken Silver</p>
                        <p class="product__price">23.000 Đ</p>
                    `
                }
                if(productName[i].innerText == 'Bia Heniken Silver') {
                    advertise[i].innerHTML = '18+'
                    advertise[i].style.background = 'white'
                    advertise[i].style.color = '#EE2E24'
                    advertise[i].style.border = '1px solid #EE2E24'
                    advertise[i].classList.add('show')
                }
            }
        } else {
            for(i = 0; i<items.length; i++) {
                if(productName[i].innerText == 'Sandwich') {
                    advertise[i].classList.remove('show')
                }
                if(productName[i].innerText == 'Mỳ trộn xúc xích trứng chiên') {
                    advertise[i].classList.remove('show')
                }
                if(productName[i].innerText == 'Bia Heniken Silver') {
                    items[i].innerHTML = `
                        <span>ads</span>
                        <img src="./images/products/trasua.png" alt="">
                        <p class="product__name">Trà sữa Thái (xanh)</p>
                        <p class="product__price">23.000 Đ</p>
                    `
                }
            }
        }
    })
})