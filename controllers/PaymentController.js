const Payments = require('../models/payment');

const paymentCtrl = {
    getPayments: async (req, res) => {
        try {
            const payments = await Payments.find();
            res.json(payments);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createPayment: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('name email');
            if (!user) return res.status(400).json({ msg: "User does not exist." });

            const { cart, paymentID, address } = req.body;

            const { _id, name, email } = user;

            const newPayment = new Payments({
                user_id: _id, name, email, cart, paymentId, address
            });

            cart.filter(item => {
                return sold(item._id, item.quantity, item.sold);
            });

            await newPayment.save();
            res.json({ msg: "Payment Success!" });
        
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
};

const sold = async (id, quantity, oldSold) => {
    await Products.findOneAndUpdate({ _id: id }, {
        sold: quantity + oldSold
    });
};

module.exports = paymentController;


