var emptyFn=()=>{},ignoreFn=function(e){e&&(e.success?e.success():e.complete?e.complete():e.fail&&e.fail())};function getInstance(){var e=tt;e.has_toutiao_hook_flag=!0,e.reportAnalytics=e.reportAnalytics||emptyFn,e.hideShareMenu=e.showShareMenu||ignoreFn,e.showShareMenu=e.showShareMenu||ignoreFn,e.hideKeyboard=e.hideKeyboard||emptyFn,e.hideTabBar=e.hideTabBar||ignoreFn,e.showTabBar=e.showTabBar||ignoreFn,e.navigateToMiniProgram=e.navigateToMiniProgram||ignoreFn,e.onUserCaptureScreen=e.onUserCaptureScreen||emptyFn;return["navigateTo","redirectTo","switchTab","reLaunch"].forEach(n=>{const a=e[n];e[n]=(e=>a(e))}),e}export default getInstance();