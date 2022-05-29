

const tile1 = document.querySelectorAll('.card');
console.log(tile1);

tile1.forEach((tile1) => {

    tile1.addEventListener("mouseover", function(){

        tile1.style.borderColor = 'black';
    });
    
    tile1.addEventListener("mouseout", function(){
    
        tile1.style.borderColor = '';
    });

})

const link = document.querySelector(".header-link");

link.addEventListener("mouseover", function(){

    // link.style.backgroundColor = "black";
    link.style.color = 'white';
    link.style.fontSize = "110%";   //QUEDA RESOLVER COMO EVITAR AUMENTAR TOP MARGIN/PADDING
})

link.addEventListener("mouseout", function(){
    
    link.style.backgroundColor = '';
    link.style.color = '';
    link.style.fontSize = "";
});
