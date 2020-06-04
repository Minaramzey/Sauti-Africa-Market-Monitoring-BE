const router = require('express').Router();
const axios = require('axios');


router.get('/data', (req, res) => {
    // const retail_data = 
    // [{country:"UGA", marketplace:"Kiboga", product:"Maize", price:"600", category:"retail", phase:"Stress",},
    // {country:"UGA", marketplace:"Masindi", product:"Yellow Beans", price:"2200", category:"retail", phase:"Crisis",},
    // {country:"KEN", marketplace:"Eldoret", product:"Beans", price:"182", category:"retail", phase:"Alert",},
    // {country:"KEN", marketplace:"Nakuru", product:"Maize", price:"30", category:"retail", phase:"Stress",},
    // {country:"DRC", marketplace:"Lubumbashi", product:"Green Peas", price:"114", category:"retail", phase:"Crisis",},
    // {country:"BDI", marketplace:"Bujumbura", product:"Maize", price:"51", category:"retail", phase:"Stress",},
    // {country:"UGA", marketplace:"Busia", product:"Maize", price:"24", category:"retail", phase:"Crisis",},
    // {country:"KEN", marketplace:"Nakuru", product:"Rice", price:"102", category:"retail", phase:"Crisis",},
    // {country:"UGA", marketplace:"Tororo", product:"Mixed beans", price:"90", category:"retail", phase:"Stress",},
    // {country:"UGA", marketplace:"Tororo", product:"Flour", price:"38", category:"retail", phase:"Alert",},
    // {country:"UGA", marketplace:"Kiboga", product:"Beans", price:"2800", category:"retail", phase:"Stress",},
    // {country:"UGA", marketplace:"Lira", product:"Soya Beans", price:"68", category:"retail", phase:"Crisis",},
    // {country:"KEN", marketplace:"Nairobi", product:"Maize", price:" 40", category:"retail", phase:"Alert",},
    // {country:"KEN", marketplace:"Kisumu", product:"Red Beans", price:"80", category:"retail", phase:"Stress",},
    // {country:"DRC", marketplace:"Goma", product:"Imported Rice", price:"96", category:"retail", phase:"Crisis",},
    // {country:"BDI", marketplace:"Gitega", product:"Dry Peas", price:"118", category:"retail", phase:"Stress",},
    // {country:"UGA", marketplace:"Masindi", product:"Maize", price:"38", category:"retail", phase:"Crisis",},
    // {country:"DRC", marketplace:"Lubumbashi", product:"Yellow Beans", price:"139", category:"retail", phase:"Crisis",},
    // {country:"TZA", marketplace:"Arusha", product:"Mbeya Rice", price:"86", category:"retail", phase:"Stress",},
    // {country:"UGA", marketplace:"Owino", product:"Imported Rice", price:"96", category:"retail", phase:"Alert",}]
    axios.get('https://sauti2-app.herokuapp.com/price-status-rt/')
    .then((response)=> {
        console.log(response)
    let retail = response.data; 
    let rtObj = {};   
    const rtdata =[]
    
    for (obj in retail) {
       rtObj = {
          country: retail[obj].country,
          marketplace: retail[obj].market,
          product: retail[obj].product_name,
          date: retail[obj].date_price,
          price: retail[obj].observed_price,
          currency: retail[obj].currency_code,
          category: retail[obj].price_category,
          phase: retail[obj].observed_class,
          stressness: retail[obj].stressness,
          source_id: retail[obj].source_id,
          market_id: retail[obj].market_id,
        };
        rtdata.push(rtObj);
    }
    res.status(200).json({retail_data : rtdata})
    })
    .catch(error =>{
        console.log(error)
    })
    });

    router.get('/quality', (req, res) => {
        const retail_quality=
            [{country:"UGA", marketplace:"Kibogo", category:"Retail", product:"Tilapia", timeliness:"572.0", data_length:"1900.0", completeness:"0.012", duplicates:"1.0", mode_D:"2.0",},
            {country:"DRC", marketplace:"Kolwezi", category:"Retail", product:"White Beans", timeliness:"608.0", data_length:"1754.0", completeness:"0.005", duplicates:"3.0", mode_D:"3.0",},
            {country:"DRC", marketplace:"Bukavu", category:"Retail", product:"Ground Nuts", timeliness:"700.0", data_length:"1502.0", completeness:"0.005", duplicates:"1.0", mode_D:"5.0",},
            {country:"KEN", marketplace:"Makueni", category:"Retail", product:"Dry Maize", timeliness:"692.0", data_length:"1830.0", completeness:"0.007", duplicates:"5.0", mode_D:"7.0",}]
       // axios.get('URL HERE')
        // .then(response=> {
        //     console.log(response)
        //     retail_data=response
        // })
        // .catch(error =>{
        //     console.log(error)
        // })
        res.json({retail_quality})
     });
    module.exports = router;