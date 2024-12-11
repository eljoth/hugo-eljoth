module.exports = {
    content: ["./layouts/**/*.html", "./content/**/*.md"],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
        ],
    },
    safelist: [
        {
            pattern: /^(bg|text|border|to|via|from|ring|fill|caret|stroke|divide|accent|shadow|outline|decoration|placeholder|ring-offset)-(primary|secondary|accent|neutral|base-100|base-200|base-300|info|success|warning|error)(-content)?$/,
        }
    ]
}
