function printerError(s) {
    let count = 0;
    let error = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] > 'm') {
            count++;
        }
    }
    error = count + '/' + s.length;
    return error;
}

function printerError(s) {
  return s.match(/[^a-m]/g) === null ? '0/' + s.length : s.match(/[^a-m]/g).length + '/' + s.length;
}