import React from "react";
import styled from 'styled-components'

const WrapperDiv = styled.div`
    & .tableFixHead {
        overflow-y: auto;
        height: 90vh;
    }
    & .tableFixHead thead th {
        position: sticky;
        top: 0;
    }
    table {
        width:100%;
    }
    table, th, td {
        border-collapse: collapse;
    }
    th, td {
        padding: 15px;
        text-align: left;
    }
    tr{
        border-bottom: 1px solid black;
    }
    tr:nth-child(even) {
        background-color: #eee;
    }
    tr:nth-child(odd) {
        background-color: #fff;
    }
    th {
        background-color: black;
        color: white;
    }
    & .regular-cells{
        width: 100px;
        min-width: 100px;
    }
    & .regular-customer{
        width: 130px;
        min-width: 130px;
    }
    & .regular-item{
        width: 140px;
        min-width: 140px;
    }
    & .destination{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;

const orders1 = {
    d0791ce1: {
        "customer": "Carla Garner",
        "destination": "61109 Alan Motorway, North Corey, CA 92789",
        "event_name": "COOKED",
        "id": "d0791ce1",
        "item": "Caesar salad",
        "price": 4692,
        "sent_at_second": 13
    },
    d0791ce2: {
        "customer": "Carla Garner",
        "destination": "61109 Alan Motorway, North Corey, CA 92789",
        "event_name": "DRIVER_RECEIVED",
        "id": "d0791ce2",
        "item": "Caesar salad",
        "price": 4692,
        "sent_at_second": 18
    }
}
;

const DisplayGrid = (props) => {
    const {orders} = props;
    const orderKeyIds = Object.keys(orders);

    const getOrderId = (order) => {
        if(!order || !order.id) return '';
        return order.id + order.customer.trim() + order.item.trim() + order.price + order.event_name.trim();
    }

    return (<WrapperDiv>
        <div className='tableFixHead'>
            <table>
                <thead>
                    <tr>
                        <th className='regular-customer'>Customer</th>
                        <th className='regular-item'>Item</th> 
                        <th className='regular-cells'>Price</th>
                        <th className='regular-cells'>Status</th>
                        <th>Destination</th>
                    </tr>  
                </thead>
                <tbody>
                {orderKeyIds && orderKeyIds.length && orderKeyIds.map((id) =>(
                    <tr key={getOrderId(orders[id])}>
                        <td className='regular-customer'>{orders[id].customer}</td>
                        <td className='regular-item'>{orders[id].item}</td>
                        <td className='regular-cells'>{orders[id].price}</td>
                        <td className='regular-cells'>{orders[id].event_name}</td>
                        <td className='destination'>{orders[id].destination}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </WrapperDiv>);
}

export default DisplayGrid;