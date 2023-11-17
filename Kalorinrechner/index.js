module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let correct = true;
    const weight = (req.query.weight || (req.body && req.body.weight));
    const height = (req.query.height || (req.body && req.body.height));
    const age = (req.query.age || (req.body && req.body.age));
    const gender = (req.query.gender || (req.body && req.body.gender));
    let responseMessage = null;
    let calloris = 0;
     
    if(!weight || !height || !age || !gender) {
        correct = false;
        responseMessage = "missing parameters, expected <weight>, <height> <age> and <gender>";
    }else{
        if(isNaN(parseFloat(weight))){
            correct = false;
            responseMessage += "bad weight, expected float kg \n";
        }
        if(isNaN(parseFloat(height))){
            correct = false;
            responseMessage += "bad height, expected float cm \n";
        }
        if(isNaN(parseFloat(age))){
            correct = false;
            responseMessage += "bad age, expected float years \n";
        }


    }
    
    if (correct){
        if(gender == "male"){
           calloris= 66.5+13.7*weight+ 5*height -6.8*age;
           responseMessage = "calories: " +calloris;
        }else if(gender == "female"){
           calloris=  665 +9,6*weight +1.8*height-4.7*age;
           responseMessage = "calories: " +calloris;
        }else{
            correct = false;
            responseMessage += "incorrect gender: " +gender + "expected <male> or <female>";
        }

     }

      
    context.res = {
        // status: 200, /* Defaults to 200 */
        status: correct? 200: 400,
        body: responseMessage
    };
}