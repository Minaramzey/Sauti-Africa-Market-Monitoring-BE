const router = require('express').Router();
const axios = require('axios');
//Query router retail
router.get('/', async(req, res) => {
    const product =req.query.product;
    const market = req.query.market;
    const country = req.query.country;
    console.log(product, market, country);
    // console.log(req);
    await axios.get(`https://sauti2-app.herokuapp.com/retail/?product_name=${product}&market_name=${market}&country_code=${country}`)
    .then((response)=> {
        console.log(response)
        
    let data = response.data; 
    // let queryObj = {};   
    // const history = []
    
    // for (obj in retail) {
    //    queryObj = {
    //     start_date: retail[obj].start_date,
    //     end_date: retail[obj].end_date,
    //     number_of_observations: retail[obj].number_of_observations,
    //     mode_d: retail[obj].Mode_D,
    //     mean: retail[obj].mean,
    //     min_price: retail[obj].min_price,
    //     max_price: retail[obj].max_price,
    //     days_between_start_end: retail[obj].days_between_start_end, 
    //     completeness: retail[obj].completeness,
    //     DQI: retail[obj].DQI,
    //     DQI_cat: retail[obj].DQI_cat,

    //       product:retail[obj].product_name,
    //       market_id:retail[obj].market_id,
    //       marketplace:retail[obj].market_name,
    //       country:retail[obj].country_code,
    //       source_id:retail[obj].source_id,
    //       source_name:retail[obj].source_name,
    //       currency:retail[obj].currency_code,
    //       unit:retail[obj].unit_scale,
    //       date:retail[obj].date_price,
    //       price:retail[obj].observed_price,
    //       class:retail[obj].observed_class,
    //       method:retail[obj].class_method,
    //       forecasted_price:retail[obj].forecasted_price,
    //       forecasted_class:retail[obj].forecasted_class,
    //       forecasting_model:retail[obj].forecasting_model,
    //       normal_band_limit:retail[obj].normal_band_limit,
    //       stress_band_limit:retail[obj].stress_band_limit,
    //       alert_band_limit:retail[obj].alert_band_limit,
    //       stressness:retail[obj].stressness,
    //       data_run_model:retail[obj].date_run_model
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
    axios.get('https://sauti2-app.herokuapp.com/retail/labeled/')
    .then((response)=> {
        console.log(response)
    let retail = response.data; 
    let rtObj = {};   
    const labeled =[]
    
    for (obj in retail) {
       rtObj = {
        method: retail[obj].class_method,
        country: retail[obj].country_code,
        currency: retail[obj].currency_code,
        date: retail[obj].date_price,
        marketplace: retail[obj].market_name,
        phase: retail[obj].observed_class,
        price: retail[obj].observed_price,
        category: retail[obj].price_category,
        product: retail[obj].product_name,
        source: retail[obj].source_name,
        stressness: retail[obj].stressness
        };
        labeled.push(rtObj);
    }
    res.status(200).json(labeled)
    })
    .catch(error =>{
        console.log(error)
    })
    });
// Latest Data wholesale
    router.get('/data/latest', (req, res) => {
        axios.get('https://sauti2-app.herokuapp.com/retail/labeled/latest/')
        .then((response)=> {
            console.log(response)
        let retail = response.data; 
        let rtObj = {};   
        const latest =[]
        
        for (obj in retail) {
           rtObj = {
            method: retail[obj].class_method,
            country: retail[obj].country_code,
            currency: retail[obj].currency_code,
            date: retail[obj].date_price,
            marketplace: retail[obj].market_name,
            phase: retail[obj].observed_class,
            price: retail[obj].observed_price,
            category: retail[obj].price_category,
            product: retail[obj].product_name,
            source: retail[obj].source_name,
            stressness: retail[obj].stressness
            };
            latest.push(rtObj);
        }
        res.status(200).json(latest)
        })
        .catch(error =>{
            console.log(error)
        })
        });
    // Retail Quality Route
        router.get('/quality', (req, res) => {
            axios.get('https://sauti2-app.herokuapp.com/retail/data-quality/')
            .then((response)=> {
                console.log(response)
            let quality = response.data; 
            let qtObj = {};   
            const rtquality =[]
            
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
                rtquality.push(qtObj);
            }
            res.status(200).json(rtquality)
            })
            .catch(error =>{
                console.log(error)
            })
            });
    module.exports = router;