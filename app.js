// const cell = document.querySelector('.cell');

const cells = document.querySelectorAll('.cell');



// cell.addEventListener('click', (e) => {
//     const target = e.target;
//     console.log(target);
//     target.classList.toggle('active');
//     target.innerText = target.classList.contains('active') ? "Hi, I'm Active" : "Hi, I'm not Active";
// });


// cells.forEach((cell) => {
//     cell.addEventListener('click', (e) => {
//         const target = e.target;
//         console.log(target);
//         target.classList.toggle('active');
//         target.innerText = target.classList.contains('active') ? "Hi, I'm Active" : "Hi, I'm not Active";
//     });
// });


const section = document.querySelector('section');

const mycells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const clickListenerYellow = (e) => {
    const target = e.target;
    console.log(target);
    target.classList.toggle('active');
    target.textContent = "X";
    target.removeEventListener('click', clickListenerYellow);
    target.addEventListener('click', clickListenerGreen);

}

const clickListenerGreen = (e) => {
    const target = e.target;
    console.log(target);
    target.classList.toggle('green');
    target.textContent = "O";
    target.removeEventListener('click', clickListenerGreen);

}

mycells.forEach((num) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = num;
    cell.addEventListener('click', clickListenerYellow);

    section.appendChild(cell);
}
);
