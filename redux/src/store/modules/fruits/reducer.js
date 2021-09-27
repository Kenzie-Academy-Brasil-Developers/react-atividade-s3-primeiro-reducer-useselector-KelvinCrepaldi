const initialState = [
  {
    name: "Banana",
    img: "https://pngimg.com/uploads/banana/banana_PNG825.png",
  },
  {
    name: "Maçã",
    img: "https://superprix.vteximg.com.br/arquivos/ids/175190-600-600/Maca-Gala-Nacional--1-unidade-aprox.-200g-.png?v=636294186498800000",
  },
  {
    name: "Morango",
    img: "https://lh3.googleusercontent.com/proxy/dxcmTZuPkgj2GgcDLMuQKf7EZFP4LcfvKi-ytl5kDls1mF_6q7W2M4c04sA3Zc2w4_xOLJ8zC2u0pOdKmEb2ZewW6AMQr4t3N1tC4DB9jr2MucOYGixRquuM5tqt_CB2dlLdbHwHGTjjwNwZHVAi",
  },
];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;
