import jwt from 'jsonwebtoken'

//doctpr authentication  middleware

const authDoctor = async (req,res,next) => {
    try {

        // CHNAGED THIS!!!!!!!!!!!!!1
        const dtoken = req.headers.dtoken; 
        if (!dtoken) {
            return res.json({success:false,message:'Not Authorized. Login Again'})
        }
        const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)
       // CHANGED THIS!!!!!!!!! and error went
        // req.body.docId = token_decode.id;
        req.doctor = { id: token_decode.id }
        next()

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

export default authDoctor