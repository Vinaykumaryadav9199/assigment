// Optional: You can add interactivity or form validation here
// document.querySelector('form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert('Login form submitted!');
// });



  document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("Password")
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
 
   
  
    inputField.addEventListener('input', function() {
       
        if (inputField.value.trim() !== "") {
            // If input has value, change button color and enable it
            loginButton.classList.add('active');
            loginButton.disabled = false;
        } else {
            // If input is empty, revert button color and disable it
            loginButton.classList.remove('active');
            loginButton.disabled = true;
        }
    });


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
                        Logo.classList.add("animate")
                        setTimeout(() => {
                                
                            homeLargeImage.classList.remove("scale-in");
                            largeHome.classList.remove("scale-in")
                            leftContainer.style.width = "0vw"
                            largeHome.classList.add("fullscreen")
                            setTimeout(()=>{
                                
                            })

                            
                          
                           

                            
                        },4000);
                },);

            },);

        }, 3000); 


        
      });



});