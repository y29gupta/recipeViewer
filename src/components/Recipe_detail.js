import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipeDetails } from '../store/recipe_slice'
import '../card.scss'

function Recipe_detail({ selected }) {
    const { details } = useSelector(state => state.recipe_slice)
  
    console.log(selected, "meals")

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRecipeDetails(selected.idMeal))

    }, [selected])
    return (
        <>
            <Grid className='recipeDetailsCard' alignItems="center"
                style={{
                    width: "100%",
                    margin: "10px"
                }} container flexDirection="column">
                {
                    details?.meals.map((item) => (
                        <>

                            <Grid item>
                                <img className='imgDetails' src={item.strMealThumb} alt={item.strMeal} />
                            </Grid>
                            <Grid item>
                                <div>

                                    <h3>{item.strMeal}</h3>
                                    <p > <span >Category:</span> {item.strCategory}</p>
                                    <p style={{ marginTop: "10px", textAlign: "justify" }}>
                                        <span >Instructions:</span> {item?.strInstructions}

                                    </p>
                                    <p style={{ marginTop: "10px" }}>
                                        <span>Youtube Link : </span><a href={item.strYoutube}>{item.strYoutube}</a>
                                    </p>
                                </div>
                            </Grid>
                            <Grid item></Grid>
                        </>
                    ))
                }
            </Grid>
        </>
    )
}

export default Recipe_detail