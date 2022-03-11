 // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const Header = (title, date, temp) => {
  const container = document.createElement("div")
  const theDate = document.createElement("span")
  const theTitle = document.createElement("h1")
  const theTemp = document.createElement("span")

  container.appendChild(theDate)
  container.appendChild(theTitle)
  container.appendChild(theTemp)

  container.classList.add("header")
  theDate.classList.add("date")
  theTemp.classList.add("temp")

  theDate.textContent = date 
  theTitle.textContent = title
  theTemp.textContent = temp
  
  return container
}

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headerAppender = (selector) => {
  const entryPoint = document.querySelector(selector)
  const headerMaker = Header({title: "Hello", date: "03-10-2022", temp: "90 degrees"})
  entryPoint.appendChild(headerMaker)

}

export { Header, headerAppender }
