$(document).ready(function(){
    var typeData = new Typed(".role", {
        strings: [
            "Web-Developer",
            "Competitive Programmer",
            "Coding Enthusiast",
            "MERN Developer",
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
    });
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzSZnkfZQ57ZsSGr8Qw7RmYJDaoANCfIcfE5nkHyaHWdBdAuTtGqyLVrFQ0MPtY1bBj/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });
    
    
        $('.menu-btn').click(function(){
            $('.navbar .nav-items').toggleClass("show");
        });
    })