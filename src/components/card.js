  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

import axios from "axios"

const Card = (article) => {
  let card = document.createElement("div")
  card.classList = "card"
 
  let div1 = document.createElement("div")
  div1.textContent = article.headline
  div1.classList = "headline"
  card.appendChild(div1)
 
  let div2 = document.createElement("div")
  div2.classList = "author"
  card.appendChild(div2)
 
  let div3 = document.createElement("div")
  div3.classList = "img-container"
  div2.appendChild(div3)
 
  let img = document.createElement("img")
  img.src = article.authorPhoto
  div3.appendChild(img)
 
  let span = document.createElement("span")
  span.textContent = `By ${article.authorName}`
  div2.appendChild(span)
 
 
  card.addEventListener("click", event => {
    console.log(article.headline)
  })
  return card
}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

const cardAppender = (selector) => {
  let parentElement = document.querySelector(selector)
  axios.get("http://localhost:5000/api/articles")
    .then(res => {
      res.data.articles.javascript.forEach(article => {
        const card = Card(article)
        parentElement.appendChild(card)
      })
      res.data.articles.bootstrap.forEach(article => {
        const card = Card(article)
        parentElement.appendChild(card)
      })
      res.data.articles.technology.forEach(article => {
        const card = Card(article)
        parentElement.appendChild(card)
      })
      res.data.articles.jquery.forEach(article => {
        const card = Card(article)
        parentElement.appendChild(card)
      })
      res.data.articles.node.forEach(article => {
        const card = Card(article)
        parentElement.appendChild(card)
      })
    })
    .catch(err => console.error(err))
  }    


export { Card, cardAppender }
