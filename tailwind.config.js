module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: [
                "Open Sans",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Oxygen",
                "Ubuntu",
                "Cantarell",
                "Fira Sans",
                "Droid Sans",
                "Arial",
            ],
        },
        extend: {
            fontSize: {
                22: "1.375rem",
                40: "2.5rem",
            },
            fontWeight: {
                normal: "400",
                bold: "600",
            },
            colors: {
                blue: {
                    600: "#005FC0",
                    700: "#002A95",
                    800: "#001C71",
                    900: "#001657",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
