import React, { Component } from 'react'
import styles from '../styles/Header.module.scss'
import { Button, MenuItem, InputLabel, FormHelperText, FormControl, Select, FormControlLabel, Checkbox } from '@material-ui/core'

interface IHeaderProps {
    includeGifs: boolean;
    categories: any[];
    category: number;
    getCats: () => void;
    changeCategory: (e: any) => void;
    handleCheckbox: () => void;
}

interface IHeaderState {

}

class Header extends Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);

        this.state = {

        }
    }

    capitalizeWord(word: string) {
        const capWord = word.charAt(0).toUpperCase() + word.slice(1);
        return capWord
    }

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.main}>
                    <h1>10 Cats</h1>
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.filter}>
                    {/* <FormControl variant="outlined" color="primary" className={styles.formControl}>
                        <InputLabel id="categoryid">Category</InputLabel>
                        <Select
                            labelId="categoryid"
                            id="category"
                            value={this.props.category}
                            onChange={this.props.changeCategory}
                            label="Category"
                        >
                            <MenuItem value={0}>Any</MenuItem>
                            {
                                this.props.categories.map((catCategory) => (
                                    <MenuItem value={catCategory.id}>{this.capitalizeWord(catCategory.name)}</MenuItem>
                                ))
                            }
                            
                        </Select>
                    </FormControl> */}
                    <div className={styles.categorySelection}>
                        <label htmlFor="categoryId">CATegory:<br/></label>
                        <select
                        name="categories"
                        id="categoryId"
                        onChange={this.props.changeCategory}>
                            <option value={0}>Any</option>
                            {
                                this.props.categories.map((catCategory) => (
                                    <option value={catCategory.id}>
                                        {this.capitalizeWord(catCategory.name)}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.props.includeGifs}
                                onChange={this.props.handleCheckbox}
                                color="primary"
                            />
                        }
                        label="Include Gifs"
                        className={styles.formCheckbox}
                    />
                    <div className={styles.buttonSection}>
                        <Button
                        style={{
                            height: "70%",
                            width: "70%",
                            fontSize: "0.7rem"
                        }}
                        variant="contained"
                        color="primary" type="button"
                        onClick={this.props.getCats}>Get more cats!</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header