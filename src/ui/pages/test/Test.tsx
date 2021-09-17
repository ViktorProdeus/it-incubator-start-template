import React from 'react';
import s from "./Test.module.css";
import SuperButton from "../../components/SuperButton/SuperButton";
import SuperCheckbox from "../../components/SuperCheckbox/SuperCheckbox";
import SuperInputText from "../../components/SuperInputText/SuperInputText";

function Test() {

    return (
        <div className={s.wrapper}>
            <h1>Components List</h1>

            <h3>SuperButton: </h3>
            <SuperButton>Click</SuperButton>
            <h3>SuperCheckbox: </h3>
            <SuperCheckbox className={s.checkbox}> checkbox</SuperCheckbox>
            <h3>SuperInputText: </h3>
            <SuperInputText/>
        </div>
    );
}

export default Test;

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз