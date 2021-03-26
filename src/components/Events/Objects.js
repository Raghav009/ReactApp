const ex1 = {
    name: "John",
    address: {
        street: "Banglore",
        pincode: "560095"
    },
    updatedAddress: {
        mango: "Hyderabad",
        pincode: "560095"
    },
    title: "Job",
    link: "Google.com",
    'car': function (){
        console.log('Car Function')
    }
}

// ex1.address.street  // Banglore 

// let address = 'address', street = 'street'

// ex1[address][street]

// address = 'updatedAddress'

// ex1[address][street]

const getAddress = (addressProp, streetProp) => {
    return ex1[addressProp][streetProp];
}

console.log(getAddress('address', 'street'))

console.log(getAddress('updatedAddress', 'mango'))

ex1.car()

let data = {
    id : 1,
    data : [
        {
            name : 'John',
            profession : 'Gov'
        },
        {
            name : 'Smith',
            profession : 'Teacher'
        },
        {
            name : 'Sam',
            profession : 'Tv'
        },
        {
            name : 'Dolly',
            profession : 'Fisher'
        }
    ],
    sample : {
        keys : 'Kitkat'
    }
}

let list = [];

data.data.forEach( e => list.push(e.profession) );

console.log(list)

let list1 = data.data.map(e => {
    return e.name
})

data.data.map(e => e.profession)

data.data.map(e => {
    return e.profession
})

data.data.map(function(e){
    return e.profession
})

console.log(list1)

console.log('end')
