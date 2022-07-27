module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.html'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                'strong-cyan-color': '#00D4BF',
                'pure-cyan-color': '#00ffc2',
                'blue-color': '#11a2cf',
                'dark-blue-color': '#0886AF',
                'gray-color': '#555555'
            },
            screens: {
                "xxl": {'max':'1399px'},
                "xl": {'max':'1199px'},
                "lg": {'max':'991px'},
                "md": {'max':'767px'},
                "sm": {'max':'575px'},
                "xs": {'max':'319px'}
            },
            container: {
                padding: "20px",
                center: true
            }
            // fontFamily: {
            //   futuraBookC: ['FuturaBookC'],
            //   FuturaDemiC: ['FuturaDemiC']
            // },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
