
// import { useForm } from 'react-hook-form';

// export default function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
//       <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

//       <input type="submit" />
//     </form>
//   );
// }
// <div className="card flex-shrink-0 w-full max-w-sm md:max-w-full  shadow-2xl bg-base-100">
// <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
  
//   <div className="form-control">
//     <label className="label">
//       <span className="label-text">Parmanent Adress</span>
//     </label>
//     <input
//       type="text"
//       placeholder="Parmanent Address"
//       {...register("paraddress", {
//         required: "Please Fill up this feild",
//       })}
//       className="input input-bordered"
//     />
//     {errors.adress && (
//       <p className="text-error pt-1">{errors.adress.message}</p>
//     )}
//   </div>
//   <div className="form-control">
//     <label className="label">
//       <span className="label-text">Image</span>
//     </label>
//     <input
//       type="file"
//       className="file-input file-input-bordered w-full"
//       {...register("image", {
//         required: "Please Fill up this feild",
//       })}
//     />
//   </div>

//   <div className="md:flex justify-between gap-3">
//     <div className="form-control w-full ">
//       <label className="label">
//         <span className="label-text">Blood Type </span>
//       </label>
//       <select
//         className="select select-bordered w-full "
//         {...register("blood", {
//           required: "Please select a blood type",
//         })}
//       >
//         <option selected value="">
//           Select blood Type
//         </option>
//         <option value="A+">A+</option>
//         <option value="A-">A-</option>
//         <option value="B+">B+</option>
//         <option value="B-">B-</option>
//         <option value="AB+">AB+</option>
//         <option value="AB-">AB-</option>
//         <option value="O+">O+</option>
//         <option value="O-">O-</option>
//         <option value="N/A">Don't know</option>
//       </select>

//       {errors.blood && (
//         <p className="text-error pt-1">{errors.blood.message}</p>
//       )}
//     </div>

//     <div className="form-control w-full">
//       <label className="label">
//         <span className="label-text">Select Gender</span>
//       </label>
//       <select
//         className="select select-bordered w-full  "
//         {...register("gender", {
//           required: "Please select a gender",
//         })}
//       >
//         <option selected value="">
//           Select Gender
//         </option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//         <option value="other">Other</option>
//       </select>
//       {errors.gender && (
//         <p className="text-error pt-1">{errors.gender.message}</p>
//       )}
//     </div>
//   </div>

//   <div className="form-control">
//     <h4>Do You have HiV?</h4>
//     <label className="label cursor-pointer">
//       <span className="label-text">NO</span>

//       <Controller
//         name="hivStatus"
//         control={control}
//         rules={{ required: "Please select an option" }}
//         defaultValue={false}
//         render={({ field }) => (
//           <input
//             type="radio"
//             {...field}
//             className="radio checked:bg-red-500"
//             value={false}
//           />
//         )}
//       />
//     </label>
//   </div>
//   <div className="form-control">
//     <label className="label cursor-pointer">
//       <span className="label-text">YES</span>
//       <Controller
//         name="hivStatus"
//         control={control}
//         defaultValue={false}
//         rules={{ required: "Please select an option" }}
//         render={({ field }) => (
//           <input
//             type="radio"
//             {...field}
//             className="radio checked:bg-blue-500"
//             value={true}
//           />
//         )}
//       />{" "}
//     </label>
//     {errors.hivStatus && (
//       <p className="text-error">{errors.hivStatus.message}</p>
//     )}
//   </div>

//   <div className="form-control mt-6">
//     <button className="btn btn-secondary">
//       {loading && loading ? (
//         <ColorRing
//           visible={true}
//           height="40"
//           width="80"
//           ariaLabel="blocks-loading"
//           wrapperStyle={{}}
//           wrapperClass="blocks-wrapper"
//           colors={[
//             "#F4F4F3",
//             "#FFF",
//             "#EB4249",
//             "#abbd81",
//             "#849b87",
//           ]}
//         />
//       ) : (
//         "Submit"
//       )}
//     </button>
//   </div>
// </form>
// </div>