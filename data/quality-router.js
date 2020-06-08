const router = require('express').Router();
const axios = require('axios');




router.get('/data', (req, res) => {
    // const wholesale_data = 
    // [{country:"UGA", marketplace:"Kiboga", product:"Maize", price:"550", category:"quality", phase:"Stress",},
    // {country:"UGA", marketplace:"Masindi", product:"Yellow Beans", price:"1500", category:"quality", phase:"Crisis",},
    // {country:"KEN", marketplace:"Eldoret", product:"Beans", price:"112", category:"quality", phase:"Alert",},
    // {country:"KEN", marketplace:"Nakuru", product:"Maize", price:"18", category:"quality", phase:"Stress",},
    // {country:"DRC", marketplace:"Lubumbashi", product:"Green Peas", price:"101", category:"quality", phase:"Crisis",},
    // {country:"BDI", marketplace:"Bujumbura", product:"Maize", price:"48", category:"quality", phase:"Stress",},
    // {country:"UGA", marketplace:"Busia", product:"Maize", price:"20", category:"quality", phase:"Crisis",},
    // {country:"KEN", marketplace:"Nakuru", product:"Rice", price:"82", category:"quality", phase:"Crisis",},
    // {country:"UGA", marketplace:"Tororo", product:"Mixed beans", price:"76", category:"quality", phase:"Stress",},
    // {country:"UGA", marketplace:"Tororo", product:"Flour", price:"27", category:"quality", phase:"Alert",},
    // {country:"UGA", marketplace:"Kiboga", product:"Beans", price:"1500", category:"quality", phase:"Stress",},
    // {country:"UGA", marketplace:"Lira", product:"Soya Beans", price:"59", category:"quality", phase:"Crisis",},
    // {country:"KEN", marketplace:"Nairobi", product:"Maize", price:"28", category:"quality", phase:"Alert",},
    // {country:"KEN", marketplace:"Kisumu", product:"Red Beans", price:"70", category:"quality", phase:"Stress",},
    // {country:"DRC", marketplace:"Goma", product:"Imported Rice", price:"85", category:"quality", phase:"Crisis",},
    // {country:"BDI", marketplace:"Gitega", product:"Dry Peas", price:"113", category:"quality", phase:"Stress",},
    // {country:"UGA", marketplace:"Masindi", product:"Maize", price:"36", category:"quality", phase:"Crisis",},
    // {country:"DRC", marketplace:"Lubumbashi", product:"Yellow Beans", price:"121", category:"quality", phase:"Crisis",},
    // {country:"TZA", marketplace:"Arusha", product:"Mbeya Rice", price:"78", category:"quality", phase:"Stress",},
    // {country:"UGA", marketplace:"Owino", product:"Imported Rice", price:"85", category:"quality", phase:"Alert",}]
axios.get('https://sauti2-app.herokuapp.com/data-quality-ws/')
.then((response)=> {
    console.log(response)
let quality = response.data; 
let qtObj = {};   
const qtdata =[]

for (obj in quality) {
   qtObj = {
      country: quality[obj].country_code,
      marketplace: quality[obj].market,
      product: quality[obj].product,
      source: quality[obj].source,
      start_date: quality[obj].start,
      end_date: quality[obj].end,
      date: quality[obj].date_price,
      timeliness: quality[obj].timeliness,
      data_length: quality[obj].data_length,
      completeness: quality[obj].completeness,
      duplicates: quality[obj].duplicates,
      mode_D: quality[obj].mode_D,
      data_points: quality[obj].data_points,
      DQI: quality[obj].DQI,
      DQI_cat: quality[obj].DQI_cat,
      category: quality[obj].price_category
    };
    qtdata.push(qtObj);
}
res.status(200).json({quality_data : qtdata})
})
.catch(error =>{
    console.log(error)
})
});
module.exports = router;
