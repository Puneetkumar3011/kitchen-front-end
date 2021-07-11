import React from "react";
import styled from 'styled-components'

const WrapperDiv = styled.div`
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
    & .destination{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;

const orders1 = [
    {
        "customer": "Carla Garner",
        "destination": "61109 Alan Motorway, North Corey, CA 92789",
        "event_name": "COOKED",
        "id": "d0791ce1",
        "item": "Caesar salad",
        "price": 4692,
        "sent_at_second": 13
    },
    {
        "customer": "Carla Garner",
        "destination": "61109 Alan Motorway, North Corey, CA 92789",
        "event_name": "DRIVER_RECEIVED",
        "id": "d0791ce1",
        "item": "Caesar salad",
        "price": 4692,
        "sent_at_second": 18
    }
];

const DisplayGrid = (props) => {
    const {orders} = props;
    const orderKeyIds = Object.keys(orders);

    const getOrderId = (order) => {
        return order.id + order.customer.trim() + order.item.trim() + order.price + order.event_name.trim();
    }

    return (<WrapperDiv>
        <table>
            <tbody>
                <tr>
                    <th>Customer</th>
                    <th>Item</th> 
                    <th>Price</th>
                    <th>Status</th>
                    <th>Destination</th>
                </tr>
            {orderKeyIds && orderKeyIds.length && orderKeyIds.map((id) =>(
                <tr key={getOrderId(orders[id])}>
                    <td>{orders[id].customer}</td>
                    <td>{orders[id].item}</td>
                    <td>{orders[id].price}</td>
                    <td>{orders[id].event_name}</td>
                    <td className='destination'>{orders[id].destination}</td>
                </tr>
            ))}
            </tbody>
       </table>

    </WrapperDiv>);
}

export default DisplayGrid;