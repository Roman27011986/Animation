const rootRef = document.querySelector('.root')
const rootItemRef = document.querySelector('.root__item')
const root = document.querySelector(".root__item--target")
console.log(root)
rootRef.addEventListener('click', event => {
    const trY = event.layerY -25
    const trX = event.layerX -25
        rootItemRef.style.transform=`translate(${trX}px,${trY}px)` 
   
})

    
const onEntry = ((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            console.log(entry)
        }
    })
})
const options = {
    root:rootItemRef,
     rootMargin: '10px',
     threshold: 1.0
} 
const io = new IntersectionObserver(onEntry, options) 
io.observe(root)


    
    



