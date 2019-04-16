/*global fetch*/
let btn = document.querySelector("#mainButton");
let wrapper = document.querySelector("#wrapper");
let userInput = document.querySelector("#input");
let query = "meme"

userInput.addEventListener("change",e=>{
  console.log(userInput.value)
  query = userInput.value
  sendApiRequest()
})
async function sendApiRequest() {
  let response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=r0UB4yO4TnW0BPSRXvE5CffzKGDyHfsX&q="+query+"&limit=100&offset=0&rating=G&lang=en");
  console.log(response);
  let newData = await response.json()
  console.log(newData)
  let num =Math.floor(Math.random() * 99)
  console.log(num)
  let  finalgif = newData.data[num].images.fixed_width.url
  addImageToScreen(finalgif)
};



function addImageToScreen(myURL) {
  wrapper.innerHTML += `<img src="${myURL}"/>`
};

