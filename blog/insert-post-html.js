function getHtml(){
    postHtml = document.getElementById("post");
    document.body.removeChild(postHtml);
    
    const url2 = 'https://raw.githubusercontent.com/ecrin4102/ecrin4102.github.io/main/blog/post-template.html';              const Http = new XMLHttpRequest();
    Http.open("GET", url2);
    Http.onloadend = (e2) => {
        result = Http.responseText;
        let parser = new DOMParser();
        const doc = parser.parseFromString(result, 'text/html');
        doc.getElementById("sub-container").insertAdjacentHTML("afterbegin", postHtml.outerHTML);
        document.body.insertAdjacentHTML("afterbegin", doc.body.innerHTML);
        document.body.insertAdjacentHTML("beforebegin", doc.getElementsByTagName("head")[0].innerHTML)
    }

    Http.send();
}

getHtml();