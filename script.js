
var postTitle = "",
  postBody = "";

let i;
let cardContainer = document.createElement('div');
let card, cardBody,cardTitle, cardContent, cardButton;

function createPostList(title, body, postID) {
  card = document.createElement('div');
  card.className = 'card mb-4 shadow-sm';
  card.innerText = " ";
  card.id = postID;

  cardBody = document.createElement('div');
  cardBody.className = '';

  cardTitle = document.createElement('h5');
  cardTitle.innerText = title.substring(0,20).toUpperCase();
  cardTitle.className = 'card-title';

  cardContent = document.createElement('div');
  cardContent.innerText = body.substring(0,30);
  cardContent.className = 'card-body';

  cardButton = document.createElement('button');
  cardButton.innerText = 'Read More';
  cardButton.className = 'btn btn-lg btn-warning';
  cardButton.id = postID;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardContent);
  cardBody.appendChild(cardButton);
  card.appendChild(cardBody);
  cardContainer.appendChild(card);
}

function initPostList(data) {
  if (cardContainer) {
    document.getElementById('container-1').appendChild(cardContainer);
    document.getElementById('container-2').appendChild(cardContainer);
  }
  cardContainer = document.getElementById('container-1');
  for (var i = 0; i < 3; i++ ) {
    createPostList (data[i].title, data[i].body, i);
  }
  cardContainer = document.getElementById('container-2');
  for (var i = 3; i < 6; i++ ) {
    createPostList (data[i].title, data[i].body, i);
  }
}

function fetcher () {
  fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((response) => response.json())
  .then(data => {
    initPostList(data);
  })
}