import React, {useState} from 'react';

const BmrCalculator = () => {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmr, setBmr] = useState('');
  const [activity, setActivity] = useState('');
  const [result, setResult] = useState('');


  let calcBmr = (event) => {
    event.preventDefault();
    if (gender === '' || weight === '' || height === '' || age === '') {
      alert('All fields are required!')
    }
    else if (gender !== 'female' && gender !== 'male') {
      alert('Tell who you are!')
    }
    else if (gender === 'male') {
      let maleBmr = parseInt((9.99 * weight) + (6.25 * height) - (4.92 * age) + 5);
      setBmr(maleBmr);
    } else if (gender === 'female') {
      let femaleBmr = parseInt((9.99 * weight) + (6.25 * height) - (4.92 * age) - 161);
      setBmr(femaleBmr);
    }
  }

  let calcCalories = (event) => {
    event.preventDefault();
    let selected = activity;
    if (selected === '') {
      alert('Please select your activity')
    } else {
      let result = bmr * selected;
      console.log(bmr)
      console.log(selected)
      console.log(result);
      setResult(result);
    } 


    
  }

  return (
    <section className='hero'>
      <div className='calc-container'>
        <h2>Daily Calorie Calculator</h2>
        
        <div className='input-wrapper'>
          <label className='calc-label'>Are You Female or Male?</label><input  type='text' className='calc-input' value={gender} onChange={(e) => setGender(e.target.value)}></input>
        </div>
        <div className='input-wrapper'>
          <label className='calc-label'>Weight in kg</label><input  type='number' className='calc-input' value={weight} onChange={(e) => setWeight(e.target.value)}></input>
        </div>
        <div className='input-wrapper'>
          <label className='calc-label'>Height in centimeters</label><input  type='number' className='calc-input' value={height} onChange={(e) => setHeight(e.target.value)}></input>
        </div>
        <div className='input-wrapper'>
          <label className='calc-label'>Age in years</label><input type='number' className='calc-input' value={age} onChange={(e) => setAge(e.target.value)}></input>
        <button className='btn' onClick={calcBmr}>Calculate BMR</button>
        <p>Your BMR is: {bmr}</p>
        </div>
        <div className='workout-wrapper'>
          <label className='calc-label'>Workout in a week</label>
          <select className='calc-activity' value={activity} name='activity' onChange={(e) => setActivity(e.target.value)}>
            <option value=''>Select your activity</option>
            <option value='1.2'>Sedentary: little or no exercise</option>
            <option value='1.375'>Exercise 1-3 times/week</option>
            <option value='1.55'>Exercise 4-5 times/week</option>
            <option value='1.725'>Daily exercise or intense exercise 3-4 times/week</option>
            <option value='1.9'>Intense exercise 6-7 times/week</option>
          </select>
          <button className='btn' onClick={calcCalories}>Calculate Calories</button>
          <p>You need calories per day: {result}</p>
        </div>

      </div>
    </section>
  )
}

export default BmrCalculator