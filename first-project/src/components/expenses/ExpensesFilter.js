
import './ExpensesFilter.css';

function ExpensesFilter(props) {

    const years = [2023, 2022, 2021, 2020, 2019];

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {
                        years.map((year) => {
                            return <option
                                key={year}
                                value={year}>{year}
                            </option>
                        })
                    }
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;