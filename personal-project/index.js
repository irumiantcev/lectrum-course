const Transaction = require("./transaction");
const scenario = require("./scenario");

const log = data => {
    console.log(data);
};

const transaction = new Transaction();

(async () => {
    try {
        await transaction.dispatch(scenario);
        const { store, logs, status } = transaction;
        log(store);
        log(logs);
        log(status);
    } catch (error) {
        // Send email about broken transaction
    }
})();