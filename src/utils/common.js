import MAP_ALERT from '../img/alert-map.jpg';
import FORECAST from '../img/forecast.jpg';
import REACT_PIZZA from '../img/react-pizza.jpg';
import STUFF from '../img/stuff.jpg';
import PAN_MYKOLA from '../img/pan-mykola.jpg';
import POINT from '../img/point.jpg';
import BETTER_REALTY from '../img/better-realty.jpg';
import LEND from '../img/lend.jpg';
import MIR_DETSTVA from '../img/mir-detstva.jpg';
import CONCORDIA from '../img/concordia.jpg';

export const dataBase = [
    {
        id: 10,
        img: CONCORDIA,
        name: 'Concordia',
        description: 'A rather complex and detailed landing page similar to WordPress.',
        steck: 'HTML, JavaScript, CSS, PHP, WordPress',
        preview: 'https://concordia-dim.com/',
        code: 'https://github.com/merlinovvv/concordia'
    },
    {
        id: 9,
        img: MIR_DETSTVA,
        name: 'Mir Detstva',
        description: 'My first project using WordPress. Here I studied the most important things that are present in this tool.',
        steck: 'HTML, JavaScript, CSS, PHP, WordPress',
        preview: 'https://merlinov.pp.ua/childhood/',
        code: 'https://github.com/merlinovvv/childhood'
    },
    {
        id: 5,
        img: PAN_MYKOLA,
        name: 'Pan Mykola',
        description: 'My first order. Corporate website with animations and sending an application by mail. Ordinary layout.',
        steck: 'HTML, JavaScript, CSS, PHP',
        preview: 'https://panmykola.lviv.ua/',
        code: 'https://github.com/merlinovvv/pan-mykola'
    },
    {
        id: 1,
        img: MAP_ALERT,
        name: 'Map of air alarms of Ukraine',
        description: 'Roughly speaking, my first React project. Displays air alert for each area of the country.',
        steck: 'HTML, JavaScript, Module CSS, React, API',
        preview: 'https://soi4x3-3000.csb.app/',
        code: 'https://github.com/merlinovvv/alert-map'
    },
    {
        id: 2,
        img: FORECAST,
        name: 'Forecast',
        description: 'Weather app. Absolutely for every locality. Cool, yeah?',
        steck: 'HTML, JavaScript, Module CSS, React, API',
        preview: 'https://6xjpfh-3000.csb.app/',
        code: 'https://github.com/merlinovvv/forecast-app'
    },
    {
        id: 3,
        img: REACT_PIZZA,
        name: 'Pizza shop',
        description: 'Store sorted by category, price, alphabetically, rating. There is also a basket in which all the functionality works like deleting, adding, etc.',
        steck: 'HTML, JavaScript, Module CSS, React, API, Redux',
        preview: 'https://71rcy7-3000.csb.app/',
        code: 'https://github.com/merlinovvv/react-pizza'
    },
    {
        id: 4,
        img: STUFF,
        name: 'STUFF',
        description: 'Larger version of the store. There is registration, login, account editing. Many more categories and products.',
        steck: 'HTML, JavaScript, Module CSS, React, API, Redux',
        preview: 'https://master--jovial-axolotl-1d0f89.netlify.app/',
        code: 'https://github.com/merlinovvv/stuff-shop'
    },

    {
        id: 6,
        img: POINT,
        name: 'Point',
        description: 'Just a beautiful landing page with animations',
        steck: 'HTML, JavaScript, CSS',
        preview: 'https://merlinovvv.github.io/Point/',
        code: 'https://github.com/merlinovvv/Point'
    },
    {
        id: 7,
        img: BETTER_REALTY,
        name: 'Better Realty',
        description: 'My first multipage website. Ordinary layout.',
        steck: 'HTML, JavaScript, CSS',
        preview: 'https://merlinovvv.github.io/BetterRealty/',
        code: 'https://github.com/merlinovvv/BetterRealty'
    },
    {
        id: 8,
        img: LEND,
        name: 'Permgiprovodhoz',
        description: 'Landing. Lots of different parts details',
        steck: 'HTML, JavaScript, CSS',
        preview: 'https://merlinovvv.github.io/Permgiprovodhoz/',
        code: 'https://github.com/merlinovvv/Permgiprovodhoz'
    }
]

export const isNight = () => {
    const hour = new Date().getHours();
    var night;
    if (hour >= 19 || hour < 6) {
        night = true
    } else {
        night = false
    }
    return night;
}

