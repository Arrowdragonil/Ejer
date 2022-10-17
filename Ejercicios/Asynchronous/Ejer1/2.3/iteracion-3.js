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
      
      const data1 = await getDataUrl(input.value);
      console.log(data1);
      for (const country of data1.country) {
        document.body.innerHTML += `
        <p>El nombre ${input.value} tiene un ${country.probability} porciento de ser ${country.country_id}.</p>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  });