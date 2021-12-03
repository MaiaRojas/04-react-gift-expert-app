import React, {useState} from 'react';
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';



export const GifExpertApp = ({ defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories);

  return <>
    <h2>GifExpertApp</h2>
    <hr />
    <AddCategory categories={categories} setCategories={setCategories} />

    <ol>
      {categories.map(category => <GifGrid key={category} category={category} />)}
    </ol>
  </>
};
