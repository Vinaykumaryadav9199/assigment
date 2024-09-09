// Optional: You can add interactivity or form validation here
// document.querySelector('form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert('Login form submitted!');
// });



  document.addEventListener("DOMContentLoaded", function() {
    const inputFieldP = document.getElementById("Password")
    const enroll = document.getElementById("enroll")
    const  opner = document.getElementById("opner")
    const show = document.getElementById("show")
    const inputFieldu = document.getElementById("user")
    const loginButton = document.getElementById("loginButton")
    const loginForm  = document.querySelector(".loginForm")
    const footer = document.querySelector(".Footer")
    const homeLargeImage  = document.querySelector('.largeHomeimg')
    const largeHome = document.querySelector('.largeHome')
    const leftHeadText = document.querySelector(".leftHeadText")
    const rightHead = document.querySelector(".rightHead")
    const Logo = document.querySelector(".logoImg")
    const leftContainer = document.querySelector(".leftContainer")
    const righContainer = document.querySelector(".rightContainer")
    const labelP = document.querySelector(".labelp")
    const labelU = document.querySelector(".labelu")
 
   

    inputFieldP.addEventListener('input', function() {
       
        if (inputFieldP.value.trim() !== "") {
           
            labelP.style.display = "none" 
            loginButton.classList.add('active');
            loginButton.disabled = false;
        } else {
            // If input is empty, revert button color and disable it
          labelP.style.display = "block"
            loginButton.classList.remove('active');

            loginButton.disabled = true;
        }
    });
    inputFieldu.addEventListener('input', function() {
       
        if (inputFieldu.value.trim() !== "") {
           
            labelU.style.display = "none" 
            
        } else {
            // If input is empty, revert button color and disable it
          labelU.style.display = "block"
           
        }
    });

    show.addEventListener("mouseover" ,()=>{
        inputFieldP.type = "text"
    })
    show.addEventListener("mouseout" ,()=>{
        inputFieldP.type = "password"
    })
    
    enroll.addEventListener("mouseover" ,()=>{
        opner.style.opacity = "1"
    })
    enroll.addEventListener("mouseout" , ()=>{
        opner.style.opacity = "0"
    })

    document.getElementById('loginButton').addEventListener('click', function() {
        const button = this;
        button.classList.add('loading');
      
        // Simulate a delay for the login process (e.g., 3 seconds)
        setTimeout(() => {
          button.classList.remove('loading');
          
            setTimeout(() => {
               loginForm.classList.add('slide-down') 
               footer.classList.add("slide-down")
               homeLargeImage.classList.add("scale-in")
               largeHome.classList.add('scale-in')
               leftHeadText.classList.add("slide-left")
               rightHead.classList.add("slide-left")
                setTimeout(() => {
                        Logo.classList.add("move-to-center")
                        setTimeout(() => {  
                            homeLargeImage.classList.remove("scale-in");
                            largeHome.classList.remove("scale-in")
                            leftContainer.style.width = "0vw"
                            largeHome.classList.add("fullscreen")
                            homeLargeImage.classList.add("fullsceen")

                            setTimeout(()=>{
                                Logo.classList.add("move-to-top")
                                leftContainer.classList.add("lbig")
                                largeHome.classList.add("srinkimage")
                                setTimeout(() => {

                                    loginForm.classList.add('slide-up')
                                    footer.classList.add("slide-up")
                                    leftHeadText.classList.add("slide-right")
                                    rightHead.classList.add("slide-right")
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 2000);
                                },3000);
                                
                            },2500)

                        
                            
                        },2000);
                },1);

            },);

        },3000); 


        
      });



});