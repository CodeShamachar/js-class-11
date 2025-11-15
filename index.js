let inputBox = document.getElementById('inputBox');
let pass = document.getElementById('password');
let msg = document.getElementById('message');
let indi = document.getElementById('indicate');
let tikIcon = document.querySelector('.fa-solid')

pass.addEventListener('input', ()=>{
    if (pass.value.length>0) {
        msg.style.display='block'
    } else {
        msg.style.display='none'
        
    }
// -----------------------------------
    if (pass.value.length < 4) {
        indi.innerText="weak"
        inputBox.style.borderColor ='#ff3d2b'
        msg.style.color='#ff3d2b'
    }else if(pass.value.length < 8){
        indi.innerText='medium'
        inputBox.style.borderColor ='#ffcd38'
        msg.style.color='#ffcd38'


    } else if(pass.value.length >= 8){
        indi.innerText='strong'
        inputBox.style.borderColor ='#38ff4c'
        msg.style.color='#38ff4c'
    }
    // ----------------------------------

    if (pass.value.length<8) {
        tikIcon.style.visibility='hidden'
    } else {
        tikIcon.style.visibility='visible'
        
    }


})












// let pass = document.getElementById('password');
// let msg = document.getElementById('message');
// let indi = document.getElementById('indicate');

// pass.addEventListener('input', ()=>{
//     if (pass.value.length>0) {
//         msg.style.display='block'
//     } else {
//         msg.style.display='none'
        
//     }

//     if (pass.value.length < 4) {
//         indi.innerText="weak"
//         pass.style.borderColor ='#ff3d2b'
//         msg.style.color='#ff3d2b'
//     }else if(pass.value.length < 8){
//         indi.innerText='medium'
//         pass.style.borderColor ='#ffcd38'
//         msg.style.color='#ffcd38'


//     } else if(pass.value.length >= 8){
//         indi.innerText='strong'
//         pass.style.borderColor ='#38ff4c'
//         msg.style.color='#38ff4c'
//     }


// })