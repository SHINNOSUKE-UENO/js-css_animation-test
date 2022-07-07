//index.html
/*document.querySelector(`.rotate`).animate(
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
        { transform: 'translate(calc(100vw + 30rem))' }
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
            },2000);
        })
    });
}
asynchronyFunction();*/

//macaron-load.html
window.addEventListener('DOMContentLoaded', function() {

    let load = this.document.querySelector('.load');

    //30個のカラフルな円を出現させる繰り返し条件
    function colorCircles() {
        for(let i=0; i<30; i++) {
            let blocks = this.document.createElement('div');
            blocks.classList.add('block');
            //HTMLドキュメントに"block"クラスを持つdiv要素の追加
            load.appendChild(blocks);

            //ランダムな色を背景色にする(HSL)
            //色はHue（色相）を変化させる
            //Saturation（彩度）とLightness（輝度）は固定
            const h = Math.random() * 360;
            //blocksクラスにランダム背景色をつけるスタイルを追加
            blocks.style.backgroundColor = `hsl(${h}, 80%, 60%)`;
            
            
            //anime.jsでblockクラスの円をカスタム
            anime ({
                targets: '.block',
                translateX: function() {
                    return anime.random(-700, 700);
                },
                translateY: function() {
                    return anime.random(-450, 450);
                },
                scale: function() {
                    return anime.random(1,3);
                },
            });
        }
    }
    colorCircles();


    let load2 = this.document.querySelector('.load2');

    function colorfulBalloon(n, max, min) {
        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.borderRadius = "50%";
        balloon.style.position = "absolute";

        function blink(){
            document.querySelector('.load2').innerHTML = "";
            for ( let i=0; i<n; i++ ) {
                let balloonClone = balloon.cloneNode();
    
                //ランダムな色を背景色にする(HSL)
                //色はHue（色相）を変化させる
                //Saturation（彩度）とLightness（輝度）は固定
                const h = Math.random() * 360;
                //blocksクラスにランダム背景色をつけるスタイルを追加
                balloonClone.style.backgroundColor = `hsl(${h}, 80%, 60%)`;
    
                let size = Math.random() * (max - min) + min;
    
                balloonClone.style.top = "calc(" + -1 * size * Math.random() + "px + " + Math.random() * 100 + "%)";
                balloonClone.style.left = "calc(" + -1 * size * Math.random() + "px + " + Math.random() * 100 + "%)";
                balloonClone.style.width = size + "px";
                balloonClone.style.height = size + "px";
                load2.appendChild(balloonClone);
            }
            document.querySelector('.load2 .balloon').addEventListener('animationend', blink);
        }

        blink();
    }

    //実行
    colorfulBalloon(10, 150, 50);


    VanillaTilt.init(document.querySelector(".fade-card"), {
		max: 10,
		speed: 400,
        glare: true,
        "max-glare": 0.6
	});

});