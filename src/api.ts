import axios from 'axios';

const STATIC_FILES = 'https://static.cdnpub.info/files/';
const FININFO_GQL = '/api/graphql'; // TODO https://static.cdnpub.info/fininfo/api/graphql

axios.defaults.withCredentials = true;

const formatResult = (assets: any) =>
  assets.map((asset: any) => ({
    id: asset.id,
    name: asset.name,
    card: `${STATIC_FILES}${asset.multimedia.card}`,
    logo: `${STATIC_FILES}${asset.multimedia.logo}`,
    price: asset.price,
    ticker: asset.ticker,
    change: asset.charts.d1.change,
  }));

export const fetchAssets = async () => {
  return axios
    .post(FININFO_GQL, {
      query: `
      {actives(limit:7, instrument:CFD, sort:{field:Popularity, direction:Descending}) {
      id
      image
      price
      type
      ticker
      multimedia {
        card
        logo
      }
      name(source:TradeRoom)
      charts {
        d1 {
          quotes(size: xs) {
            price
            timestamp
          }
          change
        }
      }
    }
  }
  `,
    })
    .then(({ data }) => formatResult(data.data.actives));
};