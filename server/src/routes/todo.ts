import  Express  from "express";

const router= Express.Router()

router.post("/test",async(req:Express.Request,res:Express.Response)=>{
    console.log("hit")

})


export default router