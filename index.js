// Code your solutions in this file

function countDown(integer)
{
do{console.log(integer)
  --integer;
} 
while(
  integer >= 0);
  

}

function  writeCards(array){
  const cards = [];
for (let name =0; name < array.length; ++name){
cards.push(`Thank you, ${array[name]}, for the wonderful surprise gift!`);

}
  return cards;
}