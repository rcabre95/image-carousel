import React, { Component } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import { Button } from '@material-ui/core'
import styles from '../styles/Home.module.scss'
import axios from 'axios'

interface ICatObj {
  breeds: any;
  id: string;
  url: string;
  width: number;
  height: number;
}

interface IHomeProps {

}

interface IHomeState {
  catURLs: any[];
}

class Home extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      catURLs: []
    }

    this.getCats = this.getCats.bind(this)
  }


  getCats() {
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
      })
  }
  render() {
    return (
      <div className={styles.home}>
        <ImageCarousel ids={this.state.catURLs}/>
        <div className={styles.buttonSection}>
          <Button variant="contained" color="primary" type="button" onClick={this.getCats}>Get more cats!</Button>
        </div>
      </div>
    )
  }
}

export default Home
