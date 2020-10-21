import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const axiosPromise = axios.get("https://api.github.com/users/fkydln")

  .then((r) => {
    console.log("success!");
    var getData = r.data;
    document.querySelector(".cards").appendChild(cardCreator(getData));
  });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["austenallred","jduell12","somersgreg","josiahroa18","jiayi-ren","dscromer","zoelud","aperez9423","srkn14"];

followersArray.forEach(user => {
     var axyProm = axios.get(`https://api.github.com/users/${user}`)
      .then((response) => {
        console.log(`pulled all!`);
        
        document.querySelector(".cards").appendChild(cardCreator(response.data))
      })
});


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cardCreator = (param) => {
  const divCreator = document.createElement("div");
  const divCreator2 = document.createElement('div');
  const imgCreator = document.createElement("img");
  const h3Creator = document.createElement("h3");
  const pCreator = document.createElement("p");
  const pCreator2 = document.createElement('p');
  const pCreator3 = document.createElement('p');
  const pCreator4 = document.createElement('p');
  const pCreator5 = document.createElement('p');
  const pCreator6 = document.createElement('p');
  const aCreator = document.createElement("a");


  divCreator.classList.add("card");
  divCreator2.classList.add('card-info');
  h3Creator.classList.add('name');
  pCreator.classList.add('username');



  //imgCreator.setAttribute("src", param.avatar_url); does the same job.
  imgCreator.src = param.avatar_url;
  aCreator.href = param.url;
  h3Creator.textContent = param.name;
  pCreator.textContent = param.login;
  pCreator2.textContent = `Location: ${param.location}`;
  pCreator3.textContent = `Profile: `;
  aCreator.textContent = param.html_url;
  pCreator4.textContent = `Followers: ${param.followers}`;
  pCreator5.textContent = `Following: ${param.following}`;
  pCreator6.textContent = `Bio: ${param.bio}`


  divCreator.appendChild(imgCreator);
  divCreator.appendChild(divCreator2);
  divCreator.querySelector('.card-info').appendChild(h3Creator);
  divCreator.querySelector('.card-info').appendChild(pCreator);
  divCreator.querySelector('.card-info').appendChild(pCreator2);
  divCreator.querySelector('.card-info').appendChild(pCreator3);
  divCreator.querySelectorAll('p')[2].appendChild(aCreator);
  divCreator.querySelector('.card-info').appendChild(pCreator4);
  divCreator.querySelector('.card-info').appendChild(pCreator5);
  divCreator.querySelector('.card-info').appendChild(pCreator6);

  return divCreator;
};

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
