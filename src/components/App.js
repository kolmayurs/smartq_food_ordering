import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/reduxActions';
import Header from './Header';
import Main from './Main';
import Categories from './Categories';
import Loading from './Loading';
import Cart from './Cart';

const mapStateToProps = (state) => {
  return{
    loading: state.fetchReducers.fetching,
    data: state.fetchReducers.data,
  }
}

const mapStateToDispatch = (dispatch) => {
  return{
    ...bindActionCreators({fetchData}, dispatch)
  }
}

class App extends React.Component {
  componentDidMount(){
    this.props.fetchData();
    console.log(this.props.match.params.category);
  }

  render() {
    if(this.props.loading){
      return(<Loading />)
    }
    return (
      <div className="main-container">
        <Header />
        <div className="all-container">
          <Categories activeTab={this.props.match.params.category} cat={this.props.data} />     
          <Main activeTab={this.props.match.params.category} menu={this.props.data} />
          <Cart />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App);
