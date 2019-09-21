import React, {Component} from 'react'
/* // 
    class A
    {
        public A(String name, int age, String addr) {
        }
    }
    new A("hyeri","29","seoul"); 을 props(Map형태)로 전달하여 실행시키는 것과 동일
*/

//여러기능이 있거나 event가 일어나면 class형이 좋고
//단순한 1개기능 출력용이면 함수형이 좋다
class App3 extends Component{

    constructor(props) {
        super(props); // Component의 생성자 호출
        console.log("constuctor Call...")
    }

    componentWillMount() {
        console.log("componentWillMount() Call...");
    }

    render() {
        console.log("render() Call...")
        const html = this.props.music.map((m, idx)=>(
            <tr key={idx}>
                <th>{m.rank}</th>
                <th><img src={m.poster} width={"30"} height={"30"}/></th>
                <th>{m.title}</th>
                <th>{m.singer}</th>
            </tr>
        ));
        return(
            <div>
                    {/*이름 : {this.props.name} <br/>*/}
                    {/*나이 : {this.props.age} <br/>*/}
                    {/*주소 : {this.props.addr} <br/>*/}
                    <table className={"table table-hover"}>
                        <thead>
                        <tr className={"danger"}>
                            <th>순위</th>
                            <th>제목</th>
                            <th>노래명</th>
                            <th>가수명</th>
                        </tr>
                        </thead>
                        <tbody>
                        {html}
                        </tbody>
                    </table>
            </div>
        );
    }

    componentDidMount() { //onLoad기능...sciprt 및 Jquery 연동은 이곳에서...
        console.log("componentDidMount Call...")
    }

}

export default App3;