import React, { FC } from "react";
import styles from "./home-dashboard-sku-modal-detail.module.sass";
import { Product } from "../../entities";
import Modal from "../../../../components/modal/modal";

interface HomeDashboardSkuModalDetailProps {
  product: Product;
  onClose: () => void;
}

const HomeDashboardSkuModalDetail: FC<HomeDashboardSkuModalDetailProps> = ({
  product,
  onClose
}) => {

  return (
    <Modal closeFunction={onClose} className={styles.wrapper}>
      <h1 className={styles.title}>
        {product.title}
        <span className={styles.sku}>(SKU: {product.variants[0].sku})</span>
      </h1>

      <div className={styles.center}>
        <img src={product.image?.src} alt="IMG" className={styles.image} />

        <div className={styles.body}>
          <p className={styles.title}>Description:</p>
          <p className={styles.value}>{product.body_html ?? "Not description"}</p>

          <p className={styles.paragraph}>
            <span className={styles.title}>Vendor:</span>
            <span className={styles.value}> {product.vendor}</span>
          </p>

          <p className={styles.paragraph}>
            <span className={styles.title}>Type:</span>
            <span className={styles.value}> {product.product_type}</span>
          </p>

          <div className={styles.tags}>
            {product.tags.split(",").map((tag) => (
              <span className={styles.tag} key={`product-detail-tag-${tag}`}>
                {tag.trim() || "None"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default HomeDashboardSkuModalDetail;
