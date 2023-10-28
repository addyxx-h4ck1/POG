const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('fname')
    let email = document.getElementById('email')
    let budget = document.getElementById('budget')
    let safari = document.getElementById('safari')
    let message = document.getElementById('message')
    let submitbtn = document.querySelector('.submitbtn')
    let formData = {
        Name: name.value,
        Email: email.value,
        Budget: budget.value,
        Safari: safari.value,
        Message: message.value 
    }
    

    // https://github.com/github/fetch
    fetch("https://kenyabahati@yahoo.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
})
    .then(res =>{
         name.value = ''
         email.value= ''
         budget.value=''
         message.value = ''
    }).then (res =>{
        submitbtn.type = 'button'
        submitbtn.value = 'Sent!!'
        submitbtn.style.color = 'green'
        submitbtn.style.backgroundColor = 'transparent'
    })
    
})


