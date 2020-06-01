const router = require('express').Router();
const axios = require('axios');




router.get('/wholesale', (req, res) => {
    const wholesale_data = 
    [{country:"UGA", marketplace:"Kiboga", product:"Maize", price:"550", category:"wholesale", phase:"Stress",},
    {country:"UGA", marketplace:"Masindi", product:"Yellow Beans", price:"1500", category:"wholesale", phase:"Crisis",},
    {country:"KEN", marketplace:"Eldoret", product:"Beans", price:"112", category:"wholesale", phase:"Alert",},
    {country:"KEN", marketplace:"Nakuru", product:"Maize", price:"18", category:"wholesale", phase:"Stress",},
    {country:"DRC", marketplace:"Lubumbashi", product:"Green Peas", price:"101", category:"wholesale", phase:"Crisis",},
    {country:"BDI", marketplace:"Bujumbura", product:"Maize", price:"48", category:"wholesale", phase:"Stress",},
    {country:"UGA", marketplace:"Busia", product:"Maize", price:"20", category:"wholesale", phase:"Crisis",},
    {country:"KEN", marketplace:"Nakuru", product:"Rice", price:"82", category:"wholesale", phase:"Crisis",},
    {country:"UGA", marketplace:"Tororo", product:"Mixed beans", price:"76", category:"wholesale", phase:"Stress",},
    {country:"UGA", marketplace:"Tororo", product:"Flour", price:"27", category:"wholesale", phase:"Alert",},
    {country:"UGA", marketplace:"Kiboga", product:"Beans", price:"1500", category:"wholesale", phase:"Stress",},
    {country:"UGA", marketplace:"Lira", product:"Soya Beans", price:"59", category:"wholesale", phase:"Crisis",},
    {country:"KEN", marketplace:"Nairobi", product:"Maize", price:"28", category:"wholesale", phase:"Alert",},
    {country:"KEN", marketplace:"Kisumu", product:"Red Beans", price:"70", category:"wholesale", phase:"Stress",},
    {country:"DRC", marketplace:"Goma", product:"Imported Rice", price:"85", category:"wholesale", phase:"Crisis",},
    {country:"BDI", marketplace:"Gitega", product:"Dry Peas", price:"113", category:"wholesale", phase:"Stress",},
    {country:"UGA", marketplace:"Masindi", product:"Maize", price:"36", category:"wholesale", phase:"Crisis",},
    {country:"DRC", marketplace:"Lubumbashi", product:"Yellow Beans", price:"121", category:"wholesale", phase:"Crisis",},
    {country:"TZA", marketplace:"Arusha", product:"Mbeya Rice", price:"78", category:"wholesale", phase:"Stress",},
    {country:"UGA", marketplace:"Owino", product:"Imported Rice", price:"85", category:"wholesale", phase:"Alert",}]
// axios.get('URL HERE')
// .then(response=> {
//     console.log(response)
//     wholesale_data=response
// })
// .catch(error =>{
//     console.log(error)
// })
res.json({wholesale_data})
});

router.get('/retail', (req, res) => {
    const retail_data = 
    [{country:"UGA", marketplace:"Kiboga", product:"Maize", price:"600", category:"retail", phase:"Stress",},
    {country:"UGA", marketplace:"Masindi", product:"Yellow Beans", price:"2200", category:"retail", phase:"Crisis",},
    {country:"KEN", marketplace:"Eldoret", product:"Beans", price:"182", category:"retail", phase:"Alert",},
    {country:"KEN", marketplace:"Nakuru", product:"Maize", price:"30", category:"retail", phase:"Stress",},
    {country:"DRC", marketplace:"Lubumbashi", product:"Green Peas", price:"114", category:"retail", phase:"Crisis",},
    {country:"BDI", marketplace:"Bujumbura", product:"Maize", price:"51", category:"retail", phase:"Stress",},
    {country:"UGA", marketplace:"Busia", product:"Maize", price:"24", category:"retail", phase:"Crisis",},
    {country:"KEN", marketplace:"Nakuru", product:"Rice", price:"102", category:"retail", phase:"Crisis",},
    {country:"UGA", marketplace:"Tororo", product:"Mixed beans", price:"90", category:"retail", phase:"Stress",},
    {country:"UGA", marketplace:"Tororo", product:"Flour", price:"38", category:"retail", phase:"Alert",},
    {country:"UGA", marketplace:"Kiboga", product:"Beans", price:"2800", category:"retail", phase:"Stress",},
    {country:"UGA", marketplace:"Lira", product:"Soya Beans", price:"68", category:"retail", phase:"Crisis",},
    {country:"KEN", marketplace:"Nairobi", product:"Maize", price:" 40", category:"retail", phase:"Alert",},
    {country:"KEN", marketplace:"Kisumu", product:"Red Beans", price:"80", category:"retail", phase:"Stress",},
    {country:"DRC", marketplace:"Goma", product:"Imported Rice", price:"96", category:"retail", phase:"Crisis",},
    {country:"BDI", marketplace:"Gitega", product:"Dry Peas", price:"118", category:"retail", phase:"Stress",},
    {country:"UGA", marketplace:"Masindi", product:"Maize", price:"38", category:"retail", phase:"Crisis",},
    {country:"DRC", marketplace:"Lubumbashi", product:"Yellow Beans", price:"139", category:"retail", phase:"Crisis",},
    {country:"TZA", marketplace:"Arusha", product:"Mbeya Rice", price:"86", category:"retail", phase:"Stress",},
    {country:"UGA", marketplace:"Owino", product:"Imported Rice", price:"96", category:"retail", phase:"Alert",}]
// axios.get('URL HERE')
// .then(response=> {
//     console.log(response)
//     retail_data=response
// })
// .catch(error =>{
//     console.log(error)
// })
res.json({retail_data})

});


router.get('/quality', (req, res) => {
    const data_quality=
        [{country:"KEN", marketplace:"Nairoi", category:"Wholesale", product:"Barley", timeliness:"713.0", data_length:"1843.0", completeness:"0.007", duplicates:"4.0", mode_D:"4.0",},
        {country:"UGA", marketplace:"Masindi", category:"Wholesale", product:"Yellow Bean", timeliness:"512.0", data_length:"1310.0", completeness:"0.010", duplicates:"2.0", mode_D:"3.0",},
        {country:"KEN", marketplace:"Eldoret", category:"Wholesale", product:"Beans", timeliness:"403.0", data_length:"1700.0", completeness:"0.009", duplicates:"2.0", mode_D:"4.0",},
        {country:"KEN", marketplace:"Nakuru", category:"Wholesale", product:"Maize", timeliness:"813.0", data_length:"1682.0", completeness:"0.006", duplicates:"4.0", mode_D:"2.0",},
        {country:"UGA", marketplace:"Tororo", category:"Wholesale", product:"Flour", timeliness:"631.0", data_length:"1820.0", completeness:"0.08", duplicates:"1.0", mode_D:"3.0",},
        {country:"UGA", marketplace:"Kibogo", category:"Retail", product:"Tilapia", timeliness:"572.0", data_length:"1900.0", completeness:"0.012", duplicates:"1.0", mode_D:"2.0",},
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
    res.json({data_quality})
 });
 module.exports = router;