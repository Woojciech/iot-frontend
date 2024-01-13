import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from "axios"

export const Home = () => {
    const { accountId } = useParams()
    const client = axios.create({
        baseURL: "http://localhost:5000"
    })

    const [account, setAccount] = useState({ 
        // idKonta: 3, bilans: 3000 
    })
    const [transactions, setTransactions] = useState([
        // { idTransakcji: 1, idKonta: 3, czyWplata: true, kwota: 300, stanKonta: 300 },
        // { idTransakcji: 2, idKonta: 3, czyWplata: false, kwota: 100, stanKonta: 200 },
        // { idTransakcji: 3, idKonta: 3, czyWplata: true, kwota: 300, stanKonta: 500 },
        // { idTransakcji: 4, idKonta: 3, czyWplata: true, kwota: 300, stanKonta: 800 }
    ])


    useEffect(() => {
        console.log('Fetching data for accountId: ' + accountId)
        fetchData();
    }, [])
    
    const fetchData = async () => {
        const formData = await client.get("/bank/data/" + accountId)
            .catch((error) => {});

        console.log(formData);
        setAccount(formData?.data?.account)
        setTransactions(formData?.data?.transactions)
    }

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
                            <th scope="col">Id Transakcji</th>
                            <th scope="col">Id Konta</th>
                            <th scope="col">Kwota</th>
                            <th scope="col">Rodzaj</th>
                            <th scope="col">Stan Konta</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions?.map((transaction, idx) => (
                                <tr> 
                                    <td>{transaction?.idTransakcji}</td>
                                    <td>{transaction?.idKonta}</td>
                                    <td>{transaction?.wartoscTransakcji}</td>
                                    <td className={ transaction?.czyWplata ? 'text-success fw-bold': 'text-danger fw-bold'}>
                                        {
                                            transaction?.czyWplata ? "Uznanie" : "Obciążenie"
                                        }
                                    </td>
                                    <td>{account?.bilans}</td>
                                    <td className={ transaction?.czyUdana ? 'text-success fw-bold': 'text-danger fw-bold' }>
                                        {
                                            transaction?.czyUdana ? "Udana" : "Nieudana"
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
