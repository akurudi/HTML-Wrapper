
export default (e) => {
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(e.target);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(e.target);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.log("Could not select text in node: Unsupported browser.");
  }
}