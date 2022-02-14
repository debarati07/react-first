import React from 'react';
import { FaLessThan, FaGreaterThan,FaTrashAlt } from 'react-icons/fa';

const Cartitem = ({ items, del,increase,decrease }) => {
	const listitems = items.map((i,index) => (
		<div className='listitemstyling' key={i.id}>
			<div>
				<h3  style={{ color: 'white' }}>
					{i.item}
				</h3>
			</div>
			<div style={{ marginTop: '10px', padding: '10px' }}>
				<button
					style={{
						borderRadius: '10px',
						padding: '4px',
						color: '#ec8071',
					}}>
					<FaLessThan style={{ marginRight: '6px' }} onClick={()=>{decrease(index)}} />
					{i.quantity}
					<FaGreaterThan style={{ marginLeft: '6px' }} onClick={()=>{increase(index)}}/>
				</button>
                <FaTrashAlt style={{marginLeft:"20px",color:"white"}} onClick={()=>{del(i.id)}} />
			</div>
		</div>
	));
	return <div>{listitems}</div>;
};

export default Cartitem;
