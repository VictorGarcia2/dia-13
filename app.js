const products = [
    {
        Producto: "Smartphone Galaxy S23",
    	Enero: 100,
    	Febrero: 120,
    	Marzo: 150, 
    	Abril: 130, 
    	Mayo: 110, 
    	Junio:140
    },
    {
        Producto: "Auriculares Airpods Pro",
    	Enero :80,
    	Febrero: 95,
    	Marzo: 110, 
    	Abril: 100, 
    	Mayo: 90,
    	Junio:120
    },
    {
        Producto: "Consola PlayStation 5",
    	Enero: 120,
    	Febrero: 135,
    	Marzo: 160, 
    	Abril: 140, 
    	Mayo: 125,
    	Junio:150
    },
    {
        Producto: "Televisor OLED 55",
    	Enero :70,
    	Febrero: 85,
    	Marzo: 100, 
    	Abril :90, 
    	Mayo: 80,
    	Junio:110
    },
    {
        Producto: "Laptop MacBook Air M2",
    	Enero :90,
    	Febrero: 105,
    	Marzo: 120, 
    	Abril: 110, 
    	Mayo: 100,
    	Junio:130
    },
    {
        Producto: "Smartwatch Apple Watch Series 8",
    	Enero: 110,
    	Febrero: 125,
    	Marzo: 150, 
    	Abril: 130, 
    	Mayo: 115,
    	Junio:140
    },
    {
        Producto: "Tablet Samsung Galaxy Tab S8",
    	Enero :85,
    	Febrero: 100,
    	Marzo: 115, 
    	Abril: 105, 
    	Mayo: 95,
    	Junio:125
    },
    {
        Producto: "Cámara digital Sony Alpha 7 IV",
    	Enero: 105,
    	Febrero: 120,
    	Marzo: 145, 
    	Abril: 135, 
    	Mayo: 125,
    	Junio:155
    },
    {
        Producto: "Freidora de aire Philips",
    	Enero :95,
    	Febrero: 110,
    	Marzo: 135, 
    	Abril: 125, 
    	Mayo: 115,
    	Junio:145
    },
    {
        Producto: "Aspiradora robot Roomba",
    	Enero: 115,
    	Febrero: 130,
    	Marzo: 155, 
    	Abril: 145, 
    	Mayo: 135,
    	Junio:165
    },
    {
        Producto: "Bicicleta estática BH Fitness",
    	Enero :75,
    	Febrero: 90,
    	Marzo: 105, 
    	Abril :95, 
    	Mayo: 85,
    	Junio:115
    },
    {
        Producto: "Smart TV LG NanoCell",
    	Enero: 100,
    	Febrero: 115,
    	Marzo: 140, 
    	Abril: 130, 
    	Mayo: 120,
    	Junio:150
    },
    {
        Producto: "Cafetera Nespresso",
    	Enero :80,
    	Febrero: 95,
    	Marzo: 110, 
    	Abril: 100, 
    	Mayo: 90,
    	Junio:120
    },
    {
        Producto: "Horno microondas Samsung",
    	Enero: 120,
    	Febrero: 135,
    	Marzo: 160, 
    	Abril: 140, 
    	Mayo: 125,
    	Junio:150
    },
    {
        Producto: "Consola Nintendo Switch OLED",
    	Enero :90,
    	Febrero: 105,
    	Marzo: 120, 
    	Abril: 110, 
    	Mayo: 100,
    	Junio:130
    },
    {
        Producto: "Smartwatch Fitbit Sense 2",
    	Enero: 110,
    	Febrero: 125,
    	Marzo: 150, 
    	Abril: 130, 
    	Mayo: 115,
    	Junio:140
    },
    {
        Producto: "Tablet Xiaomi Pad 5",
    	Enero :85,
    	Febrero: 100,
    	Marzo: 115, 
    	Abril: 105, 
    	Mayo: 95,
    	Junio:125
    },
    {
        Producto: "Cámara de acción GoPro Hero11",
    	Enero: 105,
    	Febrero: 120,
    	Marzo: 145, 
    	Abril: 135, 
    	Mayo: 125,
    	Junio:155
    },
    {
        Producto: "Drone DJI Mini 3 Pro",
    	Enero :95,
    	Febrero: 110,
    	Marzo: 135, 
    	Abril: 125, 
    	Mayo: 115,
    	Junio:145
    },
    {
        Producto: "Robot de cocina Thermomix",
    	Enero: 115,
    	Febrero: 130,
    	Marzo: 155, 
    	Abril: 145, 
    	Mayo: 135,
    	Junio:165
    },
    
]

/* products.sort(function (a, b) {
    if (a.Enero > b.Enero) {
      return 1;
    }
    if (a.Enero < b.Enero) {
      return -1;
    }
    return 0;
  });

let masVendidoDeEnero = products.slice(products.length -1)
console.log("El mas vendido de enero", masVendidoDeEnero);

products.sort(function (a, b) {
    if (a.Enero < b.Enero) {
      return 1;
    }
    if (a.Enero > b.Enero) {
      return -1;
    }
    return 0;
  });

let menosVendidoDeEnero = products.slice(products.length -1)
console.log("El menos vendido de enero", menosVendidoDeEnero);
 */

function total(userValue){

	for (let i = 0; i < products.length; i++) {
		if(products[i].Producto == userValue){
			let rs = products[i].Enero + products[i].Febrero + 	products[i].Marzo + products[i].Abril + products[i].Mayo + products[i].Junio
			console.log(rs);
		}
	}
}
total('Auriculares Airpods Pro')


 

/* {
    Producto: "Smartphone Galaxy S23",
    Enero: 100,
    Febrero: 120,
    Marzo: 150, 
    Abril: 130, 
    Mayo: 110, 
    Junio:140
}, */