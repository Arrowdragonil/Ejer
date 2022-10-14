//Condicionales avanzados
/*
Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved
a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log. 
 */

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let i = 0; i < alumns.length; i++) {
	const alumn = alumns[i];
	let a2 = 0;
	let isApproved;
	for (const key in alumn) {
	  if (alumns[i][key] === true) {
		a2 += 1;
	  }
	  a2 >= 2 ? (isApproved = true) : (isApproved = false);
	}
	console.log(`${alumns[i].name} approved is ${isApproved}.`);
  }



