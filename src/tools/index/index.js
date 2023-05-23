import React, {useEffect, useRef, useState} from "react";
import "./index.css";
import logo from "../../components/logo";

function Index(props){
    const fontSize= useRef(20 * devicePixelRatio);
    const canvasRef = useRef(null);
    let contextRef = useRef(null);
    let columnCount = useRef(Math.floor(canvasRef.current?.width / fontSize));
    const initialArray = Array.from(new Array(100).fill(0));
    const charIndex = useRef(initialArray);

    const getRandomChar = () => {
        const str='0123456789abcdefghijklmnopqrstuvwxyz';
        return str[Math.floor(Math.random() * str.length)];
    };

    const draw = (cvs) => {
        const context = cvs.getContext('2d');
        // 设置字体、字体大小（和CSS设置字体一样）
        context.font=`${fontSize.current}px "Consolas"`;
        context.fontWeightLight = "normal";
        // 加个渐隐效果
        context.fillStyle='rgba(0,0,0,0.1)';
        context.fillRect(0,0,cvs.width,cvs.height);
        // 设置字体颜色
        context.fillStyle='#6be445';
        // 设置文本基线为顶部
        context.textBaseline='top';
        for(let i=0; i < columnCount.current; i++){
            // 获取随机字符
            const text= getRandomChar();
            // 计算文字的x、y坐标
            const x= i * fontSize.current;
            const y= charIndex.current[i] * fontSize.current;
            // 绘制文本
            context.fillText(text,x,y);
            // 超出画布归零
            // 这里需要再加个判断，使之错开归零的时间点（Math.random()>0.99）
            if(y > cvs.height && Math.random() > 0.99){
                charIndex.current[i] = 0;
            }else{
                charIndex.current[i] ++;
            }
        }
    }

    useEffect(() => {
        const cvs= canvasRef.current;
        cvs.width=window.innerWidth * devicePixelRatio;
        cvs.height=window.innerHeight * devicePixelRatio;
        contextRef.current = cvs.getContext('2d');
        columnCount.current = Math.floor(cvs.width / fontSize.current);
        setInterval(draw,100,cvs);

        return () => {

        }
    }, [draw])

    return <canvas ref={canvasRef}/>
}

export default Index;