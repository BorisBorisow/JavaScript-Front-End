function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   let rows = document.querySelectorAll('tbody tr');
   let inputToCheck = document.getElementById("searchField");


   function onClick() {
      for(let row of rows){
         row.classList.remove('select');
         if(inputToCheck.value != "" && row.innerHTML.includes(inputToCheck.value)){
            row.className = 'select'
         }
      }
      
      inputToCheck.value = ''
   }

}
