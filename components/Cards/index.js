// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( resource => {
    console.log(resource); 
    resource.data.articles.bootstrap.forEach(element => {
        cardContainer.appendChild(createCard(element));
    });

    resource.data.articles.javascript.forEach( element => {
        cardContainer.appendChild(createCard(element)); 
    })

    resource.data.articles.jquery.forEach( element => {
        cardContainer.appendChild(createCard(element)); 
    })

    resource.data.articles.node.forEach( element => {
        cardContainer.appendChild(createCard(element)); 
    })

    resource.data.articles.technology.forEach( element => {
        cardContainer.appendChild(createCard(element)); 
    })
})
.catch(error => {
    console.log('The data was not returned', error);
})


function createCard (topicList) {
   const card = document.createElement('div');
   const headLine = document.createElement('div');
   const author = document.createElement('div');
   const imgConatiner = document.createElement('div');
   const img = document.createElement('img');
   const span = document.createElement('span');
   
   // classes 
   card.classList.add('card');
   headLine.classList.add('headline');
   author.classList.add('author');
   imgConatiner.classList.add('img-container');

   // append 
   card.appendChild(headLine);
   card.appendChild(author);
   author.appendChild(imgConatiner);
   imgConatiner.appendChild(img);
   author.appendChild(span);

 /// content
 
 headLine.textContent = topicList.headline;
 img.src = `${topicList.authorPhoto}`;
 span.textContent = `By ${topicList.authorName}`;

 return card 
}

const cardContainer = document.querySelector('.cards-container');
