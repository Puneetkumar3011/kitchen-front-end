import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import socketClient from "socket.io-client";
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

const socket = socketClient('http://localhost:4000', {
    transports: ['websocket', 'polling']
});

const Home = (props) => {
    const [orders, setOrders] = useState({});

    useEffect(() => {
        socket.on('order_event', (eventData) => {
            setOrders(currOrders => {
                const updatedData = getUpdateData(currOrders, eventData, 'id');
                return updatedData;
            });
        });
    }, []);

    const getUpdateData = (currOrders, eventData, property) => {
        let output;
        
        /* modify incmoing orders */
        const incomingOrder = eventData.reduce((acc, obj) => {
            let key = obj[property];
            acc[key] = obj;
            return acc;
        }, {});

        /** copy all existing orders to output array */
        output = {...currOrders};

        /** include incoming orders */
        const keys = Object.keys(incomingOrder);
        keys.forEach(key => {
            output[key] = incomingOrder[key];
        });

        return output;
    }

    return (
        <HomeWrapper>
            <OrderSearch orders={orders} />
            <div className='separator'>&nbsp;</div>
           <DisplayGrid orders={orders} />
        </HomeWrapper>
    );
}

const mapStateToProps = state => ({
    priceSearch: state.search
});

export default connect(mapStateToProps)(Home);