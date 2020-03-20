export default {
  requesting: state => {
    return state.user.requesting;
  },
  token: state => {
    return state.user.token;
  },
  userInfo: state => {
    return state.user.userInfo;
  }
};
