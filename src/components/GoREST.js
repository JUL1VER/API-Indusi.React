import { Component } from "react";
import {GoRestService} from '../services/gorestService';
import ItemIndus from './listIndus';
import HiredInduses from "./hiredInduses";

class GoREST extends Component {


    constructor(props) {
        super(props);
        this.goRestApi = new GoRestService()
        this.newIndusec = []; 
        this.state = {
            items: [], 
            count: 0, 
            height: 0,
            hired: []
        }
    }

    componentDidMount() {
        this.goRestApi.getUsers().then(
            (result) => {
                this.setState({
                items: result.data, 
                count: result.meta.pagination.limit
                });
                const {count} = this.state; 
                this.setState({height: 500*(Math.floor(count/5))-150 + 'px'});
            }
        )
    }

    deleteIndus = (e) => {
      this.goRestApi.deleteInduses(e.target.id);
      this.setState(({items}) => {
        const newArray = items.filter(value => value.id !== +e.target.id);
        return {
          items: newArray
        }
      })
    }

    hireIndus = (e) => {
      this.setState(({items, hired}) => {
        if (hired.find(value => value.id === +e.target.id) == undefined) {
          const hiredInsuses = hired;
        hiredInsuses.push(items.find(value => value.id === +e.target.id));
        const newArray = items.filter(value => value.id !== +e.target.id);
        return {
          hired: hiredInsuses,
          items: newArray
        }
        }
      })
    }

    render() {
        const {items, hired, height} = this.state;
        const elements = hired.map((item,index) => 
          <HiredInduses onHire = {this.hireIndus} key={index} id={item.id} name={item.name} email ={item.email}/>
        )

          return (
            <>
              <ul className="tableWithCards" style={{height: height}}>
                <div className="flex">
                {items.map((item,index) => 
                  <ItemIndus onHire = {this.hireIndus} onDelete={this.deleteIndus} key={index} id={item.id} name={item.name} email ={item.email}/>
                )}
                </div>
              </ul>
              <div className="hiredIndusesPanel">
                <div className="namePanel"> <p className="textInHiredPanel">Список нанятых индусов</p></div>
                <div>
                    <ul className="hiredIndusesUl">
                        {elements}
                    </ul>
                </div>
              </div>
            </>
          )
    }
}

export default GoREST;