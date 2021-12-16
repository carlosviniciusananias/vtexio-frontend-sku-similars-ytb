import React, { FC } from 'react'
import styles from './styles.css'

interface Props {
    link: string,
    image: string,
    productName: string
}

const ProductSimilarsItem: FC<Props> = ({ link, image, productName }) => {
    return (
        <a href={link} className={styles.productLink}>
            <img src={image} alt={productName} title={productName} className={styles.productImage} />
        </a>
    )
}

export default ProductSimilarsItem