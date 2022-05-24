document.querySelector(`.rotate`).animate(
    [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ],
    {
        duration: 5000,
        easing: 'linear',
        iterations: Infinity
    }
);
document.querySelector(`.horizontal-move`).animate(
    [
        { transform: 'translateX(0)' },
        { transform: 'translate(100vw)' }
    ],
    {
        duration: 10000,
        iterations: Infinity
    }
);