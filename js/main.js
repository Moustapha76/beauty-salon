    // slider
    const swiper1 = new Swiper('.swiper1', {
        pagination: '.swiper-pagination1',
        paginationClickable: true,
        direction: 'horizontal',
        autoplay: true,
        loop: true,
        effect: 'fade',
        speed: 200,
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
    })
    const swiper2 = new Swiper('.swiper2', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        slideWidth: 200,
        slidesPerView: 4,
        spaceBetween: 10,
        direction: 'horizontal',
        autoplay: true,
        loop: true,
        effect: 'fade',
        speed: 200,
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
    })
    var nav = document.querySelector('nav')
    document.addEventListener('scroll', function() {
        var y = scrollY
        if (y > 0) { nav.classList.add('fixed') } else { nav.classList.remove('fixed') }
    })

    var close = document.querySelector('.close');
    close.style.display = 'none'
    var modal = document.createElement('div'),
        img = document.createElement('img');
    modal.append(img)
    modal.style.display = 'none';
    modal.classList.add('modal');
    var body = document.querySelector('body')
    body.append(modal)

    function openModal(x) {
        modal.style.display = 'flex';
        if (x) {
            img.setAttribute('src', x)
        } else {
            img.setAttribute('src', event.target.getAttribute('src'))
        }
        close.style.display = 'block'
        console.log(event.target);
    }

    function closeModal() {
        modal.style.display = 'none';
        close.style.display = 'none'
    }