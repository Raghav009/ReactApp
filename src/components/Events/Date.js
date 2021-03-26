
const Test = () => {

    const formatDate = (startDate) => {
        //  '2014-03-18T18:30:00.000Z'
        // SampleBranch 
        let dt = new Date(startDate);

        const month = ['Jan', 'Feb', 'Mar', 'Ápr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        return `${dt.getDate()} ${month[dt.getMonth()]} ${dt.getFullYear()}`

    }

    const displayTotal = () => {
        let sales = 0
        for (let rec of props.total) {
            sales = sales + rec.sales
        }
        return sales;
    }

    return (
        <div>
            formatDate(e.startDate)
        </div>
    )
}