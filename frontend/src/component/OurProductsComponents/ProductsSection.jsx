import React from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../SharedComponents/ProductCard'
import { productData } from '../../data/productData'
import Carousel from '../SharedComponents/Carousel'
import Line from '../../assets/images/Horizontal Line.png'

const ProductsSection = () => {
    const fisrt3Products = productData['fisrt3Products'] || [];
    const second3Products = productData['second3Products'] || [];
    const allData = [...fisrt3Products, ...second3Products];

    
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100%] text-white 2xl:mb-5">
            <div className='hidden xs:h-[10%] w-[67%] h-[25%] md:flex items-end mt-10'>
                <img src={Line} alt='Line'></img>
            </div>
            <motion.div className="xs:h-[90%] hidden z-10 w-full gap-4 px-8 md:grid grid-cols-3 h-[75%]"  
                        initial={{ y: "15%", opacity: 0 }}
                        whileInView={{ y: "0", opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}>
                {fisrt3Products.map((product, index) => (
                    <div key={index}>
                        <ProductCard
                            title={product.title}
                            icon={product.icon}
                            content={product.content}
                        />
                    </div>
                ))}
            </motion.div>

            <div className='hidden xs:h-[10%] w-[67%] h-[25%] md:flex items-end mt-20'>
                <img src={Line} alt='Line'></img>
            </div>
            <motion.div className="xs:h-[90%] hidden z-10 w-full gap-4 px-8 md:grid grid-cols-3 h-[75%]"  
                        initial={{ y: "15%", opacity: 0 }}
                        whileInView={{ y: "0", opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}>
                {second3Products.map((product, index) => (
                    <div key={index}>
                        <ProductCard
                            title={product.title}
                            icon={product.icon}
                            content={product.content}
                        />
                    </div>
                ))}
            </motion.div>

            <div className="md:hidden">
                <Carousel autoSlide={true} isProduct={true}>
                    {allData.map((product, index) => (
                        <ProductCard
                            title={product.title}
                            icon={product.icon}
                            content={product.content}
                        />
                    ))}
                </Carousel>
            </div>
    </div>
  )
}

export default ProductsSection
