export const LoginUser = (user,userLog) => {
    async function userLogin() {
        await fetch("https://reqres.in/api/register", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            if(res.token){
                console.log("yss")
                userLog(res.token);
            }else{
                console.log("no")
            }
        })
    }
    userLogin();
}
