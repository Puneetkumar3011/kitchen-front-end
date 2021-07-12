import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
		width: 100%;
	}
	table,
	th,
	td {
		border-collapse: collapse;
	}
	th,
	td {
		padding: 15px;
		text-align: left;
	}
	tr {
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
	& .regular-cells {
		width: 115px;
		min-width: 115px;
	}
	& .regular-customer {
		width: 160px;
		min-width: 160px;
	}
	& .regular-item {
		width: 190px;
		min-width: 190px;
	}
	& .destination {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
`;

let priceSearch;

const DisplayGrid = (props) => {
	const { orders } = props;
	const orderKeyIds = Object.keys(orders);

	useEffect(() => {
		priceSearch = props.priceSearch.searchPrice;
	}, [props.priceSearch]);

	const getOrderId = (order) => {
		return (
			order.id +
			order.customer.trim() +
			order.item.trim() +
			order.price +
			order.event_name.trim()
		);
	};

	const getDataRows = (orderKeyIds) => {
		if (orderKeyIds && orderKeyIds.length) {
			return orderKeyIds.map(
				(id) =>
					(!priceSearch || orders[id].price == priceSearch) && (
						<tr key={getOrderId(orders[id])}>
							<td className='regular-customer'>{orders[id].customer}</td>
							<td className='regular-item'>{orders[id].item}</td>
							<td className='regular-cells'>{orders[id].price}</td>
							<td className='regular-cells'>{orders[id].event_name}</td>
							<td className='destination'>{orders[id].destination}</td>
						</tr>
					)
			);
		} else {
			return null;
		}
	};

	return (
		<WrapperDiv>
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
					<tbody>{getDataRows(orderKeyIds)}</tbody>
				</table>
			</div>
		</WrapperDiv>
	);
};

const mapStateToProps = (state) => ({
	priceSearch: state.search,
});

export default connect(mapStateToProps)(DisplayGrid);
