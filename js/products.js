/* Verified model catalogue. Prices and local stock are intentionally not invented.
   Product photographs are Wikimedia Commons files with the individual licenses and author credits shown on each detail page. */
const commons = file => "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(file) + "?width=1000";
window.KAA_PRODUCTS = [
  {
    id:"hp-elitebook-840-g8", name:"HP EliteBook 840 G8", brand:"HP", category:"Business laptops", type:"Business laptop", tag:"ELITEBOOK",
    description:"A 14-inch business-class notebook from HP's EliteBook 800 family. Ask the store to confirm the processor, memory, storage and condition of the available unit.",
    image:commons("HP EliteBook 840 G8.png"), imageSource:"https://commons.wikimedia.org/wiki/File:HP_EliteBook_840_G8.png", imageCredit:"Infinatious · CC BY-SA 4.0", imageLicense:"CC BY-SA 4.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",
    options:[{label:"Memory preference",values:["8GB","16GB","32GB"]},{label:"Storage preference",values:["256GB SSD","512GB SSD","1TB SSD"]},{label:"Condition preference",values:["New","Used","Either"]}],
    specs:[["Display class","14-inch"],["Product family","EliteBook 800 series"],["Processor","Confirm exact unit"],["Condition","Confirm with store"]]
  },
  {
    id:"hp-victus-15", name:"HP Victus 15", brand:"HP", category:"Gaming laptops", type:"Gaming laptop", tag:"VICTUS",
    description:"HP's 15-inch-class Victus gaming laptop family. Ask for the exact processor, graphics, memory and display configuration before ordering.",
    image:commons("HP Victus 15 gaming laptop side view.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:HP_Victus_15_gaming_laptop_side_view.jpg", imageCredit:"Laziz940 · CC0", imageLicense:"CC0 1.0", imageLicenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",
    options:[{label:"Processor preference",values:["Intel","AMD Ryzen","No preference"]},{label:"Memory preference",values:["8GB","16GB","32GB"]},{label:"Graphics preference",values:["Dedicated graphics","Integrated graphics","Confirm with store"]}],
    specs:[["Display class","15-inch"],["Product family","HP Victus 15"],["Graphics","Varies by exact model"],["Configuration","Confirm with store"]]
  },
  {
    id:"macbook-air-m2-13", name:"Apple MacBook Air 13-inch (M2)", brand:"Apple", category:"MacBooks", type:"Laptop", tag:"MACBOOK AIR",
    description:"The 13-inch MacBook Air with Apple M2, model family A2681. Confirm memory, storage, battery condition and keyboard layout with the store.",
    image:commons("M2 Macbook Air Midnight model - 1.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:M2_Macbook_Air_Midnight_model_-_1.jpg", imageCredit:"KKPCW (Kyu3) · CC BY-SA 4.0", imageLicense:"CC BY-SA 4.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",
    options:[{label:"Memory preference",values:["8GB","16GB","24GB"]},{label:"Storage preference",values:["256GB SSD","512GB SSD","1TB SSD"]},{label:"Finish preference",values:["Midnight","Starlight","Silver","Space Grey"]}],
    specs:[["Chip","Apple M2"],["Display","13.6-inch"],["Model family","A2681"],["Condition","Confirm with store"]]
  },
  {
    id:"macbook-air-m2-15", name:"Apple MacBook Air 15-inch (M2)", brand:"Apple", category:"MacBooks", type:"Laptop", tag:"MACBOOK AIR",
    description:"The 15-inch MacBook Air M2. Ask the store to confirm the exact memory, storage, finish and condition of the available unit.",
    image:commons("Macbook Air 15 inch - 1.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:Macbook_Air_15_inch_-_1.jpg", imageCredit:"KKPCW (Kyu3) · CC BY-SA 4.0", imageLicense:"CC BY-SA 4.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",
    options:[{label:"Memory preference",values:["8GB","16GB","24GB"]},{label:"Storage preference",values:["256GB SSD","512GB SSD","1TB SSD"]},{label:"Finish preference",values:["Midnight","Starlight","Silver","Space Grey"]}],
    specs:[["Chip","Apple M2"],["Display","15.3-inch"],["Product family","MacBook Air"],["Condition","Confirm with store"]]
  },
  {
    id:"macbook-pro-14-m5", name:"Apple MacBook Pro 14-inch (M5)", brand:"Apple", category:"MacBooks", type:"Professional laptop", tag:"MACBOOK PRO",
    description:"A 14-inch MacBook Pro with Apple M5, shown in Space Black. Confirm memory, storage, regional configuration and availability with the store.",
    image:commons("MacBook Pro (14-inch, M5, Space Black).jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:MacBook_Pro_(14-inch,_M5,_Space_Black).jpg", imageCredit:"AzureSaturn · CC0", imageLicense:"CC0 1.0", imageLicenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",
    options:[{label:"Finish preference",values:["Space Black","Silver"]},{label:"Storage preference",values:["512GB SSD","1TB SSD","2TB SSD"]}],
    specs:[["Chip","Apple M5"],["Display","14-inch"],["Finish shown","Space Black"],["Condition","Confirm with store"]]
  },
  {
    id:"iphone-13", name:"Apple iPhone 13", brand:"Apple", category:"iPhones", type:"Smartphone", tag:"IPHONE",
    description:"Apple iPhone 13. Select a storage preference and ask the store to confirm battery health, condition, SIM configuration and available color.",
    image:commons("IPhone 13.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:IPhone_13.jpg", imageCredit:"Kskhh · CC BY-SA 4.0", imageLicense:"CC BY-SA 4.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",
    options:[{label:"Storage preference",values:["128GB","256GB","512GB"]},{label:"Condition preference",values:["New","Used","Either"]}],
    specs:[["Display","6.1-inch Super Retina XDR"],["Chip","A15 Bionic"],["Rear cameras","Dual 12MP system"],["Release year","2021"]]
  },
  {
    id:"iphone-14", name:"Apple iPhone 14", brand:"Apple", category:"iPhones", type:"Smartphone", tag:"IPHONE",
    description:"Apple iPhone 14. Ask the store to confirm battery health, storage, condition, SIM configuration and available color.",
    image:commons("IPhone 14 20240225.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:IPhone_14_20240225.jpg", imageCredit:"メイド理世 · CC BY-SA 4.0", imageLicense:"CC BY-SA 4.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",
    options:[{label:"Storage preference",values:["128GB","256GB","512GB"]},{label:"Condition preference",values:["New","Used","Either"]}],
    specs:[["Display","6.1-inch Super Retina XDR"],["Chip","A15 Bionic"],["Rear cameras","Dual 12MP system"],["Release year","2022"]]
  },
  {
    id:"iphone-15", name:"Apple iPhone 15", brand:"Apple", category:"iPhones", type:"Smartphone", tag:"IPHONE",
    description:"Apple iPhone 15. Ask the store to confirm battery health, storage, condition, SIM configuration and available color.",
    image:commons("Apple iPhone 15.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:Apple_iPhone_15.jpg", imageCredit:"IPHONE 15 · CC BY-SA 4.0", imageLicense:"CC BY-SA 4.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",
    options:[{label:"Storage preference",values:["128GB","256GB","512GB"]},{label:"Condition preference",values:["New","Used","Either"]}],
    specs:[["Display","6.1-inch Super Retina XDR"],["Chip","A16 Bionic"],["Connector","USB-C"],["Release year","2023"]]
  },
  {
    id:"samsung-galaxy-a54", name:"Samsung Galaxy A54 5G", brand:"Samsung", category:"Samsung phones", type:"Smartphone", tag:"GALAXY A",
    description:"Samsung Galaxy A54 5G. Ask the store to confirm memory, storage, condition and available finish.",
    image:commons("Samsung Galaxy A54 5G 2023.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:Samsung_Galaxy_A54_5G_2023.jpg", imageCredit:"Captainmorlypogi1959 · CC BY-SA 4.0", imageLicense:"CC BY-SA 4.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",
    options:[{label:"Storage preference",values:["128GB","256GB"]},{label:"Condition preference",values:["New","Used","Either"]}],
    specs:[["Display","6.4-inch Super AMOLED"],["Network","5G"],["Main camera","50MP with OIS"],["Release year","2023"]]
  },
  {
    id:"samsung-galaxy-s23", name:"Samsung Galaxy S23", brand:"Samsung", category:"Samsung phones", type:"Smartphone", tag:"GALAXY S",
    description:"Samsung Galaxy S23. Confirm memory, storage, condition and color with the store before placing an order.",
    image:commons("GALAXY S23.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:GALAXY_S23.jpg", imageCredit:"IMG 4512 · CC0", imageLicense:"CC0 1.0", imageLicenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",
    options:[{label:"Storage preference",values:["128GB","256GB"]},{label:"Condition preference",values:["New","Used","Either"]}],
    specs:[["Display","6.1-inch Dynamic AMOLED 2X"],["Network","5G"],["Rear cameras","Triple camera system"],["Release year","2023"]]
  },
  {
    id:"samsung-galaxy-s24", name:"Samsung Galaxy S24", brand:"Samsung", category:"Samsung phones", type:"Smartphone", tag:"GALAXY S",
    description:"Samsung Galaxy S24. Confirm memory, storage, condition and color with the store before placing an order.",
    image:commons("Samsung Galaxy S24.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S24.jpg", imageCredit:"Vis M · CC BY-SA 4.0", imageLicense:"CC BY-SA 4.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",
    options:[{label:"Storage preference",values:["128GB","256GB","512GB"]},{label:"Condition preference",values:["New","Used","Either"]}],
    specs:[["Display","6.2-inch Dynamic AMOLED 2X"],["Network","5G"],["Rear cameras","Triple camera system"],["Release year","2024"]]
  },
  {
    id:"samsung-galaxy-s24-ultra", name:"Samsung Galaxy S24 Ultra", brand:"Samsung", category:"Samsung phones", type:"Smartphone", tag:"GALAXY ULTRA",
    description:"Samsung Galaxy S24 Ultra. Confirm memory, storage, condition, S Pen inclusion and color with the store.",
    image:commons("Samsung Galaxy S24 Ultra.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S24_Ultra.jpg", imageCredit:"Vis M · CC BY-SA 4.0", imageLicense:"CC BY-SA 4.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",
    options:[{label:"Storage preference",values:["256GB","512GB","1TB"]},{label:"Condition preference",values:["New","Used","Either"]}],
    specs:[["Display","6.8-inch Dynamic AMOLED 2X"],["S Pen","Built in"],["Rear cameras","Quad camera system"],["Release year","2024"]]
  },
  {
    id:"cctv-dome-camera", name:"Dome CCTV Camera", brand:"", category:"CCTV cameras", type:"Security camera", tag:"CCTV",
    description:"Reference photograph of a dome-style surveillance camera. This is a camera-type enquiry, not a named manufacturer model. Ask the store for exact brand, resolution and weather rating.",
    image:commons("CCTV dome camera.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:CCTV_dome_camera.jpg", imageCredit:"Nïall Green · CC BY-SA 1.0", imageLicense:"CC BY-SA 1.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/1.0/",
    options:[{label:"Installation preference",values:["Indoor","Outdoor","Confirm with store"]},{label:"Resolution preference",values:["2MP","4MP","8MP","Confirm with store"]}],
    specs:[["Camera style","Dome"],["Brand/model","Confirm with store"],["Resolution","Confirm exact model"],["Weather rating","Confirm exact model"]]
  },
  {
    id:"cctv-bullet-camera", name:"Bullet CCTV Camera", brand:"CCTV", category:"CCTV cameras", type:"Security camera", tag:"CCTV",
    description:"Reference photograph of bullet-style surveillance cameras. Exact brand, model, resolution, lens and outdoor rating must be confirmed with the store.",
    image:commons("CCTV.jpg"), imageSource:"https://commons.wikimedia.org/wiki/File:CCTV.jpg", imageCredit:"JensPersson · CC BY-SA 3.0", imageLicense:"CC BY-SA 3.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",
    options:[{label:"Installation preference",values:["Outdoor","Indoor","Confirm with store"]},{label:"Resolution preference",values:["2MP","4MP","8MP","Confirm with store"]}],
    specs:[["Camera style","Bullet"],["Brand/model","Confirm with store"],["Resolution","Confirm exact model"],["Weather rating","Confirm exact model"]]
  },
  {
    id:"cctv-ptz-camera", name:"PTZ CCTV Camera", brand:"CCTV", category:"CCTV cameras", type:"Security camera", tag:"CCTV",
    description:"Reference photograph of PTZ surveillance cameras. Confirm the exact manufacturer, optical zoom, pan/tilt range and installation requirements before ordering.",
    image:commons("Dome CCTV cameras.JPG"), imageSource:"https://commons.wikimedia.org/wiki/File:Dome_CCTV_cameras.JPG", imageCredit:"KRoock74 · CC BY-SA 3.0", imageLicense:"CC BY-SA 3.0", imageLicenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",
    options:[{label:"Installation preference",values:["Indoor","Outdoor","Confirm with store"]},{label:"Zoom preference",values:["Ask about optical zoom","No preference"]}],
    specs:[["Camera style","PTZ"],["Brand/model","Confirm with store"],["Optical zoom","Confirm exact model"],["Weather rating","Confirm exact model"]]
  }
];