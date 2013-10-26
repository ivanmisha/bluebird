module.exports = function( Promise, Promise$_All ) {

    var SettledPromiseArray = require( "./settled_promise_array.js" );

    function Promise$_Settle( promises, useBound, caller ) {
        return Promise$_All(
            promises,
            SettledPromiseArray,
            caller,
            useBound === USE_BOUND ? promises._boundTo : void 0
        ).promise();
    }

    Promise.settle = function Promise$Settle( promises ) {
        return Promise$_Settle( promises, DONT_USE_BOUND, Promise.settle );
    };

    Promise.prototype.settle = function Promise$settle() {
        return Promise$_Settle( this, USE_BOUND, this.settle );
    };
};
