/**
 * Return the filenames from a directory of files. Use webpacks `require.context`
 * to grab all files from a directory.
 * @param  {webpackEmptyContext|webpackContext} directory A webpack context function
 * @return {array} An array of filenames from the directory.
 */
export function getFilenames (directory) {
  return directory.keys().map(key => key.match(/([^/]+)(?=\.\w+$)/)[0])
}

/**
 * Create an object where each key is the name of the file from
 * the import, and the value is the default export from that import.
 * @param  {array} imports A list of imports
 * @param  {array} filenames An array of filenames to map the imports to
 * @return {object} Ab object that maps filenames to the imports
 */
export function importDirectory (imports, filenames) {
  return imports.reduce((files, provider, index) => {
    files[filenames[index]] = provider.default
    return files
  }, {})
}
