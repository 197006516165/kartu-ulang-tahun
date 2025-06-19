// Ambil nama dari URL (?to=Nama)
function getNameFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("to") || "Teman";
}

// Ganti teks dengan nama dari URL
document.getElementById("name").textContent = getNameFromURL();

// Fungsi share: Salin link ke clipboard
function share() {
  const name = getNameFromURL();
  const baseURL = window.location.origin + window.location.pathname;
  const shareURL = `${baseURL}?to=${encodeURIComponent(name)}`;
  
  navigator.clipboard.writeText(shareURL).then(() => {
    alert("✅ Link ucapan disalin!\n\nBagikan ke teman:\n" + shareURL);
  }).catch(() => {
    alert("❌ Gagal menyalin. Silakan salin manual:\n" + shareURL);
  });
}
