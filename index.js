// fetch data objects
const data = await fetch("index.json").then(resp => resp.json())

// get containers
const contentContainer = document.querySelector(".content")
const skillsContainer = document.querySelector(".skills")

// for each skill item
for (let i = 0; i < data.skills.length; i++) {
  // get current skill item
  const item = data.skills[i]
  // create value elements
  const value = Array(item.value).fill(null).map((_, i) => (
    `<div class="skill-star">*</div>`
  ))
  // create skill element
  const element = document.createElement("div")
  // set class name
  element.setAttribute("class", "skill-item")
  // add name element
  element.innerHTML += `<div class="skill-name">${item.name}</div>`
  // add value element
  element.innerHTML += `<div class="skill-value">${value.join("")}</div>`
  // append on skills container
  skillsContainer.appendChild(element)
}

// get svg element
const svgElement = document.querySelector("svg")

// load movie file
const movie = await fetch("assets/images/octocat.webp").then(resp => resp.blob())

// create file reader
const reader = new FileReader()

// reader load listener
reader.addEventListener("load", async () => {
  // append image on svg element
  svgElement.innerHTML += `<image x="25" y="20" width="500" height="500" href="${reader.result}" />`
  // convert container to image
  const image = await htmlToImage.toPng(contentContainer)
  // append image on svg element
  svgElement.innerHTML += `<image x="388" y="0" width="950" height="532" href="${image}" />`
  // get encoded svg content
  const content = encodeURIComponent(svgElement.outerHTML)
  // set on anchor tag
  document.querySelector("a").setAttribute("href", "data:image/svg+xml," + content)
})

// read movie file as data url
reader.readAsDataURL(movie)
