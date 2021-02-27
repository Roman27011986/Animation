const rootRef = document.querySelector('.root')
const rootItemRef = document.querySelector('.root__item')
const root= document.querySelector(".root__item--target")

rootRef.addEventListener('click', event => {
    const trY = event.layerY
    const trX = event.layerX
        rootItemRef.style.transform=`translate(${trX}px,${trY}px)` 
   
})
console.dir(root.style.transform)
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


    
    



