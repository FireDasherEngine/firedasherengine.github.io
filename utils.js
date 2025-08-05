/**
 * @returns {void}
 * @param {string} titleString 
 * @param {HTMLElement} titleElement 
 */

function createTitle(titleString, titleElement) {
    Array.from(titleString).forEach(e => {
        const letterSpan = document.createElement('span');
        letterSpan.innerHTML = e.replace(" ", "&nbsp;");
        titleElement.appendChild(letterSpan);
    });
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

document.addEventListener("mousemove", e=>{
    document.querySelectorAll(".title > span").forEach(ee=>{
        let scale = 1;

        const elementRect = ee.getBoundingClientRect();

        const elementCenterX = elementRect.left + elementRect.width / 2;
        const elementCenterY = elementRect.top + elementRect.height / 2;

        const distanceX = e.clientX - elementCenterX;
        const distanceY = e.clientY - elementCenterY;
        const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        console.log(dist);

        if (dist < 150) {
            //sayToothpaste();
            scale = lerp(1, 1.5, easeInOutCubic((150 - dist) / 150));
        }

        ee.style.scale = scale;
    });
});

function sayToothpaste() {
    alert("Toothpaste!!")
}