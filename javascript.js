const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});


function showFields() {
  const role = document.getElementById("role").value;

  // Hide all role sections
  document.getElementById("student").style.display = "none";
  document.getElementById("instructor").style.display = "none";
  document.getElementById("collaborator").style.display = "none";

  // Show selected role
  if (role) {
    document.getElementById(role).style.display = "block";
  }
}


const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));