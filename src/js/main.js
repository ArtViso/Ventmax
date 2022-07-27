(function () {
    const menu = document.querySelector('#menu')
    const burger = document.querySelector('.burger')

    burger.addEventListener('click', () => {
        document.body.classList.add('no-scroll')
        burger.classList.toggle('active')
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
    })

})();
