class Transaction {
    constructor() {
        this.store = new Map();
        this.logs = [];
        this.status = null;
    }

    validate = (data) => {
        if (!data.index || typeof data.index !== 'number') {
            throw new Error(`Index must be a number`);
        }

        if (!data.meta || typeof data.meta !== 'object') {
            throw new Error(`Meta must be an object`);
        }

        if (!data.meta.title) {
            throw new Error(`Meta must have a title`);
        }

        if (!data.meta.description) {
            throw new Error(`Meta must have a description`);
        }

        if (!data.call || typeof data.call !== 'function') {
            throw new Error(`Data must have a call function`);
        }

        if (!data.restore || typeof data.restore !== 'function') {
            throw new Error(`Data must have a restore function`);
        }
    }


    async dispatch(scenario) {
        if (!Array.isArray(scenario)) {
            throw new Error(`Scenario must be an array`);
        }

        try {
            for (const step of scenario) {
                this.validate(step);

                const call = await step.call(this.store, this.logs);

                this.store.set(step.index, call);

                const { index, meta } = step;
                const log = { index, meta, stepResult: call, error: null };
                this.logs.push(log);
            }

            this.status = "Успешно выполнена";
        } catch (error) {
            const errorObject = {
                name: error.name,
                message: error.message,
                stack: error.stack
            };

            const reverseScenario = scenario;
            reverseScenario.length = this.store.size + 1;
            reverseScenario.reverse();

            const { index, meta } = reverseScenario[0];

            const log = { index, meta, NextStep: null, error: errorObject };
            this.logs.push(log);

            this.rollback(reverseScenario);
        }

    }

    async rollback(scenario) {
        try {
            this.status = "Успешно восстановлена";

            for (const step of scenario) {
                const call = await step.restore(this.store, this.logs);
            }
        } catch (er) {
            this.status = "Неуспешно восстановлена";
        }
    }
}

module.exports = Transaction;