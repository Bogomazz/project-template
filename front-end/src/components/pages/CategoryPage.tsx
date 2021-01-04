import React from "react";
import { Category } from "../../models/category";
import { CategoriesService } from "../../services/categories.service";
import { StoreContext } from "../../store/store.context";
import { Store } from "../../store/store.interface";
import { HomeButton } from "../elements/home-button";
import { ProductView } from "../elements/product-view";

export class CategoryPage extends React.Component<any, {category: Category | null}, Store> {

  constructor(props: any) {
    super(props);
    this.state = {
      category: null,
    }
  }

  async componentDidMount() {
    const category = await CategoriesService.get(parseInt(this.props.match.params.id));
    this.setState({category});
  }

  render() {
    if (!this.state.category) {
      return <h1>Category not found</h1>;
    }

    return (
      <>
        <HomeButton />
        <h1>{this.state.category.name}</h1>
        {
          this.state.category?.products.map(
            (product => <ProductView product={product}/>)
          )
        }
      </>
    )
  }
}

CategoryPage.contextType = StoreContext;