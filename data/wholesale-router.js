const router = require('express').Router();
const axios = require('axios');




router.get('/data', (req, res) => {
    // const wholesale_data = 
    // [{country:"UGA", marketplace:"Kiboga", product:"Maize", price:"550", category:"wholesale", phase:"Stress",},
    // {country:"UGA", marketplace:"Masindi", product:"Yellow Beans", price:"1500", category:"wholesale", phase:"Crisis",},
    // {country:"KEN", marketplace:"Eldoret", product:"Beans", price:"112", category:"wholesale", phase:"Alert",},
    // {country:"KEN", marketplace:"Nakuru", product:"Maize", price:"18", category:"wholesale", phase:"Stress",},
    // {country:"DRC", marketplace:"Lubumbashi", product:"Green Peas", price:"101", category:"wholesale", phase:"Crisis",},
    // {country:"BDI", marketplace:"Bujumbura", product:"Maize", price:"48", category:"wholesale", phase:"Stress",},
    // {country:"UGA", marketplace:"Busia", product:"Maize", price:"20", category:"wholesale", phase:"Crisis",},
    // {country:"KEN", marketplace:"Nakuru", product:"Rice", price:"82", category:"wholesale", phase:"Crisis",},
    // {country:"UGA", marketplace:"Tororo", product:"Mixed beans", price:"76", category:"wholesale", phase:"Stress",},
    // {country:"UGA", marketplace:"Tororo", product:"Flour", price:"27", category:"wholesale", phase:"Alert",},
    // {country:"UGA", marketplace:"Kiboga", product:"Beans", price:"1500", category:"wholesale", phase:"Stress",},
    // {country:"UGA", marketplace:"Lira", product:"Soya Beans", price:"59", category:"wholesale", phase:"Crisis",},
    // {country:"KEN", marketplace:"Nairobi", product:"Maize", price:"28", category:"wholesale", phase:"Alert",},
    // {country:"KEN", marketplace:"Kisumu", product:"Red Beans", price:"70", category:"wholesale", phase:"Stress",},
    // {country:"DRC", marketplace:"Goma", product:"Imported Rice", price:"85", category:"wholesale", phase:"Crisis",},
    // {country:"BDI", marketplace:"Gitega", product:"Dry Peas", price:"113", category:"wholesale", phase:"Stress",},
    // {country:"UGA", marketplace:"Masindi", product:"Maize", price:"36", category:"wholesale", phase:"Crisis",},
    // {country:"DRC", marketplace:"Lubumbashi", product:"Yellow Beans", price:"121", category:"wholesale", phase:"Crisis",},
    // {country:"TZA", marketplace:"Arusha", product:"Mbeya Rice", price:"78", category:"wholesale", phase:"Stress",},
    // {country:"UGA", marketplace:"Owino", product:"Imported Rice", price:"85", category:"wholesale", phase:"Alert",}]
axios.get('https://sauti2-app.herokuapp.com/price-status-ws/')
.then((response)=> {
    console.log(response)
let wholesale = response.data; 
let wsObj = {};   
const wsdata =[]

for (obj in wholesale) {
   wsObj = {
      country: wholesale[obj].country,
      marketplace: wholesale[obj].market,
      product: wholesale[obj].product_name,
      date: wholesale[obj].date_price,
      price: wholesale[obj].observed_price,
      currency: wholesale[obj].currency_code,
      category: wholesale[obj].price_category,
      phase: wholesale[obj].observed_class,
      stressness: wholesale[obj].stressness,
      source_id: wholesale[obj].source_id,
      market_id: wholesale[obj].market_id,
    };
    wsdata.push(wsObj);
}
res.status(200).json({wholesale_data : wsdata})
})
.catch(error =>{
    console.log(error)
})
});




router.get('/quality', (req, res) => {
    const wholesale_quality=
        [{country:"KEN", marketplace:"Nairoi", category:"Wholesale", product:"Barley", timeliness:"713.0", data_length:"1843.0", completeness:"0.007", duplicates:"4.0", mode_D:"4.0",},
        {country:"UGA", marketplace:"Masindi", category:"Wholesale", product:"Yellow Bean", timeliness:"512.0", data_length:"1310.0", completeness:"0.010", duplicates:"2.0", mode_D:"3.0",},
        {country:"KEN", marketplace:"Eldoret", category:"Wholesale", product:"Beans", timeliness:"403.0", data_length:"1700.0", completeness:"0.009", duplicates:"2.0", mode_D:"4.0",},
        {country:"KEN", marketplace:"Nakuru", category:"Wholesale", product:"Maize", timeliness:"813.0", data_length:"1682.0", completeness:"0.006", duplicates:"4.0", mode_D:"2.0",},
        {country:"UGA", marketplace:"Tororo", category:"Wholesale", product:"Flour", timeliness:"631.0", data_length:"1820.0", completeness:"0.08", duplicates:"1.0", mode_D:"3.0",},]
   // axios.get('URL HERE')
    // .then(response=> {
    //     console.log(response)
    //     retail_data=response
    // })
    // .catch(error =>{
    //     console.log(error)
    // })
    res.json({wholesale_quality})
 });
 module.exports = router;