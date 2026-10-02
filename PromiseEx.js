isHalwaAvailable = true;
function waitForHalwa() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (isHalwaAvailable) {
                resolve("Halwa is present");

            } else {
                reject("Halwa is not Present")
            }
        }, 1000);

    });
}

function buyHalwa() {
    waitForHalwa().then((resolve) => {
        console.log(resolve);
    }).catch((reject) => {
        console.log(reject)
    }).finally(() => {
        console.log("finally called");
    }
    );
}

async function buyHalwaAsc() {
    console.log("called buyHalwa asc");
    let result = await waitForHalwa();
    console.log("asc value", result);
}
buyHalwa();
console.log("Next line");

buyHalwaAsc();