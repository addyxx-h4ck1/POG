const parent = document.querySelector('.col-2-wrapper')
const images = fetch('images.json')
.then(res => res.json())
.then(data => {
    const links = data.images;
    
    links.forEach(url => {

        const backg = [ 'black', 'red', 'green', 'pink', 'bisque' ]
        let random = Math.floor(Math.random()*backg.length)
       
        let color = backg[random];
        
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.style.backgroundColor = color;
        
        const anchor = document.createElement('a');
        anchor.href = url;
        
        const image = document.createElement('img');
        image.src = url;
        image.setAttribute('loading', 'lazy')
        
        anchor.appendChild(image)
        card.appendChild(anchor)
        parent.appendChild(card)

       
    });
})