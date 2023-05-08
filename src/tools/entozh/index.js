import React, {useState} from "react";
import "./index.css";
import {useForm} from "react-hook-form";
import useSWR from "swr";

function EnToZh(){
    const [word,setWord] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { data,error,isLoading } = useSWR(`http://47.100.234.20:8080/enwords/` + word)
    const onSubmit = (submit) => {
        setWord(submit.word);
    }

    return (
        <div className="entozh-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("word", { required: true })} className="word-input"/>
                <input type="submit" className="word-submit"/>
            </form>
            <span className="translation">{data?.translation}</span>
        </div>
    );
}

export default EnToZh;