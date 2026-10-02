isHalwaAvailable = false;
function waitForHalwa() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (isHalwaAvailable) {
                resolve("Halwa is present");

            } else {
                reject("Halwa is not Present")
            }
        }, 10000);

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
    try {
        let result = await waitForHalwa();
        console.log("asc value", result);
    } catch (error) {
        console.log("asc Failed value", error);
    }

}
buyHalwa();
console.log("Next line");

buyHalwaAsc();