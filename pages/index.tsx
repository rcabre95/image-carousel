import React, { Component } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'
import axios from 'axios'

interface ICatObj {
  breeds: any;
  id: string;
  url: string;
  width: number;
  height: number;
}

interface ICategories {
  id: number;
  name: string
}

interface IHomeProps {

}

interface IHomeState {
  categories: ICategories[]
  category: number;
  catURLs: any[];
}

class Home extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      categories: [],
      category: 0,
      catURLs: []
    }

    this.getCats = this.getCats.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
  }

  changeCategory(e: any) {
    this.setState({
      category: e.target.value
    })
  }

  getCats() {
    axios.get(`https://api.thecatapi.com/v1/images/search`, {
      params: {
        limit: 10,
        category_ids: this.state.category == 0 ? "" : this.state.category,
        "api-key": process.env.NEXT_PUBLIC_CAT_KEY
      }
    })
      .then(res => {
        const catImg = res.data
        const catURLArray: string[] = catImg.map((cat: ICatObj) => {
          return cat.url
        })
        this.setState({
          catURLs: catURLArray
        })
      })
  }

  componentDidMount() {

    axios.get(`https://api.thecatapi.com/v1/images/search`, {
      params: {
        limit: 10,
        "api-key": process.env.NEXT_PUBLIC_CAT_KEY
      }
    })
      .then(res => {
        const catImg = res.data
        const catURLArray: string[] = catImg.map((cat: ICatObj) => {
          return cat.url
        })
        this.setState({
          catURLs: catURLArray
        })
      });

      axios.get(`https://api.thecatapi.com/v1/categories`, {
        params: {
          "api-key": process.env.NEXT_PUBLIC_CAT_KEY
        }
      })
        .then(res => {
          this.setState({
            categories: res.data
          }, () => { console.log(this.state.categories) })
        })
  }
  render() {
    return (
      <div className={styles.home}>
        <Header
          categories={this.state.categories}
          category={this.state.category}
          changeCategory={this.changeCategory}
          getCats={this.getCats}
        />
        <ImageCarousel ids={this.state.catURLs}/>
      </div>
    )
  }
}

export default Home
