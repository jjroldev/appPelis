export const responsiveCredits = {
    desktop: {
        breakpoint: { max: 3000, min: 1281 },
        items: 7,
        slidesToSlide: 6,
    },
    tablet: {
        breakpoint: { max: 1280, min: 769 },
        items: 6,
        slidesToSlide: 5,
    },
    mobileLarge: {
        breakpoint: { max: 768, min: 481 },
        items: 4,
        slidesToSlide: 3,
    },
    mobileSmall: {
        breakpoint: { max: 480, min: 0 },
        items: 2,
        slidesToSlide: 1,
    },
};


export const responsiveInfo = {
    desktop: {
        breakpoint: { max: 3000, min: 1281 },
        items: 8,
        slidesToSlide: 6,
    },
    tablet: {
        breakpoint: { max: 1280, min: 769 },
        items: 6,
        slidesToSlide: 5,
    },
    mobileLarge: {
        breakpoint: { max: 768, min: 481 },
        items: 4,
        slidesToSlide: 3,
    },
    mobileSmall: {
        breakpoint: { max: 480, min: 0 },
        items: 2,
        slidesToSlide: 1,
    },
};


export const responsive = (isLarge?: boolean) => {
    return {
        desktop: { breakpoint: { max: 3000, min: 1281 }, items: isLarge ? 5 : 8, slidesToSlide: isLarge ? 4 : 7 },
        tablet: { breakpoint: { max: 1280, min: 769 }, items: isLarge ? 4 : 6, slidesToSlide: isLarge ? 3 : 5 },
        mobileLarge: { breakpoint: { max: 768, min: 481 }, items: isLarge ? 3 : 4, slidesToSlide: isLarge ? 2 : 3 },
        mobileSmall: { breakpoint: { max: 480, min: 0 }, items: 2, slidesToSlide: 1 },
    }
}