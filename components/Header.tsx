import React, { Component } from 'react'
import styles from '../styles/Header.module.scss'
import { Button, MenuItem, InputLabel, FormHelperText, FormControl, Select } from '@material-ui/core'

interface IHeaderProps {
    categories: any[];
    category: number;
    getCats: () => void;
    changeCategory: (e: any) => void;
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
                    <FormControl variant="outlined" className={styles.formControl}>
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
                    </FormControl>
                    <div className={styles.buttonSection}>
                        <Button variant="contained" color="primary" type="button" onClick={this.props.getCats}>Get more cats!</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header