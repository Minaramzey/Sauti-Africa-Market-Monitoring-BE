// const router = require('express').Router();
// const axios = require('axios');


//     router.get('/', async(req, res) => {
//         const product =req.query.product;
//         const market = req.query.market;
//         const country = req.query.country;
//         console.log(product, market, country);
//         // console.log(req);
//         await axios.get(`https://sauti2-app.herokuapp.com/wholesale/?product_name=${product}&market_name=${market}&country_code=${country}`)
//         .then((response)=> {
//             console.log(response)
            
//         let retail = response.data; 
//         let qtObj = {};   
//         const qtdataql =[]
        
//         for (obj in retail) {
//            qtObj = {
//             start_date: retail[obj].start_date,
//             end_date: retail[obj].end_date,
//             number_of_observations: retail[obj].number_of_observations,
//             mode_d: retail[obj].Mode_D,
//             mean: retail[obj].mean,
//             min_price: retail[obj].min_price,
//             max_price: retail[obj].max_price,
//             days_between_start_end: retail[obj].days_between_start_end, 
//             completeness: retail[obj].completeness,
//             DQI: retail[obj].DQI,
//             DQI_cat: retail[obj].DQI_cat,

//               product:retail[obj].product_name,
//               market_id:retail[obj].market_id,
//               marketplace:retail[obj].market_name,
//               counrty:retail[obj].country_code,
//               source_id:retail[obj].source_id,
//               source_name:retail[obj].source_name,
//               currency:retail[obj].currency_code,
//               unit:retail[obj].unit_scale,
//               date:retail[obj].date_price,
//               price:retail[obj].observed_price,
//               class:retail[obj].observed_class,
//               method:retail[obj].class_method,
//               forecasted_price:retail[obj].forecasted_price,
//               forecasted_class:retail[obj].forecasted_class,
//               forecasting_model:retail[obj].forecasting_model,
//               normal_band_limit:retail[obj].normal_band_limit,
//               stress_band_limit:retail[obj].stress_band_limit,
//               alert_band_limit:retail[obj].alert_band_limit,
//               stressness:retail[obj].stressness,
//               data_run_model:retail[obj].date_run_model
//             };
//             qtdataql.push(qtObj);
//         }
//         res.status(200).json({response: qtdataql})
//         })
//         .catch(error =>{
//             console.log(error)
//         })
//         });
// module.exports = router;
