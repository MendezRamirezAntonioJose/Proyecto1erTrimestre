/* He contratado a un chico nuevo para que me promocione en su web y necesita 
saber todas las marcas de portatiles que tengo. */
db.portatiles.distinct( "marca" )

/* Estoy ordenando el almacen y me interesa saber los portatiles para ordenarlos segun su precio de manera ascendente*/
db.portatiles.find().sort({precioIVA: 1.0}) /* La funcion del .sort es ordenar las consultas según el campo que le pasemos.
Si ponemos de valor 1.0, lo mostrara de menor a mayor, y si ponemos -1.0, sera de mayor a menor.*/

//Mi tia me ha pedido que le venda el portatil más barato que tenga para su hijo:
db.portatiles.find().sort({precioIVA: 1.0}).limit(1) /* La funcion del .limit es limitar las consultas que nos devuelva todo lo 
anterior de manera que solo muestra tantos valores como el valor que le hayamos pasado dentro del (). */ 

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Mi primo me ha dicho que tiene un presupuesto de entre 600 - 900 euros para un portatil */
db.portatiles.find( {
    $and: [
        {precioIVA: {
            $gte: 600
        }},
        {precioIVA: {
            $lte: 900
        }}
    ]
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Un amigo me ha dicho que tiene un presupuesto de maximo 1200 euros para un portatil 
y que tenga un procesador AMD, y que no tenga una conexión Jack, si no un Jack combo 
para audio y para microfono. */
db.portatiles.find( { 
    $and: [
        {precioIVA: 
            {$lt: 1200}
        }, 
        {socket: 
            {$eq: "AMD"}
        } ,
        {conexiones: {
            $nin: ["1xJack"]
        }},
        {conexiones: {
            $in: ["1xJackCombo"]
        }}
    ]
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Una compañia de cine me ha pedido un portatil con al menos 1 conexion HDMI,
1 conexion Thunderbolt y 3 conexiones USB */
db.portatiles.find({ 
    conexiones: { 
        $all: ["1xHDMI", "1xThunderbolt", "3xUSB"]
    }
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Un cliente me ha dicho que quiere un portatil que sea MSI o ASUS que tenga un procesador AMD, 
más de 8GB de RAM, que valga menos de 1400 euros, que tenga al menos 500 GB de espacio, con al menos 1 conexion de red RJ45, 
1 HDMI y al menos 3 usb y pese menos de  2kg y medio. Ademas, quiere que sea un FreeDos (Que no tenga sistema operativo) */
db.portatiles.find({
    $or:[
        {$and: [
                {marca: /msi/i},
                {socket: /amd/i},
                {ramGB: {$gte: 8}},
                {precioIVA: {$lt: 1400}},
                {almacenamientoGB:
                    {$elemMatch:
                        {total: 
                            {$gte: 500}}
                    }
                },
                {conexiones:
                    {$all: ["1xHDMI", "1xRJ45", "3xUSB"]}
                } ,
                {peso:
                    {$elemMatch:
                    {kg: {$lte: 2.50}}
                    }
                },
                {SO: {$ne: true}}
        ]},
        {$and: [
            {marca: /asus/i},
            {socket: /amd/i},
            {ramGB: {$gte: 8}},
            {precioIVA: {$lt: 1400}},
            {almacenamientoGB:
                {$elemMatch:
                    {total: 
                        {$gte: 500}}
                }
            },
            {conexiones:
                {$all: ["1xHDMI", "1xRJ45", "3xUSB"]}
            },
            {peso:
                {$elemMatch:
                {kg: {$lte: 2.50}}
                }
            },
            {SO: {$ne: true}}
        ]}
    ]
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Tengo un cliente que quiere un portatil no muy conocido. Ni el se acuerda de como
se escribe, solo sabe que acaba en "G733QR-K4008T". */
db.portatiles.find({
    producto: {$regex:/.?G733QR-K4008T/i}
}) //tambien se podria poner asi:
db.portatiles.find({
    producto: {$regex:/G733QR-K4008T$/i}
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Hace mucho que no veo los nuevos procesadores que intel ha sacado para los modelos i7, y quiero ver la
generacion de los procesadores modelo i7 que */
db.portatiles.find({
    procesador: {$regex:/^i7/i}
},
    {procesador: 1}
)

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Mi madre quiere un portatil tactil para más comodidad, asi que le quiero regalar uno. */
db.portatiles.find({
    tactil: {$exists: false}
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Me he encontrado con mi amigo y me ha pedido que le venda un portatil que no sea Apple, 
que no tenga un procesador AMD y que tenga un almacenamiento de entre 1000 - 1512GB y ademas 
que no traiga sistema operativo por defecto. */
db.portatiles.find({
    $and: [
        {marca: {$not:
                    {$eq: /apple/i}}},
        {socket: 
                {$not: 
                    {$eq: /amd/i}}},
        {almacenamientoGB: 
            {$elemMatch: 
                {total: 
                    {$gt: 1000},
                total: 
                    {$lt: 1512}}}},
        {SO: 
            {$eq: false}}
    ]
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Un cliente me ha pedido un portatil para jugar con un requisito minimo de que 
tenga un procesador i7 de decima/onceava generacion */
db.portatiles.find({
    procesador: {
        $regex: /i7-1.*/
    }
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* No estoy seguro si defini bien los valores de la base de datos para el campo "procesador" y no me acuerdo bien si 
escribi alguna en mayusculas o minusculas */
db.portatiles.find({
    procesador: {
        $regex: /ryzen/i
    }
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Quiero saber por curiosidad cuantos portatiles Asus tienen exactamente
6 tipos de conectores diferentes */
db.portatiles.find({
    $and: [
        {marca: /asus/i},
        {conexiones: {$size: 6}}
    ]
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Me han pedido portatiles de la marca MSI o HP que tengan más de 500 GB de SSD y que tenga 
un puerto HDMI y 1 puerto de red RJ45 y 3 USB */
db.portatiles.find({
    $and: [
        {$or:[
            {marca: {$regex: /msi/i}},
            {marca: {$regex: /hp/i}},
        ]},
        {almacenamientoGB:
            {$elemMatch:
                {SSD: 
                    {$gt: 500}
                }
            }
        },
        {conexiones: {$all: [/1xHDMI/i, /1xRJ45/i, /3xUSB/i]}}
    ]
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Estoy haciendo un recuento de todos los portatiles que he vendido y quiero ver cuantos portatiles Macbook Air he vendido, pero 
no me acuerdo si lo he escrito bien dentro de la base de datos, asi que me interesaria buscar tambien dentro del pedido su respectivo
ID, que es el 31. */
db.pedidos.find({
    $or:[
        {productos:{
            $elemMatch:{
                $elemMatch:{
                    $in: ["MacBook Air"]}
                }
            }
        },
        {productos:{
            $elemMatch:{
                $elemMatch:{
                    $in:[31]}
                }
            }
        }
    ]
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Quiero ver todos los pedidos que he realizado en noviembre */
db.pedidos.find({
    $and: [{
        fechas: {
            $gte: [new Date("2021-11-01")]
        }
    },
    {
        fechas: {
            $lte: [new Date("2021-11-30")]
        }
    }    
    ]
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* El transportista me ha pedido que le notifique todos los pedidos realizados en noviembre y en octubre que hayan sido entregado
con retraso */
db.pedidos.find({
    $and: [{
        fechas: {
            $gte: [new Date("2021-10-01")]
        }
    },
    {
        fechas: {
            $lte: [new Date("2021-11-30")]
        }
    },
    {retraso: true}
]
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Quiero ver todos los pedidos menos los enviados a La Campana y a Marchena que hayan tenido un precio mayor que 2000€ 
que no hayan tenido retraso en el mes de noviembre*/
db.pedidos.find({
    $and: [
        {$nor: [
            {localidad: /la campana/i},
            {localidad: /marchena/i}
        ]
        },
        {precio: {$gt: 2000}},
        {retraso: false},
        {fechas: {$gte: new Date("2021-11-01")}},
        {fechas: {$lte: new Date("2021-11-30")}}
    ]  
})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Quiero ver todos los pedidos que tienen más de 2 productos */
db.pedidos.find(
    {productos:{
        $elemMatch: {
            $size:2
        }
    }
})

// -------------------------------------------------------------------------------------------------------------------------------------------

// Voy a hacer un estudio de lo que se gasta cada pueblo, asi que me interesa saber el total de dinero vendido en cada pueblo
db.pedidos.aggregate([
    {$match: 
        {$and: [{
            fechas: {
                $gte: [new Date("2021-11-01")]
            }
        },
        {
            fechas: {
                $lte: [new Date("2021-11-30")]
            }
        }    
        ]}
    },
    {$group: 
        {_id:"$localidad", 
        total: {$sum: "$precio"}
    }}
])

// -------------------------------------------------------------------------------------------------------------------------------------------

// Quiero hacer una media de lo que vale todo mi catalogo de productos segun las marcas de los portatiles:
db.portatiles.aggregate([
    {$group: 
        {_id: "$marca", 
        total: 
            {$avg: "$precio"}
        }
    }
])

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Quiero reponer el stock del portatil modelo TUF Gaming Dash F15 FX516PR-HN002, con la id 5 y quiero saber cuanto me
cuesta */
db.portatiles.aggregate([
    {$match:
        {$or:[
            {producto: "TUF Gaming Dash F15 FX516PR-HN002"},
            {_id: 5}
        ]}
    },
        {$project: 
            {valor: 
                {$multiply: 
                    ["$precio", "$stock"]
                }
            }
        }
])

// -------------------------------------------------------------------------------------------------------------------------------------------

// Necesito saber cual es el portatil más barato que tengo:
db.portatiles.aggregate([
    {$group: {_id: null, total: {$min: "$precio"}}}
])

// Necesito saber cual es el portatil más caro que tengo:
db.portatiles.aggregate([
    {$group: 
        {_id: null, 
            total: {$max: "$precio"}}}
])

// -------------------------------------------------------------------------------------------------------------------------------------------

/* He borrado sin querer el archivo con todos los productos del almacen. Asi que voy a aprovechar y voy a ordenar todos los
portatiles por su marca*/
db.portatiles.aggregate([
    {$group: 
        {_id: "$marca",
         nombre: 
            {$addToSet: "$producto"}}}
])

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Se me ha olvidado meter en la base de datos de que el producto con ID 22 tiene tactil */
db.portatiles.updateOne({_id: 22}, {$set: {"tactil": true}})
// Tambien se puede hacer de esta forma:
db.portatiles.updateOne(
    {_id: 22},
    {
        $addToSet: {tactil: true}
    }
)
// Mostrar la actualizacion del documento
db.portatiles.find({_id:22}, {"tactil": 1})

// -------------------------------------------------------------------------------------------------------------------------------------------

/* Quiero ver la diferencia entre el precio normal y el precio de IVA, para ver cuanto IVA tienen que pagar los compradores */
db.portatiles.aggregate([ 
    { $project: 
        { _id: 1,
            dateDifference: 
            { $subtract: [ "$precioIVA", "$precio" ] } 
        } 
    } 
] )

