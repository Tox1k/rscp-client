export default (env) => {
  if (env !== 'production') {
    return process.env.VUE_APP_LOCAL || 'http://151.24.212.228:3000'
  } else {
    return process.env.VUE_APP_REMOTE || window.location.origin
  }
}
