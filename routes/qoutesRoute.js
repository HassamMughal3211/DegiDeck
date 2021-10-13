const express = require("express");
const { fetchQoutes, addQoute, fetchQoute, updateQoutes, deleteQoutes } = require("../controllers/qouteController");

const router = express.Router();

// router.get("/fetchQoutes", (req,res) => {
//     res.status(200).json({
//         msg:"qoute api"
//     })
// })

router.route("/")
    .get(fetchQoutes)
    .post(addQoute)

router.route("/qoute/:qouteId")
    .get(fetchQoute)
    .patch(updateQoutes)
    .delete(deleteQoutes);

module.exports = router;