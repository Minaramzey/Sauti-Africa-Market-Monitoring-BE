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

    res.status(200).json(retail)
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
        let latestretail = response.data; 
     
        res.status(200).json(latestretail)
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
       
            res.status(200).json(quality)
            })
            .catch(error =>{
                console.log(error)
            })
            });
    module.exports = router;