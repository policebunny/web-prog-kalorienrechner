module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const celsius = (req.query.celsius || (req.body && req.body.celsius));
    const responseMessage = celsius
    ?  "celsius: " + celsius+ "  fahrenheit:" + ((celsius * 9/5) + 32)
    : "reee"

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
