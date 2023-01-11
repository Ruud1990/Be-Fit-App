import React from 'react';
import {NavLink} from 'react-router-dom';
import {RiOpenArmFill} from 'react-icons/ri';
import {BiRun, BiBody} from 'react-icons/bi';
import {GiBackPain, GiLeg, GiForearm} from 'react-icons/gi';
import {MdAirlineSeatLegroomExtra, MdEmojiPeople, MdPerson} from 'react-icons/md';
import {GoPerson} from 'react-icons/go';

const ExercisesCategories = () => {
  return(
    <div className='exercises-categories-wrapper'>
        <NavLink className='category-link exercise' to={'/exercises/back'}>
            <GiBackPain className='category-icon exercise'/>
            <h4>back</h4>
        </NavLink>
        <NavLink className='category-link exercise' to={'/exercises/cardio'}>
            <BiRun className='category-icon exercise'/>
            <h4>cardio</h4>
        </NavLink>
        <NavLink className='category-link exercise' to={'/exercises/chest'}>
            <GoPerson className='category-icon exercise'/>
            <h4>chest</h4>
        </NavLink>
        <NavLink className='category-link exercise' to={'/exercises/lower arms'}>
            <GiForearm className='category-icon exercise'/>
            <h4>lower arms</h4>
        </NavLink>
        <NavLink className='category-link exercise' to={'/exercises/lower legs'}>
            <GiLeg className='category-icon exercise'/>
            <h4>lower legs</h4>
        </NavLink>
        <NavLink className='category-link exercise' to={'/exercises/neck'}>
            <MdPerson className='category-icon exercise'/>
            <h4>neck</h4>
        </NavLink>
        <NavLink className='category-link exercise' to={'/exercises/shoulders'}>
            <RiOpenArmFill className='category-icon exercise'/>
            <h4>shoulders</h4>
        </NavLink>
        <NavLink className='category-link exercise' to={'/exercises/upper arms'}>
            <MdEmojiPeople className='category-icon exercise'/>
            <h4>upper arms</h4>
        </NavLink>
        <NavLink className='category-link exercise' to={'/exercises/upper legs'}>
            <MdAirlineSeatLegroomExtra className='category-icon exercise'/>
            <h4>upper legs</h4>
        </NavLink>
        <NavLink className='category-link exercise' to={'/exercises/waist'}>
            <BiBody className='category-icon exercise'/>
            <h4>waist</h4>
        </NavLink>
    </div>
  )
}

export default ExercisesCategories