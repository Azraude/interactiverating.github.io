$('input[type="checkbox"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
});

 let form= document.querySelector(".myForm");
 let cardform = document.querySelector(".card");
 let cardthanks= document.querySelector(".card-thanks");

window.addEventListener('load',function(){
    console.log(cardform);
    console.log(cardthanks);
 })


 form.addEventListener('submit', function(e){
    e.preventDefault();
    const checkbox = "input[name=rating1]:checked";
    const checked = document.querySelector(checkbox);
    console.log(checkbox);
     if(checked !== null){
         let ratingselected = document.querySelector('.ratingselected');
        ratingselected.textContent =  'You selected ' + checked.getAttribute('value')+ ' out of 5'
         cardform.classList.add("hidden");
         cardthanks.classList.remove("hidden");
     }
 })