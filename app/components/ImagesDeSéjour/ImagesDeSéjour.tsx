import React from "react";
import Navbar from "../navbar/Navbar";
import Image from "next/image";

const ImagesDeSéjour = () => {
  const images = [
    {
      src: "/images/sejour/image_1.jpg",
      alt: "Image 1",
    },
    {
      src: "/images/sejour/image_2.jpg",
      alt: "Image 2",
    },
    {
      src: "/images/sejour/image_3.jpg",
      alt: "Image 3",
    },
    {
      src: "/images/sejour/image_4.jpg",
      alt: "Image 4",
    },
    {
      src: "/images/sejour/image_5.jpg",
      alt: "Image 5",
    },
    {
      src: "/images/sejour/image_6.jpg",
      alt: "Image 6",
    },
    {
      src: "/images/sejour/image_7.jpg",
      alt: "Image 7",
    },
    {
      src: "/images/sejour/image_8.jpg",
      alt: "Image 8",
    },
    {
      src: "/images/sejour/image_9.jpg",
      alt: "Image 9",
    },
    {
      src: "/images/sejour/image_10.jpg",
      alt: "Image 10",
    },
    {
      src: "/images/sejour/image_11.jpg",
      alt: "Image 11",
    },
    {
      src: "/images/sejour/image_12.jpg",
      alt: "Image 12",
    },
    {
      src: "/images/sejour/image_13.jpg",
      alt: "Image 13",
    },
    {
      src: "/images/sejour/image_14.jpg",
      alt: "Image 14",
    },
  ];
  return (
    <div>
      <Navbar text="Images du séjour" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-2">
        {images.map((image, index) => (
          <div key={index} className="relative w-full aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-[20px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesDeSéjour;
