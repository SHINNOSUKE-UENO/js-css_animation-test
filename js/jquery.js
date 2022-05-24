document.querySelector(`.rotate`).animate(
    [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ],
    {
        duration: 8000,
        easing: 'linear',
        iterations: Infinity
    }
);

const first = document.getElementById(`first_slide-up`);
function second() {
    document.querySelector(`.horizontal-move`).animate(
    [
        { transform: 'translateX(0)' },
        { transform: 'translate(140vw)' }
    ],
    {
        duration: 10000,
        iterations: Infinity
    }
);
}

function asynchronyFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            first.style.display = 'block';
            resolve();
        },800);
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                second();
                resolve();
            },1500);
        })
    });
}
asynchronyFunction();