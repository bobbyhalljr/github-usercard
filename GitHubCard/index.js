const cardDiv = document.querySelector('.cards')

// API request
axios.get('https://api.github.com/users/bobbyhalljr')
  .then((response) => {
    // handle success
    console.log(response.data);
    const card = gitCard(response.data)
    cardDiv.appendChild(card);
  })
  .catch((error) => {
    // handle error
    console.log(error)
  })


// function 
function gitCard(object) {
  // create elements
  const cardDiv = document.createElement('div');

  //user image
  const userImg = document.createElement('img');
  userImg.src = object.avatar_url;
  cardDiv.appendChild(userImg);


  // card info
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  cardDiv.appendChild(cardInfo);

  // card name
  const cardName = document.createElement('h3');
  cardName.classList.add('name')
  cardName.textContent = object.name;
  cardInfo.appendChild(cardName);

  // username
  const uName = document.createElement('p');
  uName.classList.add('username')
  uName.textContent = object.login;
  cardInfo.appendChild(uName);

  // location
  const uLocation = document.createElement('p');
  uLocation.textContent = `Location: ${object.location}`;
  cardInfo.appendChild(uLocation);

  // profile
  const uProfile = document.createElement('p');
  uProfile.textContent = `profile: `;
  cardInfo.appendChild(uProfile);

  // github link
  const uGithubLink = document.createElement('a');
  uGithubLink.href = object.html_url;
  uGithubLink.textContent = object.html_url;
  uProfile.appendChild(uGithubLink);

  // followers
  const uFollowers = document.createElement('p');
  uFollowers.textContent = `Followers: ${object.followers}`;
  cardInfo.appendChild(uFollowers);

  //following
  const uFollowing = document.createElement('p');
  uFollowing.textContent = `Following: ${object.following}`;
  cardInfo.appendChild(uFollowing);

  // bio
  const uBio = document.createElement('p');
  uBio.textContent = `Bio: ${object.bio}`;
  cardInfo.appendChild(uBio);
  console.log(object.bio)

  // add class names
  cardDiv.classList.add('card');

  return cardDiv;
}


// adding cards to github handles
const instructors = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
]

instructors.forEach(instructor => {
  axios.get(`https://api.github.com/users/${instructor}`)
  .then((response) => {
    // handle success
    const card = gitCard(response.data)
    cardDiv.appendChild(card);
  })
  .catch((error) => {
    // handle error
    console.log(error)
  })
});

// followersArray.forEach( (item) => {
//   cardDiv.appendChild(gitCard(item))
//   console.log(cardDiv)
// });


/* 
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

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/bobbyhalljr/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
