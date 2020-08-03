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
         data.results.forEach(e => {
           let show = document.getElementById("filterList");
           show.innerHTML = " ";
            show.innerHTML += `<div class="repuesto">
           <img class="imagen-repuesto" src="${e.thumbnail}" alt="${e.title}"> 
           <div class="info-repuesto">
           <h4>${e.title}</h4>
            <img src="./img/estrellas.png" alt="">
             <div class="precio">
                <p>$ ${e.price}</p>
                </div>
               <a href="#" class="boton" data-id="1">Agregar Al Carrito</a>       
                     </div>
     </div>` ;
           })   
         })
         .catch(function(err) {
            console.error(err);
        });
 });
// funcion filtrar


    const filter = document.getElementById('filter');
    filter.addEventListener('change',() => {   
    const productSelect = filter[filter.selectedIndex].value;
    console.log(productSelect.lenth)
   
    fetch('https://api.mercadolibre.com/sites/MLC/search?q=$' + productSelect )
    .then(resp => resp.json() )
    .then(data => {
         let listCategory= document.getElementById('filterList')
         console.log(data.results)
         data.results.forEach((e) =>{
           listCategory.innerHTML ='';
            listCategory.innerHTML += `<div class="repuesto">
            <img class="imagen-repuesto" src="${e.thumbnail}" alt=""> 
            <div class="info-repuesto">
            <h4>${e.title}</h4>
             <img src="./img/estrellas.png" alt="">
              <div class="precio">
                 <p>$ ${e.price}</p>
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
