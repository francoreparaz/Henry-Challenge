const {Router, query}= require ("express");
const router= Router();
const axios=require ("axios");

router.get("/api/search",(req,res)=>{
    const element = req.query.q;
    
    console.log(element)
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${element}`)
    .then((response) => {
        let result= response.data.results
        let productos= result.map(a=>{return{
            id: a.id,
            thumbnail:a.thumbnail,
            title: a.title,
            price:a.price,
            currency_id:a.currency_id,
            available_quantity: a.available_quantity,
            condition: a.condition


        }})

        res.send(productos).status(200)
    })
    
    .catch((error) => {
        //console.log(error);
        res.send(error)
    });

    
})



module.exports = router;

