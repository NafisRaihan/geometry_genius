function calculateArea() {
   var base = document.getElementById('base').value; // Assuming you have an HTML input element with the id "base"
   var base_number = parseInt(base);
   console.log(base_number);

   var height = document.getElementById('height').value; // Assuming you have an HTML input element with the id "height"
   var height_number = parseInt(height);
   console.log(height_number);

   var area = base_number * height_number;
   console.log(area);
   document.getElementById('area-show').innerText = "Area: " + area;
}
