function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let button = game.querySelector('.dashboard__item__button');
    if (button.innerText === 'Alugar') {
        button.innerText = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        game.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');
    } else {
        button.innerText = 'Alugar';
        button.classList.remove('dashboard__item__button--return');
        game.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');
    }
}
