const tbody = document.querySelector('tbody')
const miBotonMas = document.querySelector('#mibotonmas')
const miBotonMenos = document.querySelector('#mibotonmenos')
const miBotonMeses = document.querySelector('#mibotonmeses')
const miBotonTodo = document.querySelector('#todos')
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
// Mas Vendido
function masVendidoDeEnero(){
	products.sort(function (a, b) {
		if (a.Enero > b.Enero) {
		  return 1;
		}
		if (a.Enero < b.Enero) {
		  return -1;
		}
		return 0;
	  });
	let masVendido = products.slice(products.length -1)
	totalDeVentasPorMes()
	return masVendido[0]
}
// Menos vendido
function menosVendidoDeEnero(){
	products.sort(function (a, b) {
		if (a.Enero < b.Enero) {
		  return 1;
		}
		if (a.Enero > b.Enero) {
		  return -1;
		}
		return 0;
	  });
	let menosVendido = products.slice(products.length -1) 
	return menosVendido[0]
}
function totalDeVentasPorMes(){
	let total = [];
	for (let i = 0; i < products.length; i++) {
		let product = products[i]
		let suma = product.Enero + product.Febrero + product.Marzo + product.Abril + product.Mayo + product.Junio
		product['total'] = suma
		let nuevoObj = {
			Producto: product.Producto,
			Enero: product.Enero,
			Febrero: product.Febrero,
			Marzo: product.Marzo,
			Abril: product.Abril,
			Mayo: product.Mayo,
			Junio: product.Junio,
			Total: suma
		} 
		total.push(nuevoObj) 
		console.log(total);
	}
	return total
}
function masVendidoTodos(){
	let totalVentas = totalDeVentasPorMes()
	let sortetTotales = totalVentas.sort(function(a,b){
		return a.Total - b.Total
	})
	let more = sortetTotales.slice(sortetTotales.length -1)
	return more [0]
}

function renovar(){
	const nuevoProductoEstrella = masVendidoTodos()
	console.log(nuevoProductoEstrella);

}
renovar()

function loadTable(){
	tbody.innerHTML = ''
	const totalProduct = totalDeVentasPorMes()
	for (let i = 0; i < products.length; i++) {
		const product = products[i]
		const totalVenta = totalProduct[i]
		let bgcolor = ""
		let color = ""
		if (i%2 === 1){
			bgcolor = "#ff6464"
			color = "white"
		}
		let template = `<tr style="background-color:${bgcolor}; color:${color};">
						<td>${product.Producto}</td>
						<td>${product.Enero}</td>
						<td>${product.Febrero}</td>
						<td>${product.Marzo}</td>
						<td>${product.Abril}</td>
						<td>${product.Mayo}</td>
						<td>${product.Junio}</td>
						<td>${totalVenta.Total}</td>
						</tr>`
					 tbody.innerHTML += template
				}
				
}


miBotonTodo.addEventListener('click', function(){
	loadTable()
})
miBotonMas.addEventListener('click', function(){
	const product = masVendidoDeEnero()
	tbody.innerHTML = ''
	//const totalVenta = totalProduct[i]
	let template = `<tr>
						<td>${product.Producto}</td>
						<td>${product.Enero}</td>
						<td>${product.Febrero}</td>
						<td>${product.Marzo}</td>
						<td>${product.Abril}</td>
						<td>${product.Mayo}</td>
						<td>${product.Junio}</td>
						<td>${product.total}</td>
						</tr>`
						tbody.innerHTML += template
})
miBotonMenos.addEventListener('click', function(){
	const product = menosVendidoDeEnero()
	//const totalVenta = totalProduct[i]
	tbody.innerHTML = ''
	let template = `<tr>
						<td>${product.Producto}</td>
						<td>${product.Enero}</td>
						<td>${product.Febrero}</td>
						<td>${product.Marzo}</td>
						<td>${product.Abril}</td>
						<td>${product.Mayo}</td>
						<td>${product.Junio}</td>
						<td>${product.total}</td>
						</tr>`
						tbody.innerHTML += template
})
miBotonMeses.addEventListener('click', function(){
	const product = masVendidoTodos()
	console.log(product);
	//const totalVenta = totalProduct[i]
	tbody.innerHTML = ''
	let template = `<tr>
						<td>${product.Producto}</td>
						<td>${product.Enero}</td>
						<td>${product.Febrero}</td>
						<td>${product.Marzo}</td>
						<td>${product.Abril}</td>
						<td>${product.Mayo}</td>
						<td>${product.Junio}</td>
						<td>${product.Total}</td>
						</tr>`
						tbody.innerHTML += template
})