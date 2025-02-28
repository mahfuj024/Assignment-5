const buttons = document.querySelectorAll("button")
let date = new Date

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Board updated Successfully")

        const taskNumber = document.getElementById("task-number")
        let newTaskNumber = parseInt(taskNumber.innerText)
        newTaskNumber -= 1
        taskNumber.innerText = newTaskNumber

        button.disabled = true

        const navCount = document.getElementById("nav-count")
        let newNavCount = parseInt(navCount.innerText)
        newNavCount += 1
        navCount.innerText = newNavCount

        const showCurrentDate = document.getElementById("show-current-date")
        const p = document.createElement("p")
        p.innerText = `You have complited the task : ${date}`
        p.style.backgroundColor = "rgb(244,247,255)"
        p.style.marginTop = "19px"
        p.style.padding = "10px"
        p.style.borderRadius = "5px"
        showCurrentDate.appendChild(p)

    })
})


// today date
document.getElementById("today-date").innerText = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`

// clear-history
document.getElementById("clear-history").addEventListener("click", () => {
    const showCurrentDate = document.getElementById("show-current-date")
    showCurrentDate.innerText = " "
})

// another page
document.getElementById("another-page").addEventListener("click", () => {
    window.location.href = "anotherPage.html"
})



