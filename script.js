 // https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event) => {
    const queryValue = event.target.querySelector("input[name=q]").value
    console.log("queryValue", queryValue)

    if (!queryValue) {
        event.preventDefault()
        alert("O campo busca é obrigatório.")
    }
})