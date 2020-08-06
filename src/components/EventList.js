import React from 'react';
import { connect } from 'react-redux'
import '../css/EventList.css'


class EventList extends React.Component {

    onClickListener = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        this.props.change(e.target.id);
    }

    render() {
        let list = []
        for (let i = 1; i <= 38; i++){
            list.push(`Event Type ${i}`)
        }
        list = list.map((el, pos) => {
            return (
              <li className="EventListItem" key={pos} id={pos + 1} onClick={this.onClickListener}>
                {el}
              </li>
            );
        })
        return (
            <ul className="EventList">
                {list}
            </ul>
        );
    }

}

let mapDispatchToProps = (dispatch) => {
  return {
    change: (value) => {
      return dispatch({ type: "CHANGE", value: value });
    },
  };
};

let mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
