function wrap(height, width, length) {
  let middle = height+width+length - Math.min(height, width, length) - Math.max(height, width, length);
  return Math.max(height, width, length) * 2 + middle*2 + Math.min(height, width, length) * 4 + 20
}