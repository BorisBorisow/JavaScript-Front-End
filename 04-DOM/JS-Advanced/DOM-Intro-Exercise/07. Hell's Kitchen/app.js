function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputArr = JSON.parse(document.querySelector("#inputs textarea").value);
      // чрез json.parse декларирае ноде листа в масив.
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = 0;
      let output = {};

      //["PizzaHut - Peter 500, George 300, Mark 800"]
      for (let element of inputArr){
         let restaurantInfo = element.split(" - ");
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(", ")
         
         for (let worker of workersData){
            let [name, salary] = worker.split(" ");

            if (!output.hasownProperty(restaurantName)){
               output[restaurantName] = {};
            }else {
               output[restaurantName][name] = Number(salary);
            }
         }
      }

      
   }
}