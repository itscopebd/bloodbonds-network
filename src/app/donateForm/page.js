"use client";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";

const DonateFormPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data) => {

     

    await fetch("/api/help", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if( data.insertedId){
          console.log(data)
          Swal.fire({
              
            icon: "success",
            title: "Your Registration Success!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } )

    } 
    
    return (
      <div className="card flex-shrink-0 w-full max-w-sm md:max-w-full  shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        
      <div className="form-control">
    <label className="label">
      <span className="label-text">
        Your Name Please
      </span>
    </label>
    <input type="text" className="input input-bordered" placeholder=" Name" {...register("Name", {required: true, maxLength: 80})} />

    
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Your Email please</span>
    </label>
    <input type="email"  className="input input-bordered" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />

    
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Phone number</span>
    </label>
    <input type="tel"       className="input input-bordered"
 placeholder="Mobile " {...register("Mobile", {required: true, minLength: 6, maxLength: 12})} />

    
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Amount</span>
    </label>
    <input
      type="number"
      placeholder="BDT"
      {...register("Amount", {
        required: "Please Fill up this feild",
      })}
      className="input input-bordered"
    />
   
  </div>
      <input type="submit" placeholder="DonateNow" className="btn btn-outline" />
    </form>
    </div>
    );
};

export default DonateFormPage;


  
 
  