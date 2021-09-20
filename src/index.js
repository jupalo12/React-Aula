import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
// import "./style.css"
// import Button from "./Button"
// import ComponentA from "./ComponentA"
// import ComponentB from "./ComponentB"
// aula 1 -----------------------------------
// function sum(a,b){
//     return (
//         a + b 
//     )
// }
// function primeiroJSX(){
//     return (
//         <div className="teste"> Juan Pablo - Introdução ao React Js
//             <h1>Soma: {sum(10,10)}</h1>
//         </div>
//     )
// }
// const App = () => {
//     return (
//         <div className="App">
// {primeiroJSX()}

//             </div>
//     )
// }
// Elements - Aula 2 -------------------------
// const element = 'Digital innovation'
// const element2 = <h1>Olá turma</h1>

// function App(){
//     return(
//         <div>
//             {element}
//             {element2}
//         </div>
//     )
//     }

// aula 3 - Components e drops ----------------------

// function 
// soma(a,b){
//     return (
//         alert(a + b) 
//     )
// }

// const App = () => {
//     return (
//         <div className="App">
//             hello world
//             <Button onClick={() => soma(10,10)} name='Juan Pablo' />
// <ComponentA>
// <ComponentB>
// <Button onClick={() => soma(20,40)} name='juju poli' />
// </ComponentB>

// </ComponentA>
//         </div>
//     )
// }


// LifeCycle ---------------

// class App extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             clock: 1000,
//             copo: 'água'
//         }
//     }

//     componentDidMount(){
//         window.setTimeout(()=>{
//             this.setState({
//                 copo:'suco'
//             })
//         },2000)
//     }

//     alterarCopo = () => {
//         this.setState({
//             copo: 'refrigerante'
//         })
//     }

//     render() {
//         const { clock, copo } = this.state
//         return (
//             <div>
//                 <h1>{clock}</h1>
//                 <h1>{copo}</h1>
//                 <button onClick={() => this.alterarCopo()}>alterar Copo</button>
//             </div>
//         )
//     }
// }

// const rootElement = document.getElementById("root")
ReactDOM.render(<App />, document.getElementById("app"))