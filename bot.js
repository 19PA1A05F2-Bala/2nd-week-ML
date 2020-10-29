function myFunction() {
  var greet =[
    "hi","hello","hey"
  ]
  var wishes = ["good morning","good afternoon","good evening","good night"]
  var bye = ["bye","good bye","bye bye"]
  var matter =[		
            {
                soilname:"black soil",
                properties:"Rich in Iron,lime,magnesium,aluminium. Poor in phosphorous,Nitrogen and humus. Black soils become sticky when wet and develop cracks in any season.",
                crops:"Cotton,Rice,Sugarcane,Wheat,Jowar,Sunflower,Cereals,Citrus fruits,Vegetables,Tobacco,Groundnut,Oil seedcrops and Milllets"
            },
            {
                soilname:"red soil",
                properties:" These soils are red in color due to presence of Iron oxide.These are sandy and rich in Potash.  They are poor in lime,Nitrogen,phosphorous,magnesium,Iron-oxide.",
                crops:"Rice,Wheat,Sugarcane,Groundnut,Maize/corn,Ragi,Potato,oil seeds,Pulses,Milllets,fruits such as Orange,Mango,Citrus"
                 
             },
             {
                 soilname:"aluvial soil",
                 properties:"Aluvial soils are mixture of clay and sand.Rich in phosphoric acid and organic mattter. Poor in Nitrogen and Potash.",
                 crops:"Tobacco,Cotton,Rice,Wheat,bajra,Jowar,pea,pigeon pea,chick pea,black gram,green gram,mustard,linseed,sesam,barle,jute,maize,any oil seeds"
                
            },
            {
                soilname:"laterite soil",
                properties:"Rich in Iron. Poor in humus,phosphate,Nitrogen and Calcium",
                crops:"Cotton,Rice,Wheat,tea,cofee,rubber,coconut,cashews,these are used to make bricks due to presence large amounts of Iron"
             },
            {
                soilname:"arid soil",
                properties:"Rich in plant food.These soils are deficient of humus and moisture due to the fact that high evaporation in arid regions.",
                crops:"Wheat,Cotton,corn,Milllets,pulses,barley"
             },
            {
                soilname:"forest or mountain soil",
                properties:"Rich in organic matter. \n Poor in nutrients such as Potash, Phosphorous and Lime.",
                crops : "tea,spices,Wheat,barly,maize,coffee,tropical fruits and temperature fruits"
             },
            {
                soilname:"desert soil",
                 properties:"These soils are sandy and dry and contains some amount of Nitrogen",
                crops:"millet and barly"
             },
            {
                soilname:"other soil",
                 properties:"not suitable for cultivation",
                crops: "not suitable for cultivation"
             } 
]
let input_value = document.getElementById('input').value
document.getElementById('input').value = ''
var response = document.getElementById('chat')
  if(greet.includes(input_value.toLowerCase())){
      response.innerHTML = "Hello"
  }
  if(wishes.includes(input_value.toLowerCase())){
      response.innerHTML = "good to see you in this time..."
  }
  if(bye.includes(input_value.toLowerCase())){
      response.innerHTML = "See you soon!"
  }
  if (input_value.toLowerCase() == matter[0].soilname){
      response.innerHTML=
      `
      <h2>PROPERTIES :</h2>
      <H4> ${(matter[0].properties)} </H4>
      <h2>PERFECT CROPS :</h2>
      <H4> ${(matter[0].crops)} </H4>
      `
  
    }
    if (input_value.toLowerCase() == matter[1].soilname) {
      response.innerHTML=
      `
      <h2>PROPERTIES :</h2>
      <H4> ${(matter[1].properties)} </H4>
      <h2>PERFECT CROPS :</h2>
      <H4> ${(matter[1].crops)} </H4>
      `
    }
    if (input_value.toLowerCase() == matter[2].soilname){
      response.innerHTML=
      `
      <h2>PROPERTIES :</h2>
      <H4> ${(matter[2].properties)} </H4>
      <h2>PERFECT CROPS :</h2>
      <H4> ${(matter[2].crops)} </H4>
      `
    }   
    if (input_value.toLowerCase() == matter[3].soilname){
      response.innerHTML=
      `
      <h2>PROPERTIES :</h2>
      <H4> ${(matter[3].properties)} </H4>
      <h2>PERFECT CROPS :</h2>
      <H4> ${(matter[3].crops)} </H4>
      `
    }  
    if (input_value.toLowerCase() == matter[4].soilname){
      response.innerHTML=
      `
      <h2>PROPERTIES :</h2>
      <H4> ${(matter[4].properties)} </H4>
      <h2>PERFECT CROPS :</h2>
      <H4> ${(matter[4].crops)} </H4>
      `
    }   
    if (input_value.toLowerCase() == matter[5].soilname){
      response.innerHTML=
      `
      <h2>PROPERTIES :</h2>
      <H4> ${(matter[5].properties)} </H4>
      <h2>PERFECT CROPS :</h2>
      <H4> ${(matter[5].crops)} </H4>
      `
    }   
    if (input_value.toLowerCase() == matter[6].soilname){
      response.innerHTML=
      `
      <h2>PROPERTIES :</h2>
      <H4> ${(matter[6].properties)} </H4>
      <h2>PERFECT CROPS :</h2>
      <H4> ${(matter[6].crops)} </H4>
      `
    }   
    if (input_value.toLowerCase() == matter[7].soilname){
      response.innerHTML=
      `
      <h2>PROPERTIES :</h2>
      <H4> ${(matter[7].properties)} </H4>
      <h2>PERFECT CROPS :</h2>
      <H4> ${(matter[7].chat)} </H4>
      `
  
    }    
  }