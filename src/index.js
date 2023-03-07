import React from 'react'
import ReactDOM from 'react-dom'

const button = <button>Visualizar</button>

let informations = [
    {name: 'Marcos Henke' , email: 'marcos.henke@email.com'},
    {name: 'Miguel Morassuti' , email: 'miguelao@email.com' },
    {name: 'Wendel Demetrio' , email: 'wendola@email.com'}
]

const pag = 
    <table>
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Visualize</th>
        </tr>
        {informations.map((information) =>
         <tr>
            <td>{information.name}</td>
            <td>{information.email}</td>
            <td>{button}</td>
        </tr> )}              
    </table>
    

    

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(pag)
