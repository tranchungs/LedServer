let Data = require('../../models/data.model');

module.exports.index = async (req, res, next)=>{
    try {
        let c = await Data.findOne({});
        res.status(200).json(c)

    }catch(err) {
        res.status(400).json(err);
    }
}