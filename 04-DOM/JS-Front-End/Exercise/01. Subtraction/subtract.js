function subtract() {
   const first = document.getElementById("firstNumber").value;
   const second = document.getElementById("secondNumber").value;

   const result = Number(first) + Number(second);
   document.getElementById("result").textContent = result;
}