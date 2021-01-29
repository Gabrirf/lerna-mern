const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');

function cutPathFromFolder(fullPath) {
  let newPath;
  if (fullPath.includes('src')) {
    newPath = fullPath.split('src');
  } else if (fullPath.includes('test')) {
    newPath = fullPath.split('test');
  } else if (fullPath.includes('lib')) {
    newPath = fullPath.split('lib');
  } else {
    newPath = path.relative(PROJECT_ROOT, fullPath);
  }
  return newPath[newPath.length - 1];
}

/**
 * Parses and returns info about the call stack at the given index.
 */
function getStackInfo(stackIndex) {
  // get call stack, and analyze it
  // get all file, method, and line numbers
  const stacklist = (new Error()).stack.split('\n').slice(3);

  // stack trace format:
  // http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
  // do not remove the regex expresses to outside of this method (due to a BUG in node.js)
  const stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi;
  const stackReg2 = /at\s+()(.*):(\d*):(\d*)/gi;

  const s = stacklist[stackIndex] || stacklist[0];
  const sp = stackReg.exec(s) || stackReg2.exec(s);

  if (sp && sp.length === 5) {
    return {
      method: sp[1],
      relativePath: cutPathFromFolder(sp[2]),
      line: sp[3],
      pos: sp[4],
      file: path.basename(sp[2]),
      stack: stacklist.join('\n'),
    };
  }
  return {};
}

module.exports = { getStackInfo, cutPathFromFolder };
