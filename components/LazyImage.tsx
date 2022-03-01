/* eslint-disable @next/next/no-img-element */
import { Box, Skeleton } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useEffect, useState, Fragment } from "react";
import { useInView } from "react-intersection-observer";

interface LazyImageProp {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onClick?: (e: any) => void;
  width: any;
  height: any;

  skeletonHeight?: number | string;
  skeletonWidth?: number | string;
}
export default function LazyImage({
  src,
  alt,
  width,
  height,
  onClick,
  skeletonHeight,
  skeletonWidth,
}: LazyImageProp) {
  // const { ref, inView, entry } = useInView({});

  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   if (!inView) return;
  //   const img = new Image();
  //   img.src = src;
  //   img.onload = () => {
  //     setLoaded(true);
  //   };
  // }, [src, inView]);

  console.log(width);
  console.log(height);

  return (
    <Box
      sx={{
        width: width,
        height: height,
        position: "relative",
      }}
      onClick={onClick}
    >
      <Image src={src} alt={alt} layout="fill" />
    </Box>
  );

  // return (
  //   <div
  //     ref={ref}
  //     style={{
  //       width,
  //       height,
  //     }}
  //   >
  //     {loaded ? (
  //       <Image
  //         src={src}
  //         alt={alt}
  //         width={width}
  //         height={height}
  //         onClick={onClick}
  //       />
  //     ) : (
  //       <Skeleton
  //         sx={{
  //           width: skeletonWidth ?? width,
  //           height: skeletonHeight ?? height,
  //         }}
  //         variant="rectangular"
  //       />
  //     )}
  //   </div>
  // );
}
