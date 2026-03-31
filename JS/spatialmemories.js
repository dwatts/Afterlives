/***Event Listener for scroll arrow on Spatial Memories Page***/

const spatialMemories = document.getElementById("spatial-memories")
const element = document.querySelector(".down-arrow");

spatialMemories.addEventListener('scroll', () => {
    if (spatialMemories.offsetHeight + spatialMemories.scrollTop >= spatialMemories.scrollHeight) {
        element.classList.add("hide");
        console.log('help!')
    } else {
        element.classList.remove('hide');
    }
});