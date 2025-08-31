import  Express  from "express";

const router= Express.Router()

router.post("/",async(req,res)=>{
    console.log("hit")

})
router.route("/").get()
router.route("/:id").patch()
router.route("/:id").delete()

export default router