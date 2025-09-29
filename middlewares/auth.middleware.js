
export function defaultData (req, res, next) {
    //add your logic based on request
    console.log("middleware for defaultData");
    next();
}

export function logData (req, res, next) {
    //add your logic based on request
    console.log("middleware for logData");
    next();
}

const protecRoutes =  (req, res, next)  => {
    //add your logic based on request
    console.log("middleware for protecRoutes");
    next();
}

export default protecRoutes;