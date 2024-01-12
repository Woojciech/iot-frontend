import React, { useState } from 'react'

export const Home = () => {
    const [account, setAccount] = useState({ idKonta: 3, bilans: 3000 })
    const [transactions, setTransactions] = useState([
        { idTransakcji: 1, idKonta: 3, czyWplata: true, kwota: 300, stanKonta: 300 },
        { idTransakcji: 2, idKonta: 3, czyWplata: false, kwota: 100, stanKonta: 200 },
        { idTransakcji: 3, idKonta: 3, czyWplata: true, kwota: 300, stanKonta: 500 },
        { idTransakcji: 4, idKonta: 3, czyWplata: true, kwota: 300, stanKonta: 800 }
    ])

    return (
        <div className="container mt-5 mb-4">
            <div className='mb-3 row text-center'>
              <h1 className='display-4'>Konto Jana Nowaka</h1>
            </div>

            <div className="col rounded m-aut border p-4">
                <div className='mb-3 row text-left p-3'>
                    <h3 className='display-5'>Transakcje</h3>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Kwota</th>
                            <th scope="col">Rodzaj</th>
                            <th scope="col">Stan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map((transaction, idx) => (
                                <tr> 
                                    <th scope="row">{transaction.idTransakcji}</th>
                                    <td>{transaction.kwota}</td>
                                    <td className={ transaction.czyWplata ? 'text-success ': 'text-danger'}>
                                        {
                                            transaction.czyWplata ? "Uznanie" : "Obciążenie"
                                        }
                                    </td>
                                    <td>{transaction.stanKonta}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
