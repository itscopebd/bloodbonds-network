"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { TiDelete } from 'react-icons/ti';
import Swal from 'sweetalert2';

const DeletButton = ({id}) => {
    const router = useRouter();
    let handleDElete= async ()=>{
        try {
         const res= await fetch(`/api/blog?id=${id}`,{
            method: "DELETE"
          })
if (res.ok) {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Deleted Successfully ',
        showConfirmButton: false,
        timer: 1500
      })
    router.refresh()
}

        } catch (error) {
          console.log(error);
        }
      }
    return (
        <div>
            <button onClick={handleDElete} className='btn  btn-xs'>
                <TiDelete/>
            </button>
        </div>
    );
};

export default DeletButton;