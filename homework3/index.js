// fetch("https://jsonplaceholder.typicode.com/todos",{maethod: "Get"})
// .then((result ) => result.json())
// .then((data) =>  console.log(data))
// .catch((error) => console.log(error));

// document.querySelector("#getDog").addEventListener("click",()=>{
// fetch("https://dog.ceo/api/breeds/image/random")
// .then((result )=> result.json())
// .then((data) => {
//   document.querySelector("img").setAttribute("src",data.message);
// })
// .catch((error) => console.log(error));

// });
const getUser =document.querySelector( ".main") 
function getRandomPeople(){
    fetch("https://randomuser.me/api/?results=10")
    .then((result) => result.json())
    .then((data) => {
        const  people =data.results 
        people.forEach(person => {
        const usertemplate =`<div class="user-card">
    <img src="${person.picture.large}" alt="Profile picters" class="profile-pic">
    <h2 class="user-name"> ${person.name.first} ${person.name.last}</h2>
       <p class="locatoin"> <i class="fa-sharp fa-solid fa-location-dot"></i> Location: ${person.location.country}, ${person.location.state}, ${person.location.city}</p>
    <div class=" contact-info">
        <p class="user-email"><i class="fa-sharp fa-regular fa-envelope"></i> Email: ${person.email}</p>
        <p> <i class="fa-sharp fa-solid fa-phone"></i>  <strong>Phone number: ${person.phone}</strong></p>
    </div>
</div>
`;
getUser.insertAdjacentHTML("beforeend",usertemplate);
})
})  
.catch((error) => console.log(error))
}
getRandomPeople();