//creo otro getData para el eje 2.1 y que no se me solape con el anterior
const url = "https://api.nationalize.io";

const getDataUrl = async(a) => {
    try {
        const data = await fetch(`https://api.nationalize.io?name=${a}`);
        const dataJson = await data.json();
        console.log(dataJson);
    }catch (e){

    }
}


const button = document.querySelector("button");

//repasar la funcionalidad de los botones ya que me tubo que ayudar tanto jose como alex en casi todos ellos.
button.addEventListener("click", () => {    
    const input = document.querySelector("input");
    console.log(input.value)
    getDataUrl(input.value);
});

/* boton.addEventListener("input", () => {
	console.log(streamers.filter(streamers => streamers.name.includes(boton.value)))
}); */