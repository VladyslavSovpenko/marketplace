'use client';
import {useState} from "react";
import Image from 'next/image';
import {cn} from "../../lib/utils";

const ProductImages = ({images}: { images: string[] }) => {
    const [currentImage, setCurrentImage] = useState(0);


    return (
        <div className={"space-y-4"}>
            <Image
                src={images[currentImage]}
                alt={"Product Image"}
                layout={"responsive"}
                width={1000}
                height={1000}
                className={"min-h-[300px] object-cover object-center"}/>

            <div className="flex">
                {images.map((image, index) => (
                    <div key={index}
                         className={cn("border mr-2 cursor-pointer hover:border-orange-600",  currentImage === index && "border-orange-500")}
                         onClick={() => setCurrentImage(index)}
                    >
                        <Image
                            src={image}
                            alt={"Product Image"}
                            layout={"fixed"}
                            width={100}
                            height={100}
                            className={"cursor-pointer"}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ProductImages;