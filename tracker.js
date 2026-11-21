/* Shared by index.html and every mock page. */
const SHEET_URL = "https://script.google.com/macros/s/AKfycbzUCv8gTTpF_3fjD7hLLZSikVo4Xn1bxMAA2DlULF9nKi6KWIZzxIDuBxo9xdkw9hzd/exec";

/* Called once when a test is submitted:
   logResult({test:"RBE Mock 1", subject:"Mathematics", score:34, total:90, seconds:1500, wrong:"3, 7", skipped:"12"}); */
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
