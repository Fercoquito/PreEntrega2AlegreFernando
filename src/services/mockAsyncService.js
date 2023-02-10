const databaseItems = [
    {
        "id": 1,
        "title": "Seleccion Argentina",
        "category": "Camisetas Internacionales",
        "stock": 34,
        "imgurl": "../assets/img/camisetas/01.jpeg",
        "price": 124.95,
        "detail": "371277006360429"
    },
    {
        "id": 2,
        "title": "Velez Sarsfield",
        "category": "Camisetas Internacionales",
        "stock": 5,
        "imgurl": "../assets/img/camisetas/02.jpeg",
        "price": 127.02,
        "detail": "3565682631758451"
    },
    {
        "id": 3,
        "title": "Napoli",
        "category": "Camisetas Internacionales",
        "stock": 53,
        "imgurl": "../assets/img/camisetas/03.jpeg",
        "price": 186.28,
        "detail": "3571938806357343"
    },
    {
        "id": 4,
        "title": "Independiente de Medellin",
        "category": "Camisetas Internacionales",
        "stock": 44,
        "imgurl": "../assets/img/camisetas/04.jpeg",
        "price": 144.9,
        "detail": "3544417966733316"
    }, 
    {
        "id": 5,
        "title": "Racing",
        "category": "Camisetas Internacionales",
        "stock": 1,
        "imgurl": "../assets/img/camisetas/05.jpeg",
        "price": 131.44,
        "detail": "30151096884031"
    }, 
    {
        "id": 6,
        "title": "San Lorenzo de Almagro",
        "category": "Camisetas Internacionales",
        "stock": 79,
        "imgurl": "../assets/img/camisetas/06.jpeg",
        "price": 191.18,
        "detail": "6331105849157796100"
    }, 
    {
        "id": 7,
        "title": "Seleccion de Japon",
        "category": "Camisetas Nacionales",
        "stock": 15,
        "imgurl": "../assets/img/camisetas/07.jpeg",
        "price": 51.72,
        "detail": "30305473623848"
    }, 
    {
        "id": 8,
        "title": "Seleccion de Ecuador",
        "category": "Camisetas Nacionales",
        "stock": 57,
        "imgurl": "../assets/img/camisetas/08.jpg",
        "price": 147.02,
        "detail": "3542014760455170"
    }, 
    {
        "id": 9,
        "title": "Seleccion de Colombia",
        "category": "Camisetas Nacionales",
        "stock": 48,
        "imgurl": "../assets/img/camisetas/09.jpeg",
        "price": 149.02,
        "detail": "201558924607033"
    }, 
    {
        "id": 10,
        "title": "Aldosivi",
        "category": "Camisetas Nacionales",
        "stock": 16,
        "imgurl": "../assets/img/camisetas/10.jpeg",
        "price": 109.43,
        "detail": "67062817977421321"
    }, 
    {
        "id": 11,
        "title": "Caracas",
        "category": "Camisetas Nacionales",
        "stock": 81,
        "imgurl": "../assets/img/campera/01.jpeg",
        "price": 169.38,
        "detail": "5589973499978753"
    },
    {
        "id": 12,
        "title": "Huracan",
        "category": "Camisetas Nacionales",
        "stock": 100,
        "imgurl": "../assets/img/campera/02.jpg",
        "price": 66.84,
        "detail": "3540513248959002"
    }, 
    {
        "id": 13,
        "title": "Napoli",
        "category": "Shorts",
        "stock": 40,
        "imgurl": "../assets/img/campera/03.jpeg",
        "price": 134.86,
        "detail": "4175006705385100"
    }, 
    {
        "id": 14,
        "title": "San lorenzo",
        "category": "Shorts",
        "stock": 33,
        "imgurl": "../assets/img/short/01.jpg",
        "price": 137.65,
        "detail": "3561018035367132"
    }, 
    {
        "id": 15,
        "title": "Club atletico Racing",
        "category": "Shorts",
        "stock": 16,
        "imgurl": "../assets/img/short/02.jpg",
        "price": 75.73,
        "detail": "6333341230263835"
    }, 
    {
        "id": 16,
        "title": "Boca Juniors",
        "category": "Shorts",
        "stock": 87,
        "imgurl": "../assets/img/short/03.jpg",
        "price": 102.74,
        "detail": "3534113563854264"
    }, 
    {
        "id": 17,
        "title": "Defensa",
        "category": "Shorts",
        "stock": 42,
        "imgurl": "../assets/img/short/04.jpeg",
        "price": 173.87,
        "detail": "3560440868548607"
    }, 
    {
        "id": 18,
        "title": "Arsenal de Sarandi",
        "category": "Camperas",
        "stock": 27,
        "imgurl": "../assets/img/short/05.jpeg",
        "price": 118.67,
        "detail": "6397929813104435"
    }, 
    
];


export default function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(databaseItems);
      }, 1);
    });
  }

  
  


  export function getSingleItem(itemid) {
    let itemReq = databaseItems.find((item) => {        
        return item.id === parseInt(itemid);
    })

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (itemReq !== undefined) resolve(itemReq);
        else reject("Item no encontrado en la base de datos.");
      }, 200);
    });

  }

    export function getItemsByCategory(categoryid) {
    let itemsCat = databaseItems.filter( (item) => item.category === categoryid )

    return new Promise((resolve,) => {
      setTimeout(() => {
      resolve(itemsCat);
      }, 200);
    });

  }
  