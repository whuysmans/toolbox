export default function ({ isServer, res, query }) {
  const token = query.token
  if (token) {
    if (isServer) {
      res.setHeader('Set-Cookie', [`token=${token}`])
    } else {
      document.cookie = `token=${token}`
    }
  }
}
