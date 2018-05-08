import Key from '../config';
export default function getMapPolyline (origin, destination, callback) {
  console.log ('the origin and destination are', origin, Key.GOOGLE_API_KEY);
  const mode = 'driving'; // 'walking';
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${Key.GOOGLE_API_KEY}&mode=${mode}`;

  fetch (url)
    .then (response => response.json ())
    .then (responseJson => {
      console.log ('the definition reply is', responseJson);
      if (responseJson.routes.length) {
        callback (decode (responseJson.routes[0].overview_polyline.points)); // definition below
        const res = decode (responseJson.routes[0].overview_polyline.points);
      }
    })
    .catch (e => {
      console.warn (e);
    });
}

function decode (t, e) {
  for (
    var n,
      o,
      u = 0,
      l = 0,
      r = 0,
      d = [],
      h = 0,
      i = 0,
      a = null,
      c = Math.pow (10, e || 5);
    u < t.length;

  ) {
    (a = null), (h = 0), (i = 0);
    do
      (a = t.charCodeAt (u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
    do
      (a = t.charCodeAt (u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (o = 1 & i ? ~(i >> 1) : i >> 1), (l += n), (r += o), d.push ([
      l / c,
      r / c,
    ]);
  }
  return (d = d.map (function (t) {
    return {latitude: t[0], longitude: t[1]};
  }));
}
