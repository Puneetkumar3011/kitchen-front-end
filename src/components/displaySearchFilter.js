import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const SearchFilterWrapper = styled.div`
	display: flex;
	align-self: center;
	justify-content: flex-end;
	font-weight: 500;
	width: 40%;
`;

const DisplaySearchFilter = (props) => {
	const [count, setCount] = '';
	const { orders } = props;
	const orderKeyIds = Object.keys(orders);

	const getCount = () => {
		let counter = 0;
		if (orderKeyIds && orderKeyIds.length) {
			orderKeyIds.forEach((id) => {
				if (orders[id].price == props.priceSearch.searchPrice) {
					counter += 1;
				}
			});
			return counter;
		}
		return '';
	};

	return (
		<SearchFilterWrapper>
			{props.priceSearch && props.priceSearch.searchPrice && (
				<React.Fragment>
					<div>Search by Price: {props.priceSearch.searchPrice}</div>
					<div style={{ marginLeft: '1rem' }}>Count: {getCount()}</div>
				</React.Fragment>
			)}
		</SearchFilterWrapper>
	);
};

const mapStateToProps = (state) => ({
	priceSearch: state.search,
});

export default connect(mapStateToProps)(DisplaySearchFilter);
