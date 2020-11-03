const {Router, query}= require ("express");
const router= Router();
const axios=require ("axios");

router.get("/api/search",(req,res)=>{
    const element = req.query.q;
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${element}`)
    .then((response) => {
        const result={response:response.data.results}
        res.send(result).status(200)
        
    })
    
    .catch((error) => {
        console.log(error);
        res.send(error)
    });
    
})

module.exports = router;

