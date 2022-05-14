import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import ImageCarousel from '../components/ImageCarousel'
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
  includeGifs: boolean;
  categories: ICategories[]
  category: number;
  catURLs: any[];
}

class Home extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      includeGifs: true,
      categories: [],
      category: 0,
      catURLs: []
    }

    this.getCats = this.getCats.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleCheckbox() {
    this.setState({
      includeGifs: !this.state.includeGifs
    })
  }

  changeCategory(e: any) {
    this.setState({
      category: e.target.value
    })
  }

  getCats() {
    axios.get(`https://api.thecatapi.com/v1/images/search`, {
      params: {
        "api-key": process.env.NEXT_PUBLIC_CAT_KEY,
        limit: 10,
        category_ids: this.state.category == 0 ? "" : this.state.category,
        mime_types: this.state.includeGifs ? "" : "jpg,png"
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
          })
        })
  }

  render() {
    return (
      <div className={styles.home}>
        <Head>
          <title>10 Cats</title>
        </Head>
        <Header
          handleCheckbox={this.handleCheckbox}
          includeGifs={this.state.includeGifs}
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
