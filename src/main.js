
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




const elements = {
    button : document.querySelector('.btn'),
    form: document.querySelector('.form'),
    input: document.querySelector('.input')
}

console.log(elements.button);
console.log(elements.form);
console.log(elements.input);

elements.button.addEventListener("submit", handlerEvent);

function handlerEvent(event){
    event.preventDefault();


}


 // const createMarkup = ({})

// fetch('https://pixabay.com/api/?key=${api})'.then((result) => {
//     if (!result.ok){ 
//         iziToast.show({
//         class: "wave-stroke",   
//         message: '🚫Sorry, there are no images matching your search query. Please try again!',
//         position: "topRight",
//         closeOnEscape: true,
//         closeOnClick: true,
//         backgroundColor: "#e3545b",
//     })
        
//     }
// }))

function getPicturesBy(query){
    const api = "48352138-8c9803781c6b3191e7f9ec647";
    return fetch(`https://pixabay.com/api?key=${api}&q=${query}`).then((result) => {console.log(result);
if(!result.ok){
    throw new Error(result.status);
    } 
    return result.json(); 
}).then((data) => {console.log(data);
}).catch((error) => {console.log(error)})
}


getPicturesBy("blue+car").then((data) => {console.log(data)}).catch(error => {
    iziToast.show({
        class:"wave-stroke",
        message:"🚫Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
        closeOnEscape: true , 
        closeOnClick: true, 
        backgroundColor:" #e3545b",
});
});
