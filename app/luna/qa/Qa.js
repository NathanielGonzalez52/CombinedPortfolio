"use client";
import React from 'react';
import Navbar from "../Navbar";
import "./page.css";
import Footer from "../Footer";
import Fade from "react-awesome-reveal";


export default function Qa() {
  return (
    <>
        <Fade triggerOnce={true} duration={1200}>
        <div className="terms">
            <div className="faqs">
            <div className="terms-container">
                <h1 className="terms-header title">Terms and Conditions</h1>
                &nbsp;
                &nbsp;
                <h1><i class="fa-solid fa-file-signature"></i></h1>
            </div>
                <p>Terms and Conditions are accepeted 
                automatically when a purchase is made.
                </p>
                <h2 className="title">Shipping and Handling</h2>
                <li>Orders are shipped out within 1-2 weeks of purchase. 
                However, there may be times when shipping takes longer. 
                During holidays, shipping is expected to take longer.</li>
                <h2 className="title">Help! I Entered The Wrong Address</h2>
                <li>If the item has not been shipping, 
                please email help@whitesquirrel.com to update your address</li>
                <li>If the item has shipped, an additional payment is required.</li>
                <h2 className="title">Missing packages?</h2>
                <li>We do not accept responsibility for missing packages. 
                Once the package status is &quot;Delivered&quot;, it is out of our hands.
                Please contact your shipping carrier </li>
                <h2 className="title">Return Policy</h2>
                <li>All sales are final once a product has been shipped.</li>
                <h2 className="title">Damaged Goods</h2>
                <li>Please contact us with photos of the product.</li>
                <h2 className="title">Cancellations</h2>
                <li>Orders are canceled if the order has not been 
                shipped out.</li>
            </div>
            <div className="questions">
            <div className="qa-container">
                <h1 className="title ans-ques">Frequently Asked Questions</h1>
                &nbsp;
                &nbsp;
                <h1><i class="fa-solid fa-comments"></i></h1>
            </div>
            <h2 className="ques">Q: Are you currently taking commissions / 
            custom paintings / tattoo designs?</h2>
            <li className="ans">A: Unfortunately, I am not currently doing commissions 
            for individuals, as I am too busy with freelance work. I am only 
            open to freelance work for publishers, games, and animation.</li>
            <h2 className="ques">Q: Can I ship my MtG cards or other products for you to sign and ship back?</h2>
            <li className="ans">A: Unfortunately, I&apos;m not currently doing signings at home, 
            only in-person signings at conventions. But I do very much appreciate 
            your interest! </li>
            </div>
        </div>
        </Fade>
    </>
  )
}
