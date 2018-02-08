import React from "react";
import './index.css';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }
    componentWillMount() {
            this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
            setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }  
    leading0(num) {
            return num < 10 ? num : num;
    }
    getTimeUntil(deadline) {
            const time = Date.parse(deadline) - Date.parse(new Date());
            if(time < 0) {
                this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            
            } else {
                const seconds = Math.floor((time/1000)%60);
                const minutes = Math.floor((time/1000/60)%60);
                const hours = Math.floor((time/(1000*60*60))%24);
                const days = Math.floor(time/(1000*60*60*24));
                this.setState({ days, hours, minutes, seconds });
            }
    }
    render() {
        return(
            <div className="Section Time">
                <table>
                    <tr className="Clock-days">
                        <td>{this.leading0(this.state.days)}</td>
                        <td>Päivää</td> 
                    </tr>
                    <tr className="Clock-hours">
                        <td>{this.leading0(this.state.hours)}</td>
                        <td>Tuntia</td> 
                    </tr>
                    <tr className="Clock-minutes">
                        <td>{this.leading0(this.state.minutes)}</td>
                        <td>Minuuttia</td> 
                    </tr>
                    <tr className="Clock-seconds">
                        <td>{this.leading0(this.state.seconds)}</td>
                        <td>Sekunttia</td> 
                    </tr>
                </table>
            </div>
        );
    }
    
}

export default Time;
