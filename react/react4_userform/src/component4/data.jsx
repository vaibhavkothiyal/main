export const HandleData = (usrdata,updateData) => {
    console.log("for adding data ",usrdata);
    const url = "http://localhost:8000/users"
    async function postD() {
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(usrdata),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        console.log("posted")
        updateData();
    }
    postD();
}




