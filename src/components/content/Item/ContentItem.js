import styles from './ContentItem.module.scss';
import noLike from './img/no-like.svg'
import btnPlus from './img/btn-plus.svg'

function ContentItem(props){
 console.log(props);
  

return (
        <div className={styles.content__item}>
          <div className={styles.like}>
            <img src={noLike} alt="no-like"/>
          </div>
          <img  src={props.imgUrl} className={styles.content__item_img} alt=""/>
          <p className={styles.content__item_headding}>{props.title}</p>
          <div className={styles.content__item_description}>
            <div className={styles.price__wrapper}>
            <span className={styles.content__item_description_price_head}>Цена:</span>
            <b className={styles.content__item_description_price}>{props.price} руб.</b>
            </div>
            <img widht={11} height={11} src={btnPlus} className={styles.content__item_description_btn} alt="plus" onClick={props.onClick}/>
          </div>
        </div>
        )
      }

export default ContentItem 