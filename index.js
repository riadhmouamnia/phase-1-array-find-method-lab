// superbowlWin(record)
// 1) returns a year the Denver Broncos won the superbowl
// 2) returns undefined if the record has no win objects
function superbowlWin(record) {
  const win = record.find((r) => r.result === "W");
  return win ? win.year : undefined;
}
