//--------------------------------------------------
//variables globales
//--------------------------------------------------


//--------------------------------------------------
//funciones globales
//--------------------------------------------------
function representarCardsProductos() {
  let cards = ""
    if (productos.length){
  for (let i = 0; i < productos.length; i++) {
    cards += `
                <section>
                  <h3> ${productos[i].nombre} </h3>
                  <img src="${productos[i].foto}" alt="">
                  <p><b>Precio: $</b>${productos[i].precio}</p>
                  <p><b>stock: $</b>${productos[i].stock}</p>
                  <p><b>marca: </b>${productos[i].marca}</p>
                  <p><b>categoria: </b>${productos[i].categoria}</p>
                  <p><b>detalles: </b>${productos[i].detalles}</p>
                  <br>
                  <p><b style="color:gold";>Envio: </b> ${productos[i].envio ? 'si': 'no'}</p>
                </section>
                `
  }
}
else cards += '<h2>No se encontrarton productos para mostrar</h2>'
  document.querySelector(".section-cards-body").innerHTML = cards
}

function start() {
  console.warn(document.querySelector("title").innerText)

  representarCardsProductos()
}

