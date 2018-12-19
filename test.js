

for (let i1 = 1; i1 <= 550; i1++) {
    let worker = new Worker('worker.js');

    worker.postMessage(["1000000000", i1]);



    worker.onmessage = (event) => {

        document.body.innerHTML = event.data[1];

        document.body.innerHTML += "<br>" + Math.PI;

    }
}

