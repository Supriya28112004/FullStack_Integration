document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.textContent = "🔍 Searching...";
  
  setTimeout(async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/search?email=${email}`);
      const user = response.data;

      resultDiv.innerHTML = `
        ✅ <strong>Cheater Found:</strong><br><br>
        <strong>Name:</strong> ${user.firstname} ${user.lastname}<br>
        <strong>Age:</strong> ${user.age}<br>
        <strong>City:</strong> ${user.city}<br><br>
        <img src="${user.picture}" alt="Cheater Image" width="120" />
      `;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        resultDiv.textContent = " Cheater not found.Your partner is loyal.You're safe 😇";
      } else {
        resultDiv.textContent = "❌ Server error. Please try again later.";
      }
    }
  }, 1000); 
});
