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


const  getUser = function () {
    fetch("https://randomuser.me/api/?results=10")
    .then((result) => result.json())
    .then((data) => {
        const {
            picture:{large},
            name:{title, first, last},
            email,
          
        }= data.results[0];
        
        const usertemplate =`<div class="user-card">
    <img src="${large}" alt="Profile picters" class="profile-pic">
    <h2 class="user-name"> ${ title}${first} ${last}</h2>
    <p class="user-bio">  </p>
       <p class="locatoin"> <i class="fa-sharp fa-solid fa-location-dot"></i> Location: ${city } ${country}</p>
    <div class=" contact-info">
        <p class="user-email"><i class="fa-sharp fa-regular fa-envelope"></i> Email: ${email}</p>
        <p class="gender"> Gerder: ${ age}</p>
        <p> <i class="fa-sharp fa-solid fa-phone"></i>  <strong>Phone number: ${cell}</strong></p>
    </div>
</div>
`;
document.body.insertAdjacentHTML("beforeend",usertemplate);
    })
.catch((error) => console.log(error));
    
};
getUser();