import React, {Component} from 'react'

//여러기능이 있거나 event가 일어나면 class형이 좋고
//단순한 1개기능 출력용이면 함수형이 좋다
class App3 extends Component{

    constructor(props) {
        super(props); // Component의 생성자 호출
        alert("constuctor Call...")
    }

    componentWillMount() {
        alert("componentWillMount() Call...");
    }

    render() {
        alert("render() Call...")
        return(
            <div>Test</div>
        );
    }

    componentDidMount() { //onLoad기능...sciprt 및 Jquery 연동은 이곳에서...
        alert("componentDidMount Call...")
    }

}

export default App3;