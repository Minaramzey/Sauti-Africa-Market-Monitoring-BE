const router = require('express').Router();
const axios = require('axios');


//Query router wholesale
router.get('/', async(req, res) => {
    const product =req.query.product;
    const market = req.query.market;
    const country = req.query.country;
    console.log(product, market, country);
    // console.log(req);
    await axios.get(`https://sauti-market-monitoring.herokuapp.com/wholesale/?product_name=${product}&market_name=${market}&country_code=${country}`)
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
axios.get('https://sauti-market-monitoring.herokuapp.com/wholesale/labeled/')
.then((response)=> {
    console.log(response)
let wholesale = response.data; 

res.status(200).json(wholesale)
})
.catch(error =>{
    console.log(error)
})
});



//Latest wholesale data 
router.get('/data/latest', (req, res) => {
axios.get('https://sauti-market-monitoring.herokuapp.com/wholesale/labeled/latest/')
.then((response)=> {
    console.log(response)
let latestwholesale = response.data; 

res.status(200).json(latestwholesale)
})
.catch(error =>{
    console.log(error)
})
});

//Wholesale Quality Route
router.get('/quality', (req, res) => {
    axios.get('https://sauti-market-monitoring.herokuapp.com/wholesale/data-quality/')
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