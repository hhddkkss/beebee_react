import { useEffect, useState } from 'react'
import axios from 'axios'
import './../../styles/product_compare.css'
import {
  COMPARE_LIST_API,
  COMPARE_ING_LIST_API,
} from './../../component/LoginApi'
import ProductCompareListBox from './ProductCompareListBox'

function ProductCompare() {
  const [compareList, setCompareList] = useState([])
  const [showCompareList, setShowCompareList] = useState([])
  const [compareType, setCompareType] = useState(1)
  const [compareIngList, setCompareIngList] = useState([])
  const [compareIngData, setCompareIngData] = useState([])

  const getCompareList = () => {
    axios.get(COMPARE_LIST_API).then((res) => {
      console.log(res.data)
      setCompareList(res.data)
    })
  }
  // 拿取比價區資料
  const getCompareIngData = () => {
    axios.get(COMPARE_ING_LIST_API).then((res) => {
      console.log(res.data)
      setCompareIngData(res.data)
    })
  }

  function setCompareListType(a) {
    let newList = compareList.filter((v, i) => {
      return v.product_category_id === a
    })
    setShowCompareList(newList)
  }

  function setCompare_type_btnClass(k) {
    if (k === compareType) {
      return 'compare_type_btn compare_type_btn_hover'
    } else {
      return 'compare_type_btn'
    }
  }

  function setaddCompareIngClass(id) {
    if (compareIngList.includes(id)) {
      return 'btn compare_add added'
    } else {
      return 'btn compare_add'
    }
  }

  function addCompareIngList(id) {
    if (compareIngList.includes(id)) {
      let newL = compareIngList.filter((v) => {
        return v !== id
      })
      setCompareIngList(newL)
    } else {
      if (compareIngList.length > 2) {
        console.log('不得超過3項商品進行比較')
      } else {
        setCompareIngList([...compareIngList, id])
      }
    }
  }

  useEffect(() => {
    getCompareList()
    console.log('2:', showCompareList)
  }, [])
  useEffect(() => {
    setCompareListType(1)
  }, [compareList])

  return (
    <>
      <div className="compare_box">
        {/* 比價選單 */}
        <ProductCompareListBox
          setCompare_type_btnClass={setCompare_type_btnClass}
          setCompareListType={setCompareListType}
          showCompareList={showCompareList}
          setCompareType={setCompareType}
          addCompareIngList={addCompareIngList}
          compareIngList={compareIngList}
          setaddCompareIngClass={setaddCompareIngClass}
        />
        {/* 比價區 */}
        <div className="compareIng_box ">
          <div className="compareIng_head">
            <div className="item_content"></div>
            <div className="head_title">
              <p>作業系統</p>
              <p>處理器</p>
              <p>記憶體</p>
              <p>電池</p>
              <p>螢幕尺寸</p>
              <p>螢幕尺寸</p>
              <p>螢幕尺寸</p>
              <p>螢幕尺寸</p>
              <p>螢幕尺寸</p>
            </div>
          </div>

          <div className="compareIng_item_card">
            <button className="compareIng_item_remove">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66666 12H9.74999H17.6667"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="item_content">
              <img
                src="https://cs-b.ecimg.tw/items/DYAJ3QA900FHDTK/000002_1663052522.jpg"
                alt=""
              />
              <div className="item_name">iphone14</div>
              <div className="item_price">$ 38400</div>
              <button className="add_To_Cart">
                <i className="fa-solid fa-cart-shopping d-inline"></i>
                加入購物車
              </button>
            </div>
            <div className="compare_item_property">
              <p>ios</p>
              <p>高通S8</p>
              <p>128G</p>
              <p>4300</p>
              <p>5.9</p>
              <p>5.9</p>
              <p>5.9</p>
              <p>5.9</p>
              <p>5.9</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCompare
