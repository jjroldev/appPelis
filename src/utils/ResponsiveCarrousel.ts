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
        tablet: { breakpoint: { max: 1320, min: 769 }, items: isLarge ? 4 : 6, slidesToSlide: isLarge ? 4 : 6 ,partialVisibilityGutter: 12,},
        mobileLarge: { breakpoint: { max: 768, min: 600 }, items: isLarge ? 3 : 5, slidesToSlide: isLarge ? 3 : 5 ,partialVisibilityGutter: 12,},
        mobileSmall: { breakpoint: { max: 600, min: 0 }, items: 3, slidesToSlide: 3,partialVisibilityGutter: 12, },
    }
}


export const responsiveActor = () => {
    return {
        desktop: { breakpoint: { max: 3000, min: 1321 }, items: 7, slidesToSlide: 7 ,partialVisibilityGutter:12,},
        tablet: { breakpoint: { max: 1320, min: 1169 }, items:  6, slidesToSlide:  6 ,partialVisibilityGutter: 12,},
        mobileLarge: { breakpoint: { max: 1168, min: 890 }, items: 5, slidesToSlide:5 ,partialVisibilityGutter: 12,},
        mobileSmall: { breakpoint: { max: 889, min: 720 }, items: 4, slidesToSlide: 4,partialVisibilityGutter: 12, },
        mobileExtraSmall: {
            breakpoint: { max: 719, min: 615 },
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 12,
        },
        extraTiny: { breakpoint: { max: 614, min: 0 }, items: 2, slidesToSlide: 2, partialVisibilityGutter: 12 },
    }
}