import React, { useState } from "react";

const ExM = () => {

    return (
        <div>
            Example Comp
            <Ex1 name="Test" age="20" />
        </div>
    )
}

const Ex1 = ({ name, age }) => {

    const [click, setclick] = useState('EX1 Click')

    const clickHandle = (e) => {
        setclick(e);
    }

    const onHandle = (e) => {
        setText(e.target.value)
    }

    const GetTotal = () => {

        let sales = 0, income = 0;

        for (let result of data.results) {
            sales += sales + result.sales;
            income += income + result.income;
        }

        income = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(income);

        return (
            <>
                Sales = {sales} - Income = {income}
            </>
        )

    }

    const [text, setText] = useState('');

    return (
        <div>
            {/* Example Comp1 {name}, {age}
            <Ex2 name={name} age={age} method={clickHandle} />
            <Ex3 name={name} age={age} method={clickHandle} handle={onHandle} />
            {click}
            Ex3 - input value = {text} */}
            <div>
                {GetTotal()} - views - {data.views}
            </div>
            {
                data.results.map((e, i) => {
                    return <DisplayComp row={e} key={i} />
                })
            }
        </div>
    )
}

const DisplayComp = ({ row }) => {

    const formatPhone = (num) => {
        // https://www.npmjs.com/package/react-number-format
        let match = (num + '').match(/^(\d{3})(\d{3})(\d{4})$/);
        let str = match ? `${match[1]}-${match[2]}-${match[3]}` : null;
        return str;
    }

    return (
        <div>
            Name : {row.name} -
            Phone Number : {formatPhone(row.phoneNumber)} -
            Date : {
                new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' })
                    .format(new Date(row.startDate))
            }
        </div>
    )
}

const Ex2 = ({ name, age, method }) => {

    return (
        <div>
            Example Comp2 {name}, {age}
            <button onClick={() => method('Ex2 Click')}>Click Ex2</button>
        </div>
    )
}

const Ex3 = ({ name, age, method, handle }) => {

    return (
        <div>
            Example Comp2 {name}, {age}
            <button onClick={() => method('Ex3 Click')}>Click Ex3</button>
            <input type="text" onChange={(e) => handle(e)} />
        </div>
    )
}

export default ExM;


const data = {
    "results": [
        {
            "name": "Jerry",
            "startDate": "2018-08-12T18:30:00.000Z",
            "phoneNumber": 2516615362,
            "location": "New York",
            "sales": 745,
            "income": 789845
        },
        {
            "name": "Marcos",
            "startDate": "2019-05-16T18:30:00.000Z",
            "phoneNumber": 2516615362,
            "location": "New York",
            "sales": 56,
            "income": 45267
        },
        {
            "name": "John",
            "startDate": "2017-11-11T18:30:00.000Z",
            "phoneNumber": 2516615362,
            "location": "New York",
            "sales": 4563,
            "income": 564654
        },
        {
            "name": "Alvis",
            "startDate": "2014-03-18T18:30:00.000Z",
            "phoneNumber": 2516615362,
            "location": "New York",
            "sales": 785212,
            "income": 1236544755
        }],
    "views": 412533
}