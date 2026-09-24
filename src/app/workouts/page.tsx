import Image from 'next/image';
import React from 'react';
import Logo from "@/assets/banner.png"

const getGymData = async () => {

    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json();
    return data;

}

const WorkOutsPage = async () => {

    const gymData = await getGymData();

    return (

        
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <Image
                    src={Logo}
                    width={200}
                    height={200}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default WorkOutsPage;