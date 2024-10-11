import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const target = 'media/'
    const idx = url.indexOf(target) + target.length;

    return url.slice(0,idx) + "crop/600/400/" + url.slice(idx);
}

export default getCroppedImageUrl;