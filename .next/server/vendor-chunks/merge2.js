"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/merge2";
exports.ids = ["vendor-chunks/merge2"];
exports.modules = {

/***/ "(rsc)/./node_modules/merge2/index.js":
/*!**************************************!*\
  !*** ./node_modules/merge2/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * merge2\n * https://github.com/teambition/merge2\n *\n * Copyright (c) 2014-2020 Teambition\n * Licensed under the MIT license.\n */\nconst Stream = __webpack_require__(/*! stream */ \"stream\")\nconst PassThrough = Stream.PassThrough\nconst slice = Array.prototype.slice\n\nmodule.exports = merge2\n\nfunction merge2 () {\n  const streamsQueue = []\n  const args = slice.call(arguments)\n  let merging = false\n  let options = args[args.length - 1]\n\n  if (options && !Array.isArray(options) && options.pipe == null) {\n    args.pop()\n  } else {\n    options = {}\n  }\n\n  const doEnd = options.end !== false\n  const doPipeError = options.pipeError === true\n  if (options.objectMode == null) {\n    options.objectMode = true\n  }\n  if (options.highWaterMark == null) {\n    options.highWaterMark = 64 * 1024\n  }\n  const mergedStream = PassThrough(options)\n\n  function addStream () {\n    for (let i = 0, len = arguments.length; i < len; i++) {\n      streamsQueue.push(pauseStreams(arguments[i], options))\n    }\n    mergeStream()\n    return this\n  }\n\n  function mergeStream () {\n    if (merging) {\n      return\n    }\n    merging = true\n\n    let streams = streamsQueue.shift()\n    if (!streams) {\n      process.nextTick(endStream)\n      return\n    }\n    if (!Array.isArray(streams)) {\n      streams = [streams]\n    }\n\n    let pipesCount = streams.length + 1\n\n    function next () {\n      if (--pipesCount > 0) {\n        return\n      }\n      merging = false\n      mergeStream()\n    }\n\n    function pipe (stream) {\n      function onend () {\n        stream.removeListener('merge2UnpipeEnd', onend)\n        stream.removeListener('end', onend)\n        if (doPipeError) {\n          stream.removeListener('error', onerror)\n        }\n        next()\n      }\n      function onerror (err) {\n        mergedStream.emit('error', err)\n      }\n      // skip ended stream\n      if (stream._readableState.endEmitted) {\n        return next()\n      }\n\n      stream.on('merge2UnpipeEnd', onend)\n      stream.on('end', onend)\n\n      if (doPipeError) {\n        stream.on('error', onerror)\n      }\n\n      stream.pipe(mergedStream, { end: false })\n      // compatible for old stream\n      stream.resume()\n    }\n\n    for (let i = 0; i < streams.length; i++) {\n      pipe(streams[i])\n    }\n\n    next()\n  }\n\n  function endStream () {\n    merging = false\n    // emit 'queueDrain' when all streams merged.\n    mergedStream.emit('queueDrain')\n    if (doEnd) {\n      mergedStream.end()\n    }\n  }\n\n  mergedStream.setMaxListeners(0)\n  mergedStream.add = addStream\n  mergedStream.on('unpipe', function (stream) {\n    stream.emit('merge2UnpipeEnd')\n  })\n\n  if (args.length) {\n    addStream.apply(null, args)\n  }\n  return mergedStream\n}\n\n// check and pause streams for pipe.\nfunction pauseStreams (streams, options) {\n  if (!Array.isArray(streams)) {\n    // Backwards-compat with old-style streams\n    if (!streams._readableState && streams.pipe) {\n      streams = streams.pipe(PassThrough(options))\n    }\n    if (!streams._readableState || !streams.pause || !streams.pipe) {\n      throw new Error('Only readable stream can be merged.')\n    }\n    streams.pause()\n  } else {\n    for (let i = 0, len = streams.length; i < len; i++) {\n      streams[i] = pauseStreams(streams[i], options)\n    }\n  }\n  return streams\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWVyZ2UyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsc0JBQVE7QUFDL0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsU0FBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsWUFBWTtBQUM5QztBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZHVpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL21lcmdlMi9pbmRleC5qcz8yNjQ4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuLypcbiAqIG1lcmdlMlxuICogaHR0cHM6Ly9naXRodWIuY29tL3RlYW1iaXRpb24vbWVyZ2UyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMjAgVGVhbWJpdGlvblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5jb25zdCBTdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKVxuY29uc3QgUGFzc1Rocm91Z2ggPSBTdHJlYW0uUGFzc1Rocm91Z2hcbmNvbnN0IHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2UyXG5cbmZ1bmN0aW9uIG1lcmdlMiAoKSB7XG4gIGNvbnN0IHN0cmVhbXNRdWV1ZSA9IFtdXG4gIGNvbnN0IGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgbGV0IG1lcmdpbmcgPSBmYWxzZVxuICBsZXQgb3B0aW9ucyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuXG4gIGlmIChvcHRpb25zICYmICFBcnJheS5pc0FycmF5KG9wdGlvbnMpICYmIG9wdGlvbnMucGlwZSA9PSBudWxsKSB7XG4gICAgYXJncy5wb3AoKVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgY29uc3QgZG9FbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2VcbiAgY29uc3QgZG9QaXBlRXJyb3IgPSBvcHRpb25zLnBpcGVFcnJvciA9PT0gdHJ1ZVxuICBpZiAob3B0aW9ucy5vYmplY3RNb2RlID09IG51bGwpIHtcbiAgICBvcHRpb25zLm9iamVjdE1vZGUgPSB0cnVlXG4gIH1cbiAgaWYgKG9wdGlvbnMuaGlnaFdhdGVyTWFyayA9PSBudWxsKSB7XG4gICAgb3B0aW9ucy5oaWdoV2F0ZXJNYXJrID0gNjQgKiAxMDI0XG4gIH1cbiAgY29uc3QgbWVyZ2VkU3RyZWFtID0gUGFzc1Rocm91Z2gob3B0aW9ucylcblxuICBmdW5jdGlvbiBhZGRTdHJlYW0gKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHN0cmVhbXNRdWV1ZS5wdXNoKHBhdXNlU3RyZWFtcyhhcmd1bWVudHNbaV0sIG9wdGlvbnMpKVxuICAgIH1cbiAgICBtZXJnZVN0cmVhbSgpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlU3RyZWFtICgpIHtcbiAgICBpZiAobWVyZ2luZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIG1lcmdpbmcgPSB0cnVlXG5cbiAgICBsZXQgc3RyZWFtcyA9IHN0cmVhbXNRdWV1ZS5zaGlmdCgpXG4gICAgaWYgKCFzdHJlYW1zKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGVuZFN0cmVhbSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3RyZWFtcykpIHtcbiAgICAgIHN0cmVhbXMgPSBbc3RyZWFtc11cbiAgICB9XG5cbiAgICBsZXQgcGlwZXNDb3VudCA9IHN0cmVhbXMubGVuZ3RoICsgMVxuXG4gICAgZnVuY3Rpb24gbmV4dCAoKSB7XG4gICAgICBpZiAoLS1waXBlc0NvdW50ID4gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG1lcmdpbmcgPSBmYWxzZVxuICAgICAgbWVyZ2VTdHJlYW0oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBpcGUgKHN0cmVhbSkge1xuICAgICAgZnVuY3Rpb24gb25lbmQgKCkge1xuICAgICAgICBzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ21lcmdlMlVucGlwZUVuZCcsIG9uZW5kKVxuICAgICAgICBzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9uZW5kKVxuICAgICAgICBpZiAoZG9QaXBlRXJyb3IpIHtcbiAgICAgICAgICBzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcilcbiAgICAgICAgfVxuICAgICAgICBuZXh0KClcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIG9uZXJyb3IgKGVycikge1xuICAgICAgICBtZXJnZWRTdHJlYW0uZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICB9XG4gICAgICAvLyBza2lwIGVuZGVkIHN0cmVhbVxuICAgICAgaWYgKHN0cmVhbS5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkKSB7XG4gICAgICAgIHJldHVybiBuZXh0KClcbiAgICAgIH1cblxuICAgICAgc3RyZWFtLm9uKCdtZXJnZTJVbnBpcGVFbmQnLCBvbmVuZClcbiAgICAgIHN0cmVhbS5vbignZW5kJywgb25lbmQpXG5cbiAgICAgIGlmIChkb1BpcGVFcnJvcikge1xuICAgICAgICBzdHJlYW0ub24oJ2Vycm9yJywgb25lcnJvcilcbiAgICAgIH1cblxuICAgICAgc3RyZWFtLnBpcGUobWVyZ2VkU3RyZWFtLCB7IGVuZDogZmFsc2UgfSlcbiAgICAgIC8vIGNvbXBhdGlibGUgZm9yIG9sZCBzdHJlYW1cbiAgICAgIHN0cmVhbS5yZXN1bWUoKVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgcGlwZShzdHJlYW1zW2ldKVxuICAgIH1cblxuICAgIG5leHQoKVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kU3RyZWFtICgpIHtcbiAgICBtZXJnaW5nID0gZmFsc2VcbiAgICAvLyBlbWl0ICdxdWV1ZURyYWluJyB3aGVuIGFsbCBzdHJlYW1zIG1lcmdlZC5cbiAgICBtZXJnZWRTdHJlYW0uZW1pdCgncXVldWVEcmFpbicpXG4gICAgaWYgKGRvRW5kKSB7XG4gICAgICBtZXJnZWRTdHJlYW0uZW5kKClcbiAgICB9XG4gIH1cblxuICBtZXJnZWRTdHJlYW0uc2V0TWF4TGlzdGVuZXJzKDApXG4gIG1lcmdlZFN0cmVhbS5hZGQgPSBhZGRTdHJlYW1cbiAgbWVyZ2VkU3RyZWFtLm9uKCd1bnBpcGUnLCBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gICAgc3RyZWFtLmVtaXQoJ21lcmdlMlVucGlwZUVuZCcpXG4gIH0pXG5cbiAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgYWRkU3RyZWFtLmFwcGx5KG51bGwsIGFyZ3MpXG4gIH1cbiAgcmV0dXJuIG1lcmdlZFN0cmVhbVxufVxuXG4vLyBjaGVjayBhbmQgcGF1c2Ugc3RyZWFtcyBmb3IgcGlwZS5cbmZ1bmN0aW9uIHBhdXNlU3RyZWFtcyAoc3RyZWFtcywgb3B0aW9ucykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc3RyZWFtcykpIHtcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggb2xkLXN0eWxlIHN0cmVhbXNcbiAgICBpZiAoIXN0cmVhbXMuX3JlYWRhYmxlU3RhdGUgJiYgc3RyZWFtcy5waXBlKSB7XG4gICAgICBzdHJlYW1zID0gc3RyZWFtcy5waXBlKFBhc3NUaHJvdWdoKG9wdGlvbnMpKVxuICAgIH1cbiAgICBpZiAoIXN0cmVhbXMuX3JlYWRhYmxlU3RhdGUgfHwgIXN0cmVhbXMucGF1c2UgfHwgIXN0cmVhbXMucGlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IHJlYWRhYmxlIHN0cmVhbSBjYW4gYmUgbWVyZ2VkLicpXG4gICAgfVxuICAgIHN0cmVhbXMucGF1c2UoKVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdHJlYW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBzdHJlYW1zW2ldID0gcGF1c2VTdHJlYW1zKHN0cmVhbXNbaV0sIG9wdGlvbnMpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHJlYW1zXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/merge2/index.js\n");

/***/ })

};
;