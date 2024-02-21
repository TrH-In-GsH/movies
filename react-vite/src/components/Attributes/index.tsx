// import "./Attributes.css";
import { useState } from "react";
import styles from "./Attributes.module.css";
/*
styles là một cái tên biến, bạn thể đổi tùy ý
*/
//console.log("<<=== 🚀 styles ===>>", styles);

type TAttItem = {
    label: string;
    isActive?: boolean;
    onClick: () => void
};

const AttItem = ({ label, isActive = false, onClick }: TAttItem) => {
    const myClass =
        isActive === true
            ? `${styles.attr_item} ${styles.attr_item_actived}`
            : styles.attr_item;
    return <span onClick={onClick} className={myClass}>{label}</span>;
};

const attrs = [
    { id: 1, label: "Đen" },
    { id: 2, label: "Hồng" },
    { id: 3, label: "Xanh" },
];


const Attributes = () => {
    const [current, setCurrent] = useState(2)
    return (
        <div className={styles.attrs_container}>
            <span className={styles.attr_label}>Màu Sắc</span>
            {/* <span className="attr_item attr_item_actived">Đen</span>
      <span className="attr_item">Hồng</span>
      <span className="attr_item">Xanh</span> */}
            {
                attrs.map((attr) => {
                    return <AttItem
                        key={attr.id}
                        label={attr.label}
                        isActive={attr.id === current}
                        onClick={() => {
                            setCurrent(attr.id);
                        }}
                    />
                })
            }
        </div>
    );
};

export default Attributes;