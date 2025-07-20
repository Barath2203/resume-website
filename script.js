
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) {
    target.classList.add('active');
  }
}
