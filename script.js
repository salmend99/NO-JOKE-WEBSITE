const classes = [
  {
    day: "Monday",
    class: "No-Gi Jiu-Jitsu",
    time: "6:30 PM"
  },
  {
    day: "Tuesday",
    class: "Boxing",
    time: "5:30 PM"
  },
  {
    day: "Wednesday",
    class: "Wrestling",
    time: "6:30 PM"
  }
];

const container = document.getElementById("scheduleContainer");

classes.forEach(item => {
  const div = document.createElement("div");

  div.classList.add("class-card");

  div.innerHTML = `
    <h3>${item.class}</h3>
    <p>${item.day}</p>
    <p>${item.time}</p>
  `;

  container.appendChild(div);
});

document.getElementById("trialBtn").addEventListener("click", () => {
  alert("Free trial booked!");
});
