import { useEffect, useState, useContext, useRef } from 'react'
import axios from 'axios'
import './../../styles/product_compare.css'
import {
  COMPARE_LIST_API,
  COMPARE_ING_LIST_API,
} from './../../component/LoginApi'
import ProductCompareListBox from './ProductCompareListBox'
import ProductCompareIngBox from './ProductCompareIngBox'
import ProductFunctionContext from '../../Contexts/ProductFunctionContext'
import CompareContext from '../../Contexts/CompareContext'

function ProductCompare(props) {
  const { comparedList, handleAddOrDeleteCompared } = useContext(
    ProductFunctionContext
  )
  // 比較列表顯示className
  const {
    compareListClass,
    setCompareListClass,
    compareIngClass,
    setCompareIngClass,
    popCompareBtn,
  } = useContext(CompareContext)

  //商品頁的商品類型
  const { productType } = props
  // console.log('V01:',productType);
  //總比較列表
  const [compareList, setCompareList] = useState([])
  //比較列表分類呈現
  const [showCompareList, setShowCompareList] = useState([])
  //比較列表商品類型
  const [compareType, setCompareType] = useState(1)
  //比較區清單
  const [compareIngList, setCompareIngList] = useState([])
  //比較區總檔
  const [compareIngData, setCompareIngData] = useState([])

  //按除了比價框以外區域關閉比價框
  const popRef = useRef(null)

  //拿比價列表資料(要傳真資料localstorage:comparedList)
  const getCompareList = () => {
    // console.log('拿全', 'local', localStorage.getItem('comparedList'))
    axios
      .post(COMPARE_LIST_API, {
        comparedList: localStorage.getItem('comparedList'),
      })
      .then((res) => {
        // console.log('全資', res.data)
        setCompareList(res.data)
        return res.data
      })
  }
  // 拿取比價區資料
  const getCompareIngData = () => {
    //console.log('比價區local',localStorage.getItem('compareIngList'))
    if (JSON.parse(localStorage.getItem('compareIngList')).length > 0) {
      axios
        .post(COMPARE_ING_LIST_API, {
          compareIngList: localStorage.getItem('compareIngList'),
          compareType: compareType,
        })
        .then((res) => {
          // console.log('比價區:', res.data)
          setCompareIngData(res.data)
        })
      return true
    } else {
      console.log('無加入比較區產品')
      return false
    }
  }

  // 比價列表分類按鈕
  function setCompareListType(a) {
    let newList = compareList.filter((v, i) => {
      return v.product_category_id == a
    })

    // console.log('分類號:', a,typeof a, '舊資料:', compareList, '新資料:', newList)
    setShowCompareList(newList)
  }

  //比價列表分類按鈕外觀改變
  function setCompare_type_btnClass(k) {
    // console.log('V04:',compareType);
    if (k == compareType) {
      return 'compare_type_btn compare_type_btn_hover'
    } else {
      return 'compare_type_btn'
    }
  }
  //比價列表加入比價區按鈕外觀改變
  function setaddCompareIngClass(id) {
    if (compareIngList.includes(id)) {
      return 'btn compare_add added'
    } else {
      return 'btn compare_add'
    }
  }
  //比價區管理
  function addCompareIngList(id) {
    if (compareIngList.includes(id)) {
      let newL = compareIngList.filter((v) => {
        return v !== id
      })
      // console.log(`移除${id}`, `newL:`, newL)
      setCompareIngList(newL)
    } else {
      if (compareIngList.length > 2) {
        console.log('不得超過3項商品進行比較')
      } else {
        setCompareIngList([...compareIngList, id])
      }
    }
  }

  //比價區管理加入localstorage
  function addCompareIngToLocal() {
    if (compareIngList != JSON.parse(localStorage.getItem('compareIngList'))) {
      localStorage.setItem('compareIngList', JSON.stringify(compareIngList))
    } else {
      // if (
      //   localStorage.getItem('compareIngList') &&
      //   JSON.parse(localStorage.getItem('compareIngList')).length > 0
      // ) {
      //   console.log(12)

      //   setCompareIngList(JSON.parse(localStorage.getItem('compareIngList')))
      // } else {
      //   console.log(13)

      //   localStorage.setItem('compareIngList', JSON.stringify([]))
      // }
      return
    }
  }

  //點畫面其他區域會使比價區消失
  function handleOutCompareBox(event) {
    // if (
    //   compareListClass !== 'compare_list_box d-none' &&
    //   compareIngClass !== 'compareIng_box d-none'
    // ) {
    // console.log('A00')
    if (
      popRef.current &&
      !popRef.current.contains(event.target) &&
      !popCompareBtn.current.contains(event.target)
    ) {
      // console.log('A01')
      setCompareListClass('compare_list_box d-none')
      setCompareIngClass('compareIng_box d-none')
      setCompareIngList([])
    }
    // }
    // console.log('A02')

    return
  }
  useEffect(() => {
    getCompareList()
    addCompareIngToLocal()
    document.addEventListener('click', handleOutCompareBox)
  }, [])
  //比價列表有增有減重抓資料
  useEffect(() => {
    getCompareList()
  }, [comparedList])
  //這兩個不能同時寫QQ
  //拿到比較列表資料後做分類顯示
  useEffect(() => {
    if (compareListClass == 'compare_list_box d-none') {
      //  console.log('S01', compareType, ':', productType)

      productType === 4
        ? setCompareListType(1)
        : setCompareListType(productType)
    } else {
      //  console.log('S02', compareType,':', productType)
      setCompareListType(compareType)
    }
  }, [compareList])

  useEffect(() => {
    addCompareIngToLocal()
    getCompareIngData()
  }, [compareIngList])

  //商品頁切換分類跟著切換比價列表分類
  useEffect(() => {
    // console.log('V02',productType);
    if (productType === 4) {
    // console.log('V02-2',productType);

      setCompareType(1)
      setCompareListType(1)
    } else {
    // console.log('V02-3',productType);

      setCompareType(productType)
      setCompareListType(productType)
    } 
    // console.log('V03',compareType);
  }, [productType])
 

  return (
    <>
      <div className="compare_box" ref={popRef}>
        {/* 比價選單 */}
        <ProductCompareListBox
          setCompare_type_btnClass={setCompare_type_btnClass}
          setCompareListType={setCompareListType}
          showCompareList={showCompareList}
          setCompareType={setCompareType}
          addCompareIngList={addCompareIngList}
          compareIngList={compareIngList}
          setaddCompareIngClass={setaddCompareIngClass}
          addCompareIngToLocal={addCompareIngToLocal}
          setCompareIngClass={setCompareIngClass}
          compareListClass={compareListClass}
          setCompareListClass={setCompareListClass}
          setCompareIngList={setCompareIngList}
          handleAddOrDeleteCompared={handleAddOrDeleteCompared}
        />
        {/* 比價區 */}

        <ProductCompareIngBox
          compareIngData={compareIngData}
          compareType={compareType}
          compareIngClass={compareIngClass}
          addCompareIngList={addCompareIngList}
          setCompareIngClass={setCompareIngClass}
          setCompareListClass={setCompareListClass}
        />

      </div>
    </>
  )
}

export default ProductCompare
