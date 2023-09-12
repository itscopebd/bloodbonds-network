"use client";
import { UserAuth } from "@/context/authContext";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ColorRing } from "react-loader-spinner";
import Swal from "sweetalert2";
const image_secrect__key = process.env.NEXT_PUBLIC_image_host;
const ApplyDonor = () => {
  let { user } = UserAuth();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const hostUrl = `https://api.imgbb.com/1/upload?key=${image_secrect__key}`;
  const onSubmit = async (data) => {
    setLoading(true);

    //  donar image host
    const formData = new FormData();
    formData.append("image", data.image[0]);

    await fetch(hostUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        // const imgUrl= imgResponse.
        const imgUrl = imgResponse?.data?.display_url;
       
        const savedDonor = {
          name: user?.displayName,
          email: user?.email,
          recent_illnesses: data.recentIllnesses,
          date_of_birth: data.dateOfBirth,
          phone: data.phone,
          paddress: data.paddress,
          paraddress: data.paraddress,
          image: imgUrl,
          blood: data.blood,
          gender: data.gender,
          hivStatus: data.hivStatus,
          status:"Pending"
        };
         fetch("/api/donor", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedDonor),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "You Already applied !") {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You Already applied!",
              });
              setLoading(false);
            } else {
              Swal.fire({
              
                icon: "success",
                title: "Your Registration Success!",
                showConfirmButton: false,
                timer: 1500,
              });
              setLoading(false);
            }
          });
      });
  };

  const positiveNumberValidation = (value) => {
    return parseFloat(value) > 0 || "Please enter a valid phone number";
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold ">Become a Donor!</h1>
            <p className="py-6">
              Thank you for considering becoming a donor and joining us in
              making a significant difference in the lives of those in need.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm md:max-w-full  shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Recent Illnesses or Medical Procedures name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Recent Illnesses or Medical Procedures"
                  className="input input-bordered"
                  {...register("recentIllnesses", {
                    required: "Please Fill up this feild",
                  })}
                />
                {errors.recentIllnesses && (
                  <p className="text-error pt-1">
                    {errors.recentIllnesses.message}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  {...register("dateOfBirth", {
                    required: "Please Fill up this feild",
                  })}
                  className="input input-bordered"
                />
                {errors.dateOfBirth && (
                  <p className="text-error pt-1">
                    {errors.dateOfBirth.message}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone number</span>
                </label>
                <input
                  type="number"
                  placeholder="Phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                    validate: positiveNumberValidation,
                  })}
                  className="input input-bordered"
                />
                {errors.phone && (
                  <p className="text-error pt-1">{errors.phone.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Present Adress</span>
                </label>
                <input
                  type="text"
                  placeholder="Present Address"
                  {...register("paddress", {
                    required: "Please Fill up this feild",
                  })}
                  className="input input-bordered"
                />
                {errors.adress && (
                  <p className="text-error pt-1">{errors.adress.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Parmanent Adress</span>
                </label>
                <input
                  type="text"
                  placeholder="Parmanent Address"
                  {...register("paraddress", {
                    required: "Please Fill up this feild",
                  })}
                  className="input input-bordered"
                />
                {errors.adress && (
                  <p className="text-error pt-1">{errors.adress.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                  {...register("image", {
                    required: "Please Fill up this feild",
                  })}
                />
              </div>

              <div className="md:flex justify-between gap-3">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Blood Type </span>
                  </label>
                  <select
                    className="select select-bordered w-full "
                    {...register("blood", {
                      required: "Please select a blood type",
                    })}
                  >
                    <option selected value="">
                      Select blood Type
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="N/A">Don't know</option>
                  </select>

                  {errors.blood && (
                    <p className="text-error pt-1">{errors.blood.message}</p>
                  )}
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Select Gender</span>
                  </label>
                  <select
                    className="select select-bordered w-full  "
                    {...register("gender", {
                      required: "Please select a gender",
                    })}
                  >
                    <option selected value="">
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="text-error pt-1">{errors.gender.message}</p>
                  )}
                </div>
              </div>

              <div className="form-control">
                <h4>Do You have HiV?</h4>
                <label className="label cursor-pointer">
                  <span className="label-text">NO</span>

                  <Controller
                    name="hivStatus"
                    control={control}
                    rules={{ required: "Please select an option" }}
                    defaultValue={false}
                    render={({ field }) => (
                      <input
                        type="radio"
                        {...field}
                        className="radio checked:bg-red-500"
                        value={false}
                      />
                    )}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">YES</span>
                  <Controller
                    name="hivStatus"
                    control={control}
                    defaultValue={false}
                    rules={{ required: "Please select an option" }}
                    render={({ field }) => (
                      <input
                        type="radio"
                        {...field}
                        className="radio checked:bg-blue-500"
                        value={true}
                      />
                    )}
                  />{" "}
                </label>
                {errors.hivStatus && (
                  <p className="text-error">{errors.hivStatus.message}</p>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-secondary">
                  {loading && loading ? (
                    <ColorRing
                      visible={true}
                      height="40"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#F4F4F3",
                        "#FFF",
                        "#EB4249",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyDonor;
