let from = document.getElementById("from");
    let aa="en";
    let to = document.getElementById("to");
    let textToTran = document.getElementById("translTxt1");
    let textAftrTran = document.getElementById("translTxt2");


    async function selectFrom() {
        let res = await fetch("https://libretranslate.de/languages");
        let data = await res.json();

        data.forEach(el => {
            let options = document.createElement("option");
            options.textContent = el.name;
            options.setAttribute("value", el.code);
            from.append(options);
        });
        console.log(data);
    }
    selectFrom();


    async function selectTo() {
        let res = await fetch("https://libretranslate.de/languages");
        let data = await res.json();

        data.forEach(el => {
            let options = document.createElement("option");
            options.textContent = el.name;
            options.setAttribute("value", el.code);
            to.append(options);
        });
    }
    selectTo();

    async function translatedText(source, target) {
        if (textToTran.innerText === "") {
            alert("no input please enter input");
        }
        else {
            let res = await fetch("https://libretranslate.de/translate", {
                method: "POST",
                body: JSON.stringify({
                    q: textToTran.innerText,
                    source,
                    target
                }),
                headers: { "Content-Type": "application/json" },
            });
            let data2 = await res.json();
            textAftrTran.style.backgroundColor="#faf9f9";
            textAftrTran.innerText = data2.translatedText;
        }
    }

    function translSelected() {
        translatedText(from.value, to.value);
    }


    function speakfun() {
        var readVoice = new webkitSpeechRecognition()
        readVoice.lang = "en-GB";
        readVoice.onresult = function (event) {
            textToTran.innerText = event.results[0][0].transcript;
        }
        readVoice.start();
    }

    function checkCatog(el) {
        console.log(el);
        if (el == 1 || el == 2 || el == 3 || el == 4) {


            for (var i = 1; i < 5; i++) {
                document.getElementById(`cat${i}`).style.border = "none";
                document.getElementById(`cat${i}`).style.color="black";
            }
            document.getElementById(`cat${el}`).style.borderBottom = "2px solid blue";
            document.getElementById(`cat${el}`).style.color="#1967d2";
        }else{
            for (var i = 5; i < 8; i++) {
                document.getElementById(`cat${i}`).style.border = "none";
                document.getElementById(`cat${i}`).style.color="black";
            }
            document.getElementById(`cat${el}`).style.borderBottom = "2px solid blue";
            document.getElementById(`cat${el}`).style.color="#1967d2";
        }
    }
