import React from "react";
import { Category } from "../../models/category";
import { CategoriesService } from "../../services/categories.service";
import { StoreContext } from "../../store/store.context";
import { CategoryComponent } from "../elements/category";

export class CategoriesPage extends React.Component {
  updateCategories = () => {
    return CategoriesService.getAll()
      .then(categories => {
        this.context.setCategories(categories);
      }); 
  }

  addCategory = () => {
    const categoryName = prompt('Enter category name');
    if (!categoryName) {
      return;
    }
    return CategoriesService.create(categoryName)
      .then(this.updateCategories)
  }

  componentDidMount() {
    this.updateCategories();
  }
  
  render() {
    if (!this.context.categories) {
      return <div>Loading... Please, wait</div>;
    }

    return (
      <>
        <button onClick={this.addCategory}>Add category</button>
        {
          this.context.categories.map(
            (category: Category, i: number) => (
              <CategoryComponent 
                key={i} 
                category={category} 
                onChange={this.updateCategories}
              />
            )
          )
        }
      </>
    )
  }
}
CategoriesPage.contextType = StoreContext;