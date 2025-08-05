function createTitle(titleString) {
    Array.from(titleString).forEach(e => {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = e;
        Array.from(document.getElementsByClassName("title")).forEach(e => e.appendChild(letterSpan));
    });
}