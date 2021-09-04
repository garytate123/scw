module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md", "js", "json"],

        dir: {
            input: ".",
            output: "_site",
            include: "_includes"

        }
    };
};