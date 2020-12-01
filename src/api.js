import axios from 'axios';

const STATIC_FILES = 'https://static.cdnpub.info/files/';
const FININFO_GQL = '/api/graphql'; // TODO https://static.cdnpub.info/fininfo/api/graphql

axios.defaults.withCredentials = true;

const formatResult = (assets) =>
  assets.map((asset) => ({
    id: asset.id,
    name: asset.name,
    logo: `${STATIC_FILES}${asset.multimedia.logo}`,
    price: asset.price.toFixed(2),
    ticker: asset.ticker,
    change: asset.charts.d1.change.toFixed(2),
    type: asset.type,
  })).reduce((acc, item) => ({
    ...acc,
    ...(Boolean(item.type) && {
      [item.type]: [...(acc[item.type] || []), item]
    })
  }), {});

export const fetchAssets = async () => {
  return axios
    .post(FININFO_GQL, {
      query: `
      {actives(instruments: [ CFD, Forex, Crypto], sort:{field:Popularity, direction:Ascending}) {
        id
        image
        price
        type
        ticker
        multimedia {
          logo
        }
        name(source:TradeRoom)
        charts {
          d1 {
            change
          }
        }
      }
    }
  `,
    })
    .then(({ data }) => formatResult(data.data.actives));
};