function renderStartButton(container) {
    const startButton = document.createElement("button");

    startButton.textContent = "Старт";
    startButton.classList.add("start-button", "btn");

    startButton.addEventListener("click", () => {
        if (window.application.challenge === "") {
            alert("Выберите уровень сложности!");
        } else {
            if (window.application.challenge === "easy") {
                window.application.renderScreen("easy");
            } else if (window.application.challenge === "medium") {
                window.application.renderScreen("medium");
            } else if (window.application.challenge === "hard") {
                window.application.renderScreen("hard");
            } else {
                console.log(`Ошибка, обновите страницу!`);
            }
        }
    });

    container.appendChild(startButton);
}

window.application.blocks["StartButton"] = renderStartButton;

function renderStartScreen() {
    container.textContent = "";

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Выбери сложность";

    const pickerChalenge = document.createElement("div");
    pickerChalenge.classList.add("picker-challenge");

    const buttonFirst = document.createElement("button");
    buttonFirst.classList.add("button", "FirstChallenge");
    buttonFirst.textContent = "1";

    buttonFirst.addEventListener("click", () => {
        window.application.challenge = "easy";
        buttonFirst.classList.remove("button");
        buttonFirst.classList.add("selected");

        if (
            buttonSecond.classList.contains("selected") ||
            buttonThird.classList.contains("selected")
        ) {
            buttonSecond.classList.remove("selected");
            buttonThird.classList.remove("selected");
            buttonSecond.classList.add("button");
            buttonThird.classList.add("button");
        }
    });

    const buttonSecond = document.createElement("button");
    buttonSecond.classList.add("button", "SecondChallenge");
    buttonSecond.textContent = "2";

    buttonSecond.addEventListener("click", () => {
        window.application.challenge = "medium";
        buttonSecond.classList.remove("button");
        buttonSecond.classList.add("selected");

        if (
            buttonFirst.classList.contains("selected") ||
            buttonThird.classList.contains("selected")
        ) {
            buttonFirst.classList.remove("selected");
            buttonThird.classList.remove("selected");
            buttonFirst.classList.add("button");
            buttonThird.classList.add("button");
        }
    });

    const buttonThird = document.createElement("button");
    buttonThird.classList.add("button", "ThirdChallenge");
    buttonThird.textContent = "3";

    buttonThird.addEventListener("click", () => {
        window.application.challenge = "hard";
        buttonThird.classList.remove("button");
        buttonThird.classList.add("selected");

        if (
            buttonFirst.classList.contains("selected") ||
            buttonThird.classList.contains("selected")
        ) {
            buttonFirst.classList.remove("selected");
            buttonSecond.classList.remove("selected");
            buttonFirst.classList.add("button");
            buttonSecond.classList.add("button");
        }
    });

    container.appendChild(menu);
    menu.appendChild(title);
    menu.appendChild(pickerChalenge);
    pickerChalenge.appendChild(buttonFirst);
    pickerChalenge.appendChild(buttonSecond);
    pickerChalenge.appendChild(buttonThird);

    window.application.renderBlock("StartButton", menu);
}

window.application.screens["start"] = renderStartScreen;

window.application.renderScreen("start");