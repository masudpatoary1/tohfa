const carouselContainer = document.getElementById('carousel_items')

const imgPath = [
    {
        id: 'jkuhdvclzxhvuv',
        imgUrl: './resources/images/slide_1.png'
    },
    {
        id: 'jkuhdvclzxhvuv',
        imgUrl: './resources/images/slide_2.png'
    },
    {
        id: 'jkuhdvclzxhvuv',
        imgUrl: './resources/images/slide_3.png'
    }
]

const renderCarousel = () => {
    for (let i = 0; i < imgPath.length; i++) {

        let carouselel = document.createElement('div');
        carouselel.classList.add('carousel-item');
        carouselel.setAttribute('id', `carouselel_${i + 1}`)
        carouselel.setAttribute('data-bs-interval', '10000')
        // carouselel.id[0].classList?.add('active')
        setTimeout(() => {
            carouselel.innerHTML = `<div class="carousel_img">
                    <img src="${imgPath[i]?.imgUrl}" class="d-block w-100 rounded-3" alt="">  
                </div>`
        }, 1);
        carouselContainer.appendChild(carouselel)
        document?.getElementById('carouselel_1')?.classList.add('active')
    }
}

renderCarousel()