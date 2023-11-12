// Needed Resources 

const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require('../utilities/index');
const regValidate = require('../utilities/account-validation')
const validate = require("../utilities/account-validation")

// router.get("/type/:classificationId", invController.buildByClassificationId);
// router.get("/detail/:invId", invController.BuildByVehicleId);
router.get("/register", utilities.handleErrors(accountController.buildRegister))

// Process the registration data
router.post("/register", regValidate.registationRules(), regValidate.checkRegData, utilities.handleErrors(accountController.registerAccount))



module.exports = router;