function convert(wxssText) {
  return wxssText
    .replace(/\.wxss(["'])/g, function(match, p1) {
      return p1;
    });
}

module.exports = convert;