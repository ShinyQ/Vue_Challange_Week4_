/* eslint-disable space-before-function-paren */
export default {
  mounted() {
    // eslint-disable-next-line eqeqeq
    if (this.$router.currentRoute.name == 'login') {
      if (localStorage.getItem('dataUser')) {
        this.$router.push('/')
      } else {
        return true
      }
    } else {
      if (localStorage.getItem('dataUser') == null) {
        this.$router.push('/login')
      } else {
        return true
      }
    }
  }
}
