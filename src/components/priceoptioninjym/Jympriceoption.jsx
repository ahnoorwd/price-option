import Gymsingleoption from "../gymsingleprice/Gymsingleoption";


const Jympriceoption = () => {
 const priceoption=[
  {
    "id": 1,
    "name": "Basic Plan",
    "price": 29.99,
    "features": [
      "Access to gym equipment",
      "1 personal training session per month",
      "Locker room access"
    ]
  },
  {
    "id": 2,
    "name": "Standard Plan",
    "price": 49.99,
    "features": [
      "Access to gym equipment",
      "4 personal training sessions per month",
      "Locker room access",
      "Access to group fitness classes"
    ]
  },
  {
    "id": 3,
    "name": "Premium Plan",
    "price": 79.99,
    "features": [
      "Access to gym equipment",
      "Unlimited personal training sessions",
      "Locker room access",
      "Access to group fitness classes",
      "Access to the sauna and spa",
      "Free gym merchandise"
    ]
  },
  {
    "id": 4,
    "name": "Family Plan",
    "price": 119.99,
    "features": [
      "Access to gym equipment for up to 4 family members",
      "8 personal training sessions per month",
      "Locker room access",
      "Access to group fitness classes",
      "Access to the sauna and spa"
    ]
  },
  {
    "id": 5,
    "name": "Student Plan",
    "price": 19.99,
    "features": [
      "Access to gym equipment",
      "2 personal training sessions per month",
      "Locker room access",
      "Access to group fitness classes"
    ]
  }
]

    return (
        <div className="m-6">
            <h2 className="text-3xl my-5">This is the best price in the town</h2>
           <div className="grid md:grid-cols-3  grid-cols-1 gap-6">
           {
            priceoption.map(option=><Gymsingleoption key={option.id} option={option}></Gymsingleoption>)  
            }
           </div>
        </div>
    );
};

export default Jympriceoption;