// Navbar Button Toggler
let toggler = document.querySelector(".button-toggler")
let navbar = document.querySelector(".primary-nav")

toggler.addEventListener("click", ()=>{
  dataCollapseAttribute = navbar.getAttribute("data-collapse")
  if (dataCollapseAttribute==="true") {
    navbar.setAttribute("data-collapse", "false")
    toggler.innerHTML = "<i class='fa-solid fa-xmark'></i>"
  }
  else {
    navbar.setAttribute("data-collapse", "true")
    toggler.innerHTML = "<i class='fa-solid fa-bars'></i>"
  }
})


// Carousel
buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let offset = 0
    if (button.dataset.carouselButton === "next") offset = 1
    else offset = -1

    const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide)+offset
    if (newIndex<0) newIndex = slides.children.length-1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

function autoCarousel() {
  const slides = document.querySelector("[data-slides]")
  const activeSlide = slides.querySelector("[data-active]")
  let newIndex = [...slides.children].indexOf(activeSlide)+1
  if (newIndex >= slides.children.length) newIndex = 0
  slides.children[newIndex].dataset.active = true
  delete activeSlide.dataset.active
}

setInterval(autoCarousel, 5000)

// Store Painting Mouseover
// painting = document.querySelector(".image-container img")
// buyButton = document.querySelector(".image-container button")
//
// painting.addEventListener("mouseover", ()=>{
//   buyButton.setAttribute("data-visible", "true")
// })
//
// painting.addEventListener("mouseout", ()=>{
//   buyButton.setAttribute("data-visible", "false")
// })

imageContainers = document.querySelectorAll(".image-container")
imageContainers.forEach((imageContainer, index) => {
  let painting = imageContainer.querySelector("img")
  let buyButton = imageContainer.querySelector(".btn-"+index)
  painting.addEventListener("mouseover", ()=>{
    buyButton.setAttribute("data-visible", "true")
    painting.setAttribute("data-hover", "true")
  })
  painting.addEventListener("mouseout", ()=>{
    buyButton.setAttribute("data-visible", "false")
    painting.setAttribute("data-hover", "false")
  })
  buyButton.addEventListener("mouseover", ()=>{
    buyButton.setAttribute("data-visible", "true")
    painting.setAttribute("data-hover", "true")
  })
  buyButton.addEventListener("mouseout", ()=>{
    buyButton.setAttribute("data-visible", "false")
    painting.setAttribute("data-hover", "false")
  })
});
