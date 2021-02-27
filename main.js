const rootRef = document.querySelector('.root')
const rootItemRef = document.querySelector('.root__item')
rootRef.addEventListener('click', event => {
    const trY = event.layerY
    const trX = event.layerX
        rootItemRef.style.transform=`translate(${trX}px,${trY}px)` 
    console.log(event)
})