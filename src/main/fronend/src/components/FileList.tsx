import React, {useEffect, useState} from 'react';
import {useFiles} from "../hooks/files";
import File from '../components/File'
import cls from '../scssModules/FileList.module.scss'
import IFileListProps from "../models/props/IFileListProps";



const FileList = ({openFile,openContextMenu}:IFileListProps) => {
    const {files}=useFiles()
    const [windowSize,setWindowSize] = useState({width:0,height:0})
    const [classGrid,setClassGrid]=useState<string>(cls.thirtGrid)
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setWindowSize({width: window.innerWidth,height: window.innerHeight})
        })
    },[])
    useEffect(()=>{
        const width = windowSize.width
        if(width<1800)
            setClassGrid(cls.twoGrid)
        if(width<1000)
            setClassGrid(cls.aloneGrid)
        if(width>1600)
            setClassGrid(cls.thirtGrid)

    },[windowSize.width])
    return (
        <div className={cls.container +" "+classGrid}>
            {
                files && files.map(x=><File key={x.idFile} file={x} openFile={openFile} openContextMenu={openContextMenu}/>)
            }
        </div>
    );
};

export default FileList;