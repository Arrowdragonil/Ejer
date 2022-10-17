const getDataUrl = async(a) => {
    try {
        const data = await fetch(`https://api.nationalize.io?name=${a}`);
        const dataJson = await data.json();
        return dataJson;
        
    }catch (e){

    }
}
const button = document.querySelector("button");

const input = document.querySelector("input");

button.addEventListener("click", async () => {
    try {
      console.log(input.value);
      const data1 = await getDataUrl(input.value);
      console.log(data1);
      for (const country of data1.country) {

        
      const div = document.createElement("div");
      
      const p = document.createElement("p");
      const text = document.createTextNode(
        `El nombre ${input.value} tiene un ${country.probability} porciento de ser ${country.country_id}.`
      );

      p.appendChild(text);
      const button = document.createElement("button");
      button.innerText = "Delete";
      div.appendChild(p);
      button.addEventListener("click", () => {
        div.remove();
      });

      div.appendChild(button);
      document.body.appendChild(div);
      
    
    }
    } catch (error) {
      console.log(error);
    }
  });