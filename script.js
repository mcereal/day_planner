$(document).ready(function () {
  const idsOfInputBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  $(currentDay).text(moment().format("dddd, MMMM Do"));
  for (i in idsOfInputBlocks) {
    if (idsOfInputBlocks[i] < moment().hour()) {
      $(`#${idsOfInputBlocks[i]}`).addClass("past");
    } else if (idsOfInputBlocks[i] === moment().hour()) {
      $(`#${idsOfInputBlocks[i]}`).addClass("present");
    } else $(`#${idsOfInputBlocks[i]}`).addClass("future");
  }
});
