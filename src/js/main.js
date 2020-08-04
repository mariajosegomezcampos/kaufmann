window.onload = () =>{
     fetch('https://api.mercadolibre.com/sites/MLC/search?q=$ filtros para autos y camionetas')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(e => {
            let listProduct = document.querySelector('#filterList')
            listProduct.innerHTML += `
            <div class="repuesto">
            <img class="imagen-repuesto" src="${e.thumbnail}" alt="${e.title}"> 
            <div class="info-repuesto">
            <h4>${e.title}</h4>
            <img src="./img/estrellas.png" alt="">
                <div class="precio">
                <p>$ ${e.price}</p>
                </div>
                <a href="#" class="boton" data-id="1">Agregar Al Carrito</a>
            </div>
        </div>
       
           
             `;
        })

    })

    .catch(function(err) {console.error(err);
    });
}
//funcion buscador
//Boton buscar 
 const search = document.querySelector('#submit-buscador');
 search.addEventListener("click", () =>{
   
     const namesearch=document.getElementById("buscador").value;
    fetch('https://api.mercadolibre.com/sites/MLC/search?q='+ namesearch)
   .then(response => response.json() )
    .then(data => {
        const data_a = data.results;
           let show = document.getElementById("filterList");
            show.innerHTML = data_a.map( element =>{
            return `<div class="repuesto">
           <img class="imagen-repuesto" src="${element.thumbnail}" alt="${element.title}"> 
           <div class="info-repuesto">
           <h4>${element.title}</h4>
            <img src="./img/estrellas.png" alt="">
             <div class="precio">
                <p>$ ${element.price}</p>
                </div>
               <a href="#" class="boton" data-id="1">Agregar Al Carrito</a>       
                     </div>
     </div>` ;
           })   
        
         
        });
    });

// funcion filtrar


    const filter = document.getElementById('filter');
    filter.addEventListener('change',() => {   
    const productSelect = filter[filter.selectedIndex].value;
    
   
    fetch('https://api.mercadolibre.com/sites/MLC/search?q=$' + productSelect )
    .then(resp => resp.json() )
    .then(data => {

         let listCategory= document.getElementById('filterList')
        const data_a = data.results;
        
                    listCategory.innerHTML = data_a.map( element =>{
                    return`<div class="repuesto">
                    <img class="imagen-repuesto" src="${element.thumbnail}" alt=""> 
                    <div class="info-repuesto">
                    <h4>${element.title}</h4>
                     <img src="./img/estrellas.png" alt="">
                       <div class="precio">
                      <p>$ ${element.price}</p>
                         </div>
                        <a href="#" class="boton" data-id="1">Agregar Al Carrito</a>       
                           </div>
              </div>`; 
         })
        
    })
})
  
const returnhome= document.getElementById("return");
returnhome.addEventListener('click',()=>{

   location.reload();

});
