export default function (context) {
  if (context.isServer) {
    if (!context.store.getters.isAuthenticated) {
      return context.redirect('/login')
    }
  }
}
