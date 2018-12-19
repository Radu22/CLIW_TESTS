


onmessage = function (event) {

    let i1 = event.data[1];



    let c = 0;

    for (let i = 0; i < i1; i++) {

        let x = Math.random() * 2 - 1;

        let y = Math.random() * 2 - 1;

        if (Math.sqrt(x * x + y * y) < 1) c++;
        
    }

    let pi = c * 4 / i1;


    postMessage(["somethinginhere", pi]);
}