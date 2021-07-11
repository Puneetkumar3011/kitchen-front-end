import React from "react";
import styled from 'styled-components'

const WrapperDiv = styled.div`
    table {
        width:100%;
    }
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 15px;
        text-align: left;
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


  & .order-main{
      display: flex;
      margin: 1rem;
      max-width: 1080px;
    & .cutomer{
          width: 15%;
    }
    & .item{
        width: 15%;
    }
    & .price{
        width: 15%;
    }
    & .event_name{
        width: 15%;
    }
    & .destination{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
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

    return (<WrapperDiv>
        <table>
            <tr>
                <th>Customer</th>
                <th>Item</th> 
                <th>Price</th>
                <th>Status</th>
                <th>Destination</th>
            </tr>
            {orders && orders.length && orders.map((order) =>(
                <tr key={order.id}>
                    <td>{order.customer}</td>
                    <td>{order.item}</td>
                    <td>{order.price}</td>
                    <td>{order.event_name}</td>
                    <td className='destination'>{order.destination}</td>
                </tr>
            ))}
       </table>

    </WrapperDiv>);
}

export default DisplayGrid;