'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"


const isInValidateInput = (input) => {
return !input || !input.trim() === ''
}
export async function shareMeal(prevState,formData){

    await new Promise((resolve, reject) => setTimeout((resolve()), 5000))

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (isInValidateInput(meal.title) || 
        isInValidateInput(meal.summary) || 
        isInValidateInput(meal.instructions) || 
        isInValidateInput(meal.creator) || 
        !meal.image || 
        meal.image.size === 0 || 
        !meal.creator_email.includes('@')){
        return {
            message : "invalid Input"
        }
    }

    await saveMeal(meal)
    revalidatePath('/meals')
    redirect('/meals')
}