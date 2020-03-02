async function listInsults(){
    let listLinks = document.querySelectorAll(".Insult_Number");

    for (let i = 1; i < listLinks.length; i++){
    listLinks[i-1].onclick = async () => {
        const request = await fetch('http://localhost:8040/insults/' + i, 
        {
            method: 'GET' 
        })

        const data = await request.json()
        let insultsText = document.querySelector(".Container__Right")
        insultsText.innerHTML = ""
            if (typeof data.documents !== 'undefined') {
                for (let j = 0; j < data.documents.length; j++){
                    let h3 = document.createElement("h3");
                    h3.innerHTML = await JSON.stringify(data.documents[j].text)
                    insultsText.append(h3)
            
                    let p = document.createElement("p"); 
                    p.innerHTML = await JSON.stringify(data.documents[j].origin)
                    insultsText.append(p)

                    let div = document.createElement("div");
                    div.classList.add("line")
                    insultsText.append(div)
                }
            } else {
                let h3 = document.createElement("h3")
                h3.innerHTML = "Insults not found"
                insultsText.append(h3)
            }
        console.log(request)
        return data
        }
    }
}
listInsults()