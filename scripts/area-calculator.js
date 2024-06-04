function calculatorTriangleArea() {
   const baseField = document.getElementById('triangle-base');
   const  baseValueText = baseField.value;
   const base = parseFloat(baseValueText)
   // console.log(base)
     
   const heightField = document.getElementById('triangle-height');
   const heightValueText = heightField.value;
   const height = parseFloat(heightValueText)
   // console.log(height);
 
   if(isNaN(base) || isNaN(height)){
     alert('sorry tryaign please')
     return;
   }
   const area = 0.5 * base * height;
   console.log(area);
   const areaSpan = document.getElementById('triangle-area');
   areaSpan.innerText = area;
   addToCalculationEntry('Triangle',area)
 }
 function calculatorRectangleArea() {
 const rectangleField = document.getElementById('rectangle-width');
 const widthValueText = rectangleField.value;
 const width = parseFloat (widthValueText)
 // console.log(width);
 // heigth
 const lengthField = document.getElementById('rectangle-length');
 const lengthValueText = lengthField.value;
 const length = parseFloat(lengthValueText);
 console.log(length);
 
 const area = width * length;
 // console.log(area)
 const areaSpan = document.getElementById('rectangle-area');
 areaSpan.innerText = area;
 addToCalculationEntry('Rectangle',area)
 
 
 
 }
 // function
 function calculatorParallelogramArea() {
   const base = getInputValue('parallelogram-base');
   // console.log(base);
   const height = getInputValue('parallelogram-height')
   // console.log(height);
   
 if(isNaN(base)||isNaN(height)){
   alert('please insert a number')
   return;
 }
 
   const area = base * height
   setElementInnerText('parallelogram-area',area)
   addToCalculationEntry('Parallelogram',area)
 }
 
 function calculatorEllipseArea(params) {
   const majouRadius = getInputValue('ellipse-major-radius');
   const minorRadius = getInputValue('ellipse-minor-radius')
   const area = 3.14 * majouRadius * minorRadius;
   const areaTwoDecimal = area.toFixed(2);
   setElementInnerText('ellipse-area',areaTwoDecimal);
   addToCalculationEntry('ellipse',areaTwoDecimal)
 
   
 }
 // return function
 function getInputValue(inputId) {
     const inputField = document.getElementById(inputId);
     const inputValueText = inputField.value;
     const value = parseFloat(inputValueText);
     return value;
 }
 function setElementInnerText(elementId,area) {
   const element = document.getElementById(elementId);
   element.innerText = area; 
 }
 function addToCalculationEntry(areaType,area){
   console.log(areaType + ' ' + area);
   const calculationEntry =document.getElementById('calculation-etry');
 
   const count = calculationEntry.childElementCount;
 
   const p = document.createElement('p');
     p. classList.add('my-4')
   p.innerHTML = `${count + 1 } ${areaType}${area} cm<sup>2</sup><button class='btn btn-sm text-white bg-orange-500 btn-sccess'>Convert</button>`;
   calculationEntry.appendChild(p)
 }
 