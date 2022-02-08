import { Component } from 'react';

class HiredInduses extends Component { 
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const {name, email} = this.props;
        return (
            <li className='hiredIndusesList'>
                <div className='oneHiredIndus'>
                    <div className='wrapperOneIndus'>
                        <span>Имя - {name}, email - {email}</span>
                        <button className='firedButton'>Уволить индуса</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default HiredInduses;