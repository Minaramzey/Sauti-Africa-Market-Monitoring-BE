const router = require('express').Router();
const axios = require('axios');


router.get('/data', (req, res) => {
    axios.get('https://sauti2-app.herokuapp.com/retail/labeled/')
    .then((response)=> {
        console.log(response)
    let retail = response.data; 
    let rtObj = {};   
    const rtdata =[]
    
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
        rtdata.push(rtObj);
    }
    res.status(200).json({retail_data : rtdata})
    })
    .catch(error =>{
        console.log(error)
    })
    });

    router.get('/data/latest', (req, res) => {
        axios.get('https://sauti2-app.herokuapp.com/retail/labeled/latest/')
        .then((response)=> {
            console.log(response)
        let retail = response.data; 
        let rtObj = {};   
        const rtdata =[]
        
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
            rtdata.push(rtObj);
        }
        res.status(200).json({retail_latest : rtdata})
        })
        .catch(error =>{
            console.log(error)
        })
        });
    module.exports = router;