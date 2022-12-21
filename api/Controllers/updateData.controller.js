let Data = require('../../models/data.model')

let setTime  = require( './setTime');

try {
    module.exports.index = async (req, res)=>{
        let data = req.body;
        console.log(data);
        try {
            switch (req.body.program) {
                case 1:{
                    let xx = await Data.findOne({})
                    await Data.findOneAndUpdate({},
                        {$set:{
                            program:1, 
                            data:{
                                ...xx.data,
                            }
                        }},
                        {upsert: true}, 
                        function(err, doc) {
                            if (err) return res.send(500, {error: err});
                            return res.status(200).json({ message: 'true',...doc.data})
                        });
                        break
                }
                case 2:{
                    let xx = await Data.findOne({})
                    await Data.findOneAndUpdate({},
                        {$set:{
                            program:2, 
                            data:{
                                ...xx.data,
                                text: req.body.data.text,
                                animation: req.body.data.animation ? true : false,
                                color: {
                                    r: req.body.data.color.r,
                                    g: req.body.data.color.g,
                                    b: req.body.data.color.b
                                }
                            }
                        }},
                        {upsert: true}, 
                        function(err, doc) {
                            if (err) return res.send(500, {error: err});
                            return res.status(200).json({ message: 'true',...doc._doc})
                        });
                    
                        break;
                }
                default:{
                    res.status(404).json({message:'Error'})
                }
            }
        }catch(err) {
            
        }
    }
}catch (err){

}
setTime
