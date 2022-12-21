const axios = require("axios");
let Data = require('../../models/data.model');

try{
    module.exports.setTime=(
        async function getWearther(){
            setInterval(() =>{
                const options = {
                    method: 'GET',
                    url: 'http://api.weatherapi.com/v1/forecast.json',
                    params: {
                        key: '6f02ae4bddd947b7ae920159221510',
                        q:'Hanoi',
                        days:1
                    },
                }
                axios.request(options).then(async function (response) {
                    let xx = await Data.findOne({})
                    await Data.findOneAndUpdate({},{$set:{
                        program:xx.program, 
                        data:{
                            ...xx.data,
                            temp: response.data.current.temp_c
                        }}
                    });
                }).catch(function (error) {
                    console.error(error);
                });
                
            }, 2000);
        }
    )()
}catch (error) {
    console.log(error)
}