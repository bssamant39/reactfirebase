import React, { useState } from 'react'

const Contact = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const inputHandler = (e) => {

        const name = e.target.name
        const value = e.target.value
        console.log(name, value);
        setInputValue((preVal) => {
            return {
                ...preVal,
                [name]: value
            }

        })

    }
    const submitHandler = async(e) => {
        e.preventDefault()
        const {name,email,subject,message}=inputValue
        if(name&&email&&subject&&message){
            const res=fetch("https://reactfirebase-6f384-default-rtdb.firebaseio.com/reactcontact.json",
        {
            method:"POST",
            headers :{
                "Content-Type" : "application.json",

            },
            body:JSON.stringify({
                name,
                email,
                subject,
                message,

            })
        }
        )
        if(res){
            setInputValue({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            alert("Data Successfully Stored")
        }
        else{
            alert("PLease Fill all the Data")
        }
        }
        // alert(`Hello Mr. ${inputValue.name} your Mail id is ${inputValue.email} , Subject is ${inputValue.subject} and Message is ${inputValue.message} `);
        
    }
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>This guide will teach you how to make an elegant form with React. Receive submission emails, get notifications, sync to your CRM. All without any backend</p>
                </div>

                <div className="row">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>123 Street, ZYZ, India</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+1 5589 55488 55s</p>
                            </div>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13911.71891122446!2d79.54886723794561!3d29.34305515454339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a098281277a58f%3A0xcfc368b144efc139!2sBhimtal%20Lake!5e0!3m2!1sen!2sin!4v1688062924295!5m2!1sen!2sin" style={{ border: "0", width: "100%", height: "290px" }} ></iframe>
                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form className="php-email-form" onSubmit={submitHandler} method='POST'>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" value={inputValue.name} onChange={inputHandler} required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required value={inputValue.email} onChange={inputHandler} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required value={inputValue.subject} onChange={inputHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" rows="10" required value={inputValue.message} onChange={inputHandler}></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact