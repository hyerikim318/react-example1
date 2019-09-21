import React, {Component} from 'react';
import Movie from "./view/Movie";
import Reserve from "./view/Reserve";
import BoxOffice from "./view/BoxOffice";

class App4 extends Component {

    render() {
        return(
            <div className={"row"}>
                <div className={"col-sm-4"}>
                    <h3>영화 순위</h3>
                    <Movie/>
                </div>
                <div className={"col-sm-4"}>
                    <h3>박스오피스 순위</h3>
                    <Reserve/>
                </div>
                <div className={"col-sm-4"}>
                    <h3>예매율 순위</h3>
                    <BoxOffice/>
                </div>
            </div>
        );
    }

}

export default App4;