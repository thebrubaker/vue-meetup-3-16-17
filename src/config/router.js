import routes from 'routes'

export default {

  /**
   * Configure the router mode: "hash" | "history" | "abstract"
   * - hash: uses the URL hash for routing.
   * - history: requires HTML5 History API and server config.
   * - abstract: The router will automatically be forced into this mode if no browser API is present.
   */
  mode: 'history',

  /**
   * The base URL of the app. For example, if the entire single page application
   * is served under /app/, then base should use the value "/app/".
   */
  base: '/',

  /**
   * Globally configure <router-link> default active class.
   */
  linkActiveClass: 'router-link-active',

  /**
   * All the routes for our application
   * @type {array}
   */
  routes: routes,

  /**
   * When using client-side routing, we may want to scroll to top when
   * navigating to a new route, or preserve the scrolling position of
   * history entries just like real page reload does. vue-router allows
   * you to achieve these and even better, allows you to completely
   * customize the scroll behavior on route navigation.
   * @param  {object} to Absolute, relative path or hash.
   * @param  {object} from Absolute or relative path (not used).
   * @param  {number} savedPosition Pixels from top.
   * @return {object} The `x` and `y` coordinates.
   */
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return { selector: to.hash }
    }

    return { x: 0, y: 0 }
  }
}

