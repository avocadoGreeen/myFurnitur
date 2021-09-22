const filterProduct = document.querySelectorAll('.products__item');

document.querySelector('.catalog__menu-filter').addEventListener('click', event => {
    if (event.target.tagName !== 'BUTTON') return false;

    let filterClass = event.target.dataset['filter'];
    
    filterProduct.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all'){
            elem.classList.add('hide');
        }
    });
});



