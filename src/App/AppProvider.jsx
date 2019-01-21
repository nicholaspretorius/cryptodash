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
      confirmSettings: this.confirmSettings
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = await cc.coinList();
    this.setState({ coinList: coinList.Data });
    console.log(coinList.Data);
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
    this.setState({
      firstVisit: false,
      page: "dashboard"
    });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        selectedCoins: this.state.selectedCoins
      })
    );
  };

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));

    if (!cryptoDashData) {
      return { page: "settings", firstVisit: true };
    }
    let { selectedCoins } = cryptoDashData;
    return { selectedCoins };
  }

  setPage = page => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
