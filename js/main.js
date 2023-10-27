
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.main-card')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}

////images/////

const data = fetch('js/images.json')
.then(res =>{
   return res.json();
})
.then(res => {
  const dataArray = res.first;
  const arrayData = res.second;
  const choisir = res.third;
  let random = Math.floor(Math.random()*dataArray.length)
  let link = dataArray[random];

  let randomsec = Math.floor(Math.random()*arrayData.length)
  let linksec = arrayData[randomsec];
  
  let randomThird = Math.floor(Math.random()*choisir.length)
  let linkThird = choisir[randomThird];
  
  let image = document.querySelector('.image-col-1 img')
  image.src = link;

  let imagesec = document.querySelector('.col-4-images')
  imagesec.src = linksec;

  let imagethird = document.querySelector('.col-7-image')
  imagethird.src = linkThird;
  
})

