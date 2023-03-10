/* -------------- BACK-END (API, database, servicio) -------------- */
function getItem() {
    return new Promise((resolve, reject) => {
      console.log("Connecting to backend...⌛");
  
      setTimeout(() => {
        //resolve({ title: "remera", id: 1 });
        reject("No se encontró el producto");
      }, 3000);
    });
  }
  
  /* -------------- FRONT-END (nuestra App de React) -------------- */
  console.log("App iniciada.▶");
  
  getItem()
    .then((respuesta) => {
      console.log(respuesta);
    })
    .catch((errormsg) => console.log(errormsg));
  
  console.log("Llegamos al final🛑.");
  
  