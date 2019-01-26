import React from "react";
import cc from "cryptocompare";
import _ from "lodash";

export const AppContext = React.createContext();

const MAX_SELECTED = 10;

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      selectedCoins: ["BTC", "ETH", "ADA", "XRP", "DOGE"],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInSelected: this.isInSelected,
      confirmSettings: this.confirmSettings,
      setFilteredCoins: this.setFilteredCoins,
      setCurrentFavourite: this.setCurrentFavourite
    };
  }

  componentDidMount() {
    this.fetchCoins();
    this.fetchPrices();
  }

  fetchCoins = async () => {
    let coinList = await cc.coinList();
    this.setState({ coinList: coinList.Data });
    console.log(coinList.Data);
  };

  fetchPrices = async () => {
    if (this.state.firstVisit) return;

    const prices = await this.prices();
    console.log("Prices: ", prices);
    this.setState({ prices });
  };

  prices = async () => {
    let data = [];

    for (let i = 0; i < this.state.selectedCoins.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.selectedCoins[i], "USD");
        data.push(priceData);
      } catch (e) {
        console.warn("Fetch price error", e);
      }
    }
    return data;
  };

  addCoin = key => {
    let favourites = [...this.state.selectedCoins];
    if (favourites.length < MAX_SELECTED) {
      favourites.push(key);
      this.setState({ selectedCoins: favourites });
    }
  };

  removeCoin = key => {
    let favourites = _.pull([...this.state.selectedCoins], key);
    this.setState({ selectedCoins: favourites });
  };

  isInSelected = key => _.includes(this.state.selectedCoins, key);

  confirmSettings = () => {
    const currentFavourite = this.state.selectedCoins[0];
    console.log(currentFavourite);
    this.setState(
      {
        firstVisit: false,
        currentFavourite,
        page: "dashboard"
      },
      () => {
        this.fetchPrices();
      }
    );
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        selectedCoins: this.state.selectedCoins,
        currentFavourite
      })
    );
  };

  setCurrentFavourite = symbol => {
    this.setState({
      currentFavourite: symbol
    });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoDash")),
        currentFavourite: symbol
      })
    );
  };

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));

    if (!cryptoDashData) {
      return { page: "settings", firstVisit: true };
    }
    let { selectedCoins, currentFavourite } = cryptoDashData;
    return { selectedCoins, currentFavourite };
  }

  setPage = page => this.setState({ page });

  setFilteredCoins = filteredCoins => this.setState({ filteredCoins });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
