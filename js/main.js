
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

/////////////////fornm/////////
const formA = document.querySelector('.first-form')
formA.addEventListener('submit', (e) =>{
   e.preventDefault();
   
   let name = document.getElementById('fname')
   let email = document.getElementById('femail')
   let subject = document.getElementById('fsubject')
   let message = document.getElementById('fmsg')
   let send = document.querySelector('.fenvoyez')

   let formData = {
      Name: name.value,
      Email: email.value,
      subject: subject.value,
      Message: message.value
   }
   

   fetch("https://formsubmit.co/ajax/kenyabahati@yahoo.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
  })
      .then(response => response.json())
      .then(data => {
         console.log(data)

         name.value = ''
         email.value = ''
         subject.value = ''
         message.value = ''
   
         send.value = 'Sent!!!'
         send.type = 'button'
         send.style.border = 'none'
         send.style.color = 'green'
         send.style.backgroundColor = 'black'
      })
      .catch(error => console.log(error));

      
      
 })



const formB = document.querySelector('.second-form')
formB.addEventListener('submit', (e) =>{
   e.preventDefault();
   
   let name = document.getElementById('sname')
   let email = document.getElementById('semail')
   let subject = document.getElementById('ssubject')
   let message = document.getElementById('smsg')
   let send = document.querySelector('.senvoyez')

   let formData = {
      Name: name.value,
      Email: email.value,
      subject: subject.value,
      Message: message.value
   }
   

   fetch("https://formsubmit.co/ajax/kenyabahati@yahoo.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
  })
      .then(response => response.json())
      .then(data => {
         console.log(data)

         name.value = ''
         email.value = ''
         subject.value = ''
         message.value = ''
   
         send.value = 'Sent!!!'
         send.type = 'button'
         send.style.border = 'none'
         send.style.color = 'green'
         send.style.backgroundColor = 'black'
      })
      .catch(error => console.log(error));

      
      
 })


