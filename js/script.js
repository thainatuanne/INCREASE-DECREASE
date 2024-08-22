function increase () {
    const content = document.getElementById('content');
    const currentSize = parseFloat(window.getComputedStyle(content).fontSize);
    content.style.fontSize = `${currentSize + 2}px`;
    console.log('chamou')
}

function decrease () {
    const content = document.getElementById('content');
    const currentSize = parseFloat(window.getComputedStyle(content).fontSize);
    content.style.fontSize = `${currentSize - 2}px`;
    console.log('chamou decrease')
}