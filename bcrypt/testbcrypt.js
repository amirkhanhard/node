
import bcrypt from "bcrypt"

const runNow = async () => {
    let password = "password123";

    console.log("password is "+ password);
    
    const salt = await bcrypt.genSalt(10);

    console.log("salt is "+ salt);

    const encryptedPass = await bcrypt.hash(password, salt);

    console.log("encrypted password is "+ encryptedPass);
    
    const resp1 = await bcrypt.compare("password124", encryptedPass);

    if(resp1) {
        console.log("password matched");
    } else {
        console.log("password didn't matched");
    }

    const resp2 = await bcrypt.compare("password123", encryptedPass);

    if(resp2) {
        console.log("password matched");
    } else {
        console.log("password didn't matched");
    }
}

runNow();