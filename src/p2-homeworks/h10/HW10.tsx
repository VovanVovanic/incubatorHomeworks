import classes from "./HW10Wrapper.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { loadingAC} from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";
import Spinner from "./spinner";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state=>state.loading.loading);
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(() => {
            dispatch(loadingAC(false));
        },2000)
    };

    return (
        <div className={classes.HW10Wrapper}>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <Spinner />
                ) : (
                    <div className={classes.HW10Btn}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }


            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}

        </div>
    );
}

export default HW10;
