console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded' ,function () {
    fetchDogsImg()
    fetchDogsbreed()
})
 function fetchDogsImg (){
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(data=>{
let images = data.message
images.forEach(image=>
     {
    loadImagestoDom(image)
 })
})
 }

 function loadImagestoDom(image){
     let dogCont=document.getElementById('dog-image-container')
     let ourImage=document.createElement('img')
     ourImage.src=image
     dogCont.appendChild(ourImage)
     ourImage.style.width='100px';
     ourImage.style.border='12px solid black'
 }
 function fetchDogsbreed(){
     fetch("https://dog.ceo/api/breeds/list/all")
     .then(response => response.json())
     .then(data=>{
         console.log(data)
         let breedName=data.message
       for(namebreed in breedName){
           
           loadBreedToDom(namebreed)

       }

     })


 }

 function loadBreedToDom(namebreed){
    let breedCont=document.getElementById('dog-breeds')
     let mybreedName=document.createElement('li')
        mybreedName.textContent=namebreed
      breedCont.appendChild(mybreedName)
     mybreedName.addEventListener('click', ()=>{
          mybreedName.style.color='yellow'
    })
 }

 let breedsArray={}

 const selectedLetter = document.getElementById('breed-dropdown')
 
 function handleChange(event){
     let letter = event.target.value
     let filteredBreeds = breedsArray.filter(namebreed => {
             namebreed.startsWith(letter)
             const filteredBreedsList = createLiElement(filteredBreeds)
             ulContainer.innerHTML = ''
             renderLis(filteredBreedsList)
         })
 }
 
 selectedLetter.addEventListener('change', handleChange)
