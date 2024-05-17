import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import '../card.scss'
import { useDispatch } from 'react-redux';
import { fetchdata } from '../store/recipe_slice';
import {  Droppable, Draggable } from 'react-beautiful-dnd'

function Recipe_list({ data, selected }) {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchdata())
  }, [])
  return (
    <>



      <Droppable droppableId="recipeList">
        {
          (provided) => (

            <div ref={provided.innerRef} {...provided.droppableProps} className="container">

              {
                data.meals?.map((item) => (
                  <Draggable draggableId={item.idMeal}>
                    {
                      (provided) => (
                        <>
                          <div className="card" ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <img src={item.strMealThumb} alt="" />
                            <div className="info">
                              <h1>{item.strMeal}</h1>
                              <button onClick={() => selected(item)}>see details</button>
                            </div>
                          </div>
                        </>
                      )
                    }

                  </Draggable>
                 

                ))
                
              }
              

              {provided.placeholder}
            </div>
            
          )
          
        }

      </Droppable>




    </>
  )
}

export default Recipe_list