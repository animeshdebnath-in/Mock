/* Shared by index.html and every mock page. Paste your Apps Script web app URL below. */
const SHEET_URL = "https://script.google.com/macros/s/AKfycbzUCv8gTTpF_3fjD7hLLZSikVo4Xn1bxMAA2DlULF9nKi6KWIZzxIDuBxo9xdkw9hzd/exec";

/* Call this once when a test is submitted:
   logResult({test:"RBE Mock 1", subject:"Mathematics", score:34, total:50, seconds:1500}); */
function logResult(r) {
  if (!SHEET_URL || SHEET_URL.indexOf("PASTE") === 0) return;
  try {
    fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(r),
      keepalive: true
    }).catch(function () {});
  } catch (e) {}
}
