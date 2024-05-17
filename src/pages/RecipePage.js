import React, { useState } from 'react'
import Recipe_list from '../components/Recipe_list'
import { useSelector } from 'react-redux'
import Recipe_detail from '../components/Recipe_detail'
import { Grid } from '@mui/material'
import { DragDropContext } from 'react-beautiful-dnd'


function RecipePage() {
    const { recipe_data } = useSelector(state => state.recipe_slice)
    const [selectedRecipe, setSelectedRecipe] = useState(null)



    return (
        <>
            <Grid container>
                <Grid item >
                    <DragDropContext>

                        <Recipe_list data={recipe_data} selected={setSelectedRecipe} />
                    </DragDropContext>

                </Grid>
                <Grid item md={8} >
                    {
                        selectedRecipe ? (

                            <Recipe_detail selected={selectedRecipe} />
                        ) : ""
                    }

                </Grid>
            </Grid>

        </>
    )
}

export default RecipePage