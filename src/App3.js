import React, {Component} from 'react'
import $ from 'jquery'
/*
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

    //변수 선언하거나... 이벤트를...
    constructor(props) {
        super(props); // Component의 생성자 호출
        console.log("constuctor Call...")
        //constructor 안에 선언된 변수(전역변수)는 this.으로 접근한다.
    }

    //파일을 읽거나... 서버에서 전달해주는 값을 받거나...
    componentWillMount() {
        console.log("componentWillMount() Call...");
    }

    //메모리에 올리는 중...
    render() {
        console.log("render() Call...")
        /* map함수 표현방식 3가지
            const html = this.props.music.map((m)=>());
            const html = this.props.music.map((m)=>{
                return ();
            });
            const html = this.props.music.map(fuction(m) {
                return ();
            })
            const html = this.props.music.forEach(fuction(m) {
                return ();
            })

        */
        const html = this.props.music.map((m, idx)=>(
            <tr key={idx}>
                <td>{m.rank}</td>
                <td><img src={m.poster} width={"30"} height={"30"} alt={"앨범표지"}/></td>
                <td>{m.title}</td>
                <td>{m.singer}</td>
            </tr>
        ));

        //return문에서는 html만!! 조작은 이 밖에서!!
        //화면 UI 라이브러리
        /*
            MVC
            ==========
            Model
            View ==========> React
            Controller
        */
        return(
            <div>
                    {/*이름 : {this.props.name} <br/>*/}
                    {/*나이 : {this.props.age} <br/>*/}
                    {/*주소 : {this.props.addr} <br/>*/}
                    <table className={"table"}>
                        <tbody>
                            <tr>
                                <td>
                                    <input type={"text"} id={"keyword"} size={"20"} className={"input-sm"} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={"table table-hover"} id={"user-table"}>
                        <thead>
                            <tr className={"danger"}>
                                <th>순위</th>
                                <th></th>
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

    //화면 출력 시점에... 따라서 외부 연동은 여기서...
    componentDidMount() { //onLoad기능...sciprt 및 Jquery 연동은 이곳에서...
        console.log("componentDidMount Call...")
        $('#keyword').keyup(function () {
            const k = $(this).val();
            $('#user-table>tbody>tr').hide();
            const temp = $(`#user-table>tbody>tr>td:nth-child(4n+3):contains("${k}")`);
            $(temp).parent().show();
        });
    }

}

export default App3;