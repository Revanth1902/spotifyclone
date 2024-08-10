export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  acesstoken: "",
  // token:
  //   "BQBgBjlDWres5yK_ne38Hb-kBsd9RnpvFCHVrGu-D2m7Hd8_1G8lISIbt_s0iaq0sIVNGMb0AUm_MsHS0j-aimzkHmevB-fr9L-yUEA9su7Z8obQhq6__ZQ37FVRF6S5zSkDIVat1UyZcQPollpi5noIxEc1N0oEfeLCzfMiw41kSIBpcesLi40EdqPkvhgv9ntFy8Ndv-dqUtdyMbHD",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "ACESS_Token":
      return {
        ...state,
        acesstoken: action.acess,
      };

    default:
      return state;
  }
};
export default reducer;
