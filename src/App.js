/** @format */

import Header from './components/Header';
import Additem from './components/Additem';
import Cartitem from './components/Cartitem';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

function App() {
	const [items, setItems] = useState([]);
	const local_storage_key = 'itemlist';

	useEffect(() => {
		const getdata = JSON.parse(localStorage.getItem(local_storage_key));
		if (getdata) setItems(getdata);
	}, []);
	useEffect(() => {
		localStorage.setItem(local_storage_key, JSON.stringify(items));
	}, [items]);

	const handleadd = (names) => {
		const o = {
			id: uuidv4(),
			item: names,
			quantity: 1,
		};
		setItems([...items, o]);
	};
	const handledelete = (id) => {
		const newitemlist = items.filter((item) => {
			return item.id !== id;
		});
		setItems(newitemlist);
	};

  const increase = (index) => {
    const currentItems = [...items];

    currentItems[index].quantity += 1;
    setItems(currentItems);
  };
 const decrease=(index)=>
 {
    const newitems=[...items];
    if(newitems[index].quantity>1){
      newitems[index].quantity-=1;
    }
    else
    {
      alert("minimum 1 quantity possible");
      return;
    }
    setItems(newitems);
 }
	return (
		<div className='App'>
			<Header title='Ration List' />
			<div className='cart'>
				<Additem handleadd={handleadd} />
				<div className='display'>
					{items.length ? (
						<Cartitem items={items} del={handledelete} increase={increase} decrease={decrease}></Cartitem>
					) : (
						<p className='empty'>There is no item to display</p>
					)}
					<hr></hr>
				</div>
			</div>
		</div>
	);
}

export default App;
