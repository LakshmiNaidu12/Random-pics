const imageContainerEl= document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click",()=>{
  
    let imageNum = 10;
   addNewImages(imageNum);
    });
    function addNewImages(imageNum) {
        for (let index = 0; index < imageNum; index++) {
            const newImgEl = document.createElement("img");
            const randomNum = Math.floor(Math.random() * 2000);
            const timestamp = new Date().getTime(); // Current timestamp
            newImgEl.src = `https://picsum.photos/300?random=${randomNum}&timestamp=${timestamp}`;
            imageContainerEl.appendChild(newImgEl);
        }
    }