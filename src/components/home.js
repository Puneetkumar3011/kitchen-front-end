import React, {useEffect, useState} from 'react';
import io from "socket.io-client";
import styled from "styled-components";

import DisplayGrid from "./displayGrid";
import OrderSearch from './orderSearch';

const HomeWrapper = styled.div`
  & .separator {
      height: 1rem;
  }
`;

const socket = io('http://localhost:4000', {
    transports: ['websocket', 'polling']
});

const Home = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        socket.on('order_event', (eventData) => {
            setOrders(currOrders => {
                return updateData(eventData);
            });
        });
    }, []);

    const updateData = (orderRequests) => {
        const result = orderRequests.reduce((acc, it) => (acc[it.id] = it, acc), {});
        return result;
    }

    return (
        <HomeWrapper>
            <OrderSearch orders={orders} />
            <div className='separator'>&nbsp;</div>
           <DisplayGrid orders={orders} />
        </HomeWrapper>
    );
}

export default Home;