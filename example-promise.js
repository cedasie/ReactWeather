function getTempCallBack (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallBack ('Brussels', function (err, temps) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp)
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    resolve(79);
    reject('City not found');
  });
}

getTempPromise('Brussels').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
})
