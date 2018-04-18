module.exports = {
    fetchAll(req, res) {
        console.log('this will fetch all the patterns');
    },

    fetchPattern(req, res) {
        console.log('this will fetch an individual pattern ' + req.params.pattern_id);
    }
};