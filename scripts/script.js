const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1')
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2')
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3')
    },
];

const options = {
    activeItemPosition: 1,
    interval: 3000,

    indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',

    }
};

const carousel = new Carousel(items, options);

function dostuff() {
    carousel.next()
}
setInterval(dostuff, 3000);

function addStar() {
    var s = document.createElement('div')
    s.className = 'star z-100'
    s.style.setProperty('--size', Math.random() * 10 + 3 + 'vmin')
    s.style.left = Math.floor(Math.random() * 80) + '%'
    s.style.top = Math.floor(Math.random() * 100) + '%'
    s.onanimationend = function () { this.remove() }
    document.body.appendChild(s)
}
setInterval(addStar, 200)

const fadeUpScroll = function() {
	var elements = Array.prototype.slice.call(document.getElementsByClassName('fade'));
	console.log(elements)

    elements.forEach(element => {
        let position = element.getBoundingClientRect();

        if(position.top < window.innerHeight) {
            element.classList.add('fade-up')
        }
    });
}

window.onload = fadeUpScroll;

window.addEventListener('scroll',fadeUpScroll);

//   window.onscroll = ()=>{
//     //console.log(window.scrollY)
//     let logo = document.getElementById('logo');
//     let m = 200;
//     if(screen.width>=640 && window.scrollY < 400){
//         let t = Math.floor(250*(1/(1+window.scrollY)));
//         console.log(t);
//         logo.className = "h-[30px] mr-3 sm:absolute sm:h-20 sm:left-[7%] sm:top-["+t+"px] lg:left-[9%] lg:h-["+Math.floor(128*(1/(1+window.scrollY)))+"px]"
//     }
//   }

"h-12 md:h-16 mr-3"
"absolute h-32 left-[170px] top-32 "