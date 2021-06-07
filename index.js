/*
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
*/


let slider = document.getElementById("myRange");
let num = document.getElementById("demo");

num.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  
  num.innerHTML = this.value

  switch(this.value) {
    case 50000:
      num.innerHTML = "10K"
      break
  }
  
}


