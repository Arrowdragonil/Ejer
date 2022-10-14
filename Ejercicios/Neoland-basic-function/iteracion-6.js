let duplicates = ['sushi', 'pizza','burger','potatoe','pasta','ice-cream','pizza','chicken','onion rings','pasta','soda'];
    
    const resultados = duplicates.reduce((string,i)=>{
      if(!string.includes(i)){
      	string.push(i);
      }
      return string;
    },[])

    console.log(resultados);
    
    
    
    
    
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* const rep = false;
    const elimi = new set();
    for (i = 0; i < duplicates.length; i++) {
        for ( j = 0; j < duplicates.length; j++){
            if(duplicates[i] == duplicates[j] && i!=j ){
                rep = true;
            }else{
                console.log("no hay rep")
            }
        }
    }
  }
  console.log("repetir");

   */