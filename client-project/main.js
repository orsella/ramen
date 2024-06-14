// import './style.css'

// make a form make the results into json then post that to database withe insert query

const form = document.getElementById("message-form");

form.addEventListener("submit", submitButton);

function submitButton(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = object.fromEntries(formData);
  fetch("http://locahost:8000/ramen", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
}
console.log(formValues);

//npm run dev
