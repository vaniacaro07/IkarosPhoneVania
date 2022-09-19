
// window.addEventListener('load', function(){

//     console.log("xdxdxd")

//     let form = document.querySelector('.form-register');

//     const btnRegister = document.querySelector('btn-register');

//     form.fullName.focus();

//     const inputs = [...document.querySelectorAll('input')];

//     let errors = inputs.length;

//     inputs.forEach((input) => {
//         input.addEventListener('blur', (e) => {
//             if(
//                 e.target.value.length == 0 && !e.target.classList.add('invalid')
//             ){
//                 e.target.classList.add('invalid');
//                 e.target.insertAdjacentHTML(
//                     "afterend", "<p style='color:red; margin:5px'>Campo obligatorio</p>"
//                 );
//             }
//             if(
//                 e.target.value.length == 0 && e.target.classList.contains('valid')
//             ){
//                 errors++;
//             }
//             if(e.target.value.length > 0){
//                 if(e.target.classList.contains('invalid')){
//                     e.target.classList.remove('invalid');
//                     e.target.nextElementSibling.remove();
//                 }
//                 e.target.classList.add('valid');
//                 errors--;
//             }
//             if(!errors){
//                 btnRegister.disabled = false;
//             }else{
//                 btnRegister.disabled = true;
//             }
//         })
//     })




// })