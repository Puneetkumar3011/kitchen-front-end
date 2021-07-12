import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { updateSearchTerm } from "../store/actions/appActions";

import {
    AutoCompleteContainer,
    AutoCompleteIcon,
    Input,
    AutoCompleteItem,
    AutoCompleteItemButton
} from "../styles";

const OrderSearchWrapper = styled.div`
  position: relative;
  width: 320px;
`;

const OrderSearch = (props) => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState({
        text: "",
        suggestions: []
      });
    const [isComponentVisible, setIsComponentVisible] = useState(true);
    const { suggestions } = search;

    useEffect(() => {
        if(props.orders) {
            const values = Object.values(props.orders);
            setData(values);
            if(isComponentVisible) {
                onTextChanged(search.text);
            }
        }
    }, [props.orders]);

    const onTextChanged = (value) => {
        let suggestions = [];
        if (value.length > 0) {
            suggestions = data.filter((order) => { 
                order.price = order.price + '';
                return order.price.indexOf(value) > -1;
                // return order.price === value;
            });
        } else {
            props.updateSearchTerm({});
        }
        setIsComponentVisible(true);
        setSearch({ suggestions, text: value });
    };

    const suggestionSelected = (value) => {
        setIsComponentVisible(false);
        setSearch({
          text: value.customer,
          suggestions: []
        });
        props.updateSearchTerm(value);
      };

    return (
        <OrderSearchWrapper>
            <div
                onClick={() => setIsComponentVisible(false)}
                style={{
                display: isComponentVisible ? "block" : "none",
                width: "200vw",
                height: "200vh",
                backgroundColor: "transparent",
                position: "fixed",
                zIndex: 0,
                top: 0,
                left: 0
                }}
            />
            <div>
                <Input
                id="input"
                autoComplete="off"
                value={search.text}
                onChange={(e) => onTextChanged(e.target.value)}
                type={"text"}
                />
                <AutoCompleteIcon isOpen={isComponentVisible}>
                </AutoCompleteIcon>
            </div>
            {suggestions.length > 0 && isComponentVisible && (
                <AutoCompleteContainer>
                {suggestions.map((item) => (
                    <AutoCompleteItem key={item.id}>
                    <AutoCompleteItemButton
                        key={item.id}
                        onClick={() => suggestionSelected(item)}
                    >
                        {item.customer}
                    </AutoCompleteItemButton>
                    </AutoCompleteItem>
                ))}
                </AutoCompleteContainer>
            )}
    </OrderSearchWrapper>
    );
}

const mapStateToProps = state => ({
    ordersTest: state.orders
});

export default connect(mapStateToProps, { updateSearchTerm })(OrderSearch);
