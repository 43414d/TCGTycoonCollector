fetch("cards.json")
.then(function(response){
   return response.json();
})
.then(function(cards){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let card of cards){
      out += `
         <tr>
            <td> <img src='${card.image}'> </td>
            <td>${card.name}</td>
            <td>${card.price}</td>
            <td>${card.inventory}</td>
            <td>${card.productCode}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});