const scenario = [{
        index: 1,
        meta: {
            title: 'Collect backup information.',
            description: 'Collects pieces of data that required for restore scenario ',
        },
        async call(store, logs) {
            // Логика выполнения шага

            if (store.get(store.size))
                return this.index ** store.get(store.size);

            return this.index;
        },
        async restore(store, logs) {
            // Логика отката шага

            return 'boo';
        },
    },
    {
        index: 2,
        meta: {
            title: 'Withdraw funds from source account.',
            description: 'Takes off funds from source account and freezes it until entire scenario ends successfully or unsuccessfully.',
        },
        async call(store, logs) {
            // Логика выполнения шага

            if (store.get(store.size))
                return this.index ** store.get(store.size);

            return this.index;
        },
        async restore(store, logs) {
            // Логика отката шага

            return 'boo2';
        },
    },

    {
        index: '3',
        meta: {
            title: 'Lorem Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptatem perspiciatis!',
        },
        async call(store, logs) {
            // Логика выполнения шага

            if (store.get(store.size))
                return this.index ** store.get(store.size);

            return this.index;
        },
        async restore(store, logs) {
            // Логика отката шага

            //throw new Error('boo');
            return 'boo3';
        },
    },
];

module.exports = scenario;