import React from 'react';
import img from '../../myImages/c1.jpg';
import '../Styles.css';

const mystyle = {
    height: '70vh',
    width: '100vw'
  };

export default function brandManagement() {
    return (
        <>
        <img src={img} className="img-responsive" alt="..." style={mystyle}/>
        <h1 className="display-3 text-center fw-bold mt-3">DIET</h1>
        <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
        <br />
        <div className='text-start ms-5 me-5 mb-5'>
            <h5 className='fs-3 mt-2 mb-5'>
            Food Items You Can Easily Consumed By Sports Person
1.Cereals: Brown rice, Oat meal, Brocken wheat, Ragi, Quinoa, Maiz grit, Sweet corn.
2.Pulses: Chickpeas, Kidney beans, moong dal, masoor dal, soybeans.
3.Vegetables: Broccoli, Kale, Spinach, Lettuce, Beet, Potatoes, Carrots, Sweet potatoes, Beans and all other vegetables( especially the green ones such as spinach, lettuce, leeks, broccoli, asparagus, peas, cabbage and beans, are high in minerals, calcium, iron and other vitamins)
4.Fruits: Avacado, Banana, Custard Apple, Pears, Grape and Watermelon, Orenges and Apple sweet corn, bananas are good for carbohydrate loading before even)
5.Milk and Milk products: Skim milk, Paneer, Cotage Cheese, Yoghurt.
6.Meat, Fish and Egg: Lean Meat, Chicken Brest, Tuna, Salmon, Tilapia, Sword fish , Cod.
7.Oil: 1.5 Tbsp/ day Olive oil, Mustard Oil, Rice bran Oil, Canola oil
8.Sugar: 2 Tsp/ day.
                </h5>
        </div>
        <br/>
        </>
    )
}