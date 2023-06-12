function getHtml(){
    return new Promise(function (resolve, reject) {
        const url2 = 'https://raw.githubusercontent.com/ecrin4102/ecrin4102.github.io/main/template.html';              const Http = new XMLHttpRequest();
        Http.open("GET", url2);
        Http.onloadend = (e2) => {
            result = Http.responseText
            let parser = new DOMParser();
            const doc = parser.parseFromString(result, 'text/html');
            document.body.insertAdjacentHTML("afterbegin", doc.body.innerHTML);
            document.body.insertAdjacentHTML("beforebegin", doc.getElementsByTagName("head")[0].innerHTML)
            resolve(Http.responseText);
        }

        Http.send();
    });
}

function getPost(title){
    return new Promise(function (resolve, reject) {
        const url2 = 'https://raw.githubusercontent.com/ecrin4102/ecrin4102.github.io/main/blog/' + title;
        const Http = new XMLHttpRequest();
        Http.open("GET", url2);
    
        Http.onloadend = (e2) => {
            resolve(Http.responseText);
        }

        Http.onerror = (e2) => {
            reject("Erreur de chargement");
        }

        Http.abort = (e2) => {
            reject("Abandon");
        }

        Http.send();
    });
}