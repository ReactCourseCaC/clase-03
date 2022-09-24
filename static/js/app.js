const myDom = document;
console.log('Este es el document de la web:')
console.log(myDom)

var contenedorVideo =  myDom.getElementById('video_id');
const myVideoTag = `<iframe width="600" height="300" src="https://www.youtube.com/embed/gXHi0SdKvf0" title="SOLO CAMPING in the RAIN [ relaxing camp in the tent shelter, cosy night,  ASMR ]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </br>`;
contenedorVideo.innerHTML = myVideoTag;

const cant_videos = 3;

for (let i=0; i<cant_videos; i++ ){
    contenedorVideo.innerHTML += myVideoTag;
}