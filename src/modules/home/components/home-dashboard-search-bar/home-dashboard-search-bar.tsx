import React, { ChangeEvent, FC, useRef, useState } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import styles from "./home-dashboard-search-bar.module.sass";

interface HomeDashboardSearchBarProps {
  searchProducts: (value: string) => void;
}

const HomeDashboardSearchBar: FC<HomeDashboardSearchBarProps> = ({ searchProducts }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showClearIcon, setShowClearIcon] = useState<boolean>(false);

  const onClearClick = () => {
    inputRef.current!.value = "";
    setShowClearIcon(false);
    searchProducts("");
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setShowClearIcon(!!value);
    searchProducts(value);
  }

  return (
    <div className={styles.wrapper} data-testid="home-dashboard-search-bar">

      <MagnifyingGlass size={24} />

      <input
        type="text"
        ref={inputRef}
        autoComplete="off"
        className={styles.input}
        placeholder="Search by SKU or title"
        onChange={handleInputChange}
      />

      {showClearIcon && (
        <X
          size={24}
          onClick={onClearClick}
          data-testid="home-dashboard-search-bar-clear-icon"
          className={styles.closeIcon}
        />
      )}
    </div>
  );
}

export default HomeDashboardSearchBar;
