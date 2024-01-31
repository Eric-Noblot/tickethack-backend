var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');
const Cart = require('../models/carts');
const moment = require("moment")


router.get('/', (req, res) => {
	Trip.find().then(data => {
		res.json({  trips: data });
	});
});


router.post("/", (req, res) => {
	const dayToFind = moment(req.body.date);
	
	Trip.find({
		departure: req.body.departure,
		arrival: req.body.arrival,
		date : {
			$gte: dayToFind.toDate(),
			$lte: moment(dayToFind).endOf("day").toDate()
		}
	}).then((data) => {
		console.log(data)
		if (data.length === 0) {
			res.json({result: false, error :"No trips founded"})
		} else {
			res.json({result: true, allTrips : data})
		}
	})
})

router.post("/store", (req, res) => {
	const newCart = new Cart({
		isPaid:false,
		trip:req.body.id
	});

	newCart.save().then(() => {
		res.json({result:true})
	})
})

router.get("/getcarts", (req, res) => {
	Cart.find({isPaid:false}).then(trips => {
		res.json({trips})
	});
})

  
module.exports = router;
