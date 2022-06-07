"use stict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
     },
    {
        id: 8,
        price: 78,
    },
];

//Выбираем продукты у которых есть фотографии
let productsWithImage = products.filter(product => {
    return product.photos && product.photos.length > 0; 
});
console.log(productsWithImage);

//Сортировка по возрастанию
products.sort((a, b) => {return a.price - b.price});
console.log(products);