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
        slidesToSlide: 2,
    },
};


export const responsiveInfo = {
    desktop: {
        breakpoint: { max: 3000, min: 1281 },
        items: 9,
        slidesToSlide: 6,
        partialVisibilityGutter: 12,
    },
    tablet: {
        breakpoint: { max: 1280, min: 769 },
        items: 7,
        slidesToSlide: 5,
        partialVisibilityGutter: 12,
    },
    mobileLarge: {
        breakpoint: { max: 768, min: 481 },
        items: 5,
        slidesToSlide: 4,
        partialVisibilityGutter: 12,
    },
    mobileSmall: {
        breakpoint: { max: 480, min: 0 },
        items: 3,
        slidesToSlide: 3,
        partialVisibilityGutter: 12,
    },
};


export const responsive = (isLarge?: boolean) => {
    return {
        desktop: { breakpoint: { max: 3000, min: 1321 }, items: isLarge ? 5 : 8, slidesToSlide: isLarge ? 5 : 8 ,partialVisibilityGutter:12,},
        tablet: { breakpoint: { max: 1320, min: 769 }, items: isLarge ? 5 : 6, slidesToSlide: isLarge ? 4 : 5 ,partialVisibilityGutter: 12,},
        mobileLarge: { breakpoint: { max: 768, min: 481 }, items: isLarge ? 3 : 4, slidesToSlide: 8 ,partialVisibilityGutter: 12,},
        mobileSmall: { breakpoint: { max: 480, min: 0 }, items: 3, slidesToSlide: 3,partialVisibilityGutter: 12, },
    }
}