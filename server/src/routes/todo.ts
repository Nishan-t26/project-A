import Express from "express";
import UserModal,{IUser} from "../../models/user";

const router = Express.Router();

// POST /
router.post("/test1", async (req, res) => {
  await console.log("hit",req.body);
  const newUser = new UserModal({
    userID: "Alice",
    name: "alample.com",
    address: "hola",
  });

await newUser.save();

  
  res.json({ message: "Todo created" });
});

// GET /
router.get("/get", async (req, res) => {
  console.log("13 hit");
  res.json({ message: "All todos" });
});

// // PATCH /:id
// router.patch("/:id", async (req, res) => {
//   const { id } = req.params;
//   res.json({ message: Todo ${id} updated });
// });

// // DELETE /:id
// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   res.json({ message: Todo ${id} deleted });
// });

export default router;
