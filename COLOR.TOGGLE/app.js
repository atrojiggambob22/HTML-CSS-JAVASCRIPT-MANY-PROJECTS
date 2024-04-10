let toggler = document.getElementById('switch')

 toggler.addEventListener('click', ()=>{
//     if (toggler.checked === true){
//         document.body.style.backgroundColor = 'black'
//     }  
//     else{
//         document.body.style.backgroundColor = 'white'
//     }

// });

// Simpler way
toggler.checked === true 
? (document.body.style.backgroundColor = "black")
: (document.body.style.backgroundColor ="white");
 });