function pillars(num_pill, dist, width) {
 //1 meters = 100 centimeters
 // total length of pillars inbetween the first and last:
 // total length of all spaces inbetween pillars:
 return (num_pill === 1) ? 0 :((num_pill - 2) * width) + (((num_pill - 1) * dist) * 100)
}