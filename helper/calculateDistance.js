export default function convertToKm (value) {
  var km = value / 1000;
  return km.toFixed (1) + ' km';
}
