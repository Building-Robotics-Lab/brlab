import { useEffect } from 'react';

const usePreloadImages = (imageSrcs) => {
    useEffect(() => {
        imageSrcs.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [imageSrcs]);
};

export default usePreloadImages;