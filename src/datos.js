db.portatiles.drop()
db.portatiles.insertMany([
    {_id: 1,
        producto: "TUF Gaming F15 FX506HCB-HN200",
        marca: "Asus",
        precioIVA: 1089, 
        precio: 825.62,
        socket: "Intel",
        procesador: "i5-11400H",
        ramGB: 16,
        almacenamientoGB: [{SSD: 512, HDD: 512, total: 1024}],
        grafica: "RTX 3050",
        conexiones: ["1xJack", "1xHDMI", "1xRJ45", "1xThunderbolt", "3xUSB", "1xUSBC"],
        tamañosCM: [35.9, 25.6, 2.28],
        SO: false,
        peso: [{kg: 2.30, lbs: 5.07}],
        stock: 4,
    },
    {_id: 2, producto:"ROG Strix SCAR 17 G733QR-K4008T", marca: "Asus", precioIVA: 2599, precio: 2147.93, socket: "AMD", procesador: "ryzen 9 5900HX", ramGB: 32, almacenamientoGB: [{SSD: 1000, HDD:0, total: 1000}], grafica: "RTX 3070", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "3xUSB", "1xUSBC"], tamañosCM:[39.5,28.2,2.34], SO: false, peso: [{kg: 2.70, lbs: 5.47}], stock: 4},
    {_id: 3, producto:"ROG Strix G15 G513IC-HN004", marca: "Asus", precioIVA: 1199, precio: 990.91, socket: "AMD", procesador: "Ryzen 7 4800H", ramGB: 16, almacenamientoGB: [{SSD: 512, HDD:0, total: 512}], grafica: "RTX 3050", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "3xUSB", "1xUSBC"], tamañosCM:[35.4, 25.9, 2.06], SO: true, peso: [{kg: 2.10, lbs: 4.63}], stock: 5},
    {_id: 4, producto:"ROG Strix G513IH-HN008", marca: "Asus", precioIVA: 859, precio: 709.92, socket: "AMD", procesador: "Ryzen 7 4800H", ramGB: 16, almacenamientoGB: [{SSD: 512, HDD:0, total: 512}], grafica: "GTX 1650", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "3xUSB", "1xUSBC"], tamañosCM:[35.4, 25.9, 2.26], SO: false, peso: [{kg: 2.10, lbs: 4.63}], stock: 3},
    {_id: 5, producto:"TUF Gaming Dash F15 FX516PR-HN002", marca: "Asus", precioIVA: 1499, precio: 1238.84, socket: "Intel", procesador: "i7-11370H", ramGB: 16, almacenamientoGB: [{SSD: 512, HDD:1000, total: 1512}], grafica: "RTX 3070", conexiones: ["1xJack", "1xHDMI", "1xRJ45", "3xUSB", "1xUSBC", "1xThunderbolt"], tamañosCM:[36, 25.2, 1.99], SO: false, peso: [{kg: 2, lbs: 4.32}], stock: 7},
    {_id: 6, producto:"VivoBook 14 K413EA-EB695T", marca: "Asus", precioIVA: 804.94, precio: 665.24, socket: "Intel", procesador: "i5-1135G7", ramGB: 16, almacenamientoGB: [{SSD: 512, HDD:0, total: 512}], grafica: "Intel Iris Xe Graphics", conexiones: ["1xJack", "1xHDMI", "1xRJ45", "3xUSB", "1xUSBC", "1xSD"], tamañosCM:[32.40, 21.50, 1.79], SO: true, peso: [{kg: 1.4, lbs: 3.74}], stock: 6},
    {_id: 7, producto:"GF63 Thin 10UC-602XES", marca: "MSI", precioIVA: 939, precio: 776.03, socket: "Intel", procesador: "i7-10750H", ramGB: 16, almacenamientoGB: [{SSD: 512, HDD:512, total: 1024}], grafica: "RTX 3050", conexiones: ["1xJack", "1xHDMI", "1xRJ45", "3xUSB", "1xUSBC"], tamañosCM:[35.9, 25.4, 2.17], SO: false, peso: [{kg: 1.86, lbs: 3.98}], stock: 3},
    {_id: 8, producto:"Katana GF66 11UC-045XES", marca: "MSI", precioIVA: 1180.94, precio: 975.99, socket: "Intel", procesador: "i7-11800H", ramGB: 16, almacenamientoGB: [{SSD: 1000, HDD:0, total: 100}], grafica: "RTX 3050", conexiones: ["1xJack", "1xHDMI", "1xRJ45", "3xUSB"], tamañosCM:[35.9, 25.9, 2.49], SO: false, peso: [{kg: 2.10, lbs: 4.63}], stock: 4},
    {_id: 9, producto:"Alpha 15 B5EEK-015XES", marca: "MSI", precioIVA: 1349, precio: 1114.88, socket: "AMD", procesador: "Ryzen 7 5800H", ramGB: 16, almacenamientoGB: [{SSD: 1000, HDD:512, total: 512}], grafica: "RX 6600M", conexiones: ["1xJack", "1xHDMI", "1xRJ45", "3xUSB"], tamañosCM:[35.9, 25.9, 2.49], SO: false, peso: [{kg: 2.35, lbs: 5.02}], stock: 6},
    {_id: 10, producto:"Modern 15 A5M-010XES", marca: "MSI", precioIVA: 726.24, precio: 600.20, socket: "AMD", procesador: "Ryzen 5 5500U", ramGB: 8, almacenamientoGB: [{SSD: 512, HDD:1000, total: 1512}], grafica: "AMD Radeon Graphics", conexiones: ["1xJack", "1xHDMI", "1xRJ45", "3xUSB", "1xSD"], tamañosCM:[35.6, 23.3, 1.59], SO: true, peso: [{kg: 1.6, lbs: 3.67}], stock: 7},
    {_id: 11, producto:"Delta 15 A5EFK-011XES", marca: "MSI", precioIVA: 1759, precio: 1453.72, socket: "AMD", procesador: "ryzen 9 5900HX", ramGB: 16, almacenamientoGB: [{SSD: 1000, HDD:0, total: 1000}], grafica: "RX 6700M", conexiones: ["1xJack", "1xHDMI", "1xRJ45", "3xUSB", "1xDP", "1xSD"], tamañosCM:[35.6, 23.3, 1.59], SO: false, peso: [{kg: 1.9, lbs: 4.01}], stock: 2},
    {_id: 12, producto:"GP66 Leopard 10UE-484XES", marca: "MSI", precioIVA: 1299, precio: 1073.55, socket: "Intel", procesador: "i7-10750H", ramGB: 16, almacenamientoGB: [{SSD: 1000, HDD:0, total: 1000}], grafica: "RTX 3060", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "3xUSB"], tamañosCM:[35.8, 26.7, 2.34], SO: false, peso: [{kg: 2.38, lbs: 5.06}], stock: 3},
    {_id: 13, producto:"GE66 Raider 11UH-493XES", marca: "MSI", precioIVA: 2249, precio: 1858.68, socket: "Intel", procesador: "i7-11800H", ramGB: 16, almacenamientoGB: [{SSD: 1000, HDD:0, total:1000}], grafica: "RTX 3080", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "3xUSB", "1xUSBC", "1xThunderbolt", "1xSD"], tamañosCM:[35.8, 26.7, 2.34], SO: false, peso: [{kg: 2.38, lbs: 5.06}], stock: 12},
    {_id: 14, producto:"Pavilion Gaming 15-EC2019NS", marca: "HP", precioIVA: 787.92, precio: 651.17, socket: "AMD", procesador: "Ryzen 5 5600H", ramGB: 8, almacenamientoGB: [{SSD: 512, HDD:0, total: 512}], grafica: "GTX 1650", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "2xUSB", "1xUSBC", "1xSD"], tamañosCM:[36, 25.7, 2.35], SO: false, peso: [{kg: 1.98, lbs: 4.28}], stock: 3},
    {_id: 15, producto:"OMEN 16-c0013ns", marca: "HP", precioIVA: 1089, precio: 900, socket: "AMD", procesador: "Ryzen 7 5800H", ramGB: 16, almacenamientoGB: [{SSD: 512, HDD:512, total:1024}], grafica: "RTX 3050Ti", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "2xUSB", "1xUSBC", "1xSD"], tamañosCM:[36.92, 24.8, 2.25], SO: false, peso: [{kg: 2.32, lbs: 4.98}], stock: 17},
    {_id: 16, producto:"15S-eq2017ns", marca: "HP", precioIVA: 569, precio: 470.25, socket: "AMD", procesador: "Ryzen 5 5500U", ramGB: 8, almacenamientoGB: [{SSD: 256, HDD: 512, total: 768}], grafica: "Gráficos AMD Radeon", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "2xUSB", "1xUSBC", "1xSD"], tamañosCM:[35.85, 24.2, 1.79], SO: false, peso: [{kg: 1.69, lbs: 3.80}], stock: 11},
    {_id: 17, producto:"Omen 15-en1004ns", marca: "HP", precioIVA: 1649, precio: 1362.81, socket: "AMD", procesador: "Ryzen 7 5800H", ramGB: 16, almacenamientoGB: [{SSD: 1000, HDD:0, total: 1000}], grafica: "RTX 3070", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "3xUSB", "1xDP", "1xUSBC", "1xSD"], tamañosCM:[33.50, 23.97, 2.25], SO: false, peso: [{kg: 2.46, lbs: 5.22}], stock: 15},
    {_id: 18, producto:"ZBook Firefly 15 G7", marca: "HP", precioIVA: 2009.89, precio: 1661.07, socket: "Intel", procesador: "i7-10510U", ramGB: 16, almacenamientoGB: [{SSD: 512, HDD:0, total: 512}], grafica: "Quadro P520", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "1xUSB", "1xDP", "2xUSBC", "1xSD"], tamañosCM:[35.95, 23.36, 1.92], SO: false, peso: [{kg: 1.75, lbs: 3.88}], stock: 7},
    {_id: 19, producto:"Victus 16-e0004ns", marca: "HP", precioIVA: 749, precio: 619.01, socket: "AMD", procesador: "Ryzen 5 5600H", ramGB: 8, almacenamientoGB: [{SSD: 512, HDD:0, total: 512}], grafica: "GTX 1650", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "3xUSB", "1xDP", "1xUSBC", "1xSD"], tamañosCM:[37, 26, 2.35], SO: true, peso: [{kg: 2.46, lbs: 5.22}], stock: 8},
    {_id: 20, producto:"Legion 5 15IMH05H", marca: "Lenovo", precioIVA: 1166.19, precio: 963.80, socket: "Intel", procesador: "i7-10750H", ramGB: 16, almacenamientoGB: [{SSD: 512, HDD:0, total: 512}], grafica: "RTX 2060", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "3xUSB", "1xDP"], tamañosCM:[36.3, 25.96, 2.29], SO: false, peso: [{kg: 2.3, lbs: 5}], stock: 9},
    {_id: 21, producto:"IdeaPad Gaming 3 15IMH05", marca: "Lenovo", precioIVA: 898, precio: 742.15, socket: "Intel", procesador: "i7-10750H", ramGB: 16, almacenamientoGB: [{SSD: 512, HDD: 512, total: 1024}], grafica: "GTX 1650", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "2xUSB", "1xUSBC"], tamañosCM:[35.9, 24.96, 2.49], SO: false, peso: [{kg: 2.2, lbs: 4.96}], stock: 4},
    {_id: 22, producto:"IdeaPad Flex 5 14ALC05", marca: "Lenovo", precioIVA: 679, precio: 561.16, socket: "AMD", procesador: "Ryzen 7 5700U", ramGB: 8, almacenamientoGB: [{SSD: 512, HDD:0, total: 512}], grafica: "Gráficos AMD Radeon", conexiones: ["1xJack", "1xHDMI", "1xRJ45", "2xUSB", "1xUSBC", "1xSD"], tamañosCM:[32.15, 21.75, 1.79], SO: true, peso: [{kg: 1.5, lbs: 3.52}], stock: 3},
    {_id: 23, producto:"IdeaPad 3 Chromebook", marca: "Lenovo", precioIVA: 299, precio: 247.11, socket: "Intel", procesador: "Celeron N4020", ramGB: 4, almacenamientoGB: [{SSD: 64, HDD:0, total: 64}], grafica: "Intel UHD Graphics", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "2xUSB", "2xUSBC", "1xSD"], tamañosCM:[28.67, 20.55, 1.8], SO: true, peso: [{kg: 1.12, lbs: 2.46}], stock: 7, tactil: true},
    {_id: 24, producto:"ThinkPad E14", marca: "Lenovo", precioIVA: 709, precio: 585.95, socket: "Intel", procesador: "i5-10210U", ramGB: 8, almacenamientoGB: [{SSD: 256, HDD:0, total: 256}], grafica: "Intel UHD Graphics", conexiones: ["1xJack", "1xHDMI", "1xRJ45", "2xUSB", "1xUSBC"], tamañosCM:[32.5, 23.2, 1.79], SO: false, peso: [{kg: 1.72, lbs: 3.82}], stock: 4},
    {_id: 25, producto:"ThinkBook 15p", marca: "Lenovo", precioIVA: 1686.64, precio: 1393.92, socket: "Intel", procesador: "i7-10750H", ramGB: 16, almacenamientoGB: [{SSD: 1000, HDD:0, total: 1000}], grafica: "GTX 1650Ti", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "2xUSB", "1xUSBC", "1xSD"], tamañosCM:[35.9, 24.95, 1.99], SO: true, peso: [{kg: 1.9, lbs: 4.24}], stock: 14},
    {_id: 26, producto:"Blade 17", marca: "Razer", precioIVA: 3899, precio: 3222.31, socket: "Intel", procesador: "i9-11900H", ramGB: 32, almacenamientoGB: [{SSD: 1000, HDD:0, total: 1000}], grafica: "RTX 3080", conexiones: ["1xJackCombo", "1xDP", "1xRJ45", "4xUSB", "2xUSBC"], tamañosCM:[39.5, 28.2, 2.32], SO: false, peso: [{kg: 2.70, lbs: 5.47}], stock: 11},
    {_id: 27, producto:"Blade 14", marca: "Razer", precioIVA: 2992.68, precio: 2473.29, socket: "AMD", procesador: "i9-11900H", ramGB: 32, almacenamientoGB: [{SSD: 1000, HDD:0, total: 1000}], grafica: "RTX 3080", conexiones: ["1xJackCombo", "1xDP", "1xRJ45", "4xUSB", "2xUSBC"], tamañosCM:[39.5, 28.2, 2.32], SO: false, peso: [{kg: 2.70, lbs: 5.47}], stock: 13},
    {_id: 28, producto:"Book UHD+", marca: "Razer", precioIVA: 1499, precio: 1238.84, socket: "Intel", procesador: "i7-1165G7", ramGB: 16, almacenamientoGB: [{SSD: 512, HDD:0, total: 512}], grafica: "Intel Iris Xe Graphics", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "1xUSB", "2xUSBC"], tamañosCM:[32.5, 24.2, 1.82], SO: false, peso: [{kg: 1.40, lbs: 3.40}], stock: 9, tactil: true},
    {_id: 29, producto:"Book FHD+", marca: "Razer", precioIVA: 1440.49, precio: 1190.49, socket: "Intel", procesador: "i7-1165G7", ramGB: 16, almacenamientoGB: [{SSD: 256, HDD:0, total: 256}], grafica: "Intel Iris Xe Graphics", conexiones: ["1xJackCombo", "1xHDMI", "1xRJ45", "1xUSB", "2xUSBC"], tamañosCM:[32.5, 24.2, 1.82], SO: false, peso: [{kg: 1.40, lbs: 3.40}], stock: 10},
    {_id: 30, producto:"MacBook Pro", marca: "Apple", precioIVA: 1331.34, precio: 1100.28, socket: "M1", procesador: "M1", ramGB: 8, almacenamientoGB: [{SSD: 256, HDD:0, total: 256}], grafica: "M1", conexiones: ["1xDP", "2xThunderbolt", "1xUSB", "1xRJ45"], tamañosCM:[30.41, 21.24, 1.56], SO: true, peso: [{kg: 1.40, lbs: 3.40}], stock: 8},
    {_id: 31, producto:"MacBook Air", marca: "Apple", precioIVA: 1559, precio: 1288.43, socket: "M1", procesador: "M1", ramGB: 8, almacenamientoGB: [{SSD: 512, HDD:1000, total: 1512}], grafica: "M1", conexiones: ["1xDP", "1xThunderbolt", "1xUSB"], tamañosCM:[30.41, 21.24, 1.61], SO: true, peso: [{kg: 1.40, lbs: 3.40}], stock: 13},
    {_id: 32, producto:"MateBook D14", marca: "Huawei", precioIVA: 673.78, precio: 556.84, socket: "Intel", procesador: "i5-10210U", ramGB: 8, almacenamientoGB: [{SSD: 512, HDD:0, total: 512}], grafica: "GeForce MX250", conexiones: ["1xJack", "1xHDMI", "2xUSB", "1xUSBC"], tamañosCM:[32.25, 21.48, 1.59], SO: true, peso: [{kg: 1.38, lbs: 3.32}], stock: 10},
    {_id: 33, producto:"MateBook X Pro", marca: "Huawei", precioIVA: 1410.49, precio: 1165.70, socket: "Intel", procesador: "i7-10510U", ramGB: 16, almacenamientoGB: [{SSD: 1000, HDD:0, total: 512}], grafica: "GeForce MX250", conexiones: ["1xJack", "1xHDMI", "1xUSB", "2xUSBC"], tamañosCM:[30.7, 21.7, 1.46], SO: true, peso: [{kg: 1.33, lbs: 3.20}], stock: 15},
    {_id: 34, producto:"MateBook E", marca: "Huawei", precioIVA: 799, precio: 660.33, socket: "Intel", procesador: "i5-7Y54", ramGB: 8, almacenamientoGB: [{SSD: 256, HDD:0, total: 256}], grafica: "Intel HD Graphic", conexiones: ["1xJack", "1xHDMI", "1xUSB"], tamañosCM:[27.88, 19.41, 0.69], SO: true, peso: [{kg: 1.10, lbs: 2.98}], stock: 7},
    {_id: 35, producto:"Nitro 5", marca: "Acer", precioIVA: 949, precio: 784.30, socket: "Intel", procesador: "i7-10750H", ramGB: 16, almacenamientoGB: [{SSD: 512, HDD:0, total: 512}], grafica: "GTX 1650Ti", conexiones: ["1xJackCombo", "1xHDMI", "1xUSB", "2xUSBC"], tamañosCM:[36.34, 25.5, 2.59], SO: false, peso: [{kg: 2.30, lbs: 5.18}], stock: 9},
    {_id: 36, producto:"Aspire 3 A315-56-35CA", marca: "Acer", precioIVA: 475, precio: 392.56, socket: "Intel", procesador: "i3-1005G1", ramGB: 8, almacenamientoGB: [{SSD: 256, HDD:0, total: 256}], grafica: "Intel UHD Graphics", conexiones: ["1xJackCombo", "1xHDMI", "3xUSB", "1xRJ45"], tamañosCM:[36.34, 24.75, 1.95], SO: false, peso: [{kg: 1.90, lbs: 4.24}], stock: 6, tactil: true}

])
db.pedidos.drop()
db.pedidos.insertMany([
    {_id: 1,
        productos: [["Katana GF66 11UC-045XES", "Blade 14"], [8, 26]],
        precio: 4173.62,
        localidad: "La Campana",
        fechas: [new Date ("2021-10-22"), new Date ("2021-10-25")],
        retraso: false
    },
    {_id: 2, productos: [["MateBook E"], [34]], precio: 799, localidad: "Marchena", fechas: [new Date ("2021-10-25"), new Date ("2021-10-28")], retraso: false},
    {_id: 3, productos: [["MacBook Air", "IdeaPad 3 Chromebook", "Victus 16-e0004ns"], [30, 22, 18]], precio: 2647, localidad: "Paradas", fechas: [new Date("2021-10-27"), new Date("2021-11-04")], retraso: true},
    {_id: 4, productos: [["GP66 Leopard 10UE-484XES", "ROG Strix SCAR 17 G733QR-K4008T"], [11, 2]], precio: 3898, localidad: "Osuna", fechas: [new Date("2021-11-01"), new Date("2021-11-04")], retraso: false},
    {_id: 5, productos: [["ZBook Firefly 15 G7", "VivoBook 14 K413EA-EB695T", "Pavilion Gaming 15-EC2019NS", "Legion 5 15IMH05H"], [17, 6, 13, 19]], precio: 4857.99, localidad: "Fuentes de Andalucia", fechas: [new Date("2021-11-03"), new Date("2021-11-09")], retraso: true},
    {_id: 6, productos: [["15S-eq2017ns", "TUF Gaming Dash F15 FX516PR-HN002", "Modern 15 A5M-010XES"], [15, 5, 10]], precio: 2804.24, localidad: "La Campana", fechas: [new Date("2021-11-06"), new Date("2021-11-09")], retraso: false},
    {_id: 7, productos: [["Aspire 3 A315-56-35CA", "ThinkPad E14"], [35, 23]], precio: 1101.56, localidad: "Sevilla", fechas: [new Date("2021-11-12"), new Date("2021-11-15")], retraso: false},
    {_id: 8, productos: [["Blade 17"], [25]], precio: 3899, localidad: "Guadajoz", fechas: [new Date("2021-11-14"), new Date("2021-11-17")], retraso: false},
    {_id: 9, productos: [["OMEN 16-c0013ns", "Delta 15 A5EFK-011XES", "MateBook X Pro"], [14, 10, 32]], precio: 4258.49, localidad: "Lora del Rio", fechas: [new Date("2021-11-20"), new Date("2021-11-26")], retraso: true},
    {_id: 10, productos: [["Book FHD+", "GE66 Raider 11UH-493XES"], [28, 12]], precio: 3689.49, localidad: "Marchena", fechas: [new Date("2021-11-27"), new Date("2021-11-30")], retraso: false},
    {_id: 11, productos: [["ZBook Firefly 15 G7", "VivoBook 14 K413EA-EB695T"], [18, 6]], precio: 2814.83, localidad: "Lora del Rio", fechas: [new Date("2021-12-06"), new Date("2021-12-09")], retraso: false}
  
])