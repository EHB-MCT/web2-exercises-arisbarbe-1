/* window.onload = function () {
    console.log('online');

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => console.log(data));


}
*/

let list = [];

function getData() {
    //get the list
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => console.log(data));
        //Loop over the list to get each pokemon
        for(let element of list){
                fetch(element.url).then(response => {
                    return response.json();
                }).then(data => {
                    pokemon.push(data);
                })
        }
        
}

window.onload = function(){
    getData();

    setTimeout(buildList, 5000);

    function buildList(){
        console.log("test");
for(let p of pokemon){
    let html = `<div class="pokemon">
    <img id="image" src="" alt="">
    <p id="name">name: `$</p>
    <p id="type">type: </p>
    <button>Add to team: </button>
</div>`
}
       
    }


