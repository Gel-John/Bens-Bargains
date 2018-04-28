const express = require("express");
const router = express.Router();

router.get('/contacts', (req, res) =>{
  res.send({type:'GET'});
})
router.post("/contacts", (req, res) => {
  res.send({ type: "post" });
  console.log(req.body);
})
router.put('/contacts', (req, res) =>{
  res.send({type:'put'});
});
router.delete("/contacts", (req, res) => {
  res.send({ type: "delete" });
});

module.exports = router;