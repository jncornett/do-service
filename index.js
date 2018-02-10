exports.handler = function(event, context, callback) {
  console.log(arguments)
  callback(null, {a: "result"})
}
