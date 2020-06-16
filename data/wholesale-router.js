const router = require('express').Router();
const axios = require('axios');


//Query router wholesale
router.get('/', async(req, res) => {
    const product =req.query.product;
    const market = req.query.market;
    const country = req.query.country;
    console.log(product, market, country);
    // console.log(req);
    await axios.get(`https://sauti2-app.herokuapp.com/wholesale/?product_name=${product}&market_name=${market}&country_code=${country}`)
    .then((response)=> {
        console.log(response)
        
    let data = response.data; 
    console.log(wholesale)
    // let queryObj = {};   
    // const history =[]
    
    // for (obj in wholesale) {
    //    queryObj = {
    //     start_date: wholesale[obj].start_date,
    //     end_date: wholesale[obj].end_date,
    //     number_of_observations: wholesale[obj].number_of_observations,
    //     mode_d: wholesale[obj].Mode_D,
    //     mean: wholesale[obj].mean,
    //     min_price: wholesale[obj].min_price,
    //     max_price: wholesale[obj].max_price,
    //     days_between_start_end: wholesale[obj].days_between_start_end, 
    //     completeness: wholesale[obj].completeness,
    //     DQI: wholesale[obj].DQI,
    //     DQI_cat: wholesale[obj].DQI_cat,

    //       product:wholesale[obj].product_name,
    //       market_id:wholesale[obj].market_id,
    //       marketplace:wholesale[obj].market_name,
    //       country:wholesale[obj].country_code,
    //       source_id:wholesale[obj].source_id,
    //       source_name:wholesale[obj].source_name,
    //       currency:wholesale[obj].currency_code,
    //       unit:wholesale[obj].unit_scale,
    //       date:wholesale[obj].date_price,
    //       price:wholesale[obj].observed_price,
    //       class:wholesale[obj].observed_class,
    //       method:wholesale[obj].class_method,
    //       forecasted_price:wholesale[obj].forecasted_price,
    //       forecasted_class:wholesale[obj].forecasted_class,
    //       forecasting_model:wholesale[obj].forecasting_model,
    //       normal_band_limit:wholesale[obj].normal_band_limit,
    //       stress_band_limit:wholesale[obj].stress_band_limit,
    //       alert_band_limit:wholesale[obj].alert_band_limit,
    //       stressness:wholesale[obj].stressness,
    //       data_run_model:wholesale[obj].date_run_model
    //     };
    //     history.push(queryObj);
    // }
    res.status(200).json(data)
    })
    .catch(error =>{
        console.log(error)
    })
    });

router.get('/data', (req, res) => {
axios.get('https://sauti2-app.herokuapp.com/wholesale/labeled/')
.then((response)=> {
    console.log(response)
let wholesale = response.data; 
let wsObj = {};   
const labeled =[]

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
   labeled.push(wsObj);
}
res.status(200).json(labeled)
})
.catch(error =>{
    console.log(error)
})
});



//Latest wholesale data 
router.get('/data/latest', (req, res) => {
axios.get('https://sauti2-app.herokuapp.com/wholesale/labeled/latest/')
.then((response)=> {
    console.log(response)
let wholesale = response.data; 
let wsObj = {};   
const latest =[]

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
   latest.push(wsObj);
}
res.status(200).json(latest)
})
.catch(error =>{
    console.log(error)
})
});

//Wholesale Quality Route
router.get('/quality', (req, res) => {
    axios.get('https://sauti2-app.herokuapp.com/wholesale/data-quality/')
    .then((response)=> {
        console.log(response)
    let quality = response.data; 
    let qtObj = {};   
    const qtdata =[]
    
    for (obj in quality) {
       qtObj = {
           DQI: quality[obj].DQI,
           DQI_cat: quality[obj].DQI_cat,
           completeness: quality[obj].completeness,
           country: quality[obj].country_code,
           data_length: quality[obj].data_length,
           data_points: quality[obj].data_points,
           duplicates: quality[obj].duplicates,
           end_date: quality[obj].end,
           id: quality[obj].id,
           marketplace: quality[obj].market_name,
           mode_D: quality[obj].mode_D,
           category: quality[obj].price_category,
          product: quality[obj].product,
          source: quality[obj].source_name,
          start_date: quality[obj].start,
          timeliness: quality[obj].timeliness,
        };
        qtdata.push(qtObj);
    }
    res.status(200).json(qtdata)
    })
    .catch(error =>{
        console.log(error)
    })
    });
 module.exports = router;