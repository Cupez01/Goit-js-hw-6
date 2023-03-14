
const categorias = document.querySelector('#categories');
const quanty = categorias.children;
console.log(`Number of categories : ${quanty.length}`);

for(let i =0; i<quanty.length; i++){
  console.log(`Category: ${quanty[i].querySelector('h2').textContent}`);
  console.log(`Elements: ${quanty[i].querySelectorAll('li').length}`)  
}

