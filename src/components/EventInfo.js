import React from 'react';
import { connect } from 'react-redux'
import '../css/EventInfo.css'


class EventInfo extends React.Component {
  currentTabStyle = {
    borderBottom: "0px solid black",
  };

  onCrossClickListener = (e) => {
    e.preventDefault();
    this.props.remove(e.target.id);
  };

  render() {
    let tabList = this.props.list;

    tabList = tabList.map((el, pos) => {
      if (el === this.props.currentEvent) {
        return (
          <span
            className="tab-outer-span"
            key={pos}
            style={this.currentTabStyle}
          >
            <span key={pos} id={el} className="tab-inner-span">
              Event Type {el}
            </span>
            <a href="3" id={el} onClick={this.onCrossClickListener}>
              &#10006;
            </a>
          </span>
        );
      } else {
        return (
          <span className="tab-outer-span" key={pos}>
            <span key={pos} id={el} className="tab-inner-span">
              Event Type {el}
            </span>
            <a href="3" id={el} onClick={this.onCrossClickListener}>
              &#10006;
            </a>
          </span>
        );
      }
    });

    let list = [];

    for (let i = 231; i <= 999; i+=6) {
      list.push(
        <tr key={i}>
          <td>
            <span>timestamp</span>
            <br></br>1398398{i}0000
          </td>
          <td>
            <span>_raw</span>
            <br></br>
            eth0.0c04.134.553.32.453.fe08.2442.ab44.gg43.kk43.2335{i}8940
          </td>
        </tr>
      );
    }

    return (
      <div className="EventInfoMaster">
        <div className="Tabs">{tabList}</div>
        <div className="EventInfo">
          <table>
            <tbody>{list}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    change: (value) => {
      return dispatch({ type: "CHANGE", value: value });
    },
    remove: (value) => {
      return dispatch({ type: "REMOVE", value: value });
    },
  };
};

let mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(EventInfo);
