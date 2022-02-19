//Appeler les class dont on a besoin
// QUAND j'appuie sur le menu ALORS 2 div en croix + une s'efface
// boite de couleur apparait
// liens apparaissent

const burger = document.querySelector(".burger");
const menuBurger = document.querySelector(".menuBurger")

burger.addEventListener("click", ()=>{
    burger.classList.toggle("modif");
    menuBurger.classList.toggle("menuBurgerCache");
});
