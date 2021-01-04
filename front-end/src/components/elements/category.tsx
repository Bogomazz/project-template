import React from "react";
import { Link } from "react-router-dom";
import { Category } from "../../models/category";
import { CategoriesService } from "../../services/categories.service";

type CategoryComponentProps = {
  onChange: () => void;
  category: Category;
}

type CategoryViewProps = {
  onDelete: (id: number) => void;
  category: Category;
}

class CategoryView extends React.Component<CategoryViewProps> {
  render() {
    const category = this.props.category;
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Link to={`/categories/${category.id}`}><h1>{category.name}</h1></Link>
          <button 
            onClick={() => this.props.onDelete(category.id)} 
            style={{marginLeft: '10px'}}>
              Delete
          </button>
        </div>  
      </div>
    )
  }
}

export class CategoryComponent extends React.Component<CategoryComponentProps> {
  deleteCategory = (id: number) => {
    const confirmed = window.confirm('Are you sure?');
    if (confirmed) {
      CategoriesService.remove(id)
        .then(() => {
          this.props.onChange();
        });
    }
  }

  render() {
    return <CategoryView 
      category={this.props.category} 
      onDelete={this.deleteCategory} 
    />
  }
  
}