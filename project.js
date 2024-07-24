
const logInBtn=document.getElementById('login-btn');
const submitBtn=document.getElementById('submit-btn');
const targetDiv=document.getElementById('target-div');
const closeBtn=document.getElementById('close-btn');
const inputContainer=document.querySelector('.input-container');


const optionMenu=document.querySelector(".select-menu");
    fBtn=optionMenu.querySelector('.feature-btn');
    
const optionMenu2=document.querySelector(".select-menu2");
    compBtn=optionMenu2.querySelector('.company-btn');




const rgstForm=document.querySelector('.register-container');
    const rgstBtn=rgstForm.querySelector('.register-btn');

const profileContainer=document.querySelector('.profile-container')
    const menuBtn=profileContainer.querySelector('.menu-btn')


fBtn.addEventListener("click",function(){
    optionMenu.classList.toggle("active");
})

compBtn.addEventListener("click",function(){
    optionMenu2.classList.toggle("active");
})



menuBtn.addEventListener("click",function(){
    profileContainer.classList.toggle("active");
})

closeBtn.addEventListener("click",function(){
    document.location.href = "http://127.0.0.1:5500/index.html";
})

logInBtn.addEventListener("click",function(e){
    e.preventDefault();
    logInBtn.innerHTML=`
    <form>
        <label>User Name</label> 
        <input type="text">
        <label>Password</label>
        <input type="text">
    </form>
    `
    logInBtn.classList.add('log');
})

rgstBtn.addEventListener("click",function(){
    rgstForm.classList.toggle("active");
})







