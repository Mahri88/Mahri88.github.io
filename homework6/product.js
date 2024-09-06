
let shopItemsData = [
  {
    id: "jfhgbvnscs",
    name: "Cap",
    price: 40,
    desc: "Stay warm and look great in this colorful and cozy beanie. Your group is sure to love showing off your customized logo or design on this affordable beanie when the weather gets cooler!", 
    img: "images/img.3.jpg",
  },
    
  
]
const url  = 'https://solar-poised-salad.glitch.me/mahri';

const getProducts= () => {
    fetch(url)
.then.apply((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));
    } ;
