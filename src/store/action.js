//  商城vuex-actions
export default {
    saveUserName(context, username) {
        context.commit('saveUserName', username)
    },
    saveCartCount(context, Count) {
        context.commit('saveCartCount', Count)
    }
}
