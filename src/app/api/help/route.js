import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false;
const tran_id = new ObjectId().toString();
export const POST = async ( request,response) => {
  const helpData = await request.json();
  const { db } = await connectToDatabase();
  const helpForm = await request.body;
  console.log(helpForm)
  const data = {
    total_amount: helpForm.Amount,
    currency: 'BDT',
    tran_id: tran_id, // use unique tran_id for each api call
    success_url: 'http://localhost:3030/success',
    fail_url: 'http://localhost:3030/fail',
    cancel_url: 'http://localhost:3030/cancel',
    ipn_url: 'http://localhost:3030/ipn',
    shipping_method: 'Courier',
    product_name: 'Computer.',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: helpForm.Name,
    cus_email: helpForm.Email,
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: helpForm.Mobile,
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
};
console.log(data);
// const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
// sslcz.init(data).then(apiResponse => {
//     // Redirect the user to payment gateway
//     let GatewayPageURL = apiResponse.GatewayPageURL
//     response.redirect({url:GatewayPageURL})
//     console.log('Redirecting to: ', GatewayPageURL)
// });
  try {
    
   
      const result = await db.collection("helps").insertOne(helpData);
      return NextResponse.json(result);
    
  } catch (error) {
    return NextResponse.json({ message: error.toString() });
  }
};

// donor get all 
// export const GET = async () => {
//   const { db } = await connectToDatabase();
//   try {
//     const result = await db.collection("helps").find().toArray();
//     return NextResponse.json(result);
//   } catch (err) {
//     return NextResponse.json({ message: err.toString() });
//   }
// };



