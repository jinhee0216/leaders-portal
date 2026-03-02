const API_URL = "https://script.google.com/macros/s/AKfycbwpST-hCoXWY9zls2dMxshASU575HgK2kLS09uEgtfLjY7kxAwqh3mlaGBCQSEEG3zA/exec";

function getToken() {
  const params = new URLSearchParams(location.search);
  return params.get("t") || "";
}

async function loadSummary() {
  const t = getToken();
  const url = `${API_URL}?action=summary&t=${encodeURIComponent(t)}`;

  const res = await fetch(url);
  const data = await res.json();

  console.log("API 응답:", data);

  // TODO: 여기서 data.summary로 화면에 값 넣기
}

document.addEventListener("DOMContentLoaded", loadSummary);