var typed = new Typed('#element', {
    strings: ['<i>FrontEnd Developer</i>', ' <i>MERN Developer</i>', ' <i>Competitive Programmer</i>'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.hidden__');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add('visible');
                box.classList.remove('hidden');
            } else {
                box.classList.remove('visible');
                box.classList.add('hidden');
            }
        });
    };

    const debounce = (func, wait = 20, immediate = true) => {
        let timeout;
        return function() {
            let context = this, args = arguments;
            let later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    window.addEventListener('scroll', debounce(checkVisibility));
    checkVisibility(); // Initial check
});
