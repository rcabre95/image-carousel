import React, { Component } from 'react'
import styles from '../styles/ImageCarousel.module.scss';
import { IconButton } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
// import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
// import { SDK } from '../../api-resources';

interface IImageCarouselProps {
    ids: any[];
}

interface IImageCarouselState {
    imageArrayIndex: number;
}

class ImageCarousel extends Component<IImageCarouselProps, IImageCarouselState> {
    constructor(props: IImageCarouselProps) {
        super(props);

        this.state = {
            imageArrayIndex: 0,
        }

        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleImageSelect = this.handleImageSelect.bind(this);
    }

    handleBack() {
        if (this.state.imageArrayIndex === 0) {
            this.setState({
                imageArrayIndex: this.props.ids.length - 1
            })
        } else {
            this.setState(prevState => {
                return {
                    imageArrayIndex: prevState.imageArrayIndex - 1
                }
            })
        }
    }

    handleNext() {
        if (this.state.imageArrayIndex === this.props.ids.length - 1) {
            this.setState({
                imageArrayIndex: 0
            })
        } else {
            this.setState(prevState => {
                return {
                    imageArrayIndex: prevState.imageArrayIndex + 1
                }
            })
        }
    }

    handleImageSelect(e: any) {
        e.preventDefault();
        var targetID = e.target.id;

        var targetIDIndex = this.props.ids.indexOf(targetID)
        this.setState({
            imageArrayIndex: targetIDIndex
        })
    }

    render() {
        const listOfImages = this.props.ids.map((arrayID) => (
            
            <div
                key={arrayID}
                
                className={`${styles.imagePreview} ${this.state.imageArrayIndex === this.props.ids.indexOf(arrayID) ? styles.selectedPreview : null}`}
                onClick={this.handleImageSelect}
            >
                <img
                    id={arrayID}
                    className={styles.previewImage}
                    src={arrayID}
                />
            </div>
        ))
        return (
            <div className={styles.imageCarousel}>
                <div className={styles.imageBox}>
                        <div className={styles.mainPreview}>
                            <div className={styles.imageNavigation}>
                                <div className={styles.backButton}>
                                    <IconButton
                                    onClick={this.handleBack}>
                                        <ArrowBackIosRoundedIcon style={{ fill: "white" }}/>
                                    </IconButton>
                                </div>
                                <div className={styles.forwardButton}>
                                    <IconButton
                                    onClick={this.handleNext}>
                                        <ArrowForwardIosRoundedIcon style={{ fill: "white" }}/>
                                    </IconButton>
                                </div>
                            </div>
                            <img
                                className={styles.mainPreviewImage}
                                src={`${this.props.ids[this.state.imageArrayIndex]}`}
                                // src={SDK.getListingPhotoSrc('dump', this.props.ids[this.state.imageArrayIndex])}
                            />
                        </div>
                            
                        <div className={styles.imagePreviewBox}>
                            {listOfImages}
                        </div>
                </div>
            </div>
        )
    }
}

export default ImageCarousel