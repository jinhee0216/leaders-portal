const API_URL = "https://script.google.com/macros/s/AKfycbwpST-hCoXWY9zls2dMxshASU575HgK2kLS09uEgtfLjY7kxAwqh3mlaGBCQSEEG3zA/exec";

function getToken() {
  const params = new URLSearchParams(location.search);
  return params.get("t") || "";
}

async function loadSummary() {
  const t = getToken();
  const url = `${API_URL}?action=dashboard&t=${encodeURIComponent(t)}`;

  const res = await fetch(url);
  const data = await res.json();

  console.log("API 응답:", data);

  if (!data.ok) {
    console.error("API 오류:", data.error);
    return;
  }

  const summary = data.data;
  console.log("대시보드 데이터:", summary);

  // 예시
  // data.data.card 안에 KPI 값이 들어있음
  // data.data.managers 에 담당자 목록
  // data.data.defaultManager 에 기본 담당자
}
document.addEventListener("DOMContentLoaded", loadSummary);
