// import './style.css'

// make a form make the results into json then post that to database withe insert query

const form = document.getElementById("message-form");

async function fetchAndRenderRamen() {
  const response = await fetch("https://ramen-q2wx.onrender.com");
  const ramenList = await response.json();
  const ramenListDiv = document.getElementById("ramen-list");
  //to clear out data in the div existing
  ramenListDiv.innerHTML = "";
  ramenList.forEach((ramen) => {
    const ramenDiv = document.createElement("div");
    ramenDiv.innerHTML = `<p>ID: ${ramen.id}, Flavour: ${ramen.flavour}, Price: ${ramen.price}</p>`;
    ramenListDiv.appendChild(ramenDiv);
  });
}
fetchAndRenderRamen();

form.addEventListener("submit", submitButton);

function submitButton(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = object.fromEntries(formData);
  fetch("https://ramen-q2wx.onrender.com", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
}
console.log(formValues);

//npm run dev
