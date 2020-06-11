const router = require('express').Router();
const axios = require('axios');




router.get('/wholesale', (req, res) => {
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
res.status(200).json({quality_wholesale : qtdata})
})
.catch(error =>{
    console.log(error)
})
});
router.get('/retail', (req, res) => {
    axios.get('https://sauti2-app.herokuapp.com/retail/data-quality/')
    .then((response)=> {
        console.log(response)
    let quality = response.data; 
    let qtObj = {};   
    const qtdatart =[]
    
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
        qtdatart.push(qtObj);
    }
    res.status(200).json({quality_retail : qtdatart})
    })
    .catch(error =>{
        console.log(error)
    })
    });
module.exports = router;
