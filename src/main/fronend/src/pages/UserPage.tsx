import React from 'react';
import FileList from "../components/FileList";
import Layout from "../components/Layout";
import ToolBar from "../components/ToolBar";
import cls from "../scssModules/UserPage.module.scss"

const UserPage = () => {

    return (

        <Layout>
            <div className={cls.doubleContainer}>
                <ToolBar/>
                <FileList/>
            </div>
        </Layout>
    );
};

export default UserPage;