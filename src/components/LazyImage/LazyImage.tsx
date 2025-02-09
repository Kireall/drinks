import { Image as AntdImage, Skeleton } from 'antd';
import React, { RefObject, useEffect, useRef, useState } from 'react';

interface LazyImageProps {
    src: string;
    width?: string | number;
    height?: string | number;
    alt?: string;
}

export const LazyImage: React.FC<LazyImageProps> = (props) => {
    const { src, width, height, alt } = props;
    const [imageLoaded, setImageLoaded] = useState(false);
    const imgRef: RefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {
        const imgWrapper = imgRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img: HTMLImageElement = new Image();
                    img.src = src;
                    img.onload = () => setImageLoaded(true);

                    if (imgWrapper) {
                        observer.unobserve(imgWrapper);
                    }
                }
            });
        });

        if (imgWrapper) {
            observer.observe(imgWrapper);
        }

        return () => {
            if (imgWrapper) {
                observer.unobserve(imgWrapper);
            }
        };
    }, [src]);

    return (
        <div ref={imgRef} style={{ width, height }}>
            {!imageLoaded ? (
                <Skeleton.Image active style={{ width, height }} />
            ) : (
                <AntdImage width={width} height={height} src={src} alt={alt} />
            )}
        </div>
    );
};
