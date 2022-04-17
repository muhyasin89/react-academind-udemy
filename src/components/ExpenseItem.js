import './ExpenseItem.css';

function ExpenseItem(props){


    const listItem = props.expenses.map((data) => (
        <div key={data.id} className="expense-item">
            <div className='expense-item__description'>
            <h2>Title: {data.title}</h2>
            
            <div>
                <div>Date</div>
                <div>{data.date.toLocaleString('en-US', {month: 'long'})}</div>
                <div>{data.date.getFullYear()}</div>
                <div>{data.date.toLocaleString('en-US', {day: '2-digit'})}</div>
            </div>
        </div>
            <div className='expense-item__price'><p>Rp. {data.amount}</p></div>
        </div>
            
    ));

    return (
    <div>
       {listItem}
    </div>);
}

export default ExpenseItem;