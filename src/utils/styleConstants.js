
export const colors = {
    background: '#F2F2F2',
    neutralBorder: '#979797',
    accent: '#005566',
    primary: '#ffc015',
    white: '#ffffff',
    black: '#000000',
};

export const breakpoints = {
    50: '@media (min-width: 400px)',
    100: '@media (min-width: 800px)',
};

// TODO probably can do this in actual typography.js or specific components
export const typography = {
    header_1: `
        font-size: 20px;
        line-height: 24px;

        ${breakpoints[50]} {
            font-size: 30px;
            line-height: 36px;
        }

        ${breakpoints[100]} {
            font-size: 36px;
            line-height: 48px;
        }
    `,
    header_2: `
        font-size: 20px;
        line-height: 24px;
    `,
};
