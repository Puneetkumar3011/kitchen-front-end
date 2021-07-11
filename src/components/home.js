import React, {useEffect, useState} from 'react';
import io from "socket.io-client";
import styled from "styled-components";

import DisplayGrid from "./displayGrid";
import OrderSearch from './orderSearch';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    
  & .separator {
      height: 1rem;
  }
`;

const socket = io('http://localhost:4000', {
    transports: ['websocket', 'polling']
});

const Home = () => {
    const [orders, setOrders] = useState([]);
    const [seachTerm, setSearchTerm] = useState('');

    useEffect(() => {
        socket.on('order_event', (eventData) => {
            setOrders(currOrders => {
                const updatedData = getUpdateData(eventData, 'id');
                return updatedData;
            });
        });
    }, []);

    const getUpdateData = (objectArray, property) => {
        return objectArray.reduce((acc, obj) => {
            let key = obj[property];
            acc[key] = obj;
            return acc;
        }, {});
    }

    const onOrderSeach = (term) => {
        setSearchTerm(term);
    }

    return (
        <HomeWrapper>
            <OrderSearch orders={orders} onSeachClick={onOrderSeach} />
            <div className='separator'>&nbsp;</div>
           <DisplayGrid orders={orders} />
        </HomeWrapper>
    );
}

export default Home;