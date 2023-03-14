// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const pictures = document.querySelector(".gallery");

// images.forEach((value) => {
//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   img.src = value.url;
//   img.alt = value.alt;
//   li.appendChild(img);
//   pictures.appendChild(li);
// });
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const pictures = document.querySelector(".gallery");

let string = "";

images.forEach((value) => {
  string += `<li><img src ="${value.url} "alt=${value.alt}" width= 2000px, heigth= "250px"></li>`
});
pictures.insertAdjacentHTML("afterbegin", string);

pictures.style.display = 'flex'
pictures.style.gap = "20px"
pictures.style.listStyle= "none"