const router = require('express').Router();
const axios = require('axios');




router.get('/data', (req, res) => {
axios.get('https://sauti2-app.herokuapp.com/wholesale/labeled/')
.then((response)=> {
    console.log(response)
let wholesale = response.data; 
let wsObj = {};   
const wsdata =[]

for (obj in wholesale) {
   wsObj = {
      method: wholesale[obj].class_method,
      country: wholesale[obj].country_code,
      currency: wholesale[obj].currency_code,
      date: wholesale[obj].date_price,
      marketplace: wholesale[obj].market_name,
      phase: wholesale[obj].observed_class,
      price: wholesale[obj].observed_price,
      category: wholesale[obj].price_category,
      product: wholesale[obj].product_name,
      source: wholesale[obj].source_name,
      stressness: wholesale[obj].stressness
    };
    wsdata.push(wsObj);
}
res.status(200).json({wholesale_data : wsdata})
})
.catch(error =>{
    console.log(error)
})
});




router.get('/data/latest', (req, res) => {
axios.get('https://sauti2-app.herokuapp.com/wholesale/labeled/latest/')
.then((response)=> {
    console.log(response)
let wholesale = response.data; 
let wsObj = {};   
const wsdata =[]

for (obj in wholesale) {
   wsObj = {
      method: wholesale[obj].class_method,
      country: wholesale[obj].country_code,
      currency: wholesale[obj].currency_code,
      date: wholesale[obj].date_price,
      marketplace: wholesale[obj].market_name,
      phase: wholesale[obj].observed_class,
      price: wholesale[obj].observed_price,
      category: wholesale[obj].price_category,
      product: wholesale[obj].product_name,
      source: wholesale[obj].source_name,
      stressness: wholesale[obj].stressness
    };
    wsdata.push(wsObj);
}
res.status(200).json({wholesale_latest : wsdata})
})
.catch(error =>{
    console.log(error)
})
});
 module.exports = router;