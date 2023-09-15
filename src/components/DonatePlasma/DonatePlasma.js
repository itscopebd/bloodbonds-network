import Image from "next/image";
import donate from '../../app/asset/DonatePlasma.jpg'
const DonatePlasma = () => {
    return (
        <div>
            <section className='mt-20 container mx-auto justify-items-center p-20'>
                <h1 className=' text-red-500 text-center font-bold text-5xl'>Why Donate Plasma?</h1>
                <div className='mt-10  grid lg:grid-cols-2  gap-16  '>
                    <div>
                        <Image className="rounded" src={donate} alt="a bag of plasma"></Image>
                    </div>
                    <div className="my-auto">
                        <ul>
                            <div className="flex gap-4">
                            <span>&#x2022;</span> <li>Plasma, a vital port of blood, is a life line for many patients.</li>

                            </div>
                            <div className="flex gap-4">
                            <span>&#x2022;</span> <li>It's used to treat clotting disorders, immune deficiencies, and more.</li>

                            </div>
                            <div className="flex gap-4">
                            <span>&#x2022;</span> <li>Your plasma donation can mean the difference between life and death.</li>

                            </div>
                            <div className="flex gap-4">
                            <span>&#x2022;</span> <li>Hospitals rely on plasma to treat a wide range of medical conditions, from trauma patient to individuals battling chronic diseases.</li>

                            </div>
                            <div className="flex gap-4">
                            <span>&#x2022;</span> <li>Plasma donation are incredibly versatile. They can help patients with clotting disorders, such as hemophilia, by providing essential clotting factors.</li>

                            </div>
                           
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonatePlasma;