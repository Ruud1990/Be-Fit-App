import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


const SearchExercises = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searchedExercises/' + input)
    }

    return (
              <form className='search-form' onSubmit={submitHandler}>
                <div className='form-control'>
                  <label htmlFor='name'>search your Exercises</label>
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder="Search..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </div>
                </div>
              </form>
          )
        }
                

export default SearchExercises