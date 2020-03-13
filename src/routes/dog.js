import Header from './../components/Header.vue';

const Dog = resolve => {
    require.ensure(['./../components/dog/Dog.vue'], () => {
        resolve(require('./../components/dog/Dog.vue'));
    }, 'dog');
};

const DogStart = resolve => {
    require.ensure(['./../components/dog/DogStart.vue'], () => {
        resolve(require('./../components/dog/DogStart.vue'));
    }, 'dog');
};

const routes = [
    {
        path: '/dog', components: {
            default: Dog,
            'header-bottom': Header
        }, children: [
            { path: '', component: DogStart },
        ]
    },
]

export default routes;